// Single source of truth for every price, phone number, address and hour on the site.
// Nothing below is duplicated in a page file. Fix a number here and it is fixed everywhere.
//
// SOURCE KEY
//   [live]    published on ironworksgym247.com, verified 2026-09-15
//   [owner]   given by the owner via Justin, 2026-09-15
//   [UNCONFIRMED] carried over from the InstaWP demo with no traceable source.
//                 Rendered on the page with a yellow CONFIRM chip so it cannot ship by accident.

export const biz = {
  name: "Ironworks Gym",
  tagline: "Where weakness comes to die.",
  phone: "(530) 272-9462",          // [live] the only number published anywhere on the real site
  phoneHref: "tel:+15302729462",
  email: "Ironworksgym247@gmail.com",
  owner: "Curtis Pracht",
  est: 2004,
};

export const gym = {
  label: "Ironworks Gym",
  address: "153 South Auburn Street",
  city: "Grass Valley, CA 95945",
  hours: [
    ["Member access", "24 hours, 7 days"],
    ["Staffed hours", "CONFIRM CURRENT HOURS"],   // [UNCONFIRMED] demo said "by appointment until September"
  ],
  hoursUnconfirmed: true,
};

export const combat = {
  label: "Combat Training Center",
  address: "158 Olympia Park Road",
  city: "Grass Valley, CA 95945",
  est: 1989,
  lineage: "Formerly T-5 Boxing, established 1989 by Rocky Twitchell Sr.",
  hours: [
    ["Monday – Thursday", "4:30 PM – 8:30 PM"],   // [live]
    ["Saturday", "11:00 AM – 1:30 PM"],           // [live] matches the Saturday classes
    ["Friday & Sunday", "Closed"],                // [live]
  ],
};

// ---------------------------------------------------------------- gym rates

export const gymRates = {
  plans: [
    { name: "Monthly Membership", price: "$50", per: "per month",
      terms: "24/7 member access, all equipment, locker rooms.", source: "owner" },
    { name: "Day Pass", price: "$5", per: "per day",
      terms: "One day of access to the gym, accompanied by a member.", source: "owner" },
  ],
  // The demo showed a $499 ANNUAL card. The owner gave a monthly rate and a day pass and
  // said nothing about an annual plan, so it is not repriced here, it is pulled and
  // parked until someone confirms an annual option exists at all.
  parked: [
    { name: "Annual Membership", was: "$499/year",
      question: "Does an annual plan exist? If not this card stays deleted." },
    { name: "Key fob fee", was: "referenced with no amount",
      question: "What is the one-time key fob fee?" },
  ],
};

// ------------------------------------------------------------- combat rates
// All [live], from ironworksgym247.com/combat-pricing, verified 2026-09-15.

export const combatRates = {
  groups: [
    {
      title: "Solo Memberships",
      blurb: "Pick the package that fits your week. Jiu-Jitsu is priced separately below.",
      rows: [
        ["Basic 2 Class Package", "Any 2 classes per week. Jiu-Jitsu excluded.", "$80"],
        ["4 Class Package", "Any 4 classes per week. Jiu-Jitsu excluded.", "$125"],
        ["Single Class Drop In", "Drop in anytime for a workout or class.", "$15"],
      ],
    },
    {
      title: "You and Your Family",
      blurb:
        "Many members like the idea of training with a partner, or want to get family involved. " +
        "We understand the need to train as a team, so we offer discounted rates for groups.",
      rows: [
        ["Basic 2 Class Package for 2 people", "Each member attends any 2 classes per week. Jiu-Jitsu excluded.", "$140"],
        ["4 Class Package for 2 people", "Any 4 classes per week. Jiu-Jitsu excluded.", "$240"],
      ],
    },
    {
      title: "Jiu-Jitsu",
      blurb: "Jiu-Jitsu runs on its own packages, and can be combined with any other class.",
      rows: [
        ["2 Jiu-Jitsu Classes a Week", "Any 2 Jiu-Jitsu classes per week.", "$85"],
        ["4 Classes a Week Total", "Any 2 Jiu-Jitsu classes plus any 2 other classes.", "$125"],
        ["TAKE IT ALL — Unlimited", "All Jiu-Jitsu, MMA, Boxing and every other class, for a month.", "$180"],
      ],
    },
    {
      title: "Walk-Ins",
      blurb: null,
      rows: [
        ["Non-Member Open Gym", "Come box during open gym without a membership.", "$5"], // [owner] confirmed real, distinct from the gym day pass
      ],
    },
  ],
  footnote: "Not all price options are listed. Call us for more information.",
  // Present on the demo, absent from the live price sheet. Parked, not published.
  parked: [
    { name: "Patriot Combat", was: "$100/month, $25 class pass",
      question: "Is Patriot Combat running, and at what price? Dan & Debbie Lovas teach it." },
    { name: "10 Class Punch Card", was: "$130, 6 month expiry",
      question: "Is the punch card real?" },
  ],
};

// ----------------------------------------------------------------- schedule
// [live-demo] the weekly grid from the Combat demo. Six of these class times fall
// BEFORE the 4:30 PM opening listed in combat.hours. Flagged on the page.

export const schedule = [
  { day: "Monday", classes: [
    ["9:00am", "Women's Combat Fitness", "Ages 13+", true],
    ["4:00pm", "Kid's Brazilian Jiu-Jitsu", "Ages 6-13", false],
    ["5:00pm", "Kid's Boxing", "Ages 5-12", false],
    ["5:30pm", "Adult American Jiu-Jitsu", "Ages 14+", true],
    ["6:15pm", "Adult Boxing HIIT Warmup", "Not mandatory", false],
    ["6:30pm", "Adult Boxing", "Ages 12+", false],
  ]},
  { day: "Tuesday", classes: [
    ["3:45pm", "Kid's Kickboxing", "Ages 4-10", false],
    ["5:00pm", "Youth MMA", "Ages 10-14", true],
    ["5:00pm", "Adult American Jiu-Jitsu Gi Class", "Ages 14+, Gi class", true],
    ["6:00pm", "Adult MMA", "Ages 15+", false],
    ["7:00pm", "Muay Thai", "Ages 15+", false],
  ]},
  { day: "Wednesday", classes: [
    ["9:00am", "Women's Combat Fitness", "Ages 13+", true],
    ["4:00pm", "Kid's Brazilian Jiu-Jitsu", "Ages 6-13", false],
    ["5:00pm", "Kid's Boxing", "Ages 5-12", false],
    ["6:15pm", "Adult Boxing HIIT Warmup", "Not mandatory", false],
    ["6:30pm", "Adult Boxing", "Ages 12+", false],
  ]},
  { day: "Thursday", classes: [
    ["3:45pm", "Kid's Kickboxing", "Ages 4-10", false],
    ["5:00pm", "Adult American Jiu-Jitsu", "Ages 14+", true],
    ["5:00pm", "Youth MMA", "Ages 10-14", true],
    ["6:00pm", "Adult MMA", "Ages 15+", false],
    ["7:00pm", "Muay Thai", "Ages 15+", false],
  ]},
  { day: "Saturday", classes: [
    ["11:00am", "Kid's Boxing", "Ages 5-12", false],
    ["11:00am – 12:00pm", "Open Gym, Back Room", "", false],
    ["12:00pm", "Adult Boxing", "Ages 12+", false],
    ["12:00pm – 1:30pm", "Open Gym", "", false],
  ]},
];

// ------------------------------------------------------------------ coaches

export const coaches = [
  {
    name: "Nick Sperling",
    role: "MMA Coach",
    bio: [
      "As a mixed martial artist, I trained for over twenty years. During that time I spent twelve years fighting inside the cage for organizations such as Cage Warriors, Pure Combat, Gladiator Challenge, King of the Cage, and Bellator. In September of 2013 I won the Gladiator Challenge 135 belt.",
      "I have trained under amazing coaches such as Mike Rumsey, Lisa Jeanson, Michael Quaintance, and Jamie Jara, and even had the privilege of being in three of their corners for their professional fights. As a coach I have helped fighters chase their dream in multiple organizations, two students with undefeated records and another winning the Pure Combat title. I have also helped countless students use MMA to lose weight, get stronger, and build confidence.",
      "Our fight style at Ironworks MMA favors striking, although we are a well-rounded team. We put emphasis on mastering the basics and perfecting technique. What I am most proud of is not the titles or belts I have received, but the friendships with coaches and students I have made.",
    ],
    sourced: true,
  },
  {
    name: "Oliver Berkland",
    role: "Boxing and Fight Coach",
    bio: [
      "I have been training multiple times a day since 2021 and coaching since the winter of 2023. Having competed in multiple Muay Thai and Point Boxing tournaments, I have become a valued coach who is also an active fighter currently training in MMA.",
      "I grew up scrapping in Iowa, and used training and competition to get me out of destructive habits. I now use what I love to do, fight, in a positive manner. Training has helped me become a positive role model and mentor to kids, especially those growing up in circumstances similar to mine.",
      "What started off as a hobby in boxing quickly became love. The grind of getting better and the sense of togetherness training brings to the community is what inspires me. I have now coached and cornered multiple fighters and have a positive win/loss record in sanctioned competitions.",
    ],
    sourced: true,
  },
  {
    name: "Natasha McGown",
    role: "Women's Jiu-Jitsu and Grappling",
    bio: [
      "Hi, my name is Natasha. I have nine years of training Jiu-Jitsu, and am excited to be leading a class that focuses on building confidence and strong technique in a welcoming environment here at Ironworks Combat.",
      "Whether you are brand new or looking to sharpen your skills, you will learn effective movements, improve your fitness, and connect with a community of women who uplift each other on and off the mat.",
    ],
    sourced: false,
  },
  {
    name: "Bob Diminyatz",
    role: "Jiu-Jitsu Black Belt",
    bio: [
      "Bob is an American Jiu-Jitsu black belt who has studied under masters Christopher Bradford, Clement Shields, and Jacob Horton. He is a successful competitor with years of teaching experience, and his grappling style is a blend of American Folkstyle wrestling and classic Jiu-Jitsu.",
      "As a coach he holds a high standard for technique and high expectations for his students. His number one goal is to give all of his students a deep understanding of grappling, and his students often say he has a special way of making complicated techniques and concepts easily digestible.",
    ],
    sourced: true,
  },
  {
    name: "Dan & Debbie Lovas",
    role: "Patriot Combat & Women's Combat Fitness",
    bio: [
      "Dan and Debbie Lovas have been teaching martial arts for almost 30 years.",
      "Dan is an 8th degree black belt in Taekwondo and a 3rd degree black belt in Japanese Jujitsu, a Silat graduate, and a black belt in Kung Fu and Escrima. He is also a certified criminal counter-measures, pressure point control tactics, and bladed weapons instructor.",
      "Debbie is a 6th degree black belt in Taekwondo, a black belt in kickboxing, and a retired MMA fighter.",
    ],
    sourced: false,
  },
];

export const programs = [
  ["Mixed Martial Arts", "MMA", "Well-rounded fight training. Striking, wrestling, and submissions for sport and self-defense."],
  ["Grappling", "Brazilian Jiu-Jitsu", "Ground combat and submission grappling. Learn to control opponents with leverage."],
  ["Boxing", "Boxing & Muay Thai", "Stand-up striking for every level, from first-timers to active competitors."],
  ["Youth", "Youth Programs", "Kids and teens build discipline, confidence, and skill in a structured environment."],
  ["Women's", "Women's Combat", "Combat fitness and striking designed for women. Strong, empowering, community-driven."],
];

// -------------------------------------------------------------------- images
// Downloaded from the GoDaddy CDN (see IRONWORKS-GYM.md for the manifest).
// Every description below was verified by opening the file, not inferred from the
// filename. The old manifest's guesses were wrong in two places: blob-6efd83c is the
// Muscle Shop logo, not a background photo, and the 9Z8A set is not generic "gym
// interior", it is a room-by-room set.
//
// IMPORTANT: all 19 images are the main gym at 153 S. Auburn Street. NONE of them show
// the Combat Training Center. No ring, no mats, no boxing gym. Combat has no photography.

const IMG = "/images";

export const img = {
  logo:        { src: `${IMG}/blob-73269b4.png`, alt: "Ironworks Gym bulldog badge logo" },
  shopLogo:    { src: `${IMG}/blob-6efd83c.png`, alt: "Ironworks Gym Muscle Shop logo, est. 2004" },

  // The original site's hero. Mural reads "UNLESS YOU PUKE, FAINT OR DIE, KEEP GOING".
  heroMural:   { src: `${IMG}/IMG_0294_5_6.jpg`, alt: "Gym floor with plate-loaded machines and a painted wall mural reading unless you puke, faint or die, keep going" },
  // Black and white, 120lb Hampton dumbbells receding down the rack. The best photo here.
  dumbbellsBW: { src: `${IMG}/9Z8A6617.jpg`, alt: "Row of heavy cast-iron dumbbells on the rack, black and white" },
  mural:       { src: `${IMG}/9Z8A6616.jpg`, alt: "Weight plates in the foreground with the painted Ironworks Gym bulldog mural behind" },
  cableMural:  { src: `${IMG}/9Z8A6630.jpg`, alt: "Cable machine beside the Ironworks Gym mural and a wall of framed member photos" },
  beastMode:   { src: `${IMG}/9Z8A6621.jpg`, alt: "Power rack against a yellow wall painted Beast Mode On" },
  beastRack:   { src: `${IMG}/9Z8A6625.jpg`, alt: "Squat rack and lifting straps under the Beast Mode On wall" },

  exterior:    { src: `${IMG}/IMG_0981_2_3.jpg`, alt: "Ironworks Gym building exterior on South Auburn Street with the bulldog sign" },
  floorWide:   { src: `${IMG}/9Z8A6560_1_2_3_4.jpg`, alt: "Wide view down the gym floor, red functional trainer in front, dumbbell racks beyond" },
  machinesRed: { src: `${IMG}/9Z8A6580_1_2_3_4.jpg`, alt: "Row of red plate-loaded Hammer Strength machines" },
  machinesRow: { src: `${IMG}/9Z8A6570_1_2_3_4.jpg`, alt: "Two facing rows of plate-loaded machines down the length of the floor" },
  uspa:        { src: `${IMG}/9Z8A6585_6_7_8_9.jpg`, alt: "Leg press and plate-loaded machines beneath a United States Powerlifting Association banner" },
  selectorized:{ src: `${IMG}/9Z8A6550_1_2_3_4.jpg`, alt: "Selectorized Life Fitness and Atlantis machines along a wall of painted lifter silhouettes" },
  cardioRoom:  { src: `${IMG}/9Z8A6540_1_2_3_4.jpg`, alt: "Cardio room with ellipticals, spin bikes, rowers and a stair climber by the front windows" },
  cardioWindow:{ src: `${IMG}/IMG_0552_3_4.jpg`, alt: "Ellipticals and stair climbers lined up along the window with an Ironworks Gym sign" },
  functional:  { src: `${IMG}/9Z8A6595_6_7_8_9.jpg`, alt: "Open functional training area with heavy bags, medicine balls, TRX straps and a mural reading shut up and train" },
  lockers:     { src: `${IMG}/IMG_0246_7_8.jpg`, alt: "Dumbbell rack in the foreground with lockers and the front desk behind" },
  cableStation:{ src: `${IMG}/IMG_0492_3_4.jpg`, alt: "Red functional trainer and lat pulldown station with the cardio row behind" },
};

// ---------------------------------------------------------- combat media
// Pulled from the Combat InstaWP demo's theme folder (2026-09-16), each file opened and
// checked. These DO show Olympia Park Road, so Combat is not photo-less after all; the
// GoDaddy set simply never included it.
//
// real  = verified to be the actual facility or the actual named person
// stock = generic photo of some other gym. Placeholder only. Flagged on the page.

const CB = "/combat";

export const combatMedia = {
  // 30.6s, 1920x1080, 5.4MB. Boxing bag work and pad work, filmed in front of the
  // COMBAT / TRAINING CENTER stripe, so it is the real room. [real]
  promo: `${CB}/combat-promo-min-compressed.mp4`,
  logo: { src: `${CB}/ironworks-logo.png`, alt: "Ironworks Gym Combat Training Center logo" },

  ring:     { src: `${CB}/gallery-03.jpg`, alt: "The boxing ring under the painted Ironworks Combat Training Center mural", real: true },
  lobby:    { src: `${CB}/gallery-01.jpg`, alt: "Front desk and gear display case at the Combat Training Center", real: true },
  bags:     { src: `${CB}/gallery-02.jpg`, alt: "Row of heavy bags along artificial turf", real: true },
  bagsWide: { src: `${CB}/gallery-04.jpg`, alt: "Wide view of the heavy bag line and training floor", real: true },
  floor:    { src: `${CB}/gallery-05.jpg`, alt: "Open training floor with the roll-up door open to the lot", real: true },
  mats:     { src: `${CB}/gallery-06.jpg`, alt: "Grappling room with a blue wrestling mat", real: true },
  entry:    { src: `${CB}/gallery-07.jpg`, alt: "Lobby seating looking into the bag area", real: true },
  t5Ring:   { src: `${CB}/about-t5-boxing-ring.png`, alt: "The original T-5 Boxing ring with its graffiti wall", real: true },
  mural:    { src: `${CB}/about-combat-center-mural.png`, alt: "The Combat Training Center mural being painted by hand", real: true },

  // Coaches. All five are real photos of the real people. Nick's shows the Gladiator
  // Challenge belt his bio mentions; Oliver's and the Lovas' are taken inside the facility.
  coaches: {
    "Nick Sperling":      { src: `${CB}/stitch-coach-nick.jpg`, alt: "Nick Sperling with his arm raised, wearing a Gladiator Challenge title belt" },
    "Oliver Berkland":    { src: `${CB}/stitch-coach-oliver.png`, alt: "Oliver Berkland leaning on the ring ropes" },
    "Natasha McGown":     { src: `${CB}/stitch-coach-natasha.png`, alt: "Natasha McGown in a jiu-jitsu gi" },
    "Bob Diminyatz":      { src: `${CB}/stitch-coach-bob.jpg`, alt: "Bob Diminyatz in a white gi, arms crossed" },
    "Dan & Debbie Lovas": { src: `${CB}/stitch-coach-lovas.png`, alt: "Dan Lovas demonstrating a defensive technique with a student on the mats" },
  },

  // Program cards. `clip` is a 3-second silent loop that plays on hover.
  //
  // The two clips are cut from the promo above (scripts/cut-clips.sh), so they are real
  // footage of the real room. The promo only contains boxing and kick work, so jiu-jitsu,
  // youth and women's classes have no footage. Those cards animate their still photo
  // instead, and nobody should fake a clip of a class that was never filmed here.
  //
  // BJJ and Youth are still stock photos of OTHER gyms (a white-walled room, a curtained
  // studio) and are tagged on the page. The old MMA stock photo (a cage with non-English
  // signage) is replaced by a frame from its own clip.
  programs: {
    "MMA": { src: `${CB}/clips/mma.jpg`, clip: `${CB}/clips/mma.mp4`,
      alt: "A Combat fighter in his guard, then throwing a front kick", real: true },
    "Brazilian Jiu-Jitsu": { src: `${CB}/stitch-program-bjj.png`,
      alt: "Two grapplers in gis working guard", real: false },
    "Boxing & Muay Thai": { src: `${CB}/gallery-03.jpg`, clip: `${CB}/clips/boxing.mp4`,
      alt: "The Combat Training Center boxing ring", real: true },
    "Youth Programs": { src: `${CB}/stitch-program-youth.png`,
      alt: "Two kids grappling on a mat", real: false },
    "Women's Combat": { src: `${CB}/stitch-coach-lovas.png`,
      alt: "Dan Lovas teaching a women's self-defense technique", real: true },
  },
};

// The carousel on Combat pages: every real photo of the facility.
export const combatGallery = [
  combatMedia.ring, combatMedia.bags, combatMedia.lobby, combatMedia.mats,
  combatMedia.bagsWide, combatMedia.floor, combatMedia.entry, combatMedia.t5Ring,
];

// Front-page gallery. Ordered for variety rather than by filename.
export const gallery = [
  img.dumbbellsBW, img.floorWide, img.uspa,
  img.functional, img.cableMural, img.cardioRoom,
];

// Equipment named here is what is actually visible in the photographs.
export const amenities = [
  { name: "Weight Machines",
    detail: "Plate-loaded Hammer Strength and Atlantis stations, Life Fitness selectorized machines, leg press and hack squat, and isolation work for every major muscle group.",
    shot: img.machinesRed },
  { name: "Free Weights",
    detail: "Hampton dumbbells running up to the heavy end of the rack, multiple squat and bench racks, olympic bars, specialty bars, chains and bands.",
    shot: img.dumbbellsBW },
  { name: "Cardio",
    detail: "Life Fitness ellipticals, Stages spin bikes, Concept2 rowers, treadmills and StairMasters, lined up along the front windows.",
    shot: img.cardioRoom },
  { name: "Functional & Recovery",
    detail: "An open back room with heavy bags, medicine balls, TRX straps, foam rollers, plyo boxes and room to actually move.",
    shot: img.functional },
  { name: "Powerlifting",
    detail: "A USPA-affiliated floor. Competition-grade racks, benches and plates, and the people who know how to use them.",
    shot: img.uspa },
  { name: "Personal Training",
    detail: "Curtis and staff, with a focus that runs from post-rehab all the way to competitive athletes.",
    shot: img.cableStation,
    id: "personal-training" },
  { name: "Facility",
    detail: "Locker rooms, 24/7 member key fob access, the Muscle Shop at the front desk, and a floor that stays clean.",
    shot: img.lockers },
];
