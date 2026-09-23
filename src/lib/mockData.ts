import { Category, ComboProduct } from "./types";

export const MOCK_CATEGORIES: Category[] = [
  { id: "all", name: "All Combos", slug: "all", productCount: 6 },
  { id: "food", name: "Food & Snacks", slug: "food", productCount: 3 },
  { id: "gadget", name: "Gadgets & Tech", slug: "gadget", productCount: 2 },
  { id: "lifestyle", name: "Lifestyle & Decor", slug: "lifestyle", productCount: 1 },
];

export const MOCK_COMBOS: ComboProduct[] = [
  {
    id: "spicy-sweet-homemade-snacks-6in1",
    title: "একই সাথে ঝাল, স্পাইসি আর মিষ্টি! প্রিমিয়াম হোমমেড স্ন্যাকস বক্স",
    slug: "spicy-sweet-homemade-snacks-6in1",
    category: "food",
    shortDescription: "৬টি ভিন্ন স্বাদের পুষ্টিকর ও মুচমুচে ঐতিহ্যবাহী স্ন্যাকস প্যাকেজ। পারিবারিক আড্ডা ও মেহমানদারির সেরা কম্বো।",
    description: "খাঁটি উপকরণে স্বাস্থ্যসম্মতভাবে তৈরি ৬টি জনপ্রিয় দেশীয় নাস্তার রাজকীয় সংকলন। এতে রয়েছে ঝাল ফ্রাইড পি, স্পাইসি নিমকি, মিষ্টি কুড়মুড়ে খাস্তা ও স্পেশাল চানাচুর। কোনো প্রিজারভেটিভ নেই।",
    originalPrice: 1590,
    comboPrice: 1100,
    savings: 490,
    discountPercentage: 31,
    rating: 4.9,
    reviewCount: 184,
    badge: "SAVE 31%",
    currency: "৳",
    isFeatured: true,
    thumbnail: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=80",
    images: [
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=1200&q=80"
    ],
    features: [
      "১০০% খাঁটি সরিষার তেল ও বাছাইকৃত প্রাকৃতিক উপাদান",
      "হাইজিনিক পরিবেশে সম্পূর্ণ ঘরে তৈরি ফ্রেশ কোয়ালিটি",
      "কোনো কৃত্রিম রং বা ক্ষতিকর প্রিজারভেটিভ মুক্ত",
      "এয়ার-টাইট জিপলক প্যাকেজিং দীর্ঘস্থায়ী মুচমুচে ভাব নিশ্চিত করে"
    ],
    items: [
      {
        id: "snack-spicy-peas",
        name: "ঝাল মসলা ভাজা মটর (Spicy Fried Peas 250g)",
        quantity: 1,
        individualPrice: 240,
        specs: "প্রিমিয়াম গ্রিন পিস ও সিক্রেট চাট মসলা",
        image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=400&q=80"
      },
      {
        id: "snack-crispy-nimki",
        name: "স্পেশাল তিল নিমকি (Crispy Sesame Nimki 300g)",
        quantity: 1,
        individualPrice: 280,
        specs: "কালোজিরা ও রোস্টেড তিলের ফ্লেভার",
        image: "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=400&q=80"
      },
      {
        id: "snack-shahi-chanachur",
        name: "শাহী মুখরোচক চানাচুর (Royal Bombay Mix 300g)",
        quantity: 1,
        individualPrice: 320,
        specs: "বাদাম, কাজু ও কিশমিশ মিশ্রিত স্পেশাল ব্লেন্ড",
        image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=400&q=80"
      },
      {
        id: "snack-sweet-khasta",
        name: "মিষ্টি কুড়মুড়ে গজা (Sweet Crunchy Khasta 250g)",
        quantity: 1,
        individualPrice: 260,
        specs: "এলাচ সুবাসিত গুড়ের সিরায় ডুবানো খাস্তা",
        image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=400&q=80"
      },
      {
        id: "snack-dal-bhaja",
        name: "মুগ ডাল ক্রাঞ্চি ফ্রাই (Crunchy Moong Dal 200g)",
        quantity: 1,
        individualPrice: 230,
        specs: "হালকা বিট লবণ ও পুদিনা পাতার স্বাদ",
        image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=400&q=80"
      },
      {
        id: "snack-murukku-sticks",
        name: "সাউথ ইন্ডিয়ান ক্রিস্পি কাঠি মুরুকু (Murukku Sticks 250g)",
        quantity: 1,
        individualPrice: 260,
        specs: "চালের গুঁড়া ও মাখনের মুচমুচে কম্বিনেশন",
        image: "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=400&q=80"
      }
    ],
    inStock: true,
    stockCount: 22,
    sku: "CMB-SNK-01"
  },
  {
    id: "traditional-afternoon-snacks-combo",
    title: "৬টি ঝাল-স্পাইসি আর মিষ্টি ঐতিহ্যবাহী হোমমেড নাস্তা কম্বো",
    slug: "traditional-afternoon-snacks-combo",
    category: "food",
    shortDescription: "মজার ও পুষ্টিকর হোমমেড স্ন্যাকস কালেকশন। বিকেলের চায়ের সাথে সেরা পার্টনার।",
    description: "বাঙালি পরিবারের বিকেলের চায়ের আড্ডা জমাতে প্রস্তুত আমাদের স্পেশাল হোমমেড কম্বো। প্রতিটি আইটেম ফ্রেশ ও স্বাস্থ্যকর উপাদান দিয়ে যত্নসহকারে প্রস্তুত।",
    originalPrice: 1490,
    comboPrice: 990,
    savings: 500,
    discountPercentage: 34,
    rating: 4.95,
    reviewCount: 210,
    badge: "SAVE 34%",
    currency: "৳",
    isFeatured: true,
    thumbnail: "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=900&q=80",
    images: [
      "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1200&q=80"
    ],
    features: [
      "ঐতিহ্যবাহী স্বাদের ৬টি সেরা নাস্তার সমন্বয়",
      "অতিরিক্ত তেল ঝরিয়ে প্রস্তুত করা লো-ক্যালরি স্ন্যাকস",
      "পরিবারের ছোট-বড় সবার পছন্দসই টেস্ট ভ্যারাইটি",
      "সুরক্ষিত ডাবল-সিল্ড প্যাকেজিং"
    ],
    items: [
      {
        id: "item-badam-mix",
        name: "ঝাল বাদাম ও ছোলা ভাজা (Spicy Peanut Mix 250g)",
        quantity: 1,
        individualPrice: 250,
        specs: "দেশী লাল চিনাবাদাম ও বিশেষ বিট মসলা",
        image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=400&q=80"
      },
      {
        id: "item-masala-chips",
        name: "হোমমেড ক্রিস্পি চিড়া ভাজা (Homemade Poha Mix 200g)",
        quantity: 1,
        individualPrice: 220,
        specs: "কাঁচা মরিচ ও কারিপাতা ফ্লেভার",
        image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=400&q=80"
      },
      {
        id: "item-kachori",
        name: "মিনি ডাল কচুরি (Mini Dal Kachori 300g)",
        quantity: 1,
        individualPrice: 290,
        specs: "মটরশুঁটি ও হিং ফোড়ন দিয়ে পুর ভরা",
        image: "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=400&q=80"
      },
      {
        id: "item-khaja",
        name: "লেয়ার্ড খাস্তা গজা (Crispy Layered Khaja 250g)",
        quantity: 1,
        individualPrice: 270,
        specs: "মুচমুচে বহুস্তর বিশিষ্ট খাস্তা নাস্তা",
        image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=400&q=80"
      },
      {
        id: "item-sev",
        name: "রসুনি চানাচুর সেভ (Garlic Crispy Sev 200g)",
        quantity: 1,
        individualPrice: 220,
        specs: "খাঁটি বেসন ও ঘিয়ে ভাজা রসুনের মন মাতানো গন্ধ",
        image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=400&q=80"
      },
      {
        id: "item-sweets",
        name: "তিলে ভাজা নারিকেল লাড্ডু (Sesame Coconut Bites 200g)",
        quantity: 1,
        individualPrice: 240,
        specs: "তাজা নারিকেল ও আখের গুড়",
        image: "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=400&q=80"
      }
    ],
    inStock: true,
    stockCount: 15,
    sku: "CMB-SNK-02"
  },
  {
    id: "evening-tea-platter-combo-3in1",
    title: "৩টি খাঁটি দেশী নাস্তায় জমুক বিকেলের মুহূর্ত (চা ও আড্ডা কম্বো)",
    slug: "evening-tea-platter-combo-3in1",
    category: "food",
    shortDescription: "বিকেলবেলার চায়ের সাথে সেরা ৩টি খাঁটি স্ন্যাকস। সম্পূর্ণ দেশীয় উপাদানে তৈরি।",
    description: "কাঠের ট্রের সাজে পরিবেশনের উপযোগী ৩টি স্পেশাল নাস্তা। এক কাপ গরম চায়ের সাথে এই নাস্তাগুলো আপনার বিকেলকে করে তুলবে প্রাণবন্ত ও স্মৃতিমধুর।",
    originalPrice: 890,
    comboPrice: 650,
    savings: 240,
    discountPercentage: 27,
    rating: 4.88,
    reviewCount: 95,
    badge: "SAVE 27%",
    currency: "৳",
    isFeatured: true,
    thumbnail: "https://images.unsplash.com/photo-1576402187878-974f70c890a5?auto=format&fit=crop&w=900&q=80",
    images: [
      "https://images.unsplash.com/photo-1576402187878-974f70c890a5?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=1200&q=80"
    ],
    features: [
      "বিকেলের চায়ের সাথে পারফেক্ট মুচমুচে স্বাদ",
      "আস্ত গোলমরিচ ও কালোজিরার বিশেষ মশলা ফিউশন",
      "কম মিষ্টি ও পরিমিত ঝালের নিখুঁত ব্যালেন্স",
      "হাইজিনিক কাঁচের বয়াম অথবা এয়ার-টাইট পাউচ প্যাক"
    ],
    items: [
      {
        id: "snk-murukku",
        name: "স্পেশাল বাটার মুরুকু বাটি (Crispy Butter Bites 250g)",
        quantity: 1,
        individualPrice: 310,
        specs: "ঘি ও মাখনের খাস্তা ফিনিশ",
        image: "https://images.unsplash.com/photo-1576402187878-974f70c890a5?auto=format&fit=crop&w=400&q=80"
      },
      {
        id: "snk-kachori",
        name: "মচমচে গোল খাস্তা নিমকি (Round Khasta Nimki 250g)",
        quantity: 1,
        individualPrice: 280,
        specs: "মৃদু ঝাল ও লবণাক্ত টেস্ট",
        image: "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=400&q=80"
      },
      {
        id: "snk-chanachur",
        name: "স্পেশাল টক-ঝাল-মিষ্টি চানাচুর (Tangy Sweet Mix 250g)",
        quantity: 1,
        individualPrice: 300,
        specs: "আমচুর ও তেঁতুলের হালকা টক স্বাদ",
        image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=400&q=80"
      }
    ],
    inStock: true,
    stockCount: 30,
    sku: "CMB-SNK-03"
  },
  {
    id: "smart-tech-gadget-combo-pro",
    title: "আল্ট্রা স্মার্ট গ্যাজেট বান্ডেল (Smart Watch + ANC Earbuds + 20W Fast Charger)",
    slug: "smart-tech-gadget-combo-pro",
    category: "gadget",
    shortDescription: "দৈনন্দিন লাইফস্টাইল ও ফিটনেসের জন্য প্রয়োজনীয় ৩টি সেরা প্রিমিয়াম গ্যাজেট কম্বো।",
    description: "একসাথে পেয়ে যান ওয়াটারপ্রুফ AMOLED ডিসপ্লে স্মার্টওয়াচ, অ্যাক্টিভ নয়েজ ক্যান্সেলেশন ট্রু ওয়্যারলেস ইয়ারবাডস এবং দ্রুততম ২০ ওয়াট পিডি ফাস্ট চার্জার।",
    originalPrice: 4200,
    comboPrice: 2890,
    savings: 1310,
    discountPercentage: 31,
    rating: 4.92,
    reviewCount: 142,
    badge: "SAVE 31%",
    currency: "৳",
    isFeatured: true,
    thumbnail: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=900&q=80",
    images: [
      "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=1200&q=80"
    ],
    features: [
      "1.43\" HD AMOLED Curved Touch Display Smartwatch",
      "35dB Active Noise Cancellation (ANC) Bluetooth 5.3 Earbuds",
      "20W GaN Dual Port USB-C PD Super Fast Wall Charger",
      "৬ মাসের অফিশিয়াল ব্র্যান্ড ওয়ারেন্টি"
    ],
    items: [
      {
        id: "item-watch",
        name: "AMOLED Bluetooth Calling Smartwatch",
        quantity: 1,
        individualPrice: 2490,
        specs: "হার্টরেট, SpO2 মনিটর, IP68 ওয়াটারপ্রুফ",
        image: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=400&q=80"
      },
      {
        id: "item-earbuds",
        name: "Pro ANC Bass TWS Wireless Earbuds",
        quantity: 1,
        individualPrice: 1250,
        specs: "30 ঘন্টা ব্যাকআপ, কোয়াড মাইক এনভায়রনমেন্ট নয়েজ ক্যান্সেলেশন",
        image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=400&q=80"
      },
      {
        id: "item-charger",
        name: "20W GaN Fast Charger & Braided Type-C Cable",
        quantity: 1,
        individualPrice: 460,
        specs: "PD 3.0 & QC 4.0 সাপোর্ট",
        image: "https://images.unsplash.com/photo-1588508065123-287b28e013da?auto=format&fit=crop&w=400&q=80"
      }
    ],
    inStock: true,
    stockCount: 18,
    sku: "CMB-GDT-04"
  },
  {
    id: "creators-mobile-vlog-rig-combo",
    title: "স্মার্টফোন কনটেন্ট ক্রিয়েটর ও ভ্লগিং কম্বো (Tripod + Mic + LED Light)",
    slug: "creators-mobile-vlog-rig-combo",
    category: "gadget",
    shortDescription: "মোবাইল দিয়ে ভিডিও তৈরি ও রিলস বানানোর সম্পূর্ণ পোর্টেবল স্টুডিও সেট।",
    description: "ইউটিউব ভ্লগ, ফেসবুক লাইভ, টিকটক কিংবা অনলাইন ক্লাসের জন্য চমৎকার প্রফেশনাল ৩-ইন-১ মোবাইল স্টুডিও কিট।",
    originalPrice: 2800,
    comboPrice: 1950,
    savings: 850,
    discountPercentage: 30,
    rating: 4.85,
    reviewCount: 68,
    badge: "SAVE 30%",
    currency: "৳",
    isFeatured: false,
    thumbnail: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=900&q=80",
    images: [
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=1200&q=80"
    ],
    features: [
      "ওয়্যারলেস কলার মাইক্রোফোন (Type-C / Lightning)",
      "অ্যালুমিনিয়াম এক্সটেন্ডেবল ট্রাইপড ও ৩৬০ ডিগ্রি রোটেশন মাউন্ট",
      "পোর্টেবল রিচার্জেবল বাই-কালার মিনি এলইডি প্যানেল",
      "সহজে বহনযোগ্য ক্যারি পাউচ"
    ],
    items: [
      {
        id: "item-mic-wireless",
        name: "Wireless Lavalier Clip-on Mic (20m range)",
        quantity: 1,
        individualPrice: 1350,
        specs: "ক্রিস্টাল ক্লিয়ার অডিও ক্যাপচার, রিয়েলটাইম নয়েজ রিডাকশন",
        image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=400&q=80"
      },
      {
        id: "item-tripod",
        name: "Pro Extendable Phone Tripod Stand",
        quantity: 1,
        individualPrice: 850,
        specs: "৫১ ইঞ্চি উচ্চতা পর্যন্ত বাড়ানো যায়, ব্লুটুথ রিমোট শাটার",
        image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=400&q=80"
      },
      {
        id: "item-led-light",
        name: "Pocket Bi-Color Rechargeable Video Light",
        quantity: 1,
        individualPrice: 600,
        specs: "ব্রাইটনেস অ্যাডজাস্টেবল, ২০০০mAh ইনবিল্ট ব্যাটারি",
        image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=400&q=80"
      }
    ],
    inStock: true,
    stockCount: 12,
    sku: "CMB-GDT-05"
  },
  {
    id: "organic-tea-honey-wellness-combo",
    title: "ন্যাচারাল প্রিমিয়াম অর্গানিক চা ও সুন্দরবন মধু কম্বো",
    slug: "organic-tea-honey-wellness-combo",
    category: "food",
    shortDescription: "শ্রীমঙ্গলের ফার্স্ট ফ্লাশ চা পাতা, খাঁটি সুন্দরবনের খলিশা ফুলের মধু ও মাটির কুটির কাপ।",
    description: "সুস্বাস্থ্য ও সুরভিত সতেজতার জন্য এক অপরূপ উপহার। প্রাকৃতিকভাবে সংগৃহীত অ্যান্টিঅক্সিডেন্ট সমৃদ্ধ অর্গানিক চা ও খাঁটি কাঁচা মধুর পুষ্টিগুণে দিন শুরু করুন।",
    originalPrice: 1350,
    comboPrice: 990,
    savings: 360,
    discountPercentage: 27,
    rating: 4.96,
    reviewCount: 119,
    badge: "SAVE 27%",
    currency: "৳",
    isFeatured: true,
    thumbnail: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=900&q=80",
    images: [
      "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=1200&q=80"
    ],
    features: [
      "১০০% প্রাকৃতিক খাঁটি সুন্দরবনের কাঁচা মধু",
      "শ্রীমঙ্গলের এস্টেট থেকে সরাসরি বাছাইকৃত চা পাতা",
      "রোগ প্রতিরোধ ক্ষমতা বৃদ্ধিতে সহায়ক",
      "আকর্ষণীয় গিফট বক্স প্যাকেজিং"
    ],
    items: [
      {
        id: "item-honey",
        name: "সুন্দরবনের প্রাকৃতিক খলিশা মধু (Raw Honey 400g)",
        quantity: 1,
        individualPrice: 750,
        specs: "আনপ্রসেসড, অ্যান্টিঅক্সিডেন্ট ও এনজাইম সমৃদ্ধ",
        image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=400&q=80"
      },
      {
        id: "item-tea",
        name: "শ্রীমঙ্গল প্রিমিয়াম ব্ল্যাক টি (Orthodox Black Tea 250g)",
        quantity: 1,
        individualPrice: 380,
        specs: "তাজা কচি পাতা থেকে তৈরি তীব্র লিকার ও সুবাস",
        image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=400&q=80"
      },
      {
        id: "item-clay-mugs",
        name: "হাতে তৈরি ঐতিহ্যবাহী মাটির চায়ের কাপ (সেট ২ পিস)",
        quantity: 2,
        individualPrice: 220,
        specs: "ইকো-ফ্রেন্ডলি প্রাকৃতিক পোড়ামাটির পাত্র",
        image: "https://images.unsplash.com/photo-1576402187878-974f70c890a5?auto=format&fit=crop&w=400&q=80"
      }
    ],
    inStock: true,
    stockCount: 20,
    sku: "CMB-LFE-06"
  }
];
