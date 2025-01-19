import { CommonFeatureProps, MenuProps, TProductsProps } from "../types/types";

export const header_menu: MenuProps[] = [
  {
    id: "home",
    slug: "/",
    name: "Home",
  },
  {
    id: "products",
    slug: "/products",
    name: "Products",
  },
  {
    id: "partners",
    slug: "/partners",
    name: "Partners",
  },
  {
    id: "our-platform",
    slug: "/our-platform",
    name: "Our Platform",
  },
  {
    id: "about",
    slug: "/about",
    name: "About",
  },
  {
    id: "contact-us",
    slug: "/contact-us",
    name: "Contact Us",
  },
];

export const home_key_feature_data: CommonFeatureProps[] = [
  {
    id: "fast-onboarding",
    title: "Fast Onboarding",
    description: `Our streamlined onboarding process means we get up to speed on your goals fast, aligning with your vision and strategy before the tires even cool. You’ll be off to the races in no time, confident that our team has your back every mile of the journey.`,
    image: "/fast-onboarding.svg",
  },
  {
    id: "tailored-flexibility",
    title: "Tailored Flexibility",
    description: `We’re adept at molding our strategies and resources to match your evolving needs. When you partner with us, you’re tapping into a dynamic, agile force that’s ready to grow and innovate right alongside you.`,
    image: "/tailored-flexibility.svg",
  },
  {
    id: "tailored-flexibility",
    title: "Experienced Team",
    description: `The seasoned allies you’ve been looking for. we’re not just here to deliver quick fixes — we’re in it to build a thriving, long-term partnership that supports your success at every turn.`,
    image: "/tailored-flexibility.svg",
  },
  {
    id: "competitive-fee",
    title: "Competitive Fee",
    description: `Imagine a service where you can dream big without breaking the bank. That’s exactly what we offer with our competitively priced fee structure. Striking the perfect balance between affordability and excellence–proving that you really can have the best of both worlds.`,
    image: "/competitive-fee.svg",
  },
];

export const products_data: TProductsProps[] = [
  {
    id: "live-casino",
    title: "Live Casino",
    description: `With our strong portfolio, your live casino section has already a powerful upper hand among your competitors.`,
    icon: "/live-casino-icon.svg",
    image: "/home-live-casino.png",
    prod_image: "/product-live-casino-img.png",
    pattern_image: "/single-blurred-pattern.svg",
    slug: "/products/live-casino"
  },
  {
    id: "slots",
    title: "Slots",
    description: `Offering over a hundred providers with loads of exciting games, you could fully customize and strategize your website to further target and reach more players.`,
    image: "/home-slots.png",
    icon: "/slots-icon.svg",
    prod_image: "/product-slots-img.png",
    pattern_image: "/single-blurred-pattern.svg",
    slug: "/products/slots"
  },
  {
    id: "sportsbook",
    title: "Sportsbook",
    description: `Modern interface, wide sports coverage, convenient live streaming options and loads of personalization to meet your market strategy requirements.`,
    image: "/home-sportbooks.png",
    icon: "/sportsbook-icon.svg",
    prod_image: "/product-sportsbook-img.png",
    pattern_image: "/single-blurred-pattern.svg",
    slug: "/products/sportbooks"
  },
  {
    id: "esports",
    title: "Esports",
    description: `State-of-the-art design, major tournament coverages, user-friendly interface, multi-channel live streaming and a whole lot of customizations.`,
    image: "/home-esports.png",
    icon: "/esports-icon.svg",
    prod_image: "/product-esports-img.png",
    pattern_image: "/single-blurred-pattern.svg",
    slug: "/products/esports"
  },
];

export const feature_highlight_data: CommonFeatureProps[] = [
  {
    id: "dynamic-layout-builder",
    title: "Dynamic Layout Builder",
    icon: "/dynamic-layout-builder.svg",
    image: "/dynamic-layout-builder.png",
    description:"This powerful feature puts customization in your hands—no coding required. It streamlines how you design pages and rearrange content, letting you adapt on the fly without missing a beat. From quick tweaks to total overhauls, this flexible feature empowers you to keep your layouts fresh, consistent, and perfectly aligned with changing needs or creative visions."
  },
  {
    id: "crm-management",
    title: "CRM Management",
    icon: "/crm-management.svg",
    image: "/crm-management.png",
    description:"Our robust CRM management feature centralizes all your customer data, simplifying how you track interactions, manage leads, and foster long-term relationships. By automating routine tasks and providing valuable insights, it frees your team to focus on personalized service—boosting efficiency, closing deals faster, and keeping customers delighted every step of the way."
  },
  {
    id: "affiliate-tools",
    title: "Affiliate Tools",
    icon: "/affiliate-tools.svg",
    image: "/affiliate-tools.png",
    description:"The affiliate management feature centralizes all your affiliate partnerships, streamlining payouts and performance tracking in one intuitive hub. By providing real-time analytics and automated commission calculations, it simplifies oversight, reduces errors, and cultivates stronger relationships with your partners—ultimately expanding your reach and boosting revenue growth."
  },
  {
    id: "automatic-kyc-and-aml-solutions",
    title: "Automatic KYC and AML Solutions",
    icon: "/automatic-kyc-and-aml-solutions.svg",
    image: "/automatic-kyc-and-aml-solutions.png",
    description:"The feature ensures you stay compliant with regulations while protecting your business from fraud and financial crime. By verifying customer identities and monitoring transactions in real time, it reduces risk, safeguards your reputation, and fosters trust in your platform—resulting in a more secure and credible setup for all."
  },
  {
    id: "iframe-and-white-label-solutions",
    title: "Iframe and White-Label Solutions",
    icon: "/iframe-and-white-label-solutions.svg",
    image: "/iframe-and-white-label-solutions.png",
    description:"Our iframe integration lets you effortlessly embed external functionalities into your existing platform, minimizing development time while maximizing user engagement. Meanwhile, our robust White-Label solution ensures everything appears under your own brand, delivering a seamless experience for customers and reinforcing your identity promptly."
  },
];

export const dynamic_feature_data: CommonFeatureProps[] = [
  {
    id: "security",
    title: "Security",
    icon: "/dynamic-features/security-icon.svg",
    image: "/dynamic-features/security-bg.png",
    description:"Industry-standard encryption and fraud detection systems."
  },
  {
    id: "scalability",
    title: "Scalability",
    icon: "/dynamic-features/scalability-icon.svg",
    image: "/dynamic-features/scalability-bg.png",
    description:"Effortlessly manage thousands of concurrent users."
  },
  {
    id: "multi-language",
    title: "Multi-Language and Multi-Currency Support",
    icon: "/dynamic-features/multi-language-icon.svg",
    image: "/dynamic-features/multi-language-bg.png",
    description:"Reach global audiences with ease."
  },
  {
    id: "analytics",
    title: "Analytics",
    icon: "/dynamic-features/analytics-icon.svg",
    image: "/dynamic-features/analytics-bg.png",
    description:"Gain actionable insights through real-time reporting tools."
  },
  {
    id: "mobile-optimization",
    title: "Mobile Optimization",
    icon: "/dynamic-features/mobile-optimization-icon.svg",
    image: "/dynamic-features/mobile-optimization-bg.png",
    description:"Ensure seamless gaming experiences across devices."
  },
];

export const partners_data: CommonFeatureProps[] = [
  {
    id: "",
    title: "AE Sexy",
    image: "/partners/ae_sexy.png",
  },
  {
    id: "",
    title: "Allbet",
    image: "/partners/allbet.png",
  },
  {
    id: "",
    title: "Asia Gaming",
    image: "/partners/asia_gaming.png",
  },
  {
    id: "",
    title: "Bet Games TV",
    image: "/partners/bet_games_tv.png",
  },
  {
    id: "",
    title: "Betsoft",
    image: "/partners/betsoft.png",
  },
  {
    id: "",
    title: "Bigtime Gaming",
    image: "/partners/bigtime_gaming.png",
  },{
    id: "",
    title: "BTI",
    image: "/partners/bti.png",
  },
  {
    id: "",
    title: "Databet",
    image: "/partners/databet.png",
  },
  {
    id: "",
    title: "Evolution",
    image: "/partners/evolution.png",
  },
  {
    id: "",
    title: "Ezugi",
    image: "/partners/ezugi.png",
  },

  {
    id: "",
    title: "Fantasma",
    image: "/partners/fantasma.png",
  },
  {
    id: "",
    title: "Gamomat",
    image: "/partners/gamomat.png",
  },
  {
    id: "",
    title: "Habanero",
    image: "/partners/habanero.png",
  },
  {
    id: "",
    title: "Hotbets",
    image: "/partners/hotbets.png",
  },
  {
    id: "",
    title: "Iconic 21",
    image: "/partners/iconic21.png",
  },
  {
    id: "",
    title: "JILI",
    image: "/partners/jili.png",
  },
  {
    id: "",
    title: "Kalamba Games",
    image: "/partners/kalamba_games.png",
  },
  {
    id: "",
    title: "Kiron Interactive",
    image: "/partners/kiron_interactive.png",
  },
  {
    id: "",
    title: "Live 88",
    image: "/partners/live88.png",
  },
  {
    id: "",
    title: "Mascot Gaming",
    image: "/partners/mascot_gaming.png",
  },
  {
    id: "",
    title: "MG Live",
    image: "/partners/mg_live.png",
  },
  {
    id: "",
    title: "Microgaming",
    image: "/partners/microgaming.png",
  },
  {
    id: "",
    title: "NETENT",
    image: "/partners/netent.png",
  },
  {
    id: "",
    title: "Nolimit City",
    image: "/partners/nolimit_city.png",
  },
  {
    id: "",
    title: "Pascal Gaming",
    image: "/partners/pascal_gaming.png",
  },
  {
    id: "",
    title: "PG Soft",
    image: "/partners/pgsoft.png",
  },
  {
    id: "",
    title: "Play n GO",
    image: "/partners/play_n_GO.png",
  },
  {
    id: "",
    title: "Playgon",
    image: "/partners/playgon.png",
  },
  {
    id: "",
    title: "Playson",
    image: "/partners/playson.png",
  },
  {
    id: "",
    title: "Playtech",
    image: "/partners/playtech.png",
  },
  {
    id: "",
    title: "Paragmatic Play",
    image: "/partners/pragmatic_play.png",
  },
  {
    id: "",
    title: "Push Gaming",
    image: "/partners/push_gaming.png",
  },
  {
    id: "",
    title: "QTech",
    image: "/partners/qtech.png",
  },
  {
    id: "",
    title: "Red Tiger",
    image: "/partners/red_tiger.png",
  },
  {
    id: "",
    title: "Relax Gaming",
    image: "/partners/relax_gaming.png",
  },
  {
    id: "",
    title: "Revolver Gaming",
    image: "/partners/revolver_gaming.png",
  },
  {
    id: "",
    title: "SA Gaming",
    image: "/partners/sa_gaming.png",
  },
  {
    id: "",
    title: "Smartsoft Gaming",
    image: "/partners/smartsoft_gaming.png",
  },
  {
    id: "",
    title: "Sportsradar",
    image: "/partners/sportsradar.png",
  },
  {
    id: "",
    title: "Spribe",
    image: "/partners/spribe.png",
  },
  {
    id: "",
    title: "Thunderkick",
    image: "/partners/thunderkick.png",
  },
  {
    id: "",
    title: "Tom Horn",
    image: "/partners/tom_horn.png",
  },
  {
    id: "",
    title: "Triple PG",
    image: "/partners/triple_pg.png",
  },
  {
    id: "",
    title: "TV Bet",
    image: "/partners/tvbet.png",
  },
  {
    id: "",
    title: "TXODDS",
    image: "/partners/txodds.png",
  },
  {
    id: "",
    title: "Vivo Gaming",
    image: "/partners/vivo_gaming.png",
  },
  {
    id: "",
    title: "Wazdan",
    image: "/partners/wazdan.png",
  },
  {
    id: "",
    title: "Woohoo",
    image: "/partners/woohoo.png",
  },
  {
    id: "",
    title: "YGGDRASIL",
    image: "/partners/yggdrasil.png",
  },
]
