import Api from "./components/BuildApi/Api";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Solutions from "./components/Solutions/Solutions";
import WhatWeDo from "./components/WhatWeDo/WhatWeDo";

export default function Home() {
  return (
    <>
      <Hero />
      <WhatWeDo />
      <Api />
      <Solutions />
      <Footer />
    </>
  );
}
