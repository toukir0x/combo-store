import { Category, ComboProduct } from "./types";
import { MOCK_CATEGORIES, MOCK_COMBOS } from "./mockData";

const API_BASE_URL = process.env.PRIVATE_API_BASE_URL || "";
const API_KEY = process.env.PRIVATE_API_KEY || "";
const API_HEADER_NAME = process.env.PRIVATE_API_HEADER_NAME || "Authorization";
const USE_MOCK_FALLBACK = process.env.USE_MOCK_FALLBACK !== "false";

/**
 * Server-side helper to make authenticated requests to the private API.
 * Never exposed to the browser/client.
 */
async function fetchPrivateApi<T>(endpoint: string, options: RequestInit = {}): Promise<T | null> {
  if (!API_BASE_URL) {
    return null;
  }

  try {
    const headers: Record<string, string> = {
      "Content-Type": "application/json",
      ...(options.headers as Record<string, string> || {}),
    };

    if (API_KEY) {
      if (API_HEADER_NAME.toLowerCase() === "authorization") {
        headers["Authorization"] = API_KEY.startsWith("Bearer ") ? API_KEY : `Bearer ${API_KEY}`;
      } else {
        headers[API_HEADER_NAME] = API_KEY;
      }
    }

    const res = await fetch(`${API_BASE_URL}${endpoint}`, {
      ...options,
      headers,
      next: { revalidate: 300 }, // Cache on server for 5 minutes
    });

    if (!res.ok) {
      console.warn(`[Private API Error] ${res.status}: ${res.statusText} at ${endpoint}`);
      return null;
    }

    const data = await res.json();
    return data as T;
  } catch (err) {
    console.error(`[Private API Fetch Failed] at ${endpoint}:`, err);
    return null;
  }
}

/**
 * Fetch all categories including the "Combo Products" category
 */
export async function getCategories(): Promise<Category[]> {
  if (API_BASE_URL) {
    const data = await fetchPrivateApi<Category[]>("/categories");
    if (data && Array.isArray(data) && data.length > 0) {
      return data;
    }
  }

  // Return realistic mock categories if API is not yet configured or failed
  return MOCK_CATEGORIES;
}

/**
 * Fetch all combo products with optional category and search filters
 */
export async function getCombos(options?: {
  category?: string;
  search?: string;
}): Promise<ComboProduct[]> {
  const { category, search } = options || {};

  let combos: ComboProduct[] = [];

  if (API_BASE_URL) {
    const queryParams = new URLSearchParams();
    if (category && category !== "all") queryParams.set("category", category);
    if (search) queryParams.set("q", search);

    const qs = queryParams.toString() ? `?${queryParams.toString()}` : "";
    const data = await fetchPrivateApi<{ combos?: ComboProduct[]; data?: ComboProduct[] } | ComboProduct[]>(
      `/combos${qs}`
    );

    if (data) {
      if (Array.isArray(data)) {
        combos = data;
      } else if (Array.isArray(data.combos)) {
        combos = data.combos;
      } else if (Array.isArray(data.data)) {
        combos = data.data;
      }
    }
  }

  // If no API response or mock fallback enabled, use fallback
  if (combos.length === 0 && USE_MOCK_FALLBACK) {
    combos = MOCK_COMBOS;
  }

  // Apply in-memory filtering if needed
  if (category && category !== "all") {
    combos = combos.filter(
      (c) => c.category.toLowerCase() === category.toLowerCase()
    );
  }

  if (search && search.trim() !== "") {
    const term = search.toLowerCase();
    combos = combos.filter(
      (c) =>
        c.title.toLowerCase().includes(term) ||
        c.shortDescription.toLowerCase().includes(term) ||
        c.items.some((item) => item.name.toLowerCase().includes(term))
    );
  }

  return combos;
}

/**
 * Fetch a single combo product by ID or Slug
 */
export async function getComboById(idOrSlug: string): Promise<ComboProduct | null> {
  if (API_BASE_URL) {
    const data = await fetchPrivateApi<{ combo?: ComboProduct; data?: ComboProduct } | ComboProduct>(
      `/combos/${encodeURIComponent(idOrSlug)}`
    );

    if (data) {
      if ("id" in data && data.id) {
        return data as ComboProduct;
      }
      if ("combo" in data && data.combo) {
        return data.combo;
      }
      if ("data" in data && data.data) {
        return data.data;
      }
    }
  }

  // Fallback to mock search
  const found = MOCK_COMBOS.find(
    (c) => c.id === idOrSlug || c.slug === idOrSlug
  );

  return found || null;
}
