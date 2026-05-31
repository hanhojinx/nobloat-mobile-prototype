import React, { useEffect, useMemo, useState } from "react";
import {
  Bell,
  CalendarDays,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  CircleCheck,
  Coffee,
  Croissant,
  Home,
  ListFilter,
  MessageCircle,
  Package,
  PackageCheck,
  Popcorn,
  Search,
  Star,
  Utensils,
  UserRound
} from "lucide-react";

const asset = (path) => `/assets/${path}`;

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

const categories = [
  { id: "milk", name: "Lacto-free Milk", detail: "Milk, cocoa milk, daily packs", count: 5 },
  { id: "protein", name: "Protein", detail: "Powder, ready-to-drink protein", count: 3 },
  { id: "bakery", name: "Gluten-free Bakery", detail: "Bread, pancake mix, biscotti", count: 5 },
  { id: "meal", name: "Simple Meals", detail: "Noodles and prepared meal kits", count: 1 },
  { id: "dessert", name: "Dessert", detail: "Cakes, sweet potato snacks", count: 2 }
];

const keywordChips = ["Lacto-free", "Gluten-free", "Protein", "Milk", "Bakery", "Dessert", "Noodles", "Low sugar"];
const symptoms = ["All", "Lactose intolerance", "Gluten intolerance", "Sensitive stomach"];

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
  const [reviewStep, setReviewStep] = useState(0);
  const [toast, setToast] = useState("");
  const [modal, setModal] = useState(null);

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
    setSelectedProduct({ ...detailProduct, ...product, heroImages: detailProduct.heroImages });
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
    content = <ReviewFlow step={reviewStep} onStep={setReviewStep} onDone={() => { setReviewStep(0); setActiveTab("home"); }} />;
  } else if (selectedProduct) {
    content = (
      <ProductDetail
        product={selectedProduct}
        products={products}
        onBack={() => setSelectedProduct(null)}
        onOpenProduct={openProduct}
        onToast={showToast}
        onBuy={() => setModal("buy")}
      />
    );
  } else {
    content = (
      <AppShell activeTab={activeTab} onTabChange={setActiveTab} onCart={() => setModal("cart")}>
        {activeTab === "home" && <HomeScreen products={products} onOpenProduct={openProduct} onToast={showToast} />}
        {activeTab === "delivery" && <DeliveryScreen onToast={showToast} onReview={() => setReviewStep(1)} onDate={() => setModal("date")} />}
        {activeTab === "category" && <CategoryScreen products={products} onOpenProduct={openProduct} onToast={showToast} />}
        {activeTab === "search" && <SearchScreen products={products} onOpenProduct={openProduct} onToast={showToast} />}
        {activeTab === "my" && (
          <MyPage
            choices={onboardingChoices}
            onReset={() => {
              setOnboardingStep(0);
              setStage("onboarding");
            }}
            onToast={showToast}
          />
        )}
      </AppShell>
    );
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f2f2f2] px-4 py-6">
      <section className="relative h-[844px] w-[390px] overflow-hidden bg-white shadow-phone">
        {content}
        {toast && <Toast>{toast}</Toast>}
        {modal === "buy" && <BuyModal product={selectedProduct || detailProduct} onClose={() => setModal(null)} />}
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
  return (
    <div className="bg-white px-[20px] pt-[20px]">
      <div className="mb-[28px] flex justify-around text-[17px]">
        <button className="text-[#008407]">Trusty Meal</button>
        <button className="text-[#9e9ba0]">Trusty Feed</button>
      </div>
      <SectionTitle title="Exclusive Lacto-free Products" subtitle="New Products Only on TrustyMeal" />
      <div className="mt-[18px] grid grid-cols-2 gap-x-[29px] gap-y-[14px]">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} onOpenProduct={onOpenProduct} onToast={onToast} />
        ))}
      </div>
    </div>
  );
}

function ProductCard({ product, onOpenProduct, onToast }) {
  return (
    <article className="w-[148px]">
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

function SearchScreen({ products, onOpenProduct, onToast }) {
  const [query, setQuery] = useState("");
  const [activeChip, setActiveChip] = useState("Lacto-free");
  const [activeSymptom, setActiveSymptom] = useState("All");

  const results = useMemo(() => {
    const searchValue = query || activeChip;
    return products.filter((product) => {
      const haystack = [product.name, product.categoryLabel, product.symptom, ...product.tags].join(" ").toLowerCase();
      const matchesQuery = !searchValue || haystack.includes(searchValue.toLowerCase());
      const matchesSymptom = activeSymptom === "All" || product.symptom === activeSymptom;
      return matchesQuery && matchesSymptom;
    });
  }, [activeChip, activeSymptom, products, query]);

  return (
    <div className="px-4 py-3">
      <label className="flex h-[41px] items-center gap-3 rounded-[10px] bg-[#f2f2f2] px-3">
        <Search size={18} className="text-[#5c5c5c]" />
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search TrustyMeal"
          className="w-full bg-transparent text-[14px] outline-none placeholder:text-[#9d9d9d]"
        />
      </label>
      <SearchBlock title="Search keywords">
        <ChipCloud chips={keywordChips} active={activeChip} onSelect={(chip) => { setActiveChip(chip); setQuery(chip); }} />
      </SearchBlock>
      <SearchBlock title="Similar symptom filter">
        <ChipCloud chips={symptoms} active={activeSymptom} onSelect={setActiveSymptom} />
      </SearchBlock>
      <div className="mt-7 grid grid-cols-2 gap-x-[29px] gap-y-[14px] px-1">
        {(results.length ? results : products).slice(0, 8).map((product) => (
          <ProductCard key={product.id} product={product} onOpenProduct={onOpenProduct} onToast={onToast} />
        ))}
      </div>
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
    <div className="px-4 py-5">
      <section className="rounded-[8px] border border-[#eeeeee] bg-white p-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[13px] text-[#008407]">Next delivery</p>
            <h1 className="mt-1 text-[20px] font-semibold text-[#333]">Arrives tomorrow morning</h1>
          </div>
          <button onClick={onDate} className="flex h-11 w-11 items-center justify-center rounded-full bg-[#e8ffe9] text-[#008407]">
            <CalendarDays size={22} />
          </button>
        </div>
        <div className="mt-6 h-2 rounded-full bg-[#eeeeee]">
          <div className="h-2 w-[72%] rounded-full bg-[#008407]" />
        </div>
        <div className="mt-4 grid grid-cols-4 text-center text-[11px] text-[#7a7a7a]">
          {["Ordered", "Packed", "Shipping", "Arrived"].map((item, index) => (
            <span key={item} className={index < 3 ? "text-[#008407]" : ""}>{item}</span>
          ))}
        </div>
      </section>
      <section className="mt-6 rounded-[8px] border border-[#eeeeee] p-4">
        <h2 className="text-[17px] text-[#404040]">Delivery list</h2>
        <DeliveryItem name={products[0].name} image={products[0].image} status="Out for delivery" />
        <DeliveryItem name={detailProduct.name} image={detailProduct.image} status="Delivered" />
      </section>
      <button onClick={onReview} className="mt-5 h-[52px] w-full rounded-[8px] bg-[#008407] text-[17px] font-semibold text-white">
        Write a review
      </button>
    </div>
  );
}

function MyPage({ choices, onReset, onToast }) {
  return (
    <div className="px-4 py-5">
      <section className="flex items-center gap-3">
        <div className="flex h-[52px] w-[52px] items-center justify-center rounded-full bg-[#e8ffe9]">
          <Logo className="text-[18px] text-[#008407]" />
        </div>
        <div>
          <h1 className="text-[20px] font-semibold text-[#333]">NoBloat Member</h1>
          <p className="mt-1 text-[13px] text-[#8a8a8a]">{choices.intolerance} · {choices.severity}</p>
        </div>
      </section>
      <section className="mt-6 rounded-[8px] bg-[#e8ffe9] p-4">
        <div className="grid grid-cols-2 divide-x divide-[#bfecc7] text-center">
          <Stat label="Orders" value="6" />
          <Stat label="Points" value="1,240" />
        </div>
      </section>
      <section className="mt-7 grid grid-cols-4 gap-3 text-center">
        {["Coupons", "Saved", "Reviews", "Settings"].map((item) => (
          <button key={item} onClick={() => onToast(`${item} is demo-only`)} className="rounded-[8px] bg-[#f7f7f7] px-1 py-4 text-[12px] text-[#555]">
            {item}
          </button>
        ))}
      </section>
      <section className="mt-8 space-y-3">
        {["Delivery addresses", "Payment methods", "Retake symptom survey"].map((item) => (
          <button
            key={item}
            onClick={item.includes("survey") ? onReset : () => onToast(`${item} is disabled in this prototype`)}
            className="flex h-[52px] w-full items-center justify-between border-b border-[#eeeeee] text-left text-[15px] text-[#333]"
          >
            {item}
            <ChevronRight size={18} className="text-[#a3a3a3]" />
          </button>
        ))}
      </section>
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
  const [rating, setRating] = useState(0);
  const [text, setText] = useState("");
  if (step === 5) {
    return (
      <CenteredPanel title="Review submitted" subtitle="Thank you for helping other shoppers choose the right food.">
        <PrimaryButton onClick={onDone}>Complete</PrimaryButton>
      </CenteredPanel>
    );
  }
  return (
    <div className="flex h-full flex-col bg-white px-6 pb-10 pt-[74px]">
      <h1 className="text-[24px] font-semibold text-[#333]">{step === 1 ? "How was your meal?" : step === 2 ? "Rate the product" : step === 3 ? "Tell us more" : "Ready to submit?"}</h1>
      <p className="mt-2 text-[14px] leading-5 text-[#777]">Your feedback stays inside this prototype and does not require login.</p>
      <div className="mt-8 rounded-[10px] border border-[#eeeeee] p-4">
        <DeliveryItem name={detailProduct.name} image={detailProduct.image} status="Delivered" />
      </div>
      {step >= 2 && (
        <div className="mt-8 flex justify-center gap-2 text-[#008407]">
          {[1, 2, 3, 4, 5].map((value) => (
            <button key={value} onClick={() => setRating(value)} aria-label={`Rating ${value}`}>
              <Star size={34} fill={rating >= value ? "currentColor" : "none"} />
            </button>
          ))}
        </div>
      )}
      {step >= 3 && (
        <textarea
          value={text}
          onChange={(event) => setText(event.target.value)}
          placeholder="Write about taste, packaging, and how you felt."
          className="mt-8 h-[160px] resize-none rounded-[10px] bg-[#f7f7f7] p-4 text-[15px] outline-none"
        />
      )}
      <PrimaryButton className="mt-auto" onClick={() => onStep(step === 4 ? 5 : step + 1)}>
        {step === 4 ? "Submit Review" : "Next"}
      </PrimaryButton>
    </div>
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
  return (
    <div className="absolute inset-0 z-40 flex items-end bg-black/30">
      <section className="w-full rounded-t-[24px] bg-white px-5 pb-7 pt-4">
        <div className="mx-auto h-1 w-9 rounded-full bg-[#cfcfcf]" />
        <h2 className="mt-6 text-[20px] font-semibold text-[#333]">Select delivery date</h2>
        <div className="mt-5 grid grid-cols-7 gap-2 text-center">
          {Array.from({ length: 28 }, (_, index) => (
            <button key={index} className={`h-10 rounded-[8px] text-[13px] ${[2, 8, 14].includes(index) ? "bg-[#008407] text-white" : "bg-[#f5f5f5] text-[#555]"}`}>
              {index + 1}
            </button>
          ))}
        </div>
        <PrimaryButton className="mt-6" onClick={onClose}>Confirm</PrimaryButton>
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
