import "./App.css";
import bar from "./assets/bar.jpg";
import logo from "./assets/logo.png";
import hero from "./assets/hero.png";
import icon from "./assets/icon.png";
import img from "./assets/img.png";
import p1 from "./assets/p1.png";
import p2 from "./assets/p2.webp";
import p3 from "./assets/p3.jpg";
import p4 from "./assets/p4.jpg";
import p5 from "./assets/p5.jpeg";
import p6 from "./assets/p6.webp";
import p7 from "./assets/p7.jpeg";
import p8 from "./assets/p8.png";
import p9 from "./assets/p9.png";
import p10 from "./assets/p10.png";
import p11 from "./assets/p11.webp";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";

// Products array
const products = [
  {
    img: p1,
    name: "MOISTURIZING SERUM",
    desc: "Infused with carefully selected organic ingredients, this moisturizing serum deeply hydrates and nourishes your skin. It helps restore balance, leaving your skin soft, radiant, and naturally healthy. Perfect for daily use, it supports your skin’s natural strength while enhancing its glow and smoothness.",
  },
  {
    img: p2,
    name: "HYDRATING MOISTURIZER",
    desc: "A lightweight moisturizer enriched with organic aloe, hyaluronic acid, and green tea extract. Instantly hydrates, soothes, and protects your skin for a soft, radiant glow.",
                    
                  
  },
  {
    img: p3,
    name: "EYE SERUM",
    desc: "A potent eye serum with hyaluronic acid, collagen, and botanical extracts  A potent eye serum with hyaluronic acid, collagen, and  botanical extracts. Lifts, firms, and smooths delicate under-eye skin, reducing fine lines and puffiness for a refreshed, youthful look.",
  },
  {
    img: p4,
    name: "BLUEBERRY MIRACLE CLOUD-CLEAN GLOW",
    desc: "A gentle foam that lifts away dirts, oil and makeup .",
  },
  {
    img: p5,
    name: "FIRMING EYE CREAM",
    desc: "A rich yet gentle eye cream formulated with peptides, hyaluronic acid, and botanical extracts A rich yet gentle eye cream formulated with peptides, helps firm and smooth the delicate eye area, improving elasticity and reducing the appearance of fine lines.",
                    
  },
  {
    img: p6,
    name: "ANTI-AGING GLOWING SERUM",
    desc: "A lightweight serum enriched with vitamin C, rice extract, and botanical oils. Enhances natural radiance, evens skin tone, and leaves your skin glowing, smooth, and refreshed.",
  },
  {
    img: p7,
    name: "AGE DEFYING CREAM",
    desc: " A powerful age-defying serum formulated with retinol and botanical peptides. This concentrated blend helps improve skin texture, reduce the appearance of fine lines and wrinkles, and boost firmness. With consistent use, skin looks smoother, more resilient, and visibly youthful.",
  },
  {
    img: p8,
    name: "CONCENTRATED SERUM",
    desc: "A deeply nourishing concentrated serum infused with hyaluronic acid, vitamin C, and plant extracts. Designed to intensely hydrate, brighten, and restore radiance. Lightweight yet potent, it supports healthy, glowing skin with every drop.",
  },
  {
    img: p9,
    name: "ADENA SKINCARE COLLECTION",
    desc: "A gentle skincare collection inspired by Japanese sakura extracts, designed to cleanse, hydrate, and nourish your skin. Each product works in harmony to restore moisture, enhance natural radiance, and leave your skin soft, smooth, and beautifully balanced.",
  },
];

function App() {
  const [showMore, setShowMore] = useState(false);
  const [open, setOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(products);

  const tickerRef = useRef(null);

  useEffect(() => {
    const el = tickerRef.current;
    gsap.fromTo(
      el,
      { x: "70%" },
      { x: "-70%", duration: 10, repeat: -1, ease: "linear" },
    );
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 },
    );

    const aboutSection = document.querySelector("#about");
    if (aboutSection) {
      observer.observe(aboutSection);
    }

    return () => {
      if (aboutSection) {
        observer.unobserve(aboutSection);
      }
    };
  }, []);

  // Filter products based on search query
  useEffect(() => {
    if (!searchQuery.length) {
      setFilteredProducts(products);
      return;
    }
    const filteredProds = products.filter((product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase()),
    );
    setFilteredProducts(filteredProds);
  }, [searchQuery, products]);

  return (
    <>
      {/* /* -------------NAVBR------------------ */}

      <navbar className="bg-white w-full fixed top-0 left-0 right-0 w-full z-50">
        <div
          className="top-bar bg-gray-200 text-[#666666] text-md py-4 px-4 text-center font-[awsome] overflow-hidden"
          ref={tickerRef}
        >
          <p className="overflow-hidden">
            “Limited-time trial set now on sale”
          </p>
        </div>
        <nav className="bg-white shadow">
          <div className="flex justify-between items-center p-4">
            <h1 className="text-xl font-bold ml-10">
              <img src={logo} alt="Logo" />
            </h1>

            {/* Button for small screen */}
            <button
              className="md:hidden text-2xl text-[#9FCBF4]"
              onClick={() => setOpen(!open)}
            >
              ☰
            </button>

            {/* Desktop menu */}
            <ul className="hidden md:flex gap-6 mr-10 font-[Noto Sans] items-center">
              <li className="home mr-5 hover:text-[#9FCBF4]">
                <a href="#home">Home</a>
              </li>
              <li className="about mr-5 hover:text-[#9FCBF4]">
                <a href="#about">About</a>
              </li>
              <li className="product mr-5 hover:text-[#9FCBF4]">
                <a href="#products">Products</a>
              </li>
              <li className="contact mr-5 hover:text-[#9FCBF4]">
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>

          {/* Mobile menu */}
          {open && (
            <ul className="md:hidden p-4 bg-gray-100 space-y-4">
              <li className="home text-black hover:text-[#9FCBF4]" id="home">
                Home
              </li>
              <li className="about text-black hover:text-[#9FCBF4]" id="about">
                About
              </li>
              <li
                className="products text-black hover:text-[#9FCBF4]"
                id="products"
              >
                Products
              </li>
              <li className="contact hover:text-[#9FCBF4]" id="contact">
                Contact
              </li>
            </ul>
          )}
        </nav>
      </navbar>
      {/* -------------------------hero section------------------------- */}

      <section
        className="text-gray-600 body-font bg-gradient-to-b from-[#9FCBF4] to-[#EAD8FC] min-h-[400px] sm:min-h-[500px] md:min-h-[600px] mt-16 sm:mt-20 md:mt-[122px] "
        id="home"
      >
        <div className="w-full h-full flex md:flex-row flex-col-reverse items-center justify-between">
          {/* Text Content */}
          <div className="w-full md:w-1/2 lg:flex-grow lg:pl-12 xl:pl-24 md:pr-8 flex flex-col md:items-start items-center text-center md:text-left px-6 sm:px-8 md:px-12 py-8 sm:py-12 md:py-16 lg:py-20">
            {/* Icon + Label */}
            <p className="font-[Noto Sans] text-white mb-3 sm:mb-4 flex items-center justify-center md:justify-start text-xs sm:text-sm md:text-base">
              <img
                src={icon}
                alt="icon-new"
                className="w-8 h-6 sm:w-10 sm:h-7 md:w-14 md:h-9 mr-2 sm:mr-3 md:mr-5"
              />
              NIGHT REPAIR SERUM
            </p>

            {/* Main Heading */}
            <h1 className="holistic text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white font-[googles] leading-tight mb-3 sm:mb-4">
              Holistic
              <br className="hidden sm:inline-block" />
              <span className="sm:hidden"> </span>& Beauty
            </h1>

            {/* Description */}
            <p className="leading-relaxed font-[Noto Sans] text-[#737373] mt-2 sm:mt-3 md:mt-5 text-sm sm:text-base md:text-lg lg:text-xl max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl animate-reveal">
              "Unleashing a deeper, more powerful beauty
              <br className="hidden sm:inline-block" />
              <span className="sm:hidden"> </span>naturally perfected from the
              heart within to the body beyond."
            </p>
          </div>

          {/* Image */}
          <div className="w-full md:w-1/2 h-[250px] xs:h-[300px] sm:h-[350px] md:h-[450px] lg:h-[550px] xl:h-[600px] overflow-hidden">
            <img
              className="object-cover object-center w-full h-full"
              alt="hero"
              src={hero}
            />
          </div>
        </div>
      </section>

      {/* --------------------about section----------------------- */}

      <section
        className="text-gray-900 bg-[#F4FAFD] body-font font-[Noto Sans]"
        id="about"
      >
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class=" object-image lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              class=" about-cover object-cover object-center rounded"
              alt="about"
              src={img}
            />
          </div>
          <div className=" about-contentlg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="font-[googles] text-[#666666] sm:text-4xl text-3xl mb-4 font-medium ">
              We help restore your skin’s natural strength with products
              centered
              <br className="hidden lg:inline-block" />
              around organic ingredients.
            </h1>
            <p class="mb-8 leading-relaxed text-[#666666]">
              Inspired by nature and simplicity, our products blend organic
              ingredients with modern skincare science to nourish, protect, and
              enhance your skin’s natural beauty. Each formula is carefully
              designed to be gentle, effective, and in harmony with your skin,
              helping you achieve a healthy, balanced, and timeless glow.
            </p>
            {showMore && (
              <div className="mb-8 leading-relaxed text-[#666666] transition-all duration-500 ease-in-out">
                <p className="mb-4">
                  Our commitment goes beyond beautiful skin. We prioritize
                  sustainability, using eco-friendly packaging and ethically
                  sourced ingredients. Every product is cruelty-free and
                  formulated without harsh chemicals.
                </p>
                <p>
                  Experience the perfect balance of luxury and nature, where
                  science meets simplicity to reveal your skin's true radiance.
                </p>
              </div>
            )}
            <div class="flex justify-center">
              <button
                onClick={() => setShowMore(!showMore)}
                class="ml-4 inline-flex text-[#9FCBF4] bg-white border-0 py-2 px-6 focus:outline-none hover:bg-[#9B9DBC] hover:text-white rounded-[19.5px] text-lg transition-all duration-300 hover:animate-bounce"
              >
                {showMore ? "Show Less" : "View More"}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* -----------------------product section----------------------- */}

      <section
        className="body-font text-[#666666] bg-[#F4FAFD] font-[Noto Sans]"
        id="products"
      >
        <div className="container px-10 py-25 mx-auto">
          <div className="relative flex justify-center mb-6 animate-slide-in">
            <div className="relative">
              <input
                type="text"
                placeholder="Search Products"
                className="w-full max-w-sm pl-12 pr-4 py-3 border-3 border-[#8F89A0]/30 rounded-full text-gray-700 placeholder-gray-500 focus:border-[#9FCBF4] focus:ring-2 focus:ring-[#9FCBF4]/30 transition-all duration-300 shadow-sm hover:shadow-md focus:shadow-lg focus:scale-105 search-glow"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <img
                src={bar}
                alt="search"
                className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 opacity-70 transition-opacity duration-300 hover:opacity-100"
              />
            </div>
          </div>
          <div className="flex flex-wrap -m-4">
            {filteredProducts.map((product, index) => (
              <div key={index} className="p-4 lg:w-1/3 w-full">
                <div className="relative h-96 rounded-lg overflow-hidden cursor-pointer group">
                  <img
                    src={product.img}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 group-hover:-translate-y-2"
                  />
                  <div className="absolute inset-0 bg-[#EDEFED]/50 flex flex-col justify-center items-center text-center text-[#666666] px-4 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <h2 className="tracking-widest text-sm font-medium mb-1 text-[#666666]">
                      {product.name}
                    </h2>
                    <p className="text-sm leading-relaxed">{product.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      

     

      
      
                
     

      

     

     
      
                  
      <section class="text-[#666666] body-font bg-[#F4FAFD] font-[Noto Sans]">
        <div class="container mx-auto flex px-6 py-28 md:flex-row flex-col items-center bg-white rounded-3xl shadow-lg">
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-12 md:mb-0">
            <img
              class="object-cover object-center rounded-2xl shadow-lg"
              alt="hero"
              src={p10}
            />
          </div>

          <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-6 font-light tracking-wide text-gray-900 leading-snug">
              Try it first with a 7-day trial sample!
            </h1>

            <p class="mb-10 leading-relaxed text-gray-600 max-w-xl">
              Trial Samples are free on orders over{" "}
              <span class="hidden lg:inline-block text-4xl font-semibold text-gray-800">
                $500
              </span>
            </p>

            <div class="flex justify-center gap-4">
              <button class="ml-4 inline-flex text-[#9FCBF4] bg-white border-2  border-[#9FCBF4] py-2 px-6 focus:outline-none hover:bg-[#9B9DBC] hover:text-white rounded-[19.5px] text-lg transition-all duration-300 hover:animate-bounce">
                Explore Free Trial
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* --------------------------contact section------------------ */}

      <section
        className="text-gray-600 body-font relative font-[Noto Sans] min-h-screen"
        id="contact"
      >
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 bg-[#F4FAFD]">
          <img
            src={p11}
            alt="product-11"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#9FCBF4]/20 to-[#EAD8FC]/20"></div>
        </div>

        <div className="container px-5 py-24 mx-auto flex items-center justify-center min-h-screen">
          {/* Contact Form */}
          <div className="lg:w-1/3 md:w-1/2 w-full bg-white/95 backdrop-blur-sm rounded-2xl p-8 md:p-10 flex flex-col relative z-10 shadow-2xl">
            {/* Header */}
            <h2 className="text-[#666666] text-3xl md:text-4xl mb-2 font-medium font-[googles]">
              Contact Us
            </h2>
            <p className="leading-relaxed mb-8 text-[#666666] text-sm md:text-base">
              We'd love to hear from you. Share your thoughts with us!
            </p>

            {/* Name Input */}
            <div className="relative mb-5">
              <label
                htmlFor="name"
                className="leading-7 text-sm text-[#666666] font-medium"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="John Doe"
                className="w-full bg-white rounded-xl border-2 border-gray-200 focus:border-[#9FCBF4] focus:ring-2 focus:ring-[#9FCBF4]/20 text-base outline-none text-gray-700 py-3 px-4 leading-8 transition-all duration-300 ease-in-out hover:border-[#9FCBF4]/50"
              />
            </div>

            {/* Email Input */}
            <div className="relative mb-5">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-[#666666] font-medium"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="john@example.com"
                className="w-full bg-white rounded-xl border-2 border-gray-200 focus:border-[#9FCBF4] focus:ring-2 focus:ring-[#9FCBF4]/20 text-base outline-none text-gray-700 py-3 px-4 leading-8 transition-all duration-300 ease-in-out hover:border-[#9FCBF4]/50"
              />
            </div>

            {/* Message Textarea */}
            <div className="relative mb-6">
              <label
                htmlFor="message"
                className="leading-7 text-sm text-[#666666] font-medium"
              >
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Tell us what's on your mind..."
                className="w-full bg-white rounded-xl border-2 border-gray-200 focus:border-[#9FCBF4] focus:ring-2 focus:ring-[#9FCBF4]/20 h-32 text-base outline-none text-gray-700 py-3 px-4 resize-none leading-6 transition-all duration-300 ease-in-out hover:border-[#9FCBF4]/50"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button className="w-full text-white bg-gradient-to-r from-[#9FCBF4] to-[#9B9DBC] border-0 py-3 px-8 focus:outline-none hover:shadow-xl hover:scale-[1.02] rounded-full text-lg font-medium transition-all duration-300">
              Send Message
            </button>

            <p className="text-xs text-gray-500 mt-5 text-center">
              🔒 Your information is safe with us. We respect your privacy.
            </p>
          </div>
        </div>
      </section>

      {/* ----------------------footer section------------------- */}
      <footer class="text-gray-600 body-font bg-[#F4FAFD]">
        <div class="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col border-t-2 border-[#8F89A0]">
          <div class="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <img src={logo} alt="" class="mb-4" />
            <p class="text-sm text-gray-500 leading-relaxed">
              Inspired by nature and simplicity, creating skincare that restores
              balance and beauty.
            </p>
          </div>

          <div className="  flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10  md:text-left text-center">
            <div class="lg:w-1/2 md:w-1/2 w-full px-4">
              <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                PRODUCTS
              </h2>
              <nav class="list-none mb-10 space-y-2">
                <li>
                  <a class="text-gray-600 hover:text-gray-900">
                    Moisturizing Serum
                  </a>
                </li>
                <li>
                  <a class="text-gray-600 hover:text-gray-900">
                    Hydrating Moisturizer
                  </a>
                </li>
                <li>
                  <a class="text-gray-600 hover:text-gray-900">Eye Serum</a>
                </li>
                <li>
                  <a class="text-gray-600 hover:text-gray-900">
                    Blueberry Miracle
                  </a>
                </li>
                <li>
                  <a class="text-gray-600 hover:text-gray-900">Glowing Serum</a>
                </li>
                <li>
                  <a class="text-gray-600 hover:text-gray-900">
                    Firming Eye Cream
                  </a>
                </li>
                <li>
                  <a class="text-gray-600 hover:text-gray-900">
                    Skincare Collection
                  </a>
                </li>
                <li>
                  <a class="text-gray-600 hover:text-gray-900">
                    Age Defying Cream
                  </a>
                </li>
                <li>
                  <a class="text-gray-600 hover:text-gray-900">
                    Concentrated Serum
                  </a>
                </li>
              </nav>
            </div>

            <div class="lg:w-1/2 md:w-1/2 w-full px-4">
              <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                NAVIGATION
              </h2>
              <nav class="list-none mb-10 space-y-2">
                <li>
                  <a href="#home" class="text-gray-600 hover:text-[#9FCBF4]">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" class="text-gray-600 hover:text-[#9FCBF4]">
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#products"
                    class="text-gray-600 hover:text-[#9FCBF4]"
                  >
                    Products
                  </a>
                </li>
                <li>
                  <a href="#contact" class="text-gray-600 hover:text-[#9FCBF4]">
                    Contact
                  </a>
                </li>
              </nav>
            </div>
          </div>
        </div>

        <div class=" text-gray-600 body-font bg-[#F4FAFD]">
          <div class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row items-center border-t-2 border-[#8F89A0]">
            <p class="text-gray-500 text-sm text-center sm:text-left">
              © 2025 Adeña Japanese Skincare. All rights reserved.
            </p>

            <span class="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start"></span>
          </div>
        </div>
      </footer>
    </>
  );
}
export default App;
