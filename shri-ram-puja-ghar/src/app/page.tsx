"use client";

import { useState } from "react";
import Image from "next/image";
import { Phone, MapPin, Clock, Star, ShoppingBag, Heart, Shield, IndianRupee, Users, Menu, X } from "lucide-react";

// Navigation links
const navLinks = [
  { name: "Home", nameHi: "होम", href: "#" },
  { name: "About", nameHi: "परिचय", href: "#about" },
  { name: "Products", nameHi: "उत्पाद", href: "#products" },
  { name: "Pandit Services", nameHi: "पंडित सेवा", href: "#pandit-ji" },
  { name: "Reviews", nameHi: "समीक्षाएं", href: "#reviews" },
  { name: "Why Us", nameHi: "क्यों चुनें", href: "#why-us" },
  { name: "Contact", nameHi: "संपर्क", href: "#contact" },
];

const reviews = [
  {
    name: "Niraj Mallick",
    rating: 5,
    date: "6 months ago",
    comment: "Good service, according to Hindu mythology, they provided us all the items for worship, yagya, home environment at reasonable rates. Thank you.",
    guide: "7 reviews • 4 photos"
  },
  {
    name: "NISHANT PARMAR",
    rating: 5,
    date: "a month ago",
    comment: "All Pooja item available",
    guide: "Local Guide • 37 reviews • 113 photos"
  },
  {
    name: "DENTAL AWARENESS By Dr. Satendra...",
    rating: 5,
    date: "6 months ago",
    comment: "Very good shop for mandir material...",
    guide: "Local Guide • 18 reviews • 4 photos"
  },
  {
    name: "Anjali Sharma",
    rating: 5,
    date: "6 months ago",
    comment: "Best experience ✨ 💯 ...",
    guide: "1 review"
  },
  {
    name: "Varsha Singh",
    rating: 5,
    date: "5 months ago",
    comment: "Nice collection",
    guide: "Local Guide • 14 reviews • 4 photos"
  },
  {
    name: "Rohit Nayak",
    rating: 5,
    date: "6 months ago",
    comment: "All the puja items are good and available at the best price",
    guide: "2 reviews"
  }
];

// Product/Service data with SEO-optimized descriptions
const products = [
  {
    title: "पूजा सामग्री",
    titleEn: "Pooja Samagri",
    description: "Complete pooja samagri including kumkum, roli, chandan, akshat, kalawa and all essential puja items for daily worship. Best quality at affordable prices in Greater Noida West.",
    image: "/Hawan samagri.png",
    imageAlt: "Complete pooja samagri and puja items at Shri Ram Puja Ghar Greater Noida",
  },
  {
    title: "दीया, धूप, अगरबत्ती",
    titleEn: "Diya, Dhoop, Agarbatti",
    description: "Premium quality brass diyas, fragrant dhoop sticks, and incense agarbatti in various divine fragrances. Create a sacred atmosphere for your prayers.",
    image: "/products/diya-dhoop.png",
    imageAlt: "Brass diya dhoop agarbatti incense sticks shop Greater Noida West",
  },
  {
    title: "हवन सामग्री",
    titleEn: "Havan Samagri",
    description: "Authentic havan samagri with pure ghee, sacred herbs, and traditional ingredients for havans, yagnas, and all Vedic rituals. Available in Techzone 4.",
    image: "/products/havan-samagri.png",
    imageAlt: "Havan samagri for yagna and vedic rituals Greater Noida",
  },
  {
    title: "पूजा थाली",
    titleEn: "Pooja Thali",
    description: "Beautifully crafted pooja thalis in brass, steel, copper and German silver for all occasions - Navratri, Diwali, Karwa Chauth and daily worship.",
    image: "/products/pooja-thali.png",
    imageAlt: "Brass pooja thali items for Navratri Diwali Greater Noida West",
  },
  {
    title: "भगवान मूर्ति",
    titleEn: "Bhagwan Murti",
    description: "Wide collection of deity idols and murti - Ganesh ji, Lakshmi ji, Shiv ji, Ram ji, Krishna ji in marble, brass and various sizes for home temple.",
    image: "/products/idols.png",
    imageAlt: "Bhagwan murti deity idols Ganesh Lakshmi shop Greater Noida West",
  },
  {
    title: "व्रत & विशेष पूजा सामग्री",
    titleEn: "Vrat & Special Puja Items",
    description: "Complete vrat and puja kits for Karwa Chauth, Navratri, Diwali, Satyanarayan Katha, and all special religious occasions. Available in Greater Noida West.",
    image: "/products/vrat-kit.png",
    imageAlt: "Vrat kit Karwa Chauth Navratri Satyanarayan Katha items Greater Noida",
  },
];

// Why Choose Us features
const features = [
  {
    icon: Shield,
    title: "शुद्ध सामग्री",
    titleEn: "Genuine Products",
    description: "100% authentic and pure pooja items sourced from trusted suppliers",
  },
  {
    icon: IndianRupee,
    title: "उचित मूल्य",
    titleEn: "Affordable Prices",
    description: "Best prices in Greater Noida with no compromise on quality",
  },
  {
    icon: Users,
    title: "विश्वसनीय सेवा",
    titleEn: "Serving Since 2019",
    description: "Serving thousands of satisfied customers in Greater Noida for over 7 years",
  },
  {
    icon: ShoppingBag,
    title: "फ्री होम डिलीवरी",
    titleEn: "Free Home Delivery",
    description: "Free delivery on orders above ₹200 in Greater Noida West area",
  },
];

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeBranch, setActiveBranch] = useState(1);

  return (
    <main className="min-h-screen">
      {/* Announcement Bar */}
      <div className="bg-gradient-to-r from-[#800000] to-[#FF6B00] text-white py-2 px-4 text-center text-sm font-medium">
        <span className="hindi-text mr-2">फ्री होम डिलीवरी!</span>
        <span>Free Home Delivery on orders above ₹200 in Greater Noida West 🚚</span>
      </div>

      {/* Decorative Top Border */}
      <div className="border-pattern" />

      {/* Navigation */}
      <nav className="bg-white/98 backdrop-blur-xl sticky top-0 z-50 shadow-[0_2px_20px_rgba(0,0,0,0.08)]">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="#" className="flex items-center gap-4 group">
              <div className="relative">
                <Image
                  src="/logo.png"
                  alt="Shri Ram Puja Ghar Logo - Best Pooja Samagri Shop in Greater Noida West"
                  width={60}
                  height={60}
                  className="w-14 h-14 object-contain"
                  priority
                />
              </div>
              <div className="hidden sm:block">
                <h2 className="font-bold text-xl text-[#800000] hindi-text leading-tight tracking-tight">
                  श्री राम पूजा घर
                </h2>
                <p className="text-sm text-[#5C4033] font-medium">Shri Ram Pooja Ghar</p>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="relative text-[#3D2914] hover:text-[#FF6B00] font-medium transition-colors py-2 group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FF6B00] transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </div>

            {/* Call Button & Mobile Menu */}
            <div className="flex items-center gap-4">
              <a
                href="tel:08743050029"
                className="bg-gradient-to-r from-[#FF6B00] to-[#FF8533] text-white font-semibold py-3 px-6 rounded-full flex items-center gap-2 shadow-[0_4px_20px_rgba(255,107,0,0.35)]"
              >
                <Phone size={18} className="text-white" />
                <span className="hidden sm:inline text-white">Call Now</span>
              </a>

              {/* Mobile Menu Button */}
              <button
                className="lg:hidden p-2.5 text-[#3D2914] hover:bg-[#FFF0E0] rounded-lg transition-colors"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="lg:hidden pb-6 border-t border-[#E8DDD0] pt-4 animate-in slide-in-from-top duration-200">
              <div className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-[#3D2914] font-medium py-3 px-4 rounded-xl flex items-center justify-center bg-[#FFFBF7] border border-[#E8DDD0]/50"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero.png"
            alt="Pooja samagri diya and agarbatti - Shri Ram Puja Ghar Greater Noida West"
            fill
            className="object-cover"
            priority
          />
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 py-16 relative z-10 w-full text-center md:text-left">
          <div className="max-w-2xl mx-auto md:mx-0">
            <div className="flex justify-center md:justify-start mb-6">
              <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-2 border border-white/30">
                <Star className="text-[#FFD700] fill-[#FFD700]" size={16} />
                <span className="text-sm font-medium text-white">Trusted Since 2019 ✨ Greater Noida West</span>
              </div>
            </div>

            {/* H1 - Main Heading - SEO Optimized */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              <span className="text-white drop-shadow-lg">Pooja Samagri Shop in Greater Noida</span>
              <br />
              <span className="hindi-text text-[#FFD700] drop-shadow-lg">श्री राम पूजा घर | पूजा सामग्री की दुकान</span>
            </h1>

            {/* Subheading */}
            <p className="text-lg md:text-xl text-white/90 mb-4 hindi-text drop-shadow">
              ग्रेटर नोएडा वेस्ट में आपका विश्वसनीय पूजा सामग्री की दुकान।
              शुद्ध एवं प्रामाणिक पूजा सामग्री उचित मूल्य पर।
            </p>

            <p className="text-base md:text-lg text-white/80 mb-8 drop-shadow">
              Your trusted religious items store in Greater Noida West, Techzone 4.
              Quality pooja samagri for all your worship needs.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10 justify-center md:justify-start">
              <a
                href="tel:08743050029"
                className="bg-[#FF6B00] text-white font-semibold py-3.5 px-8 rounded-full flex items-center gap-3 text-lg justify-center shadow-lg"
              >
                <Phone size={22} className="text-white" />
                <span className="text-white">अभी कॉल करें - 8743050029</span>
              </a>
              <a
                href="https://maps.app.goo.gl/2xRP2n3YXaPHMK3U9"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/90 text-[#800000] font-semibold py-3.5 px-8 rounded-full flex items-center gap-3 text-lg justify-center shadow-lg"
              >
                <MapPin size={22} />
                <span>Get Directions</span>
              </a>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-4 text-sm justify-center md:justify-start">
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
                <Star className="text-[#FFD700] fill-[#FFD700]" size={18} />
                <span className="text-white">1000+ Happy Customers</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
                <Clock size={18} className="text-[#FFD700]" />
                <span className="text-white">Open 8 AM - 9 PM</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
                <ShoppingBag size={18} className="text-[#FFD700]" />
                <span className="text-white">Free Home Delivery (Min ₹200)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Content */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                <span className="hindi-text text-[var(--secondary)]">हमारे बारे में</span>
                <br />
                <span className="text-[var(--primary)]">About Shri Ram Pooja Ghar</span>
              </h2>

              <div className="space-y-4 text-[var(--text-secondary)]">
                <p className="hindi-text text-lg">
                  श्री राम पूजा घर ग्रेटर नोएडा वेस्ट, टेकज़ोन 4 में स्थित एक प्रतिष्ठित पूजा सामग्री की दुकान है।
                  हम पिछले कई वर्षों से अपने ग्राहकों को शुद्ध और प्रामाणिक पूजा सामग्री प्रदान कर रहे हैं।
                </p>

                <p>
                  Located in Spring Meadows, Techzone 4, Greater Noida West, we are a trusted name for all your
                  religious and worship needs. Our store offers a comprehensive range of pooja items, from daily
                  worship essentials to special occasion requirements.
                </p>

                <div className="flex flex-wrap gap-4 pt-4">
                  <div className="flex items-center gap-2 bg-[var(--background)] px-4 py-2 rounded-full">
                    <Heart className="text-[var(--primary)]" size={18} />
                    <span className="hindi-text">शुद्धता की गारंटी</span>
                  </div>
                  <div className="flex items-center gap-2 bg-[var(--background)] px-4 py-2 rounded-full">
                    <Star className="text-[var(--accent)] fill-[var(--accent)]" size={18} />
                    <span>Premium Quality</span>
                  </div>
                  <div className="flex items-center gap-2 bg-[var(--background)] px-4 py-2 rounded-full">
                    <IndianRupee className="text-[var(--primary)]" size={18} />
                    <span className="hindi-text">उचित मूल्य</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual/Stats Card */}
            {/* About Us Image */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#FF6B00] to-[#800000] rounded-[2rem] transform rotate-3 scale-105 opacity-20 blur-lg group-hover:rotate-6 transition-all duration-500" />
              <div className="relative rounded-[2rem] overflow-hidden border-8 border-white shadow-2xl h-[500px]">
                <Image
                  src="/About-us.PNG"
                  alt="Pooja samagri shop interior in Greater Noida West - Shri Ram Puja Ghar Techzone 4"
                  fill
                  className="object-cover"
                />

                {/* Overlay Badge */}
                <div className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-md px-6 py-3 rounded-2xl shadow-lg border border-[#E8DDD0] flex items-center gap-3">
                  <div className="bg-[#FF6B00] p-2 rounded-full text-white">
                    <Star size={20} fill="currentColor" />
                  </div>
                  <div>
                    <p className="font-bold text-[#800000] leading-none mb-1">Since 2019</p>
                    <p className="text-xs text-[#5C4033] font-medium">Trusted by 1000+ Devotees</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products/Services Section */}
      <section id="products" className="section-padding bg-gradient-to-b from-[#FFFBF7] to-[#FFF5EB]">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          {/* Premium Section Header */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#FF6B00]" />
              <span className="text-sm font-semibold uppercase tracking-widest text-[#FF6B00]">Our Products</span>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#FF6B00]" />
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              <span className="hindi-text text-[#800000]">हमारे उत्पाद</span>
            </h2>
            <p className="text-lg text-[#5C4033] max-w-2xl mx-auto">
              Complete range of pure pooja samagri and religious items
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <div
                key={index}
                className="group bg-white rounded-3xl overflow-hidden shadow-[0_4px_25px_rgba(0,0,0,0.05)] border border-[#E8DDD0]/50 hover:shadow-[0_20px_60px_rgba(255,107,0,0.15)] hover:border-[#FF6B00]/30 transition-all duration-500 flex flex-col h-full"
              >
                {/* Product Image */}
                <div className="relative h-64 w-full overflow-hidden bg-[#FFFBF7]">
                  <Image
                    src={product.image}
                    alt={product.imageAlt || product.titleEn}
                    fill
                    className="object-cover"
                  />
                  {/* Glass overlay on hover - REMOVED */}
                </div>

                <div className="p-7 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold mb-1">
                    <span className="hindi-text text-[#800000]">{product.title}</span>
                  </h3>
                  <h4 className="text-[#FF6B00] font-semibold text-sm mb-4 tracking-wide uppercase">{product.titleEn}</h4>
                  <p className="text-[#5C4033] leading-relaxed text-sm line-clamp-3">{product.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-14">
            <p className="text-lg text-[#5C4033] mb-5 hindi-text">
              और भी बहुत कुछ! हमारी दुकान पर आएं या कॉल करें
            </p>
            <a
              href="tel:08743050029"
              className="bg-gradient-to-r from-[#FF6B00] to-[#FF8533] text-white font-semibold py-4 px-10 rounded-full inline-flex items-center gap-3 shadow-[0_4px_20px_rgba(255,107,0,0.35)]"
            >
              <Phone size={22} className="text-white" />
              <span className="text-white text-lg">Call: 8743050029</span>
            </a>
          </div>
        </div>
      </section>

      {/* Free Download Section */}
      <section className="pb-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="bg-gradient-to-r from-[#800000] to-[#5C1010] p-6 md:p-8 rounded-3xl shadow-lg relative overflow-hidden">

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-center md:text-left">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  <span className="hindi-text">पूजा सामग्री सूची मुफ्त प्राप्त करें</span>
                  <span className="mx-3 text-white/30 hidden md:inline">|</span>
                  <span className="text-white/90 block md:inline text-xl md:text-2xl">Get Poojan Samagri List Free</span>
                </h2>
                <p className="text-white/70 text-base">
                  Download our complete Hawan and Poojan items list for your rituals.
                </p>
              </div>

              <div className="flex-shrink-0">
                <a
                  href="/Hawan-pooja-Samagri.pdf"
                  download
                  className="bg-white text-[#800000] font-bold py-4 px-8 rounded-xl flex items-center gap-3 transition-colors hover:bg-white/90 shadow-md"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" x2="12" y1="15" y2="3" />
                  </svg>
                  <span>Download List 📥</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pandit Ji Services Section */}
      <section id="pandit-ji" className="section-padding bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
          <div className="bg-gradient-to-br from-[#800000] to-[#5C1010] rounded-[2rem] p-6 md:p-10 text-white shadow-2xl overflow-hidden relative">
            {/* Glossy overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-30 pointer-events-none" />

            <div className="grid lg:grid-cols-2 gap-10 items-center text-center lg:text-left">
              <div className="flex flex-col items-center lg:items-start">
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 mb-6">
                  <Star className="text-[#FFD700] fill-[#FFD700]" size={16} />
                  <span className="text-sm font-semibold tracking-wide uppercase">Pooja Services</span>
                </div>

                <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                  <span className="hindi-text text-[#FFD700]">वैदिक कर्मकांड हेतु पंडित जी से संपर्क करें</span>
                  <br />
                  <span className="text-2xl md:text-3xl block mt-2 font-medium opacity-90 italic">Professional Pandit Ji for all your Rituals</span>
                </h2>

                <p className="text-lg text-white/80 mb-8 leading-relaxed">
                  ग्रेटर नोएडा में सर्वश्रेष्ठ पंडित जी द्वारा सभी प्रकार की पूजा, हवन, पाठ एवं कथाएं संपन्न कराएं।
                  शुद्ध उच्चारण एवं विधि-विधान के साथ आपकी सेवा में तत्पर।
                </p>

                <div className="grid grid-cols-2 gap-4 mb-10">
                  <div className="flex items-center gap-3 bg-white/5 p-3 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                    <span className="text-2xl">🔥</span>
                    <span className="font-semibold text-sm md:text-base">हवन (Havan)</span>
                  </div>
                  <div className="flex items-center gap-3 bg-white/5 p-3 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                    <span className="text-2xl">📖</span>
                    <span className="font-semibold text-sm md:text-base">कथा (Katha)</span>
                  </div>
                  <div className="flex items-center gap-3 bg-white/5 p-3 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                    <span className="text-2xl">🏠</span>
                    <span className="font-semibold text-sm md:text-base">गृह प्रवेश</span>
                  </div>
                  <div className="flex items-center gap-3 bg-white/5 p-3 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                    <span className="text-2xl">🕉️</span>
                    <span className="font-semibold text-sm md:text-base">विवाह पूजा</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-6">
                  <a
                    href="tel:08743050029"
                    className="bg-[#FF6B00] text-white font-bold py-4 px-8 rounded-full inline-flex items-center gap-3 shadow-xl text-lg hover:bg-[#e56000] transition-colors"
                  >
                    <Phone size={24} />
                    Book Pandit Ji Now
                  </a>

                  <div className="flex flex-col items-center sm:items-start">
                    <span className="text-white/70 text-sm font-medium uppercase tracking-wider mb-1">Call Directly</span>
                    <a href="tel:08743050029" className="text-3xl font-bold text-[#FFD700] hover:text-white transition-colors">
                      8743050029
                    </a>
                  </div>
                </div>
              </div>

              <div className="relative hidden lg:block">
                <div className="relative z-10 rounded-3xl overflow-hidden border-8 border-white/20 shadow-3xl">
                  <Image
                    src="/Pandit ji.png"
                    alt="Pandit ji performing havan pooja in Greater Noida - Book pandit for griha pravesh, wedding, katha"
                    width={500}
                    height={500}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="pt-16 pb-4 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          {/* Premium Section Header */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#FF6B00]" />
              <span className="text-sm font-semibold uppercase tracking-widest text-[#FF6B00]">Customer Reviews</span>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#FF6B00]" />
            </div>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4">
              <span className="hindi-text text-[#800000]">हमारे ग्राहकों की राय</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="bg-[#FFFBF7] p-6 rounded-2xl border border-[#E8DDD0]/60 shadow-sm flex flex-col h-full"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 bg-[#800000] rounded-full flex items-center justify-center text-white font-bold text-lg shadow-md">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-bold text-[#3D2914] leading-tight">{review.name}</h3>
                    <p className="text-xs text-[#5C4033]/70 mt-1">{review.guide}</p>
                  </div>
                </div>

                <div className="flex gap-1 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={16} className="text-[#FABB05] fill-[#FABB05]" />
                  ))}
                  <span className="text-xs text-[#5C4033]/60 ml-2">{review.date}</span>
                </div>

                <p className="text-[#5C4033] italic leading-relaxed flex-grow">
                  &quot;{review.comment}&quot;
                </p>

                <div className="mt-6 pt-4 border-t border-[#E8DDD0]/40 flex items-center gap-2 text-[#4285F4] text-sm font-medium">
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                    <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.901 3.23-1.89 4.22-1.353 1.353-3.41 2.81-7.84 2.81-7.1 0-11.83-5.79-11.83-12.89s4.73-12.89 11.83-12.89c3.9 0 6.64 1.54 8.79 3.59l2.42-2.42C18.99 2.05 15.65 0 11.88 0 5.4 0 .09 5.38.09 11.88s5.31 11.88 11.79 11.88c3.55 0 6.22-1.17 8.32-3.36 2.16-2.16 2.84-5.21 2.84-7.67 0-.76-.07-1.47-.17-2.13H12.48z" />
                  </svg>
                  Google Review
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="https://maps.app.goo.gl/2xRP2n3YXaPHMK3U9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#800000] font-bold hover:underline"
            >
              Write a Review ✍️
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-us" className="pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          {/* Premium Section Header */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#FF6B00]" />
              <span className="text-sm font-semibold uppercase tracking-widest text-[#FF6B00]">Why Choose Us</span>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#FF6B00]" />
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              <span className="hindi-text text-[#800000]">हमें क्यों चुनें?</span>
            </h2>
            <p className="text-lg text-[#5C4033] max-w-2xl mx-auto">
              Your trusted pooja samagri shop in Greater Noida West
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group text-center p-8 rounded-2xl bg-gradient-to-b from-[#FFFBF7] to-[#FFF5EB] hover:from-[#FFF5EB] hover:to-[#FFEDD5] transition-all duration-300 border border-[#E8DDD0]/50 hover:border-[#FF6B00]/20 hover:shadow-xl"
              >
                <div className="w-18 h-18 mx-auto mb-5 bg-gradient-to-br from-[#FF6B00] to-[#FF8533] rounded-2xl flex items-center justify-center shadow-lg transition-transform duration-300">
                  <feature.icon className="text-white" size={32} />
                </div>
                <h3 className="text-lg font-bold mb-1">
                  <span className="hindi-text text-[#800000]">{feature.title}</span>
                </h3>
                <h4 className="text-[#FF6B00] font-semibold text-sm mb-3">{feature.titleEn}</h4>
                <p className="text-[#5C4033] text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding bg-gradient-to-b from-[#FFFBF7] to-[#FFF5EB]">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          {/* Premium Section Header */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#FF6B00]" />
              <span className="text-sm font-semibold uppercase tracking-widest text-[#FF6B00]">Get In Touch</span>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#FF6B00]" />
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              <span className="hindi-text text-[#800000]">संपर्क करें</span>
            </h2>
          </div>

          {/* Contact Cards in Row */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {/* Phone Numbers */}
            <div className="card">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#FF6B00] to-[#FF8533] rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Phone className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2 hindi-text">फ़ोन नंबर</h3>
                  <div className="space-y-2">
                    <a
                      href="tel:08743050029"
                      className="block text-lg font-bold text-[#FF6B00] hover:underline"
                    >
                      📞 8743050029
                    </a>
                    <a
                      href="tel:09540684803"
                      className="block text-lg font-bold text-[#FF6B00] hover:underline"
                    >
                      📞 9540684803
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Address */}
            <div className="card md:col-span-2 lg:col-span-2">
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 bg-gradient-to-br from-[#FF6B00] to-[#FF8533] rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                  <MapPin className="text-white" size={24} />
                </div>
                <div className="grid sm:grid-cols-2 gap-8 w-full">
                  <div>
                    <h3 className="font-bold text-lg mb-2 hindi-text">शाखा 1 / Branch 1</h3>
                    <p className="text-[#5C4033] text-sm leading-relaxed mb-3">
                      Shop no K-5, Spring Meadows,<br />
                      Greater Noida West Rd, Techzone 4,<br />
                      Patwari, Greater Noida, UP 201306
                    </p>
                    <a
                      href="https://maps.app.goo.gl/2xRP2n3YXaPHMK3U9"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[#FF6B00] font-semibold text-sm hover:underline"
                    >
                      <MapPin size={16} />
                      Get Directions
                    </a>
                  </div>
                  <div className="border-t sm:border-t-0 sm:border-l border-[#E8DDD0] pt-6 sm:pt-0 sm:pl-8">
                    <h3 className="font-bold text-lg mb-2 hindi-text">शाखा 2 / Branch 2</h3>
                    <p className="text-[#5C4033] text-sm leading-relaxed mb-3">
                      Shop no - 2, Banke Bihari Market,<br />
                      Near SKS World School,<br />
                      Greater Noida West, UP
                    </p>
                    <a
                      href="https://www.google.com/maps/search/Shri+ram+Pooja+Ghar+Banke+Bihari+market+Near+SKS+World+School"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[#FF6B00] font-semibold text-sm hover:underline"
                    >
                      <MapPin size={16} />
                      Get Directions
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="card">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#FF6B00] to-[#FF8533] rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Clock className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2 hindi-text">खुलने का समय</h3>
                  <p className="text-[#5C4033]">
                    <span className="font-semibold">Monday - Sunday</span><br />
                    8:00 AM - 9:00 PM
                  </p>
                  <p className="text-sm text-[#FF6B00] mt-2 italic">
                    Both branches open daily
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Map with Branch Toggle */}
          <div className="max-w-4xl mx-auto">
            {/* Map Tabs */}
            <div className="flex p-1 bg-[#F5E6D3] rounded-2xl mb-8 w-fit mx-auto shadow-inner border border-[#E8DDD0]">
              <button
                onClick={() => setActiveBranch(1)}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all ${activeBranch === 1
                  ? "bg-white text-[#800000] shadow-md"
                  : "text-[#5C4033] hover:bg-white/50"
                  }`}
              >
                <div className={`w-2 h-2 rounded-full ${activeBranch === 1 ? "bg-[#FF6B00]" : "bg-[#E8DDD0]"}`} />
                <span>Branch 1</span>
              </button>
              <button
                onClick={() => setActiveBranch(2)}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all ${activeBranch === 2
                  ? "bg-white text-[#800000] shadow-md"
                  : "text-[#5C4033] hover:bg-white/50"
                  }`}
              >
                <div className={`w-2 h-2 rounded-full ${activeBranch === 2 ? "bg-[#FF6B00]" : "bg-[#E8DDD0]"}`} />
                <span>Branch 2</span>
              </button>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white ring-1 ring-[#E8DDD0] bg-[#FFFBF7]">
              {activeBranch === 1 ? (
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3170.353347982666!2d77.4417738749552!3d28.58914038605078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cef0b2939025b%3A0xd543eabebeb82ebe!2sSHRI%20RAM%20PUJA%20GHAR!5e1!3m2!1sen!2sin!4v1769323722791!5m2!1sen!2sin"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Branch 1 - Spring Meadows"
                ></iframe>
              ) : (
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50714.57836833409!2d77.37658984863279!3d28.61208669999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cefdcc5f4a0c5%3A0x9e3080323bbace9e!2sShri%20Ram%20Pooja%20Ghar!5e1!3m2!1sen!2sin!4v1769337486918!5m2!1sen!2sin"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Branch 2 - Banke Bihari Market"
                ></iframe>
              )}
            </div>

            <div className="flex flex-col items-center gap-3 mt-8">
              <div className="flex items-center justify-center gap-2">
                <div className="h-1 w-12 bg-[#FF6B00] rounded-full" />
                <p className="text-[#800000] font-bold text-lg">
                  {activeBranch === 1 ? "Branch 1 Location" : "Branch 2 Location"}
                </p>
                <div className="h-1 w-12 bg-[#FF6B00] rounded-full" />
              </div>
              <p className="text-[#5C4033] font-medium text-center">
                {activeBranch === 1
                  ? "📍 Shop no K-5, Spring Meadows, Techzone 4, Greater Noida West"
                  : "📍 Shop no - 2, Banke Bihari Market, Near SKS World School"}
              </p>
              <a
                href={activeBranch === 1
                  ? "https://maps.app.goo.gl/2xRP2n3YXaPHMK3U9"
                  : "https://www.google.com/maps/search/Shri+ram+Pooja+Ghar+Banke+Bihari+market+Near+SKS+World+School"}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#FF6B00] text-white py-3 px-8 rounded-full font-bold flex items-center gap-2 shadow-lg hover:bg-[#E66000] transition-colors mt-2"
              >
                <MapPin size={20} />
                Open in Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[var(--secondary)] text-white">
        <div className="border-pattern" />
        <div className="max-w-7xl mx-auto px-4 py-10">
          <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <div className="flex items-center gap-4 justify-center md:justify-start mb-6">
                <div className="bg-white rounded-full p-2 shadow-inner">
                  <Image
                    src="/logo.png"
                    alt="Shri Ram Puja Ghar - Pooja Samagri Shop Greater Noida West"
                    width={60}
                    height={60}
                    className="w-14 h-14 object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold hindi-text">श्री राम पूजा घर</h3>
                  <p className="text-white/80 text-sm">Shri Ram Puja Ghar</p>
                </div>
              </div>
              <p className="text-white/70 text-sm">
                Your trusted Pooja Samagri shop in Greater Noida West, Techzone 4.
              </p>
            </div>

            {/* Quick Contact */}
            <div>
              <h4 className="font-bold mb-4 hindi-text">संपर्क करें</h4>
              <div className="space-y-2 text-white/80">
                <a href="tel:08743050029" className="flex items-center gap-2 justify-center md:justify-start hover:text-white">
                  <Phone size={16} /> 8743050029
                </a>
                <a href="tel:09540684803" className="flex items-center gap-2 justify-center md:justify-start hover:text-white">
                  <Phone size={16} /> 9540684803
                </a>
              </div>
            </div>

            {/* Address */}
            <div>
              <h4 className="font-bold mb-4 hindi-text">हमारे पते</h4>
              <div className="space-y-4 text-white/80 text-sm">
                <p>
                  <span className="text-[#FFD700] font-bold">Branch 1:</span><br />
                  Shop no K-5, Spring Meadows, Techzone 4
                </p>
                <p>
                  <span className="text-[#FFD700] font-bold">Branch 2:</span><br />
                  Shop no-2, Banke Bihari Market, Near SKS School
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 mt-8 pt-6 text-center">
          <p className="text-white/60 text-sm">
            © {new Date().getFullYear()} Shri Ram Puja Ghar. All rights reserved.
          </p>
          <p className="text-white/40 text-xs mt-2">
            Pooja Samagri Shop in Greater Noida | Religious Items Store | पूजा सामग्री की दुकान
          </p>
        </div>
      </footer>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
        {/* WhatsApp Button */}
        <a
          href="https://wa.me/918743050029?text=Hello%20Shri%20Ram%20Puja%20Ghar%2C%20I%20want%20to%20inquire%20about%20pooja%20samagri."
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(37,211,102,0.4)]"
          aria-label="Chat on WhatsApp"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-7 h-7">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </a>

        {/* Call Button */}
        <a
          href="tel:08743050029"
          className="w-14 h-14 bg-gradient-to-br from-[#FF6B00] to-[#FF8533] rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(255,107,0,0.4)]"
          aria-label="Call Shri Ram Puja Ghar"
        >
          <Phone className="text-white" size={26} />
        </a>
      </div>
    </main>
  );
}
