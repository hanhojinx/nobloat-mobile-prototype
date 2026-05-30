import React, { useEffect, useRef, useState } from "react";

const figma = (name) => `/figma/${name}`;

const screens = {
  splash: { src: figma("splash.png"), width: 390, nav: false },
  onboarding1: { src: figma("onboarding-1.png"), width: 390, nav: false },
  onboarding2: { src: figma("onboarding-2.png"), width: 390, nav: false },
  onboarding3: { src: figma("onboarding-3.png"), width: 390, nav: false },
  onboarding4: { src: figma("onboarding-4.png"), width: 390, nav: false },
  home: { src: figma("home-products.png"), width: 390, nav: true },
  product: { src: figma("product-detail.png"), width: 390, nav: false },
  search: { src: figma("search.png"), width: 388, nav: true },
  searchCustom1: { src: figma("search-custom-1.png"), width: 388, nav: true },
  searchCustom2: { src: figma("search-custom-2.png"), width: 388, nav: true },
  searchCustom3: { src: figma("search-custom-3.png"), width: 388, nav: true },
  searchCustom4: { src: figma("search-custom-4.png"), width: 388, nav: true },
  category: { src: figma("category-main.png"), width: 388, nav: true },
  categoryDetail: { src: figma("category-detail.png"), width: 388, nav: true },
  categoryExpanded: { src: figma("category-expanded.png"), width: 388, nav: true },
  delivery: { src: figma("delivery.png"), width: 388, nav: true },
  my: { src: figma("my-page.png"), width: 388, nav: true },
  myDetail: { src: figma("my-detail.png"), width: 388, nav: true },
  review1: { src: figma("review-1.png"), width: 390, nav: false },
  review2: { src: figma("review-2.png"), width: 390, nav: false },
  review3: { src: figma("review-3.png"), width: 390, nav: false },
  review4: { src: figma("review-4.png"), width: 390, nav: false },
  review5: { src: figma("review-5.png"), width: 390, nav: false }
};

const tabs = [
  { id: "home", label: "Home", x: 21, y: 13, w: 43, h: 54 },
  { id: "delivery", label: "Delivery", x: 95, y: 13, w: 47, h: 54 },
  { id: "category", label: "Categories", x: 166, y: 13, w: 61, h: 54 },
  { id: "search", label: "Search", x: 246, y: 13, w: 48, h: 54 },
  { id: "my", label: "MyPage", x: 318, y: 13, w: 52, h: 54 }
];

function App() {
  const [screen, setScreen] = useState("splash");
  const [overlay, setOverlay] = useState(null);
  const [toast, setToast] = useState("");
  const scrollRef = useRef(null);

  useEffect(() => {
    const timer = window.setTimeout(() => setScreen("onboarding1"), 1200);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = 0;
    window.scrollTo(0, 0);
    setOverlay(null);
  }, [screen]);

  function go(nextScreen) {
    setScreen(nextScreen);
  }

  function addToCart() {
    setToast("Added to cart");
    window.setTimeout(() => setToast(""), 1600);
  }

  const current = screens[screen];

  return (
    <main className="flex min-h-screen items-start justify-center bg-[#f2f2f2] px-4 py-6">
      <section className="relative h-[844px] w-[390px] overflow-hidden bg-white shadow-phone">
        <div ref={scrollRef} className="hide-scrollbar h-full overflow-y-auto">
          <FigmaScreen screen={current} />
        </div>

        <Hotspots screen={screen} go={go} addToCart={addToCart} setOverlay={setOverlay} />

        {current.nav && <BottomNav go={go} />}

        {toast && <Toast>{toast}</Toast>}
        {overlay === "cart" && <ImageSheet src={figma("cart-overlay.png")} height={377} onClose={() => setOverlay(null)} />}
        {overlay === "buy" && <ImageSheet src={figma("buy-modal.png")} height={657} onClose={() => setOverlay(null)} />}
        {overlay === "date" && <ImageSheet src={figma("date-picker.png")} height={660} width={398} onClose={() => setOverlay(null)} />}
      </section>
    </main>
  );
}

function FigmaScreen({ screen }) {
  return (
    <img
      src={screen.src}
      alt=""
      draggable="false"
      className="mx-auto block select-none"
      style={{ width: `${screen.width}px` }}
    />
  );
}

function Hotspots({ screen, go, addToCart, setOverlay }) {
  const productHotspots = [
    { x: 16, y: 142, w: 158, h: 118 },
    { x: 215, y: 142, w: 158, h: 118 },
    { x: 16, y: 347, w: 158, h: 118 },
    { x: 215, y: 347, w: 158, h: 118 }
  ];

  const cartHotspots = [
    { x: 33, y: 264, w: 121, h: 29 },
    { x: 232, y: 264, w: 121, h: 29 },
    { x: 33, y: 469, w: 121, h: 29 },
    { x: 232, y: 469, w: 121, h: 29 }
  ];

  return (
    <>
      {screen === "onboarding1" && <Hotspot label="Custom Settings" x={74} y={697} w={244} h={49} onClick={() => go("onboarding2")} />}
      {screen === "onboarding2" && (
        <>
          <Hotspot label="Select intolerance" x={74} y={389} w={242} h={210} onClick={() => undefined} />
          <Hotspot label="Next onboarding step" x={75} y={697} w={240} h={49} onClick={() => go("onboarding3")} />
        </>
      )}
      {screen === "onboarding3" && (
        <>
          <Hotspot label="Select severity" x={83} y={390} w={224} h={210} onClick={() => undefined} />
          <Hotspot label="Next onboarding step" x={75} y={697} w={240} h={49} onClick={() => go("onboarding4")} />
        </>
      )}
      {screen === "onboarding4" && (
        <>
          <Hotspot label="Select main cause" x={60} y={374} w={270} h={231} onClick={() => undefined} />
          <Hotspot label="Complete onboarding" x={75} y={697} w={240} h={49} onClick={() => go("home")} />
        </>
      )}

      {screen === "home" && (
        <>
          {productHotspots.map((spot, index) => (
            <Hotspot key={`product-${index}`} label="Open product detail" {...spot} onClick={() => go("product")} />
          ))}
          {cartHotspots.map((spot, index) => (
            <Hotspot key={`cart-${index}`} label="Add to cart" {...spot} onClick={addToCart} />
          ))}
        </>
      )}

      {screen === "product" && (
        <>
          <Hotspot label="Back to home" x={0} y={18} w={44} h={54} onClick={() => go("home")} />
          <Hotspot label="Cart" x={348} y={20} w={42} h={54} onClick={() => setOverlay("cart")} />
          <Hotspot label="Add to cart" x={0} y={742} w={195} h={102} onClick={addToCart} />
          <Hotspot label="Buy now" x={195} y={742} w={195} h={102} onClick={() => setOverlay("buy")} />
        </>
      )}

      {screen === "search" && (
        <>
          <Hotspot label="Search keyword chip" x={15} y={198} w={294} h={80} onClick={() => go("searchCustom1")} />
          <Hotspot label="Similar symptom filter" x={15} y={344} w={354} h={255} onClick={() => go("searchCustom2")} />
        </>
      )}
      {screen === "searchCustom1" && <Hotspot label="Next filter" x={15} y={344} w={354} h={255} onClick={() => go("searchCustom2")} />}
      {screen === "searchCustom2" && <Hotspot label="Next filter" x={15} y={344} w={354} h={255} onClick={() => go("searchCustom3")} />}
      {screen === "searchCustom3" && <Hotspot label="Next filter" x={15} y={344} w={354} h={255} onClick={() => go("searchCustom4")} />}
      {screen === "searchCustom4" && <Hotspot label="Open matched product" x={18} y={630} w={350} h={104} onClick={() => go("product")} />}

      {screen === "category" && <Hotspot label="Open category accordion" x={0} y={103} w={390} h={425} onClick={() => go("categoryDetail")} />}
      {screen === "categoryDetail" && <Hotspot label="Expand category" x={0} y={103} w={390} h={425} onClick={() => go("categoryExpanded")} />}
      {screen === "categoryExpanded" && <Hotspot label="Open category product" x={24} y={555} w={342} h={242} onClick={() => go("product")} />}

      {screen === "delivery" && (
        <>
          <Hotspot label="Open date picker" x={16} y={135} w={355} h={80} onClick={() => setOverlay("date")} />
          <Hotspot label="Write review" x={14} y={396} w={355} h={120} onClick={() => go("review1")} />
        </>
      )}

      {screen === "my" && (
        <>
          <Hotspot label="Open my page detail" x={0} y={105} w={390} h={295} onClick={() => go("myDetail")} />
          <Hotspot label="Restart onboarding" x={10} y={1365} w={360} h={80} onClick={() => go("onboarding1")} />
        </>
      )}
      {screen === "myDetail" && <Hotspot label="Back to my page" x={0} y={20} w={44} h={54} onClick={() => go("my")} />}

      {screen === "review1" && <Hotspot label="Start review" x={26} y={731} w={338} h={55} onClick={() => go("review2")} />}
      {screen === "review2" && <Hotspot label="Select rating" x={58} y={236} w={276} h={210} onClick={() => go("review3")} />}
      {screen === "review3" && <Hotspot label="Continue review" x={26} y={731} w={338} h={55} onClick={() => go("review4")} />}
      {screen === "review4" && <Hotspot label="Submit review" x={26} y={731} w={338} h={55} onClick={() => go("review5")} />}
      {screen === "review5" && <Hotspot label="Finish review" x={26} y={731} w={338} h={55} onClick={() => go("home")} />}
    </>
  );
}

function BottomNav({ go }) {
  return (
    <div className="pointer-events-none absolute bottom-0 left-0 z-20 flex h-[94px] w-full justify-center bg-white">
      <img src={figma("bottom-nav.png")} alt="" draggable="false" className="h-[94px] w-[388px] select-none" />
      {tabs.map((tab) => (
        <Hotspot
          key={tab.id}
          label={tab.label}
          x={tab.x}
          y={tab.y}
          w={tab.w}
          h={tab.h}
          onClick={() => go(tab.id)}
        />
      ))}
    </div>
  );
}

function ImageSheet({ src, height, width = 390, onClose }) {
  return (
    <div className="absolute inset-0 z-40 bg-black/20" onClick={onClose}>
      <img
        src={src}
        alt=""
        draggable="false"
        onClick={(event) => event.stopPropagation()}
        className="absolute bottom-0 left-1/2 block max-w-none -translate-x-1/2 select-none"
        style={{ width: `${width}px`, height: `${height}px` }}
      />
    </div>
  );
}

function Toast({ children }) {
  return (
    <div className="absolute bottom-[112px] left-7 right-7 z-50 rounded-full bg-[#141414] px-4 py-3 text-center text-sm font-semibold text-white shadow-soft">
      {children}
    </div>
  );
}

function Hotspot({ label, x, y, w, h, onClick }) {
  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      onClick={onClick}
      className="pointer-events-auto absolute z-30 cursor-pointer bg-transparent p-0 focus:outline-none"
      style={{ left: `${x}px`, top: `${y}px`, width: `${w}px`, height: `${h}px` }}
    />
  );
}

export default App;
