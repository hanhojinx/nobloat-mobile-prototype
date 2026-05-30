import React, { useEffect, useMemo, useState } from "react";
import {
  Bell,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Home,
  ListFilter,
  PackageCheck,
  Search,
  ShoppingBag,
  Star,
  UserRound
} from "lucide-react";

const products = [
  {
    id: 1,
    name: "Light Day Salad Bowl",
    category: "fresh",
    categoryLabel: "Fresh",
    price: 8900,
    oldPrice: 10900,
    badge: "BEST",
    symptom: "Bloating",
    tags: ["Low sodium", "High fiber", "Breakfast"],
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=700&q=80",
    description: "A gentle meal with brown rice, chickpeas, and seasonal greens."
  },
  {
    id: 2,
    name: "Unsweetened Greek Yogurt Set",
    category: "dairy",
    categoryLabel: "Dairy",
    price: 7200,
    oldPrice: 8200,
    badge: "15%",
    symptom: "Sensitive stomach",
    tags: ["Protein", "Probiotic", "Snack"],
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=700&q=80",
    description: "Plain yogurt with less sugar and a longer-lasting feeling of fullness."
  },
  {
    id: 3,
    name: "Low-Sugar Oat Granola",
    category: "snack",
    categoryLabel: "Snack",
    price: 6500,
    oldPrice: 7900,
    badge: "NEW",
    symptom: "Post-meal slump",
    tags: ["Low sugar", "Oat", "Crunchy"],
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1517093157656-b9eccef91cb1?auto=format&fit=crop&w=700&q=80",
    description: "Nutty grains and oats bring texture without heavy added sugar."
  },
  {
    id: 4,
    name: "Cleanse Green Juice",
    category: "drink",
    categoryLabel: "Drink",
    price: 5400,
    oldPrice: 6200,
    badge: "HOT",
    symptom: "Water retention",
    tags: ["Kale", "Apple", "Cold-pressed"],
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1622597467836-f3285f2131b8?auto=format&fit=crop&w=700&q=80",
    description: "A crisp green juice with fresh vegetables and soft fruit acidity."
  },
  {
    id: 5,
    name: "Chicken Brown Rice Bowl",
    category: "meal",
    categoryLabel: "Meal",
    price: 9900,
    oldPrice: 11900,
    badge: "FILLING",
    symptom: "Sensitive stomach",
    tags: ["High protein", "Microwave", "Lunch"],
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=700&q=80",
    description: "A balanced bowl with tender chicken breast and mixed grains."
  },
  {
    id: 6,
    name: "Low-Sodium Miso Soup Kit",
    category: "meal",
    categoryLabel: "Meal",
    price: 7600,
    oldPrice: 8900,
    badge: "WARM",
    symptom: "Bloating",
    tags: ["Low sodium", "Soup", "Ready meal"],
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=700&q=80",
    description: "A comforting miso soup with less sodium and deep savory flavor."
  },
  {
    id: 7,
    name: "Basil Tomato Pasta",
    category: "meal",
    categoryLabel: "Meal",
    price: 10800,
    oldPrice: 12800,
    badge: "PICK",
    symptom: "Post-meal slump",
    tags: ["Whole wheat", "Tomato", "Weekend"],
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=700&q=80",
    description: "A lighter pasta with whole-wheat noodles and bright tomato sauce."
  },
  {
    id: 8,
    name: "Lemon Mint Sparkling Water",
    category: "drink",
    categoryLabel: "Drink",
    price: 3900,
    oldPrice: 4500,
    badge: "0kcal",
    symptom: "Water retention",
    tags: ["Unsweetened", "Refreshing", "Hydration"],
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1523362628745-0c100150b504?auto=format&fit=crop&w=700&q=80",
    description: "A crisp sparkling water with lemon and mint, and no added sugar."
  }
];

const categories = [
  { id: "meal", name: "Meal Care", detail: "Bowls, soups, pasta", icon: "M" },
  { id: "fresh", name: "Fresh Bowl", detail: "Salads, fruit, vegetables", icon: "F" },
  { id: "drink", name: "Hydration", detail: "Juice, sparkling water, tea", icon: "H" },
  { id: "dairy", name: "Dairy & Protein", detail: "Yogurt, cheese, protein", icon: "D" },
  { id: "snack", name: "Light Snack", detail: "Granola, nuts, snacks", icon: "S" }
];

const keywordChips = ["Low sugar", "Low sodium", "High protein", "Fiber", "Breakfast", "Snack", "Juice", "Microwave"];
const symptoms = ["All", "Bloating", "Sensitive stomach", "Water retention", "Post-meal slump"];

function formatPrice(price) {
  return `$${(price / 1000).toFixed(2)}`;
}

function App() {
  const [stage, setStage] = useState("splash");
  const [onboardingStep, setOnboardingStep] = useState(0);
  const [selectedGoals, setSelectedGoals] = useState(["Bloating"]);
  const [activeTab, setActiveTab] = useState("home");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [toast, setToast] = useState("");
  const [buyProduct, setBuyProduct] = useState(null);

  useEffect(() => {
    const timer = window.setTimeout(() => setStage("onboarding"), 1200);
    return () => window.clearTimeout(timer);
  }, []);

  function showToast(message) {
    setToast(message);
    window.setTimeout(() => setToast(""), 1800);
  }

  function openBuyModal(product) {
    setToast("");
    setBuyProduct(product);
  }

  const sharedProps = {
    products,
    onOpenProduct: setSelectedProduct,
    onToast: showToast,
    onBuy: openBuyModal
  };

  let content;
  if (stage === "splash") {
    content = <SplashScreen />;
  } else if (stage === "onboarding") {
    content = (
      <Onboarding
        step={onboardingStep}
        selectedGoals={selectedGoals}
        onToggleGoal={(goal) =>
          setSelectedGoals((current) =>
            current.includes(goal) ? current.filter((item) => item !== goal) : [...current, goal]
          )
        }
        onNext={() => {
          if (onboardingStep < 2) setOnboardingStep((step) => step + 1);
          else setStage("app");
        }}
      />
    );
  } else if (selectedProduct) {
    content = (
      <ProductDetail
        product={selectedProduct}
        products={products}
        onBack={() => setSelectedProduct(null)}
        onOpenProduct={setSelectedProduct}
        onToast={showToast}
        onBuy={openBuyModal}
      />
    );
  } else {
    content = (
      <AppShell activeTab={activeTab} onTabChange={setActiveTab}>
        {activeTab === "home" && <HomeScreen {...sharedProps} goals={selectedGoals} />}
        {activeTab === "delivery" && <DeliveryScreen onToast={showToast} />}
        {activeTab === "category" && <CategoryScreen {...sharedProps} />}
        {activeTab === "search" && <SearchScreen {...sharedProps} />}
        {activeTab === "my" && (
          <MyPage goals={selectedGoals} onReset={() => setStage("onboarding")} onToast={showToast} />
        )}
      </AppShell>
    );
  }

  return (
    <main className="flex min-h-screen items-center justify-center px-4 py-6">
      <section className="relative h-[844px] w-[390px] overflow-hidden rounded-[32px] border border-[#d6e3d8] bg-white shadow-phone">
        {content}
        {toast && (
          <div className="absolute bottom-24 left-5 right-5 z-50 rounded-lg bg-[#142016] px-4 py-3 text-center text-sm font-semibold text-white shadow-soft">
            {toast}
          </div>
        )}
        {buyProduct && <BuyModal product={buyProduct} onClose={() => setBuyProduct(null)} />}
      </section>
    </main>
  );
}

function SplashScreen() {
  return (
    <div className="flex h-full flex-col items-center justify-center bg-leaf-600 text-white">
      <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15">
        <span className="text-4xl font-black">n</span>
      </div>
      <h1 className="text-2xl font-black tracking-normal">NoBloat</h1>
      <p className="mt-2 text-sm text-white/80">healthy delivery for lighter days</p>
    </div>
  );
}

function Onboarding({ step, selectedGoals, onToggleGoal, onNext }) {
  const pages = [
    {
      title: "Welcome",
      subtitle: "We will recommend light meals that match how you feel today.",
      body: (
        <div className="mt-8 space-y-3">
          {["Stomach-friendly meals", "Bloat care", "Low-sugar snacks"].map((item) => (
            <div key={item} className="rounded-lg border border-leaf-100 bg-leaf-50 px-4 py-4 text-sm font-semibold text-leaf-800">
              {item}
            </div>
          ))}
        </div>
      )
    },
    {
      title: "Types of Symptoms",
      subtitle: "Choose similar symptoms to tune recommendations on home and detail screens.",
      body: (
        <div className="mt-7 grid grid-cols-2 gap-3">
          {symptoms.slice(1).map((goal) => {
            const selected = selectedGoals.includes(goal);
            return (
              <button
                key={goal}
                onClick={() => onToggleGoal(goal)}
                className={`min-h-20 rounded-lg border px-3 text-left text-sm font-bold transition ${
                  selected ? "border-leaf-600 bg-leaf-600 text-white" : "border-leaf-100 bg-white text-leaf-900"
                }`}
              >
                {goal}
                <span className={`mt-2 block text-xs font-medium ${selected ? "text-white/75" : "text-neutral-500"}`}>
                  {goal === "Water retention" ? "After salty meals" : goal === "Post-meal slump" ? "Heavy after lunch" : "Daily care"}
                </span>
              </button>
            );
          })}
        </div>
      )
    },
    {
      title: "Monthly Goal",
      subtitle: "Set this month's goal and start your NoBloat recommendations.",
      body: (
        <div className="mt-8 rounded-lg bg-leaf-50 p-5">
          <div className="mb-5 flex items-center justify-between">
            <span className="text-sm font-bold text-leaf-900">Bloat-free streak</span>
            <span className="rounded-full bg-white px-3 py-1 text-xs font-bold text-leaf-700">81%</span>
          </div>
          <div className="h-3 rounded-full bg-white">
            <div className="h-3 w-[81%] rounded-full bg-leaf-600" />
          </div>
          <p className="mt-5 text-xs leading-5 text-neutral-600">Product picks and delivery reminders are organized around your symptoms and meal times.</p>
        </div>
      )
    }
  ];

  const page = pages[step];
  return (
    <div className="flex h-full flex-col bg-white">
      <div className="bg-leaf-600 px-6 pb-8 pt-12 text-white">
        <div className="mb-10 flex gap-2">
          {pages.map((_, index) => (
            <span key={index} className={`h-1.5 flex-1 rounded-full ${index <= step ? "bg-white" : "bg-white/30"}`} />
          ))}
        </div>
        <h1 className="text-2xl font-black">{page.title}</h1>
        <p className="mt-3 text-sm leading-6 text-white/82">{page.subtitle}</p>
      </div>
      <div className="flex flex-1 flex-col px-6 py-7">
        {page.body}
        <button
          onClick={onNext}
          className="mt-auto flex h-12 items-center justify-center rounded-lg bg-leaf-600 text-sm font-black text-white shadow-soft"
        >
          {step === 2 ? "Start NoBloat" : "Continue"}
        </button>
      </div>
    </div>
  );
}

function AppShell({ children, activeTab, onTabChange }) {
  return (
    <div className="flex h-full flex-col bg-white">
      <TopBar />
      <div className="hide-scrollbar flex-1 overflow-y-auto pb-24">{children}</div>
      <BottomNav activeTab={activeTab} onTabChange={onTabChange} />
    </div>
  );
}

function TopBar() {
  return (
    <header className="flex h-[97px] items-end justify-between bg-leaf-600 px-5 pb-4 text-white">
      <div>
        <p className="text-xs font-semibold text-white/70">NoBloat</p>
        <h1 className="text-xl font-black">Light Today</h1>
      </div>
      <div className="flex gap-3">
        <IconButton label="Notifications">
          <Bell size={19} />
        </IconButton>
        <IconButton label="Cart">
          <ShoppingBag size={19} />
        </IconButton>
      </div>
    </header>
  );
}

function IconButton({ children, label, onClick }) {
  return (
    <button
      aria-label={label}
      title={label}
      onClick={onClick}
      className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/14 text-white transition hover:bg-white/22"
    >
      {children}
    </button>
  );
}

function BottomNav({ activeTab, onTabChange }) {
  const tabs = [
    { id: "home", label: "Home", icon: Home },
    { id: "delivery", label: "Delivery", icon: PackageCheck },
    { id: "category", label: "Category", icon: ListFilter },
    { id: "search", label: "Search", icon: Search },
    { id: "my", label: "My", icon: UserRound }
  ];

  return (
    <nav className="absolute bottom-0 left-0 right-0 border-t border-neutral-100 bg-white px-4 pb-5 pt-3 shadow-[0_-12px_30px_rgba(0,0,0,0.06)]">
      <div className="grid grid-cols-5 gap-1">
        {tabs.map(({ id, label, icon: Icon }) => {
          const selected = activeTab === id;
          return (
            <button
              key={id}
              onClick={() => onTabChange(id)}
              className={`flex h-12 flex-col items-center justify-center gap-1 rounded-lg text-[11px] font-bold ${
                selected ? "bg-leaf-50 text-leaf-700" : "text-neutral-400"
              }`}
            >
              <Icon size={19} strokeWidth={selected ? 2.8 : 2.2} />
              {label}
            </button>
          );
        })}
      </div>
    </nav>
  );
}

function HomeScreen({ products, goals, onOpenProduct, onToast }) {
  const recommended = products.filter((item) => goals.includes(item.symptom)).slice(0, 4);
  return (
    <div className="space-y-8 px-4 py-5">
      <button className="flex h-11 w-full items-center gap-3 rounded-lg bg-neutral-50 px-4 text-sm text-neutral-500">
        <Search size={18} />
        Search for a lighter meal
      </button>

      <section className="overflow-hidden rounded-lg bg-leaf-600 text-white">
        <div
          className="product-image h-48"
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgba(5,105,29,.92), rgba(5,105,29,.08)), url(https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=900&q=80)"
          }}
        >
          <div className="flex h-full flex-col justify-between p-5">
            <span className="w-fit rounded-full bg-white px-3 py-1 text-xs font-black text-leaf-700">Today's pick</span>
            <div>
              <h2 className="text-2xl font-black leading-8">Feel lighter<br />eat smarter</h2>
              <p className="mt-2 text-xs font-medium text-white/80">Personalized by your symptom profile</p>
            </div>
          </div>
        </div>
      </section>

      <ProductRail title="Similar symptom picks" subtitle="Products matched to your selected condition" products={recommended.length ? recommended : products.slice(0, 4)} onOpenProduct={onOpenProduct} onToast={onToast} />
      <ProductRail title="NoBloat Best" subtitle="Popular items customers reorder for lighter days" products={products.slice(3, 8)} onOpenProduct={onOpenProduct} onToast={onToast} />

      <div className="bg-leaf-50 px-4 py-5">
        <p className="text-xs font-bold text-leaf-700">BANNER</p>
        <h3 className="mt-1 text-lg font-black text-leaf-900">20% off your first low-sodium plan</h3>
      </div>
    </div>
  );
}

function ProductRail({ title, subtitle, products, onOpenProduct, onToast }) {
  return (
    <section>
      <div className="mb-4 flex items-end justify-between">
        <div>
          <h2 className="text-lg font-black text-neutral-950">{title}</h2>
          <p className="mt-1 text-xs font-semibold text-neutral-400">{subtitle}</p>
        </div>
        <button className="flex items-center text-xs font-bold text-leaf-700">
          More <ChevronRight size={14} />
        </button>
      </div>
      <div className="hide-scrollbar -mx-4 flex gap-3 overflow-x-auto px-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} onOpenProduct={onOpenProduct} onToast={onToast} compact />
        ))}
      </div>
    </section>
  );
}

function ProductCard({ product, onOpenProduct, onToast, compact = false }) {
  return (
    <article className={`${compact ? "w-[148px] shrink-0" : "w-full"} overflow-hidden`}>
      <button
        onClick={() => onOpenProduct(product)}
        className="block w-full text-left"
      >
        <div
          className={`product-image relative rounded-lg bg-leaf-50 ${compact ? "h-[148px]" : "h-36"}`}
          style={{ backgroundImage: `url(${product.image})` }}
        >
          <span className="absolute left-2 top-2 rounded-md bg-leaf-600 px-2 py-1 text-[10px] font-black text-white">
            {product.badge}
          </span>
        </div>
        <h3 className="mt-3 line-clamp-2 min-h-10 text-sm font-black leading-5 text-neutral-950">{product.name}</h3>
        <p className="mt-1 text-xs font-semibold text-neutral-400">{product.symptom} · {product.categoryLabel}</p>
        <div className="mt-2 flex items-baseline gap-2">
          <span className="text-base font-black text-neutral-950">{formatPrice(product.price)}</span>
          <span className="text-xs font-semibold text-neutral-300 line-through">{formatPrice(product.oldPrice)}</span>
        </div>
      </button>
      <button
        onClick={() => onToast(`${product.name} was added to your cart`)}
        className="mt-3 h-9 w-full rounded-lg border border-leaf-500 text-xs font-black text-leaf-700"
      >
        Add
      </button>
    </article>
  );
}

function SearchScreen({ products, onOpenProduct, onToast }) {
  const [query, setQuery] = useState("");
  const [activeChip, setActiveChip] = useState("Low sugar");

  const results = useMemo(() => {
    const needle = (query || activeChip).toLowerCase();
    return products.filter((product) =>
      [product.name, product.symptom, product.categoryLabel, ...product.tags].join(" ").toLowerCase().includes(needle)
    );
  }, [activeChip, products, query]);

  return (
    <div className="px-4 py-5">
      <label className="flex h-11 items-center gap-3 rounded-lg bg-neutral-50 px-4">
        <Search size={18} className="text-neutral-400" />
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search NoBloat"
          className="w-full bg-transparent text-sm font-semibold outline-none placeholder:text-neutral-400"
        />
      </label>

      <section className="mt-6">
        <h2 className="text-base font-black">Popular keywords</h2>
        <ChipCloud chips={keywordChips.slice(0, 8)} active={activeChip} onSelect={(chip) => { setActiveChip(chip); setQuery(chip); }} />
      </section>

      <section className="mt-7">
        <h2 className="text-base font-black">Similar symptom filter</h2>
        <ChipCloud chips={symptoms} active={activeChip} onSelect={(chip) => { setActiveChip(chip); setQuery(chip === "All" ? "" : chip); }} />
      </section>

      <div className="mt-7 grid grid-cols-2 gap-x-3 gap-y-7">
        {(results.length ? results : products).map((product) => (
          <ProductCard key={product.id} product={product} onOpenProduct={onOpenProduct} onToast={onToast} compact />
        ))}
      </div>
    </div>
  );
}

function ChipCloud({ chips, active, onSelect }) {
  return (
    <div className="mt-3 flex flex-wrap gap-2">
      {chips.map((chip) => {
        const selected = active === chip;
        return (
          <button
            key={chip}
            onClick={() => onSelect(chip)}
            className={`h-9 rounded-lg border px-4 text-xs font-black ${
              selected ? "border-leaf-600 bg-leaf-600 text-white" : "border-leaf-100 bg-white text-leaf-800"
            }`}
          >
            {chip}
          </button>
        );
      })}
    </div>
  );
}

function CategoryScreen({ products, onOpenProduct, onToast }) {
  const [openCategory, setOpenCategory] = useState("meal");

  return (
    <div className="px-4 py-5">
      <h2 className="text-lg font-black">Categories</h2>
      <p className="mt-1 text-sm font-semibold text-neutral-400">Open a category to browse matching products.</p>

      <div className="mt-5 space-y-3">
        {categories.map((category) => {
          const open = openCategory === category.id;
          const categoryProducts = products.filter((product) => product.category === category.id);
          return (
            <section key={category.id} className="overflow-hidden rounded-lg border border-neutral-100">
              <button
                onClick={() => setOpenCategory(open ? "" : category.id)}
                className="flex w-full items-center justify-between bg-white px-4 py-4 text-left"
              >
                <span className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-leaf-50 text-sm font-black text-leaf-700">{category.icon}</span>
                  <span>
                    <span className="block text-sm font-black text-neutral-950">{category.name}</span>
                    <span className="text-xs font-semibold text-neutral-400">{category.detail}</span>
                  </span>
                </span>
                <ChevronDown size={18} className={`text-leaf-700 transition ${open ? "rotate-180" : ""}`} />
              </button>
              {open && (
                <div className="grid grid-cols-2 gap-x-3 gap-y-6 border-t border-neutral-100 bg-neutral-50 px-3 py-4">
                  {(categoryProducts.length ? categoryProducts : products.slice(0, 2)).map((product) => (
                    <ProductCard key={product.id} product={product} onOpenProduct={onOpenProduct} onToast={onToast} compact />
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

function DeliveryScreen({ onToast }) {
  const [reviewText, setReviewText] = useState("");
  const [reviewDone, setReviewDone] = useState(false);

  return (
    <div className="space-y-6 px-4 py-5">
      <section className="rounded-lg bg-leaf-50 p-4">
        <p className="text-xs font-black text-leaf-700">Next delivery</p>
        <h2 className="mt-1 text-xl font-black text-leaf-950">Arrives today at 6:00 PM</h2>
        <div className="mt-5 h-2 rounded-full bg-white">
          <div className="h-2 w-[72%] rounded-full bg-leaf-600" />
        </div>
        <div className="mt-4 grid grid-cols-4 gap-2 text-center text-[11px] font-bold text-neutral-500">
          {["Ordered", "Packed", "On the way", "Arrived"].map((step, index) => (
            <span key={step} className={index < 3 ? "text-leaf-700" : ""}>{step}</span>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-base font-black">Delivery calendar</h2>
        <div className="mt-3 grid grid-cols-7 gap-2">
          {Array.from({ length: 14 }, (_, index) => (
            <button
              key={index}
              className={`flex h-11 flex-col items-center justify-center rounded-lg text-xs font-black ${
                [2, 5, 9].includes(index) ? "bg-leaf-600 text-white" : "bg-neutral-50 text-neutral-500"
              }`}
            >
              <span>{index + 1}</span>
            </button>
          ))}
        </div>
      </section>

      <section className="rounded-lg border border-neutral-100 p-4">
        <h2 className="text-base font-black">Review</h2>
        <p className="mt-1 text-xs font-semibold text-neutral-400">Share a quick note about your delivered item.</p>
        <div className="mt-4 flex gap-1 text-amber-400">
          {Array.from({ length: 5 }, (_, index) => <Star key={index} size={18} fill="currentColor" />)}
        </div>
        <textarea
          value={reviewText}
          onChange={(event) => setReviewText(event.target.value)}
          placeholder="Write about taste, packaging, and how you felt."
          className="mt-4 h-24 w-full resize-none rounded-lg bg-neutral-50 p-3 text-sm font-semibold outline-none placeholder:text-neutral-400"
        />
        <button
          onClick={() => {
            setReviewDone(true);
            onToast("Your review was submitted");
          }}
          className="mt-3 h-11 w-full rounded-lg bg-leaf-600 text-sm font-black text-white"
        >
          Submit review
        </button>
        {reviewDone && <p className="mt-3 text-center text-xs font-black text-leaf-700">Review submitted. Thank you!</p>}
      </section>
    </div>
  );
}

function MyPage({ goals, onReset, onToast }) {
  return (
    <div className="space-y-6 px-4 py-5">
      <section className="flex items-center gap-4">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-leaf-100 text-2xl font-black text-leaf-700">N</div>
        <div>
          <h2 className="text-lg font-black">NoBloat Member</h2>
          <p className="mt-1 text-xs font-semibold text-neutral-400">Managing {goals.join(", ")}</p>
        </div>
      </section>

      <section className="grid grid-cols-2 gap-3">
        <Stat title="Orders this month" value="6" />
        <Stat title="Review points" value="1,240" />
      </section>

      <section className="grid grid-cols-4 gap-2 text-center">
        {["Coupons", "Saved", "Reviews", "Settings"].map((item) => (
          <button key={item} onClick={() => onToast(`${item} is a demo-only menu`)} className="h-16 rounded-lg bg-neutral-50 text-xs font-black text-neutral-600">
            {item}
          </button>
        ))}
      </section>

      <section className="space-y-3">
        <h2 className="text-base font-black">My care menu</h2>
        {["Delivery addresses", "Payment methods", "Retake symptom survey"].map((item) => (
          <button
            key={item}
            onClick={item.includes("survey") ? onReset : () => onToast(`${item} is disabled in this demo`)}
            className="flex h-12 w-full items-center justify-between rounded-lg border border-neutral-100 px-4 text-sm font-bold text-neutral-700"
          >
            {item}
            <ChevronRight size={16} className="text-neutral-300" />
          </button>
        ))}
      </section>
    </div>
  );
}

function Stat({ title, value }) {
  return (
    <div className="rounded-lg bg-leaf-50 p-4">
      <p className="text-xs font-bold text-leaf-700">{title}</p>
      <p className="mt-2 text-2xl font-black text-leaf-950">{value}</p>
    </div>
  );
}

function ProductDetail({ product, products, onBack, onOpenProduct, onToast, onBuy }) {
  const [activeSymptom, setActiveSymptom] = useState(product.symptom);
  const similar = products.filter((item) => item.id !== product.id && (activeSymptom === "All" || item.symptom === activeSymptom));

  return (
    <div className="flex h-full flex-col bg-white">
      <header className="absolute left-0 right-0 top-0 z-20 flex h-20 items-end justify-between px-4 pb-3">
        <IconButton label="Back" onClick={onBack}>
          <ChevronLeft size={21} />
        </IconButton>
        <IconButton label="Cart">
          <ShoppingBag size={19} />
        </IconButton>
      </header>
      <div className="hide-scrollbar flex-1 overflow-y-auto pb-28">
        <div className="product-image h-[330px]" style={{ backgroundImage: `url(${product.image})` }} />
        <section className="px-5 py-5">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-black text-leaf-700">{product.badge} · {product.symptom}</p>
              <h1 className="mt-2 text-2xl font-black leading-8 text-neutral-950">{product.name}</h1>
            </div>
            <div className="flex items-center gap-1 rounded-lg bg-amber-50 px-2 py-1 text-xs font-black text-amber-600">
              <Star size={14} fill="currentColor" /> {product.rating}
            </div>
          </div>
          <div className="mt-4 flex items-baseline gap-2">
            <span className="text-2xl font-black">{formatPrice(product.price)}</span>
            <span className="text-sm font-semibold text-neutral-300 line-through">{formatPrice(product.oldPrice)}</span>
          </div>
          <p className="mt-4 text-sm leading-6 text-neutral-600">{product.description}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {product.tags.map((tag) => (
              <span key={tag} className="rounded-lg bg-leaf-50 px-3 py-2 text-xs font-black text-leaf-700">#{tag}</span>
            ))}
          </div>
        </section>

        <section className="border-t border-neutral-100 px-5 py-5">
          <h2 className="text-base font-black">Similar symptom filter</h2>
          <ChipCloud chips={symptoms} active={activeSymptom} onSelect={setActiveSymptom} />
          <div className="mt-5 grid grid-cols-2 gap-x-3 gap-y-7">
            {(similar.length ? similar : products.slice(0, 4)).slice(0, 4).map((item) => (
              <ProductCard key={item.id} product={item} onOpenProduct={onOpenProduct} onToast={onToast} compact />
            ))}
          </div>
        </section>

        <section className="border-t border-neutral-100 px-5 py-5">
          <h2 className="text-base font-black">Reviews</h2>
          {["Easy to eat in the morning, and I felt less heavy afterward.", "The packaging was clean and easy to store at work."].map((review) => (
            <div key={review} className="mt-3 rounded-lg bg-neutral-50 p-4">
              <div className="mb-2 flex gap-1 text-amber-400">
                {Array.from({ length: 5 }, (_, index) => <Star key={index} size={13} fill="currentColor" />)}
              </div>
              <p className="text-xs font-semibold leading-5 text-neutral-600">{review}</p>
            </div>
          ))}
        </section>
      </div>

      <div className="absolute bottom-0 left-0 right-0 grid grid-cols-[1fr_1.35fr] gap-3 border-t border-neutral-100 bg-white px-5 pb-5 pt-3">
        <button
          onClick={() => onToast(`${product.name} was added to your cart`)}
          className="h-12 rounded-lg border border-leaf-600 text-sm font-black text-leaf-700"
        >
          Add cart
        </button>
        <button
          onClick={() => onBuy(product)}
          className="h-12 rounded-lg bg-leaf-600 text-sm font-black text-white"
        >
          Buy now
        </button>
      </div>
    </div>
  );
}

function BuyModal({ product, onClose }) {
  return (
    <div className="absolute inset-0 z-40 flex items-end bg-black/35">
      <section className="w-full rounded-t-[24px] bg-white px-5 pb-6 pt-3 shadow-phone">
        <div className="mx-auto mb-5 h-1 w-10 rounded-full bg-neutral-200" />
        <div className="flex gap-4">
          <div className="product-image h-16 w-16 rounded-lg" style={{ backgroundImage: `url(${product.image})` }} />
          <div className="min-w-0 flex-1">
            <h2 className="text-sm font-black leading-5">{product.name}</h2>
            <p className="mt-1 text-xs font-semibold text-neutral-400">Qty 1 · Delivery available any day</p>
            <p className="mt-2 text-lg font-black">{formatPrice(product.price)}</p>
          </div>
        </div>
        <div className="mt-5 rounded-lg bg-leaf-50 p-4">
          <p className="text-xs font-bold text-leaf-700">Demo checkout</p>
          <p className="mt-1 text-sm font-semibold text-leaf-950">Real payment, login, and backend services are not implemented.</p>
        </div>
        <div className="mt-5 grid grid-cols-2 gap-3">
          <button onClick={onClose} className="h-12 rounded-lg border border-neutral-200 text-sm font-black text-neutral-600">
            Cancel
          </button>
          <button onClick={onClose} className="h-12 rounded-lg bg-leaf-600 text-sm font-black text-white">
            Confirm
          </button>
        </div>
      </section>
    </div>
  );
}

export default App;
