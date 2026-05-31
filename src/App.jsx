import React, { useEffect, useState } from "react";
import {
  Bell,
  Bookmark,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  CircleCheck,
  Coffee,
  Croissant,
  Droplet,
  Heart,
  Home,
  ListFilter,
  MessageCircle,
  Minus,
  Package,
  PackageCheck,
  Popcorn,
  Plus,
  Search,
  Settings,
  Star,
  Sun,
  Tag,
  Ticket,
  Utensils,
  UserRound,
  X
} from "lucide-react";

const asset = (path) => `/assets/${path}`;

const heroPromos = [
  {
    title: "Today’s Sale",
    subtitle: "60% Sale in Maximum",
    image: asset("home/todays-sale.png")
  },
  {
    title: "Gluten-free Snacks",
    subtitle: "No Need to Worries!",
    image: asset("home/hero-02-a.png")
  },
  {
    title: "Brown Rice Product",
    subtitle: "Domestic Ingrediants",
    image: asset("home/hero-03-a.png"),
    caption: "First Purchase to Get Reward!"
  },
  {
    title: "Lacto-free Milk",
    subtitle: "Famous and Credible",
    image: asset("home/hero-04-a.png"),
    caption: "Certified Product"
  }
];

const products = [
  {
    id: 1,
    name: "[Selex] Protein Lacto-free 570g",
    category: "protein",
    categoryLabel: "Protein",
    oldPrice: 20000,
    price: 16000,
    discount: "20%",
    symptom: "Lactose intolerance",
    tags: ["Lacto-free", "Protein", "Drink"],
    image: asset("products/product-01.png")
  },
  {
    id: 2,
    name: "[Jambakee] Essential Lactose-free Formula",
    category: "protein",
    categoryLabel: "Protein",
    oldPrice: 20500,
    price: 16400,
    discount: "20%",
    symptom: "Lactose intolerance",
    tags: ["Lacto-free", "Daily", "Powder"],
    image: asset("products/product-02.png")
  },
  {
    id: 3,
    name: "[Alpenmink] Alps Digestible Lacto-free Milk",
    category: "milk",
    categoryLabel: "Milk",
    oldPrice: 2390,
    price: 1990,
    discount: "20%",
    symptom: "Sensitive stomach",
    tags: ["Milk", "Digestible", "Breakfast"],
    image: asset("products/product-03.png")
  },
  {
    id: 4,
    name: "[Selex] Protein Lacto-free Drink Pack",
    category: "protein",
    categoryLabel: "Protein",
    oldPrice: 1500,
    price: 1200,
    discount: "20%",
    symptom: "Lactose intolerance",
    tags: ["Protein", "Drink", "Low sugar"],
    image: asset("products/product-04.png")
  },
  {
    id: 5,
    name: "[Sanghafarm] Organic Milk Lacto-free",
    category: "milk",
    categoryLabel: "Milk",
    oldPrice: 3990,
    price: 3190,
    discount: "20%",
    symptom: "Sensitive stomach",
    tags: ["Organic", "Milk", "Daily"],
    image: asset("products/product-05.png")
  },
  {
    id: 6,
    name: "[Maeil] Cocoa in Milk Lacto-free 300mL",
    category: "milk",
    categoryLabel: "Milk",
    oldPrice: 2400,
    price: 1990,
    discount: "20%",
    symptom: "Lactose intolerance",
    tags: ["Cocoa", "Snack", "Drink"],
    image: asset("products/product-06.png")
  },
  {
    id: 7,
    name: "[Maeil] Bio Lacto-free Plain Greek Yogurt",
    category: "yogurt",
    categoryLabel: "Yogurt",
    oldPrice: 7500,
    price: 6000,
    discount: "20%",
    symptom: "Sensitive stomach",
    tags: ["Greek yogurt", "Protein", "Plain"],
    image: asset("products/product-07.png")
  },
  {
    id: 8,
    name: "[Yonsei] Lacto-free Low-fat High-protein Milk",
    category: "milk",
    categoryLabel: "Milk",
    oldPrice: 96000,
    price: 86000,
    discount: "20%",
    symptom: "Lactose intolerance",
    tags: ["Low fat", "Protein", "Bulk"],
    image: asset("products/product-08.png")
  },
  {
    id: 9,
    name: "[Denmark] Digestible Milk Lacto-free",
    category: "milk",
    categoryLabel: "Milk",
    oldPrice: 2200,
    price: 1750,
    discount: "20%",
    symptom: "Sensitive stomach",
    tags: ["Milk", "Daily", "Digestible"],
    image: asset("products/product-09.png")
  },
  {
    id: 10,
    name: "[Breadgarden] Gluten-free Pancake Mix",
    category: "bakery",
    categoryLabel: "Bakery",
    oldPrice: 4000,
    price: 3200,
    discount: "20%",
    symptom: "Gluten intolerance",
    tags: ["Gluten-free", "Pancake", "Home baking"],
    image: asset("products/product-10.png")
  },
  {
    id: 11,
    name: "[Gyumx Lifeshop] Gluten-free Zero Rusk",
    category: "bakery",
    categoryLabel: "Bakery",
    oldPrice: 1800,
    price: 1500,
    discount: "20%",
    symptom: "Gluten intolerance",
    tags: ["Gluten-free", "Snack", "Bread"],
    image: asset("products/product-11.png")
  },
  {
    id: 12,
    name: "Odong-ri Buckwheat Noodle",
    category: "meal",
    categoryLabel: "Meal",
    oldPrice: 5000,
    price: 4000,
    discount: "20%",
    symptom: "Gluten intolerance",
    tags: ["Buckwheat", "Noodles", "Meal"],
    image: asset("products/product-12.png")
  },
  {
    id: 13,
    name: "[Silkterra] Gluten-free 6-grain Cookies",
    category: "snack",
    categoryLabel: "Snack",
    oldPrice: 16000,
    price: 13000,
    discount: "20%",
    symptom: "Gluten intolerance",
    tags: ["Cookies", "Gift", "Gluten-free"],
    image: asset("products/product-13.png")
  },
  {
    id: 14,
    name: "[Salsalhadang Bakery] Gluten-free Bread",
    category: "bakery",
    categoryLabel: "Bakery",
    oldPrice: 2300,
    price: 1800,
    discount: "20%",
    symptom: "Gluten intolerance",
    tags: ["Bread", "Bakery", "Gluten-free"],
    image: asset("products/product-14.png")
  },
  {
    id: 15,
    name: "[Supremebakery] Gluten-free Unsalted Madeleine",
    category: "bakery",
    categoryLabel: "Bakery",
    oldPrice: 20000,
    price: 15000,
    discount: "20%",
    symptom: "Gluten intolerance",
    tags: ["Madeleine", "Dessert", "Bakery"],
    image: asset("products/product-15.png")
  },
  {
    id: 16,
    name: "[Yoonscotti] Handmade Bakery Biscotti",
    category: "bakery",
    categoryLabel: "Bakery",
    oldPrice: 20000,
    price: 15000,
    discount: "20%",
    symptom: "Gluten intolerance",
    tags: ["Biscotti", "Snack", "Bakery"],
    image: asset("products/product-16.png")
  },
  {
    id: 17,
    name: "[Ketobbang] Gluten-free Cheesecake Assortment",
    category: "dessert",
    categoryLabel: "Dessert",
    oldPrice: 50000,
    price: 40000,
    discount: "20%",
    symptom: "Gluten intolerance",
    tags: ["Cheesecake", "Dessert", "Gluten-free"],
    image: asset("products/product-17.png")
  },
  {
    id: 18,
    name: "[Bangadduck] Gluten-free Handmade Sweet Potato",
    category: "dessert",
    categoryLabel: "Dessert",
    oldPrice: 24900,
    price: 19900,
    discount: "20%",
    symptom: "Gluten intolerance",
    tags: ["Dessert", "Handmade", "Gluten-free"],
    image: asset("products/product-18.png")
  }
];

const detailProduct = {
  id: 99,
  name: "Brown Rice Gluten-free Noodles 500g",
  oldPrice: 39000,
  price: 5500,
  discount: "35%",
  symptom: "Gluten intolerance",
  tags: ["Buckwheat", "Simple Mealkit", "Noodles"],
  categoryLabel: "Meal",
  image: asset("detail/hero-noodles-1.png"),
  heroImages: [
    asset("detail/hero-noodles-1.png"),
    asset("detail/hero-noodles-2.png"),
    asset("detail/hero-noodles-3.png"),
    asset("detail/hero-noodles-4.png"),
    asset("detail/hero-noodles-5.png")
  ]
};

const customSearchProduct = {
  id: 100,
  name: "[Maeil] Bio Lacto-free Plain Greek Yogurt",
  oldPrice: 7500,
  price: 6000,
  discount: "20%",
  symptom: "Moderate lactose intolerance",
  tags: ["Lacto-free", "Greek yogurt", "Plain"],
  categoryLabel: "Yogurt",
  image: asset("my/lacto-yogurt.png")
};

const categories = [
  { id: "milk", name: "Lacto-free Milk", detail: "Milk, cocoa milk, daily packs", count: 5 },
  { id: "protein", name: "Protein", detail: "Powder, ready-to-drink protein", count: 3 },
  { id: "bakery", name: "Gluten-free Bakery", detail: "Bread, pancake mix, biscotti", count: 5 },
  { id: "meal", name: "Simple Meals", detail: "Noodles and prepared meal kits", count: 1 },
  { id: "dessert", name: "Dessert", detail: "Cakes, sweet potato snacks", count: 2 }
];

const keywordChips = ["Lacto-free", "Gluten-free", "Protein", "Milk", "Bakery", "Dessert", "Noodles", "Low sugar"];
const symptoms = ["All", "Lactose intolerance", "Gluten intolerance", "Sensitive stomach"];

const deliveryCalendarRows = [
  [
    { label: "31", muted: true },
    { label: "1", dot: true },
    { label: "2" },
    { label: "3" },
    { label: "4" },
    { label: "5" },
    { label: "6", green: true }
  ],
  [
    { label: "7", green: true },
    { label: "8", dot: true },
    { label: "9" },
    { label: "10" },
    { label: "11" },
    { label: "12" },
    { label: "13", green: true }
  ],
  [
    { label: "14", green: true },
    { label: "15" },
    { label: "16" },
    { label: "17" },
    { label: "18", dot: true },
    { label: "19" },
    { label: "20", green: true }
  ],
  [
    { label: "21", green: true },
    { label: "22", dot: true },
    { label: "23" },
    { label: "24" },
    { label: "25", dot: true },
    { label: "26" },
    { label: "27", green: true }
  ],
  [
    { label: "28", green: true },
    { label: "29" },
    { label: "30" },
    { label: "1", muted: true },
    { label: "2", muted: true },
    { label: "3", muted: true },
    { label: "4", muted: true }
  ]
];

const deliverySections = [
  {
    title: "Shelf-stable Foods",
    icon: Sun,
    iconClass: "text-[#ff6b2d]",
    items: [
      {
        name: "Odong-ri buckwheat noodle 500g",
        image: asset("products/product-12.png")
      }
    ]
  },
  {
    title: "Frozen Foods",
    icon: Package,
    iconClass: "text-[#5c9dff]",
    items: [
      {
        name: "[Maeil] Cocoa in Milk Lacto-free 300mL",
        image: asset("products/product-06.png")
      },
      {
        name: "[Denmark] Digestible Milk Lacto-free P...",
        image: asset("products/product-09.png")
      }
    ]
  },
  {
    title: "Chilled Foods",
    icon: Droplet,
    iconClass: "text-[#54c6a5]",
    items: [
      {
        name: "[Bangadduck] Glutenfree Handmade S...",
        image: asset("products/product-18.png")
      },
      {
        name: "[Salsalhadang Bakery] Gluten-free br...",
        image: asset("products/product-14.png")
      }
    ]
  }
];

const myPageSections = [
  {
    id: "gluten",
    title: "gluten free",
    count: 10,
    items: [
      { src: asset("my/gluten-cake.png"), alt: "Gluten-free carrot cake", crop: "cake" },
      { src: asset("my/gluten-roll.png"), alt: "Gluten-free cinnamon roll", crop: "roll" },
      { src: asset("my/gluten-bread.png"), alt: "Gluten-free sliced bread" },
      { src: asset("my/gluten-cookie.png"), alt: "Gluten-free cookie box", overlay: true }
    ]
  },
  {
    id: "lacto",
    title: "lactose free",
    count: 13,
    items: [
      { src: asset("my/lacto-protein.png"), alt: "Lacto-free protein powder" },
      { src: asset("my/lacto-boxes.png"), alt: "Lacto-free product gift set" },
      { src: asset("my/lacto-pink.png"), alt: "Lacto-free milk cartons" },
      { src: asset("my/lacto-yogurt.png"), alt: "Lacto-free Greek yogurt", overlay: true }
    ]
  }
];

const myDetailTiles = [
  { src: asset("my/detail-01.png"), alt: "Gluten-free udon packs", x: 7, y: 6, w: 248, h: 248 },
  { src: asset("my/detail-02.png"), alt: "Brown rice bread", x: 257, y: 6, w: 123, h: 123 },
  { src: asset("my/detail-03.png"), alt: "Sliced gluten-free bread", x: 257, y: 131, w: 123, h: 123 },
  { src: asset("my/detail-04.png"), alt: "Buckwheat snack cracker", x: 132, y: 256, w: 248, h: 248, flip: true },
  { src: asset("my/detail-05.png"), alt: "Rice cake packaging", x: 7, y: 256, w: 123, h: 123, flip: true },
  { src: asset("my/detail-06.png"), alt: "Pancake cookie package", x: 7, y: 381, w: 123, h: 123, flip: true },
  { src: asset("my/detail-07.png"), alt: "Kimchi snack bag", x: 7, y: 506, w: 248, h: 248 },
  { src: asset("my/detail-08.png"), alt: "Madeleine box", x: 257, y: 506, w: 123, h: 123 },
  { src: asset("my/detail-09.png"), alt: "Dessert with green grapes", x: 257, y: 631, w: 123, h: 123 },
  { src: asset("my/detail-10.png"), alt: "Lacto-free protein cans", x: 132, y: 756, w: 248, h: 248, flip: true },
  { src: asset("my/detail-11.png"), alt: "Blueberry yogurt pack", x: 7, y: 756, w: 123, h: 123, flip: true },
  { src: asset("my/detail-12.png"), alt: "Milk carton", x: 7, y: 881, w: 123, h: 123, flip: true },
  { src: asset("my/detail-13.png"), alt: "Maeil high protein cartons", x: 7, y: 1006, w: 248, h: 248 },
  { src: asset("my/detail-14.png"), alt: "Lacto-free beverage bottle", x: 257, y: 1006, w: 123, h: 123 },
  { src: asset("my/detail-15.png"), alt: "Small milk carton", x: 257, y: 1131, w: 123, h: 123 },
  { src: asset("my/detail-16.png"), alt: "Yonsei milk carton", x: 132, y: 1256, w: 248, h: 248, flip: true },
  { src: asset("my/detail-17.png"), alt: "Lacto-free Greek yogurt package", x: 7, y: 1256, w: 123, h: 123, flip: true },
  { src: asset("my/detail-18.png"), alt: "Chocolate milk package", x: 7, y: 1381, w: 123, h: 123, flip: true },
  { src: asset("my/detail-19.png"), alt: "Green protein milk package", x: 7, y: 1506, w: 248, h: 248 },
  { src: asset("my/detail-20.png"), alt: "Protein box", x: 257, y: 1506, w: 123, h: 123 }
];

function formatPrice(price) {
  return `₩${price.toLocaleString("en-US")}`;
}

function App() {
  const [stage, setStage] = useState("splash");
  const [onboardingStep, setOnboardingStep] = useState(0);
  const [onboardingChoices, setOnboardingChoices] = useState({
    intolerance: "Gluten intolerance",
    severity: "Moderate",
    cause: "Cafe"
  });
  const [activeTab, setActiveTab] = useState("home");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [myDetailOpen, setMyDetailOpen] = useState(false);
  const [reviewStep, setReviewStep] = useState(0);
  const [toast, setToast] = useState("");
  const [modal, setModal] = useState(null);
  const [modalProduct, setModalProduct] = useState(null);

  useEffect(() => {
    const timer = window.setTimeout(() => setStage("onboarding"), 1000);
    return () => window.clearTimeout(timer);
  }, []);

  function showToast(message) {
    setToast(message);
    window.setTimeout(() => setToast(""), 1700);
  }

  function openProduct(product = detailProduct) {
    setReviewStep(0);
    setMyDetailOpen(false);
    setModalProduct(null);
    setSelectedProduct({ ...detailProduct, ...product, heroImages: detailProduct.heroImages });
  }

  function openBuyModal(product = null) {
    setModalProduct(product);
    setModal("buy");
  }

  function handleTabChange(tab) {
    setActiveTab(tab);
    setSelectedProduct(null);
    setReviewStep(0);
    setMyDetailOpen(false);
  }

  let content;
  if (stage === "splash") {
    content = <SplashScreen />;
  } else if (stage === "onboarding") {
    content = (
      <Onboarding
        step={onboardingStep}
        choices={onboardingChoices}
        onSelect={(key, value) => setOnboardingChoices((current) => ({ ...current, [key]: value }))}
        onNext={() => {
          if (onboardingStep < 3) setOnboardingStep((step) => step + 1);
          else setStage("app");
        }}
      />
    );
  } else if (reviewStep) {
    content = (
      <ReviewFlow
        step={reviewStep}
        onStep={setReviewStep}
        onDone={(tab = "home") => {
          setReviewStep(0);
          setActiveTab(tab);
          setMyDetailOpen(false);
        }}
      />
    );
  } else if (selectedProduct) {
    content = (
      <ProductDetail
        product={selectedProduct}
        products={products}
        onBack={() => setSelectedProduct(null)}
        onOpenProduct={openProduct}
        onToast={showToast}
        onBuy={() => openBuyModal(null)}
      />
    );
  } else {
    content = (
      <AppShell activeTab={activeTab} onTabChange={handleTabChange} onCart={() => setModal("cart")}>
        {activeTab === "home" && <HomeScreen products={products} onOpenProduct={openProduct} onToast={showToast} />}
        {activeTab === "delivery" && <DeliveryScreen onToast={showToast} onReview={() => setReviewStep(1)} onDate={() => setModal("date")} />}
        {activeTab === "category" && <CategoryScreen products={products} onOpenProduct={openProduct} onToast={showToast} />}
        {activeTab === "search" && <SearchScreen onToast={showToast} onBuy={openBuyModal} />}
        {activeTab === "my" && (
          myDetailOpen ? (
            <MyPageDetail />
          ) : (
            <MyPage
              choices={onboardingChoices}
              onOpenDetail={() => setMyDetailOpen(true)}
              onToast={showToast}
            />
          )
        )}
      </AppShell>
    );
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f2f2f2] px-4 py-6">
      <section className="relative h-[844px] w-[390px] overflow-hidden bg-white shadow-phone">
        {content}
        {toast && <Toast>{toast}</Toast>}
        {modal === "buy" && <BuyModal product={modalProduct || selectedProduct || detailProduct} onClose={() => { setModal(null); setModalProduct(null); }} />}
        {modal === "cart" && <CartSheet products={products.slice(0, 2)} onClose={() => setModal(null)} />}
        {modal === "date" && <DateSheet onClose={() => setModal(null)} />}
      </section>
    </main>
  );
}

function SplashScreen() {
  return (
    <div className="flex h-full flex-col items-center justify-center bg-[#008407] text-white">
      <div className="rounded-[10px] bg-white/15 px-14 py-4">
        <Logo className="text-[28px]" />
      </div>
      <p className="mt-10 text-[15px] text-[#d9b8ff]">Food-Allergy-Tailored Shopping</p>
      <p className="mt-5 text-[15px] text-[#d9b8ff]">We will find you the trusty meal!</p>
    </div>
  );
}

function Onboarding({ step, choices, onSelect, onNext }) {
  const typeOptions = ["Gluten intolerance", "Both", "Lactose intolerance"];
  const severityOptions = ["Mild", "Moderate", "Severe"];
  const causeOptions = [
    { label: "Cafe", icon: Coffee },
    { label: "Bakery", icon: Croissant },
    { label: "Restaurant", icon: Utensils },
    { label: "Snack", icon: Popcorn }
  ];

  if (step === 0) {
    return (
      <div className="flex h-full flex-col bg-white">
        <section className="relative h-[338px] overflow-hidden bg-[#008407] px-[60px] pt-[54px] text-center text-white">
          <div className="flex h-[54px] items-center justify-center rounded-[10px] bg-white/15">
            <Logo className="text-[26px]" />
          </div>
          <p className="mt-[50px] text-[15px] text-[#d9b8ff]">Food-Allergy-Tailored Shopping</p>
          <p className="mt-7 text-[15px] text-[#d9b8ff]">We will find you the trusty meal!</p>
          <div className="absolute -bottom-[42px] left-[-70px] h-[92px] w-[530px] rounded-[50%] bg-white" />
        </section>
        <section className="flex flex-1 flex-col items-center px-11 pb-[90px] pt-[88px] text-center">
          <h1 className="text-[20px] font-extrabold leading-[23px] text-[#222]">
            Registration
            <br />
            Complete!
          </h1>
          <p className="mt-4 text-[15px] leading-[19px] text-[#666]">
            We'll guide you to set up the symptom profiles to find the food that you would like.
          </p>
          <div className="mt-auto w-full">
            <p className="mb-1 text-[18px] text-[#008407]">Start !</p>
            <PrimaryButton onClick={onNext}>Custom Settings</PrimaryButton>
          </div>
        </section>
      </div>
    );
  }

  const title = step === 1 ? "Types of Symptoms" : step === 2 ? "Severity of Symptoms" : "Main Cause";
  const progress = step === 1 ? "34%" : step === 2 ? "68%" : "100%";

  return (
    <div className="flex h-full flex-col bg-white">
      <header className="flex h-[119px] items-center justify-center bg-[#008407] pt-3 text-white">
        <h1 className="font-logo text-[28px] tracking-[1.1px]">{title}</h1>
      </header>
      <div className="px-[52px] pt-[44px] text-center">
        <div className="h-2 overflow-hidden rounded-full bg-[#e5fbe8]">
          <div className="h-full rounded-full bg-[#008407]" style={{ width: progress }} />
        </div>
        <p className="mt-2 text-[10px] font-bold text-[#008407]">Step {step}</p>
      </div>
      <section className="flex flex-1 flex-col px-[70px] pb-[99px] pt-[82px]">
        {step === 1 && (
          <>
            <p className="text-center text-[15px] font-bold text-[#008407]">Select the type of intolerance</p>
            <div className="mt-[36px] space-y-[34px]">
              {typeOptions.map((option) => (
                <ChoiceButton key={option} selected={choices.intolerance === option} onClick={() => onSelect("intolerance", option)}>
                  {option}
                </ChoiceButton>
              ))}
            </div>
          </>
        )}
        {step === 2 && (
          <>
            <p className="text-center text-[15px] font-bold text-[#008407]">Select the severity of intolerance</p>
            <div className="mt-[36px] space-y-[34px]">
              {severityOptions.map((option) => (
                <ChoiceButton key={option} selected={choices.severity === option} onClick={() => onSelect("severity", option)}>
                  {option}
                </ChoiceButton>
              ))}
            </div>
          </>
        )}
        {step === 3 && (
          <>
            <p className="text-center text-[15px] font-bold text-[#008407]">Where do you usually eat food?</p>
            <div className="mt-7 grid grid-cols-2 gap-3">
              {causeOptions.map(({ label, icon: Icon }) => {
                const selected = choices.cause === label;
                return (
                  <button
                    key={label}
                    onClick={() => onSelect("cause", label)}
                    className={`flex h-[108px] flex-col items-center justify-center rounded-[17px] border-2 text-[15px] font-bold text-[#008407] ${
                      selected ? "border-[#008407] bg-[#e8ffe9]" : "border-[#008407] bg-white"
                    }`}
                  >
                    <Icon className="mb-4" size={31} strokeWidth={1.8} />
                    {label}
                  </button>
                );
              })}
            </div>
          </>
        )}
        <PrimaryButton className="mt-auto" onClick={onNext}>
          {step === 3 ? "Complete" : "Next"}
        </PrimaryButton>
      </section>
    </div>
  );
}

function AppShell({ children, activeTab, onTabChange, onCart }) {
  return (
    <div className="flex h-full flex-col bg-white">
      <TopBar onCart={onCart} />
      <div className="hide-scrollbar flex-1 overflow-y-auto pb-[112px]">{children}</div>
      <BottomNav activeTab={activeTab} onTabChange={onTabChange} />
    </div>
  );
}

function TopBar({ onCart }) {
  return (
    <header className="flex h-[97px] items-end justify-between bg-[#008407] px-[21px] pb-4 text-white">
      <Logo className="text-[22px]" />
      <div className="flex items-center gap-4">
        <IconOnly label="Notifications">
          <Bell size={20} />
        </IconOnly>
        <IconOnly label="Cart" onClick={onCart}>
          <Package size={21} />
        </IconOnly>
      </div>
    </header>
  );
}

function BottomNav({ activeTab, onTabChange }) {
  const tabs = [
    { id: "home", label: "Home", icon: Home },
    { id: "delivery", label: "Delivery", icon: PackageCheck },
    { id: "category", label: "Categories", icon: ListFilter },
    { id: "search", label: "Search", icon: Search },
    { id: "my", label: "MyPage", icon: UserRound }
  ];
  return (
    <nav className="absolute bottom-0 left-0 right-0 z-20 h-[94px] border-t border-neutral-100 bg-white px-[31px] pt-[14px]">
      <div className="grid grid-cols-5 gap-[27px]">
        {tabs.map(({ id, label, icon: Icon }) => {
          const selected = activeTab === id;
          return (
            <button key={id} onClick={() => onTabChange(id)} className="flex h-[52px] flex-col items-center justify-start gap-[5px] text-[10px] text-[#2f2f2f]">
              <Icon size={23} strokeWidth={selected ? 2.5 : 2} className={selected ? "text-[#008407]" : ""} />
              <span>{label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}

function HomeScreen({ products, onOpenProduct, onToast }) {
  const [productView, setProductView] = useState(null);
  const bestProducts = products.slice(0, 9);
  const recommendedProducts = products.slice(9, 18);

  if (productView) {
    const viewProducts = productView === "best" ? bestProducts : recommendedProducts;
    return (
      <HomeProductListScreen
        title={productView === "best" ? "Best Products" : "Recommended Products"}
        subtitle={productView === "best" ? "From Daily Best to Monthly Best" : "Add to Cart to Get Cheap Items!"}
        products={viewProducts}
        onBack={() => setProductView(null)}
        onOpenProduct={onOpenProduct}
        onToast={onToast}
      />
    );
  }

  return (
    <div className="font-body bg-white pt-[20px]">
      <div className="mx-auto flex w-[238px] justify-between text-[17px]">
        <button className="text-[#008407]">Trusty Meal</button>
        <button className="text-[#9e9ba0]">Trusty Feed</button>
      </div>
      <HomeHeroCarousel promos={heroPromos} />
      <HomeProductSection
        title="Best Products"
        subtitle="From Daily Best to Monthly Best"
        products={bestProducts}
        onOpenProduct={onOpenProduct}
        onToast={onToast}
        onViewAll={() => setProductView("best")}
      />
      <HomePromoBand />
      <HomeProductSection
        title="Recommended Products"
        subtitle="Add to Cart to Get Cheap Items!"
        products={recommendedProducts}
        onOpenProduct={onOpenProduct}
        onToast={onToast}
        accent="purple"
        className="mt-[71px]"
        onViewAll={() => setProductView("recommended")}
      />
    </div>
  );
}

function HomeHeroCarousel({ promos }) {
  return (
    <section className="hide-scrollbar mt-[20px] flex snap-x gap-[12px] overflow-x-auto pl-[13px] pr-[14px]">
      {promos.map((promo) => (
        <article key={promo.title} className="relative h-[327px] w-[363px] flex-none snap-start overflow-hidden rounded-[10px] bg-[#008407]">
          <img src={promo.image} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-black/10" />
          <div className="absolute right-[15px] top-[19px] max-w-[286px] text-right font-body text-white drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
            <p className="text-[20px] leading-[24px]">{promo.subtitle}</p>
            <h2 className="mt-[5px] text-[29px] leading-[35px]">{promo.title}</h2>
            {promo.caption && <p className="mt-[1px] text-[17px] leading-[20px]">{promo.caption}</p>}
          </div>
        </article>
      ))}
    </section>
  );
}

function HomeProductSection({ title, subtitle, products, onOpenProduct, onToast, onViewAll, accent = "green", className = "mt-[54px]" }) {
  return (
    <section className={className}>
      <div className="flex items-start justify-between px-[14px]">
        <div>
          <h2 className="text-[17px] leading-[20px] text-[#404040]">{title}</h2>
          <p className="mt-[6px] text-[13px] leading-[16px] text-[#a3a3a3]">{subtitle}</p>
        </div>
        <button onClick={onViewAll} className={`mt-[1px] flex items-center gap-[3px] text-[11px] ${accent === "purple" ? "text-[#6b008d]" : "text-[#008407]"}`}>
          View All
          <ChevronRight size={11} strokeWidth={2} />
        </button>
      </div>
      <div className="hide-scrollbar mt-[23px] flex gap-[8px] overflow-x-auto pl-[15px] pr-[14px]">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} onOpenProduct={onOpenProduct} onToast={onToast} />
        ))}
      </div>
    </section>
  );
}

function HomeProductListScreen({ title, subtitle, products, onBack, onOpenProduct, onToast }) {
  return (
    <div className="min-h-[1228px] bg-white px-[14px] pt-[22px] font-body">
      <header className="flex items-start justify-between">
        <button
          onClick={onBack}
          className="flex h-[34px] w-[34px] items-center justify-center text-[#333333]"
          aria-label="Back to home"
          title="Back to home"
        >
          <ChevronLeft size={24} strokeWidth={1.8} />
        </button>
        <div className="mr-[34px] text-center">
          <h1 className="text-[18px] leading-[22px] text-[#404040]">{title}</h1>
          <p className="mt-[6px] text-[12px] leading-[15px] text-[#a3a3a3]">{subtitle}</p>
        </div>
      </header>

      <div className="mt-[24px] flex items-center justify-between border-y border-[#eeeeee] py-[12px]">
        <button className="rounded-full bg-[#e8ffe9] px-[13px] py-[7px] text-[12px] leading-[14px] text-[#008407]">
          Trusty Meal
        </button>
        <div className="flex items-center gap-[13px] text-[12px] leading-[14px] text-[#777777]">
          <button>Popular</button>
          <button>Newest</button>
          <button>Low Price</button>
        </div>
      </div>

      <section className="mt-[22px] grid grid-cols-2 gap-x-[29px] gap-y-[25px] pb-[120px]">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} onOpenProduct={onOpenProduct} onToast={onToast} />
        ))}
      </section>
    </div>
  );
}

function HomePromoBand() {
  return (
    <section className="mt-[46px] h-[81px] overflow-hidden">
      <img src={asset("home/home-banner.png")} alt="" className="h-full w-full object-cover" />
    </section>
  );
}

function ProductCard({ product, onOpenProduct, onToast }) {
  return (
    <article className="w-[148px] flex-none">
      <button onClick={() => onOpenProduct(product)} className="block w-full text-left">
        <img
          src={product.image}
          alt={product.name}
          width="296"
          height="384"
          className="h-[192px] w-[148px] rounded-[2px] object-cover"
          loading="lazy"
        />
      </button>
      <button
        onClick={() => onToast(`${product.name} added to cart`)}
        className="mt-[6px] flex h-[31px] w-[148px] items-center justify-center gap-[7px] rounded-[3px] border border-[#e5e5e5] text-[13px] text-[#373737]"
      >
        <Package size={17} strokeWidth={1.7} />
        Add to Cart
      </button>
      <button onClick={() => onOpenProduct(product)} className="mt-[10px] block min-h-[42px] w-full text-left text-[15px] leading-[18px] text-[#3a3a3a]">
        {product.name}
      </button>
      <p className="mt-[2px] text-[9px] text-[#c1c1c1] line-through">{formatPrice(product.oldPrice)}</p>
      <div className="mt-[2px] flex items-baseline gap-2">
        <span className="text-[13px] text-[#6b008d]">{product.discount}</span>
        <span className="text-[13px] text-[#3d3d3d]">{formatPrice(product.price)}</span>
      </div>
      <div className="mt-[6px] flex items-center gap-[3px] text-[11px] text-[#a6a6a6]">
        <MessageCircle size={13} />
        999+
      </div>
    </article>
  );
}

function SearchScreen({ onToast, onBuy }) {
  const [view, setView] = useState("search");
  const [selectedKeyword, setSelectedKeyword] = useState("");

  function selectKeyword(keyword) {
    setSelectedKeyword(keyword);
    setView("custom1");
  }

  if (view === "custom2") {
    return <CustomSearchProductMatch onNext={() => setView("custom3")} />;
  }

  if (view === "custom3") {
    return <CustomSearchSafety onNext={() => setView("custom4")} />;
  }

  if (view === "custom4") {
    return <CustomSearchPurchase onToast={onToast} onBuy={() => onBuy(customSearchProduct)} />;
  }

  return (
    <SearchKeywordPage
      selectedKeyword={selectedKeyword}
      onKeyword={selectKeyword}
      onSimilar={() => setView("custom2")}
    />
  );
}

function SearchKeywordPage({ selectedKeyword, onKeyword, onSimilar }) {
  const recent = [
    { label: "Lacto free", x: 16, y: 102 },
    { label: "Tofu snack", x: 119, y: 102 },
    { label: "Gluten free", x: 226, y: 102 },
    { label: "Soy bean milk", x: 16, y: 146 },
    { label: "Almond milk", x: 145, y: 146 }
  ];
  const hot = [
    { label: "Tofu", x: 16, y: 248 },
    { label: "Oat Drink", x: 85, y: 248 },
    { label: "Gluten free", x: 186, y: 248 },
    { label: "Low sugar", x: 16, y: 292 },
    { label: "Rice cracker", x: 122, y: 292 },
    { label: "Noodle", x: 236, y: 292 },
    { label: "Soy bean milk", x: 16, y: 336 },
    { label: "Cream Cheese", x: 145, y: 336 }
  ];

  return (
    <div className="relative h-[650px] bg-white font-body text-[#333]">
      <label className="absolute left-[16px] top-[12px] flex h-[41px] w-[356px] items-center rounded-[4px] bg-[#f2f2f2] px-[11px]">
        <Search size={18} strokeWidth={1.8} className="text-[#777]" />
        <input
          value={selectedKeyword}
          onChange={(event) => onKeyword(event.target.value)}
          placeholder="Enter a keyword..."
          className="ml-[13px] w-full bg-transparent text-[13px] leading-[15px] outline-none placeholder:text-[#989898]"
        />
      </label>

      <h1 className="absolute left-[20px] top-[69px] text-[15px] leading-[18px]">Recent Keyword</h1>
      {recent.map((chip) => (
        <SearchPill key={chip.label} {...chip} selected={selectedKeyword === chip.label} onClick={onKeyword} />
      ))}

      <h2 className="absolute left-[20px] top-[213px] text-[15px] leading-[18px]">Hot Keyword</h2>
      {hot.map((chip) => (
        <SearchPill key={chip.label} {...chip} selected={selectedKeyword === chip.label} onClick={onKeyword} hot />
      ))}

      <button
        onClick={onSimilar}
        className="absolute left-1/2 top-[456px] flex h-[35px] -translate-x-1/2 items-center justify-center whitespace-nowrap rounded-[18px] border-2 border-[#008407] bg-[#e8ffe9] px-[16px] pb-[1px] text-[13px] leading-[15px] text-[#008407]"
      >
        View products only with similar symptoms
      </button>
    </div>
  );
}

function SearchPill({ label, x, y, hot = false, selected = false, onClick }) {
  return (
    <button
      onClick={() => onClick(label)}
      className={`absolute flex h-[34px] items-center justify-center rounded-[18px] px-[16px] pb-[1px] text-[13px] leading-[15px] ${
        selected
          ? "border-2 border-[#008407] bg-[#e8ffe9] text-[#008407]"
          : hot
            ? "bg-[#e8ffe9] text-[#008407]"
            : "border border-[#f1f1f1] bg-white text-[#4b4b4b]"
      }`}
      style={{ left: x, top: y }}
    >
      {label}
    </button>
  );
}

function CustomSearchProductMatch({ onNext }) {
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const fadeTimer = window.setTimeout(() => setFading(true), 1000);
    const nextTimer = window.setTimeout(onNext, 1350);
    return () => {
      window.clearTimeout(fadeTimer);
      window.clearTimeout(nextTimer);
    };
  }, [onNext]);

  return (
    <div className={`relative h-[650px] bg-white font-body text-[#333] transition-opacity duration-300 ${fading ? "opacity-0" : "opacity-100"}`}>
      <button onClick={onNext} className="absolute left-[48px] top-[149px] h-[276px] w-[293px] rounded-[20px] bg-[#e8ffe9]/60">
        <span className="absolute left-[42px] top-[18px] flex h-[163px] w-[209px] items-center justify-center rounded-[10px] bg-white">
          <img src={customSearchProduct.image} alt={customSearchProduct.name} className="h-[132px] w-[170px] object-contain" />
        </span>
        <span className="absolute left-[10px] top-[203px] w-[270px] whitespace-nowrap text-center text-[14px] leading-[17px]">
          {customSearchProduct.name}
        </span>
        <span className="absolute left-0 top-[233px] w-full text-center font-sans text-[16px] font-bold leading-[24px] text-[#008407]">
          6,000<span className="font-normal">₩</span>
        </span>
      </button>

      <button
        onClick={onNext}
        className="absolute left-1/2 top-[456px] flex h-[49px] w-[188px] -translate-x-1/2 items-center justify-center rounded-[18px] border-2 border-[#008407] bg-[#e8ffe9] text-center text-[13px] leading-[15px] text-[#008407]"
      >
        <span>
          91% of users with similar
          <br />
          symptoms said trusty!
        </span>
      </button>
    </div>
  );
}

function CustomSearchSafety({ onNext }) {
  return (
    <div className="relative h-[650px] bg-white font-body text-[#333]">
      <button onClick={onNext} className="absolute left-[49px] top-[112px] h-[123px] w-[293px] rounded-[20px] border border-[#008407] bg-[#e8ffe9]/60 text-left">
        <span className="absolute left-[16px] top-[18px] font-sans text-[20px] font-bold leading-[24px] text-[#008407]">Safety Index</span>
        <span className="absolute right-[15px] top-[10px] font-sans text-[40px] font-bold leading-[48px] text-[#008407]">91%</span>
        <span className="absolute left-[16px] top-[73px] text-[14px] leading-[17px]">
          Moderate lactose intolerance
          <br />
          31 out of 34 said trusty (91%)
        </span>
      </button>

      <h1 className="absolute left-[22px] top-[296px] font-sans text-[18px] font-bold leading-[22px] text-[#008407]">Review</h1>
      <button onClick={onNext} className="absolute left-[19px] top-[331px] flex h-[35px] w-[205px] items-center justify-center rounded-[10px] border border-[#008407] bg-[#e8ffe9] text-[13px] leading-[15px] text-[#008407]">
        Only with similar symptoms
      </button>

      <button onClick={onNext} className="absolute left-[22px] top-[385px] h-[231px] w-[350px] rounded-[20px] bg-[#e8ffe9]/60 text-left">
        <span className="absolute left-[16px] top-[27px] flex flex-col gap-[17px] text-[12.5px] leading-[15px] text-[#bbbbbb]">
          {Array.from({ length: 6 }, (_, index) => (
            <span key={index}>"No stomachache 😊"</span>
          ))}
        </span>
      </button>
    </div>
  );
}

function CustomSearchPurchase({ onToast, onBuy }) {
  return (
    <div className="relative h-[650px] bg-white font-body text-[#333]">
      <h1 className="absolute left-0 top-[158px] w-full text-center font-sans text-[20px] font-bold leading-[24px] text-[#008407]">Purchase</h1>

      <section className="absolute left-[19px] top-[205px] h-[123px] w-[350px] rounded-[20px] bg-[#e8ffe9]/60">
        <div className="absolute left-[14px] top-[19px] flex h-[85px] w-[85px] items-center justify-center rounded-[10px] bg-white">
          <img src={customSearchProduct.image} alt={customSearchProduct.name} className="h-[64px] w-[74px] object-contain" />
        </div>
        <h2 className="absolute left-[109px] top-[28px] whitespace-nowrap text-[12px] leading-[14px]">{customSearchProduct.name}</h2>
        <p className="absolute left-[116px] top-[54px] text-[12.5px] leading-[15px] text-[#888]">200g · Lacto-free</p>
        <p className="absolute left-[116px] top-[81px] font-sans text-[16px] font-bold leading-[24px] text-[#008407]">
          6,000<span className="font-normal">₩</span>
        </p>
      </section>

      <button onClick={() => onToast(`${customSearchProduct.name} added to cart`)} className="absolute left-[70px] top-[453px] h-[52px] w-[249px] rounded-[20px] bg-[#008407] font-sans text-[20px] font-bold text-white">
        Add to Cart
      </button>
      <button onClick={onBuy} className="absolute left-[70px] top-[523px] h-[52px] w-[249px] rounded-[20px] bg-[#008407] font-sans text-[20px] font-bold text-white">
        Buy It Now
      </button>
    </div>
  );
}

function CategoryScreen({ products, onOpenProduct, onToast }) {
  const [openCategory, setOpenCategory] = useState("milk");

  return (
    <div className="px-4 py-5">
      <h1 className="text-[19px] text-[#404040]">Categories</h1>
      <p className="mt-1 text-[13px] text-[#a3a3a3]">Browse products by intolerance type.</p>
      <div className="mt-6 space-y-3">
        {categories.map((category) => {
          const open = category.id === openCategory;
          const categoryProducts = products.filter((product) => product.category === category.id);
          return (
            <section key={category.id} className="overflow-hidden rounded-[8px] border border-[#e7e7e7] bg-white">
              <button onClick={() => setOpenCategory(open ? "" : category.id)} className="flex w-full items-center justify-between px-4 py-4 text-left">
                <span>
                  <span className="block text-[16px] font-semibold text-[#333]">{category.name}</span>
                  <span className="mt-1 block text-[12px] text-[#9d9d9d]">{category.detail}</span>
                </span>
                <span className="flex items-center gap-2 text-[12px] text-[#008407]">
                  {category.count}
                  <ChevronDown className={open ? "rotate-180" : ""} size={18} />
                </span>
              </button>
              {open && (
                <div className="grid grid-cols-2 gap-x-[29px] gap-y-[14px] border-t border-[#eeeeee] bg-[#fbfbfb] px-4 py-4">
                  {(categoryProducts.length ? categoryProducts : products.slice(0, 2)).map((product) => (
                    <ProductCard key={product.id} product={product} onOpenProduct={onOpenProduct} onToast={onToast} />
                  ))}
                </div>
              )}
            </section>
          );
        })}
      </div>
    </div>
  );
}

function DeliveryScreen({ onToast, onReview, onDate }) {
  return (
    <div className="relative h-[1901px] bg-white font-body text-[#333]">
      <section className="absolute left-0 top-0 h-[704px] w-full bg-white">
        <h1 className="absolute left-[24px] top-[52px] w-[245px] text-[23px] leading-[27px] text-[#424242]">
          You can delay delivery
          <br />
          for up to 4 weeks
        </h1>
        <p className="absolute left-[22px] top-[118px] text-[13px] leading-[15px] text-[#008407]">
          Group 1 arrives on 00/8 (Mon) this week.
        </p>

        <div className="absolute left-[14px] top-[176px] w-[360px]">
          <div className="grid grid-cols-3 text-center text-[17px] leading-[20px]">
            <span className="text-[#c5c7c9]">2024.00</span>
            <span className="text-[#424242]">2024.00</span>
            <span className="text-[#c5c7c9]">2024.00</span>
          </div>
          <div className="mt-[19px] grid grid-cols-7 gap-y-[23px] text-center text-[17px] leading-[20px]">
            {deliveryCalendarRows.flatMap((row, rowIndex) =>
              row.map((day, dayIndex) => (
                <div key={`${rowIndex}-${dayIndex}-${day.label}`} className="flex h-[56px] flex-col items-center">
                  <span className={day.muted ? "text-[#c5c7c9]" : day.green ? "text-[#008407]" : "text-[#424242]"}>
                    {day.label}
                  </span>
                  {day.dot && <span className="mt-[13px] h-[8px] w-[8px] rounded-full bg-[#d9d9d9]" />}
                </div>
              ))
            )}
          </div>
        </div>

        <button
          onClick={onDate}
          className="absolute left-[28px] top-[605px] flex h-[37px] w-[331px] items-center justify-center rounded-[19px] border-2 border-[#008407] bg-white text-[12px] leading-[14px] text-[#008407]"
        >
          Change Delivery Date
        </button>
      </section>

      <section className="absolute left-0 top-[703px] h-[63px] w-full bg-white text-[11px] text-[#4b4b4b]">
        {["Group 01", "Group 02", "Group 03"].map((group, index) => (
          <button
            key={group}
            onClick={index === 0 ? undefined : onDate}
            className="absolute top-0 h-[63px] text-center"
            style={{ left: index === 0 ? 22 : index === 1 ? 157 : 285, width: 80 }}
          >
            <span className="relative inline-block pt-[1px] text-[11px] leading-[13px]">
              {group}
              <span className="absolute -right-[9px] -top-[7px] h-[8px] w-[8px] rounded-full bg-[#d9d9d9]" />
            </span>
            {index === 0 && <span className="absolute bottom-0 left-0 h-[2px] w-[81px] bg-[#333333]" />}
          </button>
        ))}
      </section>

      <section className="absolute left-[22px] top-[763px] w-[347px]">
        <p className="text-[11px] leading-[13px] text-[#008407]">Delivery</p>
        <p className="mt-[5px] w-[297px] text-[15px] leading-[18px] text-[#2c2c2c]">
          Room 902, Media Building, 145 Anam-ro,
          <br />
          Seongbuk-gu, Seoul
        </p>
        <button
          onClick={() => onToast("Delivery address is demo-only")}
          className="absolute right-0 top-[23px] h-[31px] w-[47px] rounded-[4px] border border-[#eeeeee] text-[11px] leading-[13px] text-[#343434]"
        >
          Change
        </button>
      </section>

      <section className="absolute left-[23px] top-[845px] w-[344px]">
        <div className="flex items-end gap-[4px]">
          <strong className="font-sans text-[17px] font-extrabold leading-[20px] text-[#008407]">₩0,000</strong>
          <span className="pb-[2px] text-[9px] leading-[11px] text-[#323232]">Add ₩0,000 more to order</span>
        </div>
        <div className="mt-[10px] flex items-center gap-[8px]">
          <div className="h-[5px] w-[291px] overflow-hidden rounded-full bg-[#e8ffe9]">
            <div className="h-full w-[264px] rounded-full bg-[#008407]" />
          </div>
          <PackageCheck size={18} strokeWidth={1.8} className="text-[#008407]" />
        </div>
      </section>

      <section className="absolute left-0 top-[912px] flex h-[73px] w-full items-center justify-between border-t border-[#f2f2f2] bg-white px-[13px]">
        <button className="flex items-center gap-[14px] text-[17px] leading-[20px] text-[#333333]">
          <CircleCheck size={18} className="fill-[#008407] text-white" />
          Select All (0/0)
        </button>
        <button onClick={() => onToast("Delete is demo-only")} className="pr-[14px] text-[15px] leading-[18px] text-[#666666]">
          Delete
        </button>
      </section>

      <div className="absolute left-0 top-[985px] w-full border-t-[5px] border-[#f4f4f4]">
        {deliverySections.map((section, index) => (
          <DeliverySection
            key={section.title}
            section={section}
            first={index === 0}
            onReview={index === 2 ? onReview : undefined}
            onToast={onToast}
          />
        ))}
      </div>
    </div>
  );
}

function DeliverySection({ section, first, onReview, onToast }) {
  const Icon = section.icon;
  return (
    <section className={`${first ? "" : "border-t-[5px] border-[#f4f4f4]"} bg-white`}>
      <h2 className="flex h-[61px] items-center gap-[12px] px-[14px] text-[19px] leading-[22px] text-[#343434]">
        <Icon size={16} strokeWidth={1.7} className={section.iconClass} />
        {section.title}
      </h2>
      {section.items.map((item, index) => (
        <DeliveryProductRow
          key={item.name}
          product={item}
          onClick={onReview && index === 0 ? onReview : undefined}
          onToast={onToast}
        />
      ))}
    </section>
  );
}

function DeliveryProductRow({ product, onClick, onToast }) {
  const Wrapper = onClick ? "button" : "div";
  return (
    <article className="relative h-[155px] border-t border-[#f3f3f3] bg-white">
      <CircleCheck size={18} className="absolute left-[13px] top-[17px] fill-[#008407] text-white" />
      <Wrapper
        onClick={onClick}
        className={`absolute left-[55px] top-[15px] max-w-[284px] truncate text-left text-[15px] leading-[18px] text-[#3a3a3a] ${onClick ? "cursor-pointer" : ""}`}
      >
        {product.name}
      </Wrapper>
      <button onClick={() => onToast("Item removed from this delivery group")} className="absolute right-[15px] top-[16px] text-[#d4d4d4]" aria-label="Remove item">
        <X size={19} strokeWidth={1.4} />
      </button>
      <img
        src={product.image}
        alt={product.name}
        width="118"
        height="154"
        className="absolute left-[55px] top-[51px] h-[77px] w-[59px] object-contain"
        loading="lazy"
      />
      <strong className="absolute left-[135px] top-[51px] font-sans text-[15px] font-extrabold leading-[18px] text-[#2a2a2a]">₩0,000</strong>
      <div className="absolute left-[89px] top-[96px] grid h-[31px] w-[66px] grid-cols-3 items-center rounded-[2px] border border-[#eeeeee] bg-white text-center text-[15px] leading-[18px] text-[#333333]">
        <button onClick={() => onToast("Quantity controls are demo-only")} className="flex h-full items-center justify-center text-[#d6d6d6]" aria-label="Decrease quantity">
          <Minus size={12} />
        </button>
        <span>0</span>
        <button onClick={() => onToast("Quantity controls are demo-only")} className="flex h-full items-center justify-center text-[#d6d6d6]" aria-label="Increase quantity">
          <Plus size={12} />
        </button>
      </div>
    </article>
  );
}

function MyPage({ choices, onOpenDetail, onToast }) {
  const quickActions = [
    { label: "Orders", Icon: PackageCheck, iconLeft: 34, iconTop: 1, labelLeft: 31, labelWidth: 35 },
    { label: "Orders 0", Icon: Ticket, iconLeft: 132, iconTop: 5, labelLeft: 124, labelWidth: 45, highlight: true },
    { label: "Orders 0", Icon: Heart, iconLeft: 230, iconTop: 4, labelLeft: 222, labelWidth: 45, highlight: true },
    { label: "Orders", Icon: Bookmark, iconLeft: 322, iconTop: 0, labelLeft: 321, labelWidth: 35 }
  ];

  return (
    <div className="relative h-[1402px] bg-white font-body text-[#3b3b3b]">
      <section className="absolute left-[20px] top-[20px] flex items-center">
        <img src={asset("my/profile-avatar.png")} alt="Godae Kim" className="h-[52px] w-[52px] rounded-full object-cover" />
        <div className="ml-[12px]">
          <h1 className="text-[17px] leading-[20px] text-[#393939]">Godae Kim</h1>
          <p className="mt-[2px] max-w-[245px] truncate text-[11px] leading-[13px] text-[#a5a5a5]">
            Check Next Month's Level · View All Levels
          </p>
        </div>
      </section>

      <button
        onClick={() => onToast(`${choices.intolerance} · ${choices.severity}`)}
        className="absolute left-[333px] top-[28px] flex h-[32px] w-[32px] items-center justify-center text-[#707070]"
        aria-label="Profile settings"
        title="Profile settings"
      >
        <Settings size={24} strokeWidth={1.8} />
      </button>

      <section className="absolute left-[22px] top-[87px] h-[84px] w-[347px] rounded-[4px] border border-[#ececec] bg-white">
        <div className="absolute left-[14px] top-[13px] text-[11px] leading-[13px] text-[#737373]">Rewards</div>
        <div className="absolute left-[190px] top-[13px] text-[11px] leading-[13px] text-[#737373]">Trusty Cash</div>
        <div className="absolute left-[276px] top-[10px] flex h-[25px] w-[55px] items-center justify-center rounded-full bg-[#f4f4f4] text-[11px] text-[#3a3a3a]">
          Gift Card
        </div>
        <div className="absolute left-[15px] top-[42px] flex items-end gap-[3px]">
          <span className="text-[13px] leading-[16px] text-[#3a3a3a]">₩</span>
          <strong className="font-sans text-[17px] leading-[20px] font-extrabold text-[#3a3a3a]">0</strong>
        </div>
        <div className="absolute left-[190px] top-[42px] flex items-end gap-[3px]">
          <span className="text-[13px] leading-[16px] text-[#3a3a3a]">₩</span>
          <strong className="font-sans text-[17px] leading-[20px] font-extrabold text-[#3a3a3a]">0</strong>
        </div>
      </section>

      <section className="absolute left-0 top-[201px] h-[58px] w-full text-center">
        {quickActions.map(({ label, Icon, highlight, iconLeft, iconTop, labelLeft, labelWidth }, index) => (
          <button
            key={`${label}-${index}`}
            onClick={() => onToast(`${label} is demo-only`)}
            className="absolute h-[58px] text-[11px] leading-[13px] text-[#3b3b3b]"
            style={{ left: labelLeft, top: 0, width: labelWidth }}
          >
            <Icon size={31} strokeWidth={1.55} className="absolute text-[#4d4d4d]" style={{ left: iconLeft - labelLeft, top: iconTop }} />
            <span className="absolute left-0 top-[42px] w-full">
              {label.replace(" 0", "")}
              {highlight && <span className="text-[#6b008d]"> 0</span>}
            </span>
          </button>
        ))}
      </section>

      <div className="absolute left-0 top-[296px] h-[9px] w-full bg-[#f4f4f4]" />

      <MySavedSection top={355} section={myPageSections[0]} onOpenDetail={onOpenDetail} />
      <MySavedSection top={800} section={myPageSections[1]} onOpenDetail={onOpenDetail} />

      <div className="absolute left-0 top-[1250px] h-[9px] w-full bg-[#f4f4f4]" />
      <section className="absolute left-[22px] top-[1280px] w-[340px] text-[15px] leading-[18px] text-[#4b4b4b]">
        <p className="mb-[23px] text-[13px] leading-[15px] text-[#bdbdbd]">General Settings</p>
        <div className="grid grid-cols-2 gap-y-[25px]">
          <button onClick={() => onToast("App Settings is demo-only")} className="text-left">App Settings</button>
          <button onClick={() => onToast("Language is demo-only")} className="text-left">Language</button>
          <button onClick={() => onToast("Log out is disabled in this prototype")} className="text-left">Log Out</button>
        </div>
      </section>
    </div>
  );
}

function MySavedSection({ top, section, onOpenDetail }) {
  return (
    <section className="absolute left-0 w-full" style={{ top }}>
      <button onClick={onOpenDetail} className="absolute left-[18px] top-0 flex h-[22px] items-center gap-[17px] text-left text-[15px] leading-[18px] text-[#4b4b4b]">
        <Bookmark size={18} strokeWidth={1.7} className="text-[#4d4d4d]" />
        <span>{section.title}</span>
      </button>
      <div className="absolute left-[14px] top-[36px] grid grid-cols-2 gap-x-[8px] gap-y-[7px]">
        {section.items.map((item) => (
          <MySavedTile
            key={`${section.id}-${item.alt}`}
            item={item}
            count={item.overlay ? section.count : null}
            onOpenDetail={onOpenDetail}
          />
        ))}
      </div>
    </section>
  );
}

function MySavedTile({ item, count, onOpenDetail }) {
  return (
    <button onClick={onOpenDetail} className="relative h-[174px] w-[173px] overflow-hidden bg-[#f5f5f5] text-left">
      {item.crop === "cake" ? (
        <img src={item.src} alt={item.alt} className="absolute left-0 top-[-122px] h-[364px] w-[173px] max-w-none object-cover" />
      ) : item.crop === "roll" ? (
        <img src={item.src} alt={item.alt} className="absolute left-[-14px] top-0 h-[410px] w-[195px] max-w-none object-cover" />
      ) : (
        <img src={item.src} alt={item.alt} className="h-full w-full object-cover" />
      )}
      {count && (
        <span className="absolute inset-0 flex items-center justify-center bg-black/25 text-white">
          <Plus size={32} strokeWidth={2.4} />
          <span className="font-sans text-[37px] font-extrabold leading-[44px]">{count}</span>
        </span>
      )}
    </button>
  );
}

function MyPageDetail() {
  return (
    <div className="relative h-[1755px] bg-white">
      {myDetailTiles.map((tile) => (
        <img
          key={`${tile.src}-${tile.x}-${tile.y}`}
          src={tile.src}
          alt={tile.alt}
          className={`absolute object-cover ${tile.flip ? "scale-x-[-1]" : ""}`}
          style={{ left: tile.x, top: tile.y, width: tile.w, height: tile.h }}
        />
      ))}
    </div>
  );
}

function ProductDetail({ product, products, onBack, onOpenProduct, onToast, onBuy }) {
  const [activeSymptom, setActiveSymptom] = useState(product.symptom);
  const similar = products.filter((item) => item.symptom === activeSymptom && item.id !== product.id);

  return (
    <div className="flex h-full flex-col bg-white">
      <header className="flex h-[148px] flex-none flex-col bg-white">
        <div className="flex h-[84px] items-end justify-between px-4 pb-4">
          <IconOnly label="Back" onClick={onBack} dark>
            <ChevronLeft size={22} />
          </IconOnly>
          <h1 className="max-w-[260px] truncate text-center text-[15px] text-[#3a3a3a]">{product.name}</h1>
          <IconOnly label="Cart" dark>
            <Package size={20} />
          </IconOnly>
        </div>
        <nav className="grid h-[64px] grid-cols-4 border-b border-[#eeeeee] text-center text-[13px]">
          {["Description", "Details", "Reviews", "Q&A"].map((tab, index) => (
            <span key={tab} className={`relative pt-4 ${index === 0 ? "text-[#008407]" : "text-[#b3b3b3]"}`}>
              {tab}
              {index === 0 && <span className="absolute bottom-0 left-1/2 h-[2px] w-[56px] -translate-x-1/2 bg-[#008407]" />}
            </span>
          ))}
        </nav>
      </header>
      <div className="hide-scrollbar flex-1 overflow-y-auto pb-[96px]">
        <div className="hide-scrollbar flex h-[510px] snap-x overflow-x-auto">
          {product.heroImages.map((image) => (
            <img key={image} src={image} alt={product.name} className="h-[510px] w-[390px] flex-none snap-center object-cover" />
          ))}
        </div>
        <section className="px-4 py-5">
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-[15px] text-[#3a3a3a]">{product.name}</h2>
              <p className="mt-3 text-[17px] text-[#616161]">Origin: See description/details</p>
            </div>
            <button className="text-[#8a8a8a]" aria-label="Share">
              <ShareSvg />
            </button>
          </div>
          <div className="mt-3 flex items-end gap-2">
            <span className="text-[27px] text-[#008407]">{product.discount}</span>
            <span className="text-[17px] text-[#c1c1c1] line-through">{formatPrice(product.oldPrice)}</span>
            <span className="text-[27px] text-[#424242]">{formatPrice(product.price)}</span>
          </div>
          <InfoStrip>Coupons + Earn up to 7%</InfoStrip>
          <InfoStrip>Up to 10% off with NH Card, plus Trusty points</InfoStrip>
          <div className="mt-5 grid grid-cols-[66px_1fr] gap-y-4 text-[13px]">
            <span className="text-[#616161]">Delivery</span>
            <div>
              <p className="text-[#616161]">Ordinary</p>
              <p className="mt-1 text-[#b3b3b3]">Order by 11 PM, arrive by 7 AM tomorrow</p>
            </div>
            <span className="text-[#616161]">Seller</span>
            <span className="text-[#616161]">TrustyMeal</span>
          </div>
        </section>
        <section className="border-t border-[#eeeeee] px-4 py-5">
          <SectionTitle title="Used in these dishes" subtitle="Explore recipes from TrustyMeal users" />
          <div className="hide-scrollbar mt-4 flex gap-[7px] overflow-x-auto">
            {[1, 2, 3, 4, 5].map((index) => (
              <RecipeCard key={index} index={index} />
            ))}
          </div>
        </section>
        <section className="border-t border-[#eeeeee] px-4 py-5">
          <h2 className="text-[17px] text-[#404040]">Similar symptom filter</h2>
          <ChipCloud chips={symptoms} active={activeSymptom} onSelect={setActiveSymptom} />
          <div className="mt-5 grid grid-cols-2 gap-x-[29px] gap-y-[14px]">
            {(similar.length ? similar : products.slice(0, 4)).slice(0, 4).map((item) => (
              <ProductCard key={item.id} product={item} onOpenProduct={onOpenProduct} onToast={onToast} />
            ))}
          </div>
        </section>
      </div>
      <div className="absolute bottom-0 left-0 right-0 grid grid-cols-[1fr_1fr] border-t border-[#eeeeee] bg-white">
        <button onClick={() => onToast(`${product.name} added to cart`)} className="h-[72px] text-[17px] text-[#008407]">
          Add to Cart
        </button>
        <button onClick={onBuy} className="h-[72px] bg-[#008407] text-[17px] text-white">
          Buy Now
        </button>
      </div>
    </div>
  );
}

function ReviewFlow({ step, onStep, onDone }) {
  const [rating, setRating] = useState(5);
  const [digestionTag, setDigestionTag] = useState("No stomachache");
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (step !== 4) return undefined;
    const timer = window.setTimeout(() => onStep(5), 1500);
    return () => window.clearTimeout(timer);
  }, [step, onStep]);

  if (step === 1) {
    return (
      <ReviewShell title="Orders" step={1} onNav={onDone}>
        <div className="absolute left-0 top-[316px] flex w-full items-center justify-center gap-[11px]">
          <span className="text-[20px] leading-[20px]" role="img" aria-label="Notification">🔔</span>
          <h1 className="font-sans text-[20px] font-bold leading-[24px] text-[#008407]">Notification</h1>
        </div>
        <section className="absolute left-[19px] top-[355px] h-[122px] w-[350px] rounded-[20px] bg-[#e8ffe9]">
          <div className="absolute left-[14px] top-[17px] flex h-[85px] w-[85px] items-center justify-center rounded-[10px] bg-white">
            <img src={customSearchProduct.image} alt={customSearchProduct.name} className="h-[72px] w-[78px] object-contain" />
          </div>
          <h2 className="absolute left-[110px] top-[29px] w-[232px] truncate text-[12px] leading-[14px] text-[#333333]">
            {customSearchProduct.name}
          </h2>
          <p className="absolute left-[116px] top-[51px] text-[12.5px] leading-[15px] text-[#888888]">200g · Lacto-free</p>
          <p className="absolute left-[116px] top-[78px] font-sans text-[16px] font-bold leading-[24px] text-[#008407]">
            6,000<span className="font-normal">₩</span>
          </p>
        </section>
        <p className="absolute left-0 top-[515px] w-full text-center text-[16px] leading-[19px] text-[#666666]">Send us a review!</p>
        <ReviewButton onClick={() => onStep(2)}>Write Review</ReviewButton>
      </ReviewShell>
    );
  }

  if (step === 2) {
    const tags = ["No stomachache", "Little bit off", "Severe"];
    return (
      <ReviewShell title="Writing a Review" step={2} onNav={onDone}>
        <div className="absolute left-[64px] top-[306px] flex items-center gap-[10px]">
          <Tag size={19} strokeWidth={2} className="text-[#008407]" />
          <h1 className="font-sans text-[18px] font-bold leading-[22px] text-[#008407]">Digestion Tag (Required)</h1>
        </div>
        <div className="absolute left-[45px] top-[353px] flex gap-[26px] text-[15px] leading-[18px]">
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => setDigestionTag(tag)}
              className={`relative h-[29px] ${digestionTag === tag ? "text-[#008407]" : "text-[#b3b3b3]"}`}
            >
              {tag}
              {digestionTag === tag && <span className="absolute bottom-0 left-0 h-[1px] w-full bg-[#008407]" />}
            </button>
          ))}
        </div>
        <h2 className="absolute left-0 top-[474px] w-full text-center text-[20px] leading-[24px] text-[#333333]">Rate</h2>
        <div className="absolute left-0 top-[498px] flex w-full justify-center gap-[1px] text-[#f5a623]">
          {[1, 2, 3, 4, 5].map((value) => (
            <button key={value} onClick={() => setRating(value)} aria-label={`Rating ${value}`} className="h-[24px] w-[21px] text-[20px] leading-[24px]">
              <Star size={20} fill={rating >= value ? "currentColor" : "none"} strokeWidth={0} />
            </button>
          ))}
        </div>
        <ReviewButton onClick={() => onStep(3)}>Next</ReviewButton>
      </ReviewShell>
    );
  }

  if (step === 3) {
    return (
      <ReviewShell title="Writing a Review" step={3} onNav={onDone}>
        <h1 className="absolute left-[60px] top-[286px] w-[270px] text-center text-[14px] leading-[17px] text-[#333333]">
          {customSearchProduct.name}
        </h1>
        <textarea
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          placeholder="Leave a message (Optional)..."
          className="absolute left-[19px] top-[325px] h-[231px] w-[350px] resize-none rounded-[20px] bg-[#e8ffe9] px-[16px] py-[17px] text-[12.5px] leading-[15px] text-[#333333] outline-none placeholder:text-[#bbbbbb]"
        />
        <ReviewButton onClick={() => onStep(4)}>Submit Review</ReviewButton>
      </ReviewShell>
    );
  }

  if (step === 4) {
    return (
      <ReviewShell title="Review Confirmed" step={4} onNav={onDone}>
        <div className="absolute left-0 top-[316px] flex w-full items-center justify-center gap-[13px]">
          <CircleCheck size={20} className="fill-[#008407] text-white" />
          <h1 className="font-sans text-[20px] font-bold leading-[24px] text-[#008407]">Review Confirmed!</h1>
        </div>
        <section className="absolute left-[19px] top-[371px] flex h-[139px] w-[350px] flex-col items-center justify-center rounded-[20px] bg-[#e8ffe9] text-center text-[14px] leading-[17px] text-[#333333]">
          <p>This review will be helpful</p>
          <p className="mt-[13px]">to 28 people in similar situations!</p>
        </section>
        <p className="absolute left-0 top-[592px] w-full text-center font-sans text-[22px] font-bold leading-[27px] text-[#008407]">+ 400P</p>
        <p className="absolute left-0 top-[625px] w-full text-center text-[18px] leading-[21px] text-[#008407]">Review Point Saved!</p>
      </ReviewShell>
    );
  }

  return (
    <ReviewShell title="NoBloat" onNav={onDone}>
      <h1 className="absolute left-0 top-[279px] w-full text-center font-sans text-[20px] font-bold leading-[24px] text-[#008407]">
        Contribution to Community
      </h1>
      <section className="absolute left-[19px] top-[343px] flex h-[168px] w-[350px] flex-col items-center justify-center rounded-[20px] bg-[#e8ffe9] text-center text-[18px] leading-[21px] text-[#333333]">
        <p>Reviews can help</p>
        <p className="mt-[16px]">others to cope with</p>
        <p className="mt-[16px]">indigestion!</p>
      </section>
      <ReviewButton onClick={() => onDone("home")}>Return to Home</ReviewButton>
    </ReviewShell>
  );
}

function ReviewShell({ title, step, children, onNav }) {
  return (
    <div className="relative h-full bg-white font-body text-[#333333]">
      <header className="absolute left-0 top-0 h-[132px] w-full bg-[#008407]">
        <h1 className="absolute left-0 top-[66px] w-full text-center font-logo text-[26px] leading-[30px] tracking-[1.1px] text-white">
          {title}
        </h1>
      </header>
      {step && <ReviewProgress step={step} />}
      {children}
      <BottomNav activeTab="delivery" onTabChange={onNav} />
    </div>
  );
}

function ReviewProgress({ step }) {
  const widths = { 1: 93, 2: 184, 3: 244, 4: 350 };
  const labels = { 1: 51, 2: 95, 3: 194, 4: 293 };
  return (
    <div className="absolute left-[20px] top-[182px] h-[28px] w-[350px]">
      <div className="h-[8px] overflow-hidden rounded-full bg-[#e5fbe8]">
        <div className="h-full rounded-full bg-[#008407]" style={{ width: widths[step] }} />
      </div>
      <p className="absolute top-[14px] font-sans text-[10px] font-bold leading-[12px] text-[#008407]" style={{ left: labels[step] }}>
        Step {step}
      </p>
    </div>
  );
}

function ReviewButton({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="absolute left-[70px] top-[636px] flex h-[52px] w-[249px] items-center justify-center rounded-[20px] bg-[#008407] font-sans text-[20px] font-bold leading-[24px] text-white"
    >
      {children}
    </button>
  );
}

function BuyModal({ product, onClose }) {
  return (
    <div className="absolute inset-0 z-40 flex items-end bg-black/30">
      <section className="w-full rounded-t-[24px] bg-white px-5 pb-7 pt-4">
        <div className="mx-auto h-1 w-9 rounded-full bg-[#cfcfcf]" />
        <h2 className="mt-6 text-[20px] font-semibold text-[#333]">Order summary</h2>
        <DeliveryItem name={product.name} image={product.image} status="Qty 1" />
        <div className="mt-5 rounded-[8px] bg-[#e8ffe9] p-4 text-[13px] text-[#008407]">
          Demo only. Real payment, login, and backend services are not implemented.
        </div>
        <div className="mt-5 grid grid-cols-2 gap-3">
          <button onClick={onClose} className="h-[50px] rounded-[8px] border border-[#dddddd] text-[15px]">Cancel</button>
          <button onClick={onClose} className="h-[50px] rounded-[8px] bg-[#008407] text-[15px] text-white">Confirm</button>
        </div>
      </section>
    </div>
  );
}

function CartSheet({ products, onClose }) {
  return (
    <div className="absolute inset-0 z-40 flex items-end bg-black/30">
      <section className="w-full rounded-t-[24px] bg-white px-5 pb-7 pt-4">
        <div className="mx-auto h-1 w-9 rounded-full bg-[#cfcfcf]" />
        <h2 className="mt-6 text-[20px] font-semibold text-[#333]">Cart</h2>
        {products.map((product) => (
          <DeliveryItem key={product.id} name={product.name} image={product.image} status={formatPrice(product.price)} />
        ))}
        <PrimaryButton className="mt-5" onClick={onClose}>Choose delivery address</PrimaryButton>
      </section>
    </div>
  );
}

function DateSheet({ onClose }) {
  const [selectedGroup, setSelectedGroup] = useState("Group 1");
  const address = "Room 902, Media Building, 145 Anam-ro,\nSeongbuk-gu, Seoul";

  return (
    <div className="absolute inset-0 z-40 flex items-end bg-transparent">
      <section className="relative h-[652px] w-full bg-white shadow-[0_-3px_12px_rgba(0,0,0,0.18)]">
        <div className="absolute left-[177px] top-0 h-[13px] w-[32px] bg-[#ff0000]" />
        <div className="absolute left-[178px] top-[23px] h-[7px] w-[33px] rounded-full bg-[#d7d7d7]" />

        {[
          { group: "Group 1", date: "Expected Date: 00/8", top: 66 },
          { group: "Group 2", date: "Expected Date: 00/00", top: 236 },
          { group: "Group 3", date: "Expected Date: 00/00", top: 402 }
        ].map(({ group, date, top }) => (
          <section key={group} className="absolute left-[38px] w-[334px]" style={{ top }}>
            <div className="flex items-end gap-[15px]">
              <h2 className="font-sans text-[17px] font-extrabold leading-[20px] text-[#008407]">{group}</h2>
              <p className="pb-[1px] font-sans text-[11px] font-semibold leading-[13px] text-[#008407]">{date}</p>
            </div>
            <p className="mt-[13px] whitespace-pre-line text-[15px] leading-[18px] text-[#2c2c2c]">{address}</p>
            <button
              onClick={() => setSelectedGroup(group)}
              className={`ml-[43px] mt-[27px] flex h-[38px] w-[238px] items-center justify-center rounded-[19px] border text-[15px] leading-[18px] ${
                selectedGroup === group
                  ? "border-[#008407] bg-[#e8ffe9] text-[#008407]"
                  : "border-[#f2f2f2] bg-white text-[#4b4b4b]"
              }`}
            >
              Choose a Date
            </button>
          </section>
        ))}

        <footer className="absolute bottom-0 left-0 flex h-[93px] w-full items-center justify-center bg-white">
          <button onClick={onClose} className="flex h-[40px] w-[115px] items-center justify-center rounded-[6px] bg-[#008407] text-[17px] leading-[20px] text-white">
            Confirm
          </button>
        </footer>
      </section>
    </div>
  );
}

function DeliveryItem({ name, image, status }) {
  return (
    <div className="mt-4 flex items-center gap-3">
      <img src={image} alt={name} className="h-[58px] w-[58px] rounded-[4px] object-cover" />
      <div className="min-w-0 flex-1">
        <p className="truncate text-[14px] text-[#333]">{name}</p>
        <p className="mt-1 text-[12px] text-[#888]">{status}</p>
      </div>
      <ChevronRight size={17} className="text-[#b3b3b3]" />
    </div>
  );
}

function RecipeCard({ index }) {
  const labels = ["Budaejjigae", "Galbijjim", "LA Galbi", "Rice roll", "Noodles"];
  return (
    <article className="w-[119px] flex-none">
      <img src={asset(`detail/recipe-${index}.png`)} alt={labels[index - 1]} className="h-[153px] w-[119px] rounded-[4px] object-cover" />
      <p className="mt-2 rounded-[2px] bg-[#e8ffe9] px-2 py-1 text-[11px] text-[#008407]">{labels[index - 1]}</p>
    </article>
  );
}

function SearchBlock({ title, children }) {
  return (
    <section className="mt-6">
      <h2 className="text-[17px] text-[#404040]">{title}</h2>
      {children}
    </section>
  );
}

function ChipCloud({ chips, active, onSelect }) {
  return (
    <div className="mt-4 flex flex-wrap gap-2">
      {chips.map((chip) => (
        <button
          key={chip}
          onClick={() => onSelect(chip)}
          className={`h-[34px] rounded-[8px] border px-4 text-[13px] ${
            active === chip ? "border-[#008407] bg-[#008407] text-white" : "border-[#e6e6e6] bg-white text-[#444]"
          }`}
        >
          {chip}
        </button>
      ))}
    </div>
  );
}

function ChoiceButton({ selected, onClick, children }) {
  return (
    <button
      onClick={onClick}
      className={`mx-auto flex h-[47px] w-[188px] items-center justify-center gap-2 rounded-[14px] border-2 text-[15px] font-bold whitespace-nowrap ${
        selected ? "border-[#008407] bg-[#e8ffe9] text-[#333]" : "border-[#008407] bg-white text-[#333]"
      }`}
    >
      <CircleCheck size={18} className={selected ? "fill-[#008407] text-white" : "text-[#9a9a9a]"} />
      {children}
    </button>
  );
}

function PrimaryButton({ children, onClick, className = "" }) {
  return (
    <button onClick={onClick} className={`flex h-[52px] w-full items-center justify-center rounded-[20px] bg-[#008407] text-[20px] font-bold text-white ${className}`}>
      {children}
    </button>
  );
}

function IconOnly({ children, label, onClick, dark = false }) {
  return (
    <button aria-label={label} title={label} onClick={onClick} className={`flex h-9 w-9 items-center justify-center ${dark ? "text-[#333]" : "text-white"}`}>
      {children}
    </button>
  );
}

function InfoStrip({ children }) {
  return (
    <div className="mt-2 flex h-[34px] items-center justify-between rounded-[6px] bg-[#e8ffe9] px-4 text-[11px] text-[#616161]">
      {children}
      <ChevronRight size={14} className="text-[#008407]" />
    </div>
  );
}

function SectionTitle({ title, subtitle }) {
  return (
    <div>
      <h2 className="text-[17px] leading-[20px] text-[#404040]">{title}</h2>
      <p className="mt-1 text-[13px] leading-[15px] text-[#a3a3a3]">{subtitle}</p>
    </div>
  );
}

function CenteredPanel({ title, subtitle, children }) {
  return (
    <div className="flex h-full flex-col items-center justify-center px-10 text-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#e8ffe9] text-[#008407]">
        <Check size={34} />
      </div>
      <h1 className="mt-6 text-[24px] font-semibold text-[#333]">{title}</h1>
      <p className="mt-3 text-[15px] leading-6 text-[#777]">{subtitle}</p>
      <div className="mt-10 w-full">{children}</div>
    </div>
  );
}

function Stat({ label, value }) {
  return (
    <div>
      <p className="text-[13px] text-[#008407]">{label}</p>
      <p className="mt-1 text-[26px] font-semibold text-[#333]">{value}</p>
    </div>
  );
}

function Toast({ children }) {
  return (
    <div className="absolute bottom-[112px] left-6 right-6 z-50 rounded-full bg-[#141414] px-4 py-3 text-center text-[14px] font-semibold text-white shadow-soft">
      {children}
    </div>
  );
}

function Logo({ className = "" }) {
  return <span className={`font-logo tracking-[1.32px] text-white ${className}`}>NoBloat</span>;
}

function ShareSvg() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M14.5 6.5L10 2M10 2L5.5 6.5M10 2V13.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4 10.5V16.5H16V10.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default App;
