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
    slug: "/product/live-casino",
    details: {
      overline: "Overview",
      headline: "Live Casino",
      subheadline: "Online live casino gaming has transformed how players experience classic table games like roulette, blackjack, and baccarat. By combining high-definition streaming, real-time interaction with professional dealers, and immersive chat features, and with our platform, you can go the extra mile tailoring this experience and deliver the authenticity of a brick-and-mortar casino directly to your player’s screen."
    },
    features: [
      {
        id: "game-filtration-system",
        title: "Game Filtration System",
        description: "Empowering users to quickly and easily dive directly into their favorite games by applying filters like genres, providers, popularity, featured games and more enhancing the user experience. It’s a smart, efficient way to make every gaming session more enjoyable and personalized.",
        image: "/product-features/live-casino/game-filtration-system.png"
      },
      {
        id: "direct-table-launch",
        title: "Direct Table Launch",
        description: "By displaying your players favorite table games where visible and enabling to launch directly into a specific game instead of a longer process going through the lobby, this eliminates unnecessary navigation, saving time and providing instant access to the action. Whether you're a seasoned player or new to the game, it ensures a seamless, hassle-free experience that keeps the focus on the thrill of playing.",
        image: "/product-features/live-casino/direct-table-launch.png"
      },
      {
        id: "direct-game-category-launch",
        title: "Direct Game Category Launch",
        description: "This feature lets players quickly access their preferred type of games—such as slots, table games, or live casino—without the need to browse extensively. This streamlined navigation saves time and allows players to jump straight into the gaming experience they enjoy most, enhancing convenience and enjoyment with every session.",
        image: "/product-features/live-casino/direct-game-category-launch.png"
      },
      {
        id: "customizable-artwork",
        title: "Customizable artwork?",
        description: "With this flexibility, operators could own multiple brand identities but maintain each in its respective uniqueness in style. By tailoring colors, designs, and themes, they can create an engaging and cohesive aesthetic that resonates with their target audience. This not only boosts the site’s attractiveness but also enhances user retention and builds a memorable, professional impression.",
        image: "/product-features/live-casino/customizable-artwork.png"
      },
    ]
  },
  {
    id: "slots",
    title: "Slots",
    description: `Offering over a hundred providers with loads of exciting games, you could fully customize and strategize your website to further target and reach more players.`,
    image: "/home-slots.png",
    icon: "/slots-icon.svg",
    prod_image: "/product-slots-img.png",
    pattern_image: "/single-blurred-pattern.svg",
    slug: "/product/slots",
    details: {
      overline: "Overview",
      headline: "Slots",
      subheadline: "With the ever-innovation of this powerful and sophisticated platform of games, we at RWB pride ourselves on offering nothing but the best providers in the industry. Ranging over a hundred providers, we carry every exciting game to meet your market’s expectations. And with our flexible platform, you could customize and strategize your website to further target and reach more players."
    },
    features: [
      {
        id: "game-filtration-system",
        title: "Game Filtration System",
        description: "Empowering users to quickly and easily dive directly into their favorite games by applying filters like genres, providers, popularity, featured games and more enhancing the user experience. It’s a smart, efficient way to make every gaming session more enjoyable and personalized.",
        image: "/product-features/slots/game-filtration-system.png"
      },
      {
        id: "game-classification",
        title: "Game Classification",
        description: "This feature allows the operator to organize games into clear categories based on genre, features, providers, or however you see fit tailoring to your market requirement making it easier for users to find exactly what they're looking for, and for operators to upsell certain games.",
        image: "/product-features/slots/game-classification.png"
      },
      {
        id: "game-categorization",
        title: "Game Categorization",
        description: "Groups games into intuitive categories such as genres, themes, or features, simplifying the navigation process for users.By organizing content in a more accessible way, operators could also utilize this feature to strategically design their platform to meet their players expectations. This streamlined approach enhances user satisfaction and makes exploring the platform more enjoyable and efficient.",
        image: "/product-features/slots/game-categorization.png"
      },
      {
        id: "game-search",
        title: "Game Search",
        description: "By allowing users to quickly locate specific games by typing in keywords, titles, or features. This eliminates the need for extensive browsing, saving time and effort. By providing instant results, it enhances the navigation experience, making it easier for users to dive straight into the games they love or explore new ones that match their interests.",
        image: "/product-features/slots/game-search.png"
      },
      {
        id: "favourite-game-function",
        title: "Favourite Game Function",
        description: "Similar to a ‘wish list’ feature, this allows users to save and access their most-loved games in once convenient location. This eliminates the hassle of repeatedly searching for preferred titles, making navigation faster and more personalized. With just a click, players can return to their favorites, enhancing convenience and creating a tailored gaming experience.",
        image: "/product-features/slots/favourite-game-function.png"
      },
      {
        id: "jackpot-widget",
        title: "Jackpot Widget",
        description: "This satisfying addition will instantly grab users attention and create excitement with its real-time updates on jackpot values. For players, it offers a quick view of the biggest potential wins, making it easier to engage with high-stakes games. For operators, it enhances user engagement, drives traffic to jackpot games, and boosts overall platform activity, contributing to increased revenue opportunities.",
        image: "/product-features/slots/jackpot-widget.png"
      },
      {
        id: "customizable-artwork",
        title: "Customizable artwork?",
        description: "With this flexibility, operators could own multiple brand identities but maintain each in its respective uniqueness in style. By tailoring colors, designs, and themes, they can create an engaging and cohesive aesthetic that resonates with their target audience. This not only boosts the site’s attractiveness but also enhances user retention and builds a memorable, professional impression.",
        image: "/product-features/slots/customizable-artwork.png"
      },
    ]
  },
  {
    id: "sportsbook",
    title: "Sportsbook",
    description: `Modern interface, wide sports coverage, convenient live streaming options and loads of personalization to meet your market strategy requirements.`,
    image: "/home-sportbooks.png",
    icon: "/sportsbook-icon.svg",
    prod_image: "/product-sportsbook-img.png",
    pattern_image: "/single-blurred-pattern.svg",
    slug: "/product/sportsbook",
    details: {
      overline: "Overview",
      headline: "Sportsbook",
      subheadline: "Discover the ultimate betting destination with coverage of 50+ sports, enhanced odds, and 30,000+ live events every month. Elevate your game with our advanced tools, including in-depth stats, real-time match trackers, live streams, and trending hot bets, all designed to deliver a seamless and exhilarating experience."
    },
    features: [
      {
        id: "comprehensive-coverage",
        title: "Comprehensive Coverage",
        description: "Covering over 50 major and niche sports ensuring every fan finds their favorite game on our platform. From globally celebrated leagues to lesser-known competitions, we provide detailed insights, live updates, and betting opportunities for a wide array of sports. This feature caters to diverse interests, enhancing user engagement and making our platform a one-stop destination for sports enthusiasts of all kinds.",
        image: "/product-features/sportsbook/comprehensive-coverage.png"
      },
      {
        id: "extensive-real-time-betting-opportunities",
        title: "Extensive Real-Time Betting Opportunities",
        description: "Our sportsbook’s ability to cover over 30,000 live events monthly ensures unparalleled access to global sports action. From major tournaments to niche competitions, users can enjoy real-time updates, dynamic betting opportunities, and an immersive experience every day. This extensive coverage sets us apart, offering something for every sports fan, anytime, anywhere.",
        image: "/product-features/sportsbook/extensive-real-time-betting-opportunities.png"
      },
      {
        id: "major-and-custom-made-markets",
        title: "Major and Custom-Made Markets",
        description: "This feature allows us to tailor betting markets to suit regional trends and individual user interests. Whether it’s popular sports in one area or niche preferences in another, this flexibility ensures a personalized experience. By catering to diverse needs, we create a platform that feels relevant, engaging, and user-focused, enhancing satisfaction and loyalty.",
        image: "/product-features/sportsbook/major-and-custom-made-markets.png"
      },
      {
        id: "enriched-odds",
        title: "Enriched Odds",
        description: "This elevates the betting experience by offering competitive and dynamic odds that maximize value for users. By leveraging advanced algorithms and real-time data, we ensure odds remain attractive and up-to-date, giving bettors more opportunities to win. This feature not only enhances user satisfaction but also solidifies our platform as a trusted and rewarding sportsbook destination.",
        image: "/product-features/sportsbook/enriched-odds.png"
      },
      {
        id: "hot-bets",
        title: "Hot Bets",
        description: "This feature is built around a robust mathematical model and advanced features, designed to deliver thrilling gameplay tailored to different sports and events. It delivers microbetting markets across the most popular sports, including Football, Basketball, Cricket, Baseball and more. This feature enhances engagement, giving bettors the flexibility to craft personalized bets that match their strategies and excitement levels.",
        image: "/product-features/sportsbook/hot-bets.png"
      },
      {
        id: "stats-and-match-tracker",
        title: "Stats and Match Tracker",
        description: "With real-time data and detailed insights into ongoing games, this tool empowers bettors to make informed decisions quickly and confidently. By delivering a dynamic and interactive experience, it keeps users engaged and enhances the overall excitement of the betting journey.",
        image: "/product-features/sportsbook/stats-and-match-tracker.png"
      },
      {
        id: "live-stream",
        title: "Live Stream",
        description: "An essential feature for any sportsbook platform, it brings the action directly to the users, creating an immersive and engaging experience. By allowing bettors to watch events in real time, it enhances decision-making, keeps users invested, and encourages in-play betting.",
        image: "/product-features/sportsbook/live-stream.png"
      },
    ]
  },
  {
    id: "esports",
    title: "Esports",
    description: `State-of-the-art design, major tournament coverages, user-friendly interface, multi-channel live streaming and a whole lot of customizations.`,
    image: "/home-esports.png",
    icon: "/esports-icon.svg",
    prod_image: "/product-esports-img.png",
    pattern_image: "/single-blurred-pattern.svg",
    slug: "/product/esports",
    details: {
      overline: "Overview",
      headline: "Esports",
      subheadline: "For esports enthusiasts, we bring you closer to the action than ever before! Access all major tournaments, stay ahead with real-time stats, immerse yourself in live streams, and enjoy a tailored UI & UX crafted specifically to enhance fan engagement."
    },
    features: [
      {
        id: "all-major-tournaments",
        title: "All Major Tournaments",
        description: "Comprehensive coverage of key E-Sports events, major tournaments and leagues across various titles like Counter-Strike 2 (CS2), Dota 2, League of Legends, Valorant, Call of Duty, Rocket League, Rainbow six Siege and many more. Enhancing the engagement by providing instant access to the latest action, allowing them to follow their favorite teams and make informed betting or viewing decisions. Operators can also increase platform activity, attract esports enthusiasts, and drive user retention and interactive experience.",
        image: "/product-features/esports/all-major-tournaments.png"
      },
      {
        id: "real-time-stats",
        title: "Real-Time Stats",
        description: "Delivering up-to-the-second data during gameplay, and events directly to your platform. Enhancing engagement by providing immediate insights that inform their decisions, whether they’re watching, betting, or analyzing. This may also allow operators to drive interaction, boost credibility, and keep users returning for the most accurate, dynamic, and timely information.",
        image: "/product-features/esports/real-time-stats.png"
      },
      {
        id: "live-stream",
        title: "Live Stream",
        description: "A must-have feature that transforms an esports platform into an immersive hub, allowing users to watch matches and tournaments in real time with high-quality streaming. This feature enhances engagement by letting fans experience the action as it unfolds, interact with other viewers, and stay connected to their favorite teams and players. For operators, this opens up doors to monetization opportunities like ads, subscriptions, and exclusive content.",
        image: "/product-features/esports/live-streaming.png"
      },
      {
        id: "unique-ux",
        title: "Unique UX",
        description: "With years of expertise in crafting bespoke website designs, we specialize in bringing each client’s unique vision to life. Our team combines creativity, innovation, and technical precision to deliver tailored solutions that not only captivate visually but also function seamlessly. Every project is a collaboration, ensuring the final product reflects your brand identity while providing an exceptional user experience. Partner with us to create a website that’s as unique as your business.",
        image: "/product-features/esports/unique-ux.png"
      },
    ]
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

export const core_values_data = [
  {
    id: "innovation-driven-excellence",
    title: "Innovation-Driven Excellence",
    description: "At the heart of iGaming success lies a commitment to innovation. Leveraging cutting-edge technology, RWB Solutions International creates scalable, forward-thinking solutions that empower operators to remain competitive in a dynamic market. Collaborations with industry leaders like Evolution and PragmaticPlay ensure access to the latest advancements and premium content, helping operators stay ahead of the curve.",
  },
  {
    id: "tailored-flexibility",
    title: "Tailored Flexibility",
    description: "Every iGaming business is unique, and RWB Solutions embraces this diversity by offering highly customizable solutions. From platform integrations to operational tools, flexibility ensures that operators can align the technology with their specific needs, driving greater engagement and operational efficiency. This adaptability allows businesses to seamlessly evolve with market trends and consumer preferences.",
  },
  {
    id: "expertise-and-partnership",
    title: "Expertise and Partnership",
    description: "Success in the iGaming industry requires more than just great tools—it demands trusted guidance. RWB Solutions International prides itself on being a premier partner, combining deep industry knowledge with strategic insights to help operators thrive. With a customer-first approach and a dedication to building lasting relationships, RWB ensures businesses have the support they need to excel in a competitive landscape.",
  }
]