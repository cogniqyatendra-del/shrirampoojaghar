import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pooja Samagri Shop in Greater Noida West | Shri Ram Puja Ghar | पूजा सामग्री की दुकान",
  description: "🙏 Best Pooja Samagri Shop in Greater Noida West, Techzone 4. ✓ Puja Items ✓ Havan Samagri ✓ Diya Dhoop Agarbatti ✓ Pandit Ji Services ✓ Free Home Delivery ₹200+. Call 8743050029. ग्रेटर नोएडा में पूजा सामग्री की दुकान - श्री राम पूजा घर",
  keywords: [
    // Primary Keywords
    "pooja samagri shop in greater noida",
    "pooja store in greater noida west",
    "pooja items shop near me",
    "pandit ji for pooja in greater noida",
    "religious items store near me",
    // Product Keywords
    "puja items greater noida",
    "puja saman shop",
    "havan samagri greater noida",
    "diya dhoop agarbatti shop",
    "pooja thali items",
    "bhagwan murti shop",
    // Service Keywords
    "pandit ji near me",
    "pandit for griha pravesh",
    "pandit for havan",
    "pandit for wedding puja",
    "pandit for satyanarayan katha",
    // Location Keywords
    "techzone 4 pooja shop",
    "noida extension pooja store",
    "spring meadows religious store",
    // Hindi Keywords
    "पूजा सामग्री की दुकान ग्रेटर नोएडा",
    "पूजा सामान की दुकान",
    "पंडित जी ग्रेटर नोएडा",
    "हवन सामग्री",
    "धूप अगरबत्ती दुकान",
    "मूर्ति की दुकान ग्रेटर नोएडा"
  ],
  authors: [{ name: "Shri Ram Puja Ghar" }],
  creator: "Shri Ram Puja Ghar",
  publisher: "Shri Ram Puja Ghar",
  formatDetection: {
    telephone: true,
    address: true,
    email: false,
  },
  metadataBase: new URL("https://shriram-pujaghar.com"),
  alternates: {
    canonical: "/",
    languages: {
      "hi-IN": "/",
      "en-IN": "/",
    },
  },
  openGraph: {
    title: "Best Pooja Samagri Shop in Greater Noida West | Shri Ram Puja Ghar",
    description: "🙏 Trusted Pooja Shop since 2019. Puja Items, Havan Samagri, Diya, Dhoop, Murti & Pandit Ji Services. Free Home Delivery. Call 8743050029",
    url: "https://shriram-pujaghar.com",
    siteName: "Shri Ram Puja Ghar",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Pooja Samagri Shop in Greater Noida West - Shri Ram Puja Ghar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pooja Samagri Shop in Greater Noida | Shri Ram Puja Ghar",
    description: "Best Pooja Shop in Greater Noida West. Puja Items, Havan Samagri, Pandit Ji Services & Free Delivery. Call 8743050029",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code", // Replace with actual code from Google Search Console
  },
};

// JSON-LD Structured Data for LocalBusiness
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://shriram-pujaghar.com/#business",
  name: "Shri Ram Puja Ghar",
  alternateName: ["श्री राम पूजा घर", "Shri Ram Pooja Ghar"],
  description: "Best Pooja Samagri Shop in Greater Noida West, Techzone 4. We offer complete puja items, havan samagri, diya, dhoop, agarbatti, pooja thali, bhagwan murti, and professional Pandit Ji services for all religious ceremonies. Serving Greater Noida since 2019.",
  url: "https://shriram-pujaghar.com",
  telephone: "+91-8743050029",
  image: [
    "https://shriram-pujaghar.com/logo.png",
    "https://shriram-pujaghar.com/og-image.jpg"
  ],
  logo: "https://shriram-pujaghar.com/logo.png",
  priceRange: "₹",
  currenciesAccepted: "INR",
  paymentAccepted: ["Cash", "UPI", "Credit Card", "Debit Card", "PhonePe", "Google Pay", "Paytm"],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Shop no K-5, Spring Meadows, Greater Noida West Rd",
    addressLocality: "Techzone 4, Patwari, Greater Noida",
    addressRegion: "Uttar Pradesh",
    postalCode: "201306",
    addressCountry: "IN"
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 28.589140,
    longitude: 77.441773
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "08:00",
      closes: "21:00"
    }
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+91-8743050029",
      contactType: "customer service",
      availableLanguage: ["Hindi", "English"]
    },
    {
      "@type": "ContactPoint",
      telephone: "+91-9540684803",
      contactType: "sales",
      availableLanguage: ["Hindi", "English"]
    }
  ],
  areaServed: [
    {
      "@type": "Place",
      name: "Greater Noida West"
    },
    {
      "@type": "Place",
      name: "Techzone 4"
    },
    {
      "@type": "Place",
      name: "Noida Extension"
    },
    {
      "@type": "City",
      name: "Greater Noida"
    },
    {
      "@type": "City",
      name: "Noida"
    }
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Pooja Samagri & Religious Items",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Product",
          name: "Pooja Samagri",
          description: "Complete pooja items including kumkum, roli, chandan, akshat, kalawa for daily worship"
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Product",
          name: "Diya, Dhoop, Agarbatti",
          description: "Premium quality brass diyas, fragrant dhoop, incense sticks for divine atmosphere"
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Product",
          name: "Havan Samagri",
          description: "Authentic havan samagri with pure ghee, herbs for havans and yagnas"
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Product",
          name: "Pooja Thali",
          description: "Beautifully crafted pooja thalis in brass, steel and German silver"
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Product",
          name: "Bhagwan Murti",
          description: "Deity idols - Ganesh, Lakshmi, Shiv, Ram, Krishna in various sizes"
        }
      }
    ]
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "50",
    bestRating: "5",
    worstRating: "1"
  },
  sameAs: [
    "https://maps.app.goo.gl/2xRP2n3YXaPHMK3U9"
  ]
};

// Service Schema for Pandit Ji Services
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://shriram-pujaghar.com/#pandit-services",
  name: "Pandit Ji Services in Greater Noida",
  alternateName: "पंडित जी सेवाएं ग्रेटर नोएडा",
  description: "Professional Pandit Ji for all religious ceremonies including Griha Pravesh, Havan, Satyanarayan Katha, Wedding Puja, and all Vedic rituals in Greater Noida West.",
  provider: {
    "@id": "https://shriram-pujaghar.com/#business"
  },
  serviceType: "Religious Ceremony Services",
  areaServed: ["Greater Noida West", "Techzone 4", "Noida Extension", "Greater Noida", "Noida"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Pandit Ji Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Pandit Ji for Griha Pravesh",
          description: "Complete griha pravesh puja with Vedic mantras for new home"
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Pandit Ji for Havan",
          description: "Traditional havan ceremony with pure samagri and proper rituals"
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Pandit Ji for Satyanarayan Katha",
          description: "Complete Satyanarayan Katha puja for family prosperity"
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Pandit Ji for Wedding Puja",
          description: "Vedic wedding ceremonies with proper rituals and mantras"
        }
      }
    ]
  }
};

// FAQ Schema for Local SEO
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Where is the best pooja samagri shop in Greater Noida West?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Shri Ram Puja Ghar is the best pooja samagri shop in Greater Noida West, located at Shop no K-5, Spring Meadows, Techzone 4. We offer complete puja items, havan samagri, diya, dhoop, agarbatti, and all religious items at affordable prices. Call 8743050029 for orders."
      }
    },
    {
      "@type": "Question",
      name: "Do you provide Pandit Ji for pooja in Greater Noida?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Shri Ram Puja Ghar provides experienced Pandit Ji for all types of puja including Griha Pravesh, Havan, Satyanarayan Katha, Wedding ceremonies, and all Vedic rituals in Greater Noida West, Techzone 4, and Noida Extension. Call 8743050029 to book."
      }
    },
    {
      "@type": "Question",
      name: "What is the timing of Shri Ram Puja Ghar?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Shri Ram Puja Ghar is open from 8:00 AM to 9:00 PM, all 7 days a week including Sundays and holidays. Visit us at Spring Meadows, Techzone 4, Greater Noida West."
      }
    },
    {
      "@type": "Question",
      name: "Do you offer home delivery for pooja samagri in Greater Noida?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we offer FREE home delivery on orders above ₹200 in Greater Noida West, Techzone 4, and Noida Extension areas. Call 8743050029 or WhatsApp to place your order."
      }
    },
    {
      "@type": "Question",
      name: "What items are available at Shri Ram Puja Ghar?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We offer complete pooja samagri including Diya, Dhoop, Agarbatti, Havan Samagri, Pooja Thali, Bhagwan Murti (Ganesh, Lakshmi, Shiv, Ram, Krishna idols), Kumkum, Roli, Chandan, and all religious items for daily worship and special occasions."
      }
    }
  ]
};

// Combined JSON-LD for injection
const jsonLd = [localBusinessSchema, serviceSchema, faqSchema];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hi">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#FF6B00" />
        <meta name="geo.region" content="IN-UP" />
        <meta name="geo.placename" content="Greater Noida" />
        <meta name="geo.position" content="28.5700;77.4200" />
        <meta name="ICBM" content="28.5700, 77.4200" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
