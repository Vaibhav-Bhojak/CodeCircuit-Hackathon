// Element information data for all 118 elements
const elementInfo = {
    hydrogen: {
        name: "Hydrogen",
        symbol: "H",
        atomicNumber: 1,
        atomicMass: "1.008",
        category: "Nonmetal",
        description: "The lightest and most abundant element in the universe. It's a colorless, odorless gas that is highly flammable."
    },
    helium: {
        name: "Helium",
        symbol: "He",
        atomicNumber: 2,
        atomicMass: "4.0026",
        category: "Noble Gas",
        description: "A colorless, odorless, tasteless, non-toxic, inert gas. It's the second lightest element and is used in balloons and cryogenic research."
    },
    lithium: {
        name: "Lithium",
        symbol: "Li",
        atomicNumber: 3,
        atomicMass: "6.94",
        category: "Alkali Metal",
        description: "A soft, silvery-white alkali metal. It's the lightest metal and is used in batteries and psychiatric medication."
    },
    beryllium: {
        name: "Beryllium",
        symbol: "Be",
        atomicNumber: 4,
        atomicMass: "9.0122",
        category: "Alkaline Earth Metal",
        description: "A relatively rare element that is toxic to humans. It's used in aerospace applications and nuclear reactors."
    },
    boron: {
        name: "Boron",
        symbol: "B",
        atomicNumber: 5,
        atomicMass: "10.81",
        category: "Metalloid",
        description: "A metalloid that is essential for plant growth. It's used in fiberglass, ceramics, and as a neutron absorber."
    },
    carbon: {
        name: "Carbon",
        symbol: "C",
        atomicNumber: 6,
        atomicMass: "12.011",
        category: "Nonmetal",
        description: "The basis of all known life. It forms the backbone of organic chemistry and is found in all living organisms."
    },
    nitrogen: {
        name: "Nitrogen",
        symbol: "N",
        atomicNumber: 7,
        atomicMass: "14.007",
        category: "Nonmetal",
        description: "The most abundant element in Earth's atmosphere. Essential for life and used in fertilizers and explosives."
    },
    oxygen: {
        name: "Oxygen",
        symbol: "O",
        atomicNumber: 8,
        atomicMass: "15.999",
        category: "Nonmetal",
        description: "Essential for respiration and combustion. The third most abundant element in the universe."
    },
    fluorine: {
        name: "Fluorine",
        symbol: "F",
        atomicNumber: 9,
        atomicMass: "18.998",
        category: "Halogen",
        description: "The most reactive element. Used in toothpaste and refrigerants. Highly toxic in its pure form."
    },
    neon: {
        name: "Neon",
        symbol: "Ne",
        atomicNumber: 10,
        atomicMass: "20.180",
        category: "Noble Gas",
        description: "A colorless, odorless noble gas. Used in neon signs and lasers. The fifth most abundant element in the universe."
    },
    sodium: {
        name: "Sodium",
        symbol: "Na",
        atomicNumber: 11,
        atomicMass: "22.990",
        category: "Alkali Metal",
        description: "A highly reactive metal. Essential for nerve function and used in street lights and as a coolant in nuclear reactors."
    },
    magnesium: {
        name: "Magnesium",
        symbol: "Mg",
        atomicNumber: 12,
        atomicMass: "24.305",
        category: "Alkaline Earth Metal",
        description: "Essential for life, used in alloys and as a reducing agent. The eighth most abundant element in the Earth's crust."
    },
    aluminum: {
        name: "Aluminum",
        symbol: "Al",
        atomicNumber: 13,
        atomicMass: "26.982",
        category: "Post-Transition Metal",
        description: "The most abundant metal in Earth's crust. Used in aircraft, packaging, and construction."
    },
    silicon: {
        name: "Silicon",
        symbol: "Si",
        atomicNumber: 14,
        atomicMass: "28.085",
        category: "Metalloid",
        description: "The second most abundant element in Earth's crust. Essential for electronics and solar cells."
    },
    phosphorus: {
        name: "Phosphorus",
        symbol: "P",
        atomicNumber: 15,
        atomicMass: "30.974",
        category: "Nonmetal",
        description: "Essential for life, found in DNA and ATP. Used in fertilizers and matches."
    },
    sulfur: {
        name: "Sulfur",
        symbol: "S",
        atomicNumber: 16,
        atomicMass: "32.065",
        category: "Nonmetal",
        description: "A yellow nonmetal. Used in gunpowder, rubber vulcanization, and fertilizers."
    },
    chlorine: {
        name: "Chlorine",
        symbol: "Cl",
        atomicNumber: 17,
        atomicMass: "35.453",
        category: "Halogen",
        description: "A greenish-yellow gas. Used in water treatment and as a disinfectant."
    },
    argon: {
        name: "Argon",
        symbol: "Ar",
        atomicNumber: 18,
        atomicMass: "39.948",
        category: "Noble Gas",
        description: "The third most abundant gas in Earth's atmosphere. Used in welding and lighting."
    },
    potassium: {
        name: "Potassium",
        symbol: "K",
        atomicNumber: 19,
        atomicMass: "39.098",
        category: "Alkali Metal",
        description: "Essential for nerve function. Used in fertilizers and as a coolant in nuclear reactors."
    },
    calcium: {
        name: "Calcium",
        symbol: "Ca",
        atomicNumber: 20,
        atomicMass: "40.078",
        category: "Alkaline Earth Metal",
        description: "Essential for bones and teeth. The fifth most abundant element in Earth's crust."
    },
    scandium: {
        name: "Scandium",
        symbol: "Sc",
        atomicNumber: 21,
        atomicMass: "44.956",
        category: "Transition Metal",
        description: "A rare earth metal. Used in aerospace components and sports equipment."
    },
    titanium: {
        name: "Titanium",
        symbol: "Ti",
        atomicNumber: 22,
        atomicMass: "47.867",
        category: "Transition Metal",
        description: "Strong, lightweight metal. Used in aircraft, medical implants, and jewelry."
    },
    vanadium: {
        name: "Vanadium",
        symbol: "V",
        atomicNumber: 23,
        atomicMass: "50.942",
        category: "Transition Metal",
        description: "Used in steel alloys and as a catalyst. Named after the Scandinavian goddess Vanadis."
    },
    chromium: {
        name: "Chromium",
        symbol: "Cr",
        atomicNumber: 24,
        atomicMass: "51.996",
        category: "Transition Metal",
        description: "Used in stainless steel and chrome plating. Essential trace element for humans."
    },
    manganese: {
        name: "Manganese",
        symbol: "Mn",
        atomicNumber: 25,
        atomicMass: "54.938",
        category: "Transition Metal",
        description: "Essential for steel production and human health. Used in batteries and fertilizers."
    },
    iron: {
        name: "Iron",
        symbol: "Fe",
        atomicNumber: 26,
        atomicMass: "55.845",
        category: "Transition Metal",
        description: "The most common element on Earth. Essential for blood and used in construction."
    },
    cobalt: {
        name: "Cobalt",
        symbol: "Co",
        atomicNumber: 27,
        atomicMass: "58.933",
        category: "Transition Metal",
        description: "Used in magnets and batteries. Essential for vitamin B12 production."
    },
    nickel: {
        name: "Nickel",
        symbol: "Ni",
        atomicNumber: 28,
        atomicMass: "58.693",
        category: "Transition Metal",
        description: "Used in coins and stainless steel. Can cause allergic reactions in some people."
    },
    copper: {
        name: "Copper",
        symbol: "Cu",
        atomicNumber: 29,
        atomicMass: "63.546",
        category: "Transition Metal",
        description: "Excellent conductor of electricity. Used in wiring and coins."
    },
    zinc: {
        name: "Zinc",
        symbol: "Zn",
        atomicNumber: 30,
        atomicMass: "65.380",
        category: "Transition Metal",
        description: "Essential for human health. Used in galvanization and batteries."
    },
    gallium: {
        name: "Gallium",
        symbol: "Ga",
        atomicNumber: 31,
        atomicMass: "69.723",
        category: "Post-Transition Metal",
        description: "Melts in your hand. Used in semiconductors and LEDs."
    },
    germanium: {
        name: "Germanium",
        symbol: "Ge",
        atomicNumber: 32,
        atomicMass: "72.640",
        category: "Metalloid",
        description: "Used in semiconductors and fiber optics. Named after Germany."
    },
    arsenic: {
        name: "Arsenic",
        symbol: "As",
        atomicNumber: 33,
        atomicMass: "74.922",
        category: "Metalloid",
        description: "Highly toxic. Used in semiconductors and wood preservatives."
    },
    selenium: {
        name: "Selenium",
        symbol: "Se",
        atomicNumber: 34,
        atomicMass: "78.960",
        category: "Nonmetal",
        description: "Essential trace element. Used in photocopiers and solar cells."
    },
    bromine: {
        name: "Bromine",
        symbol: "Br",
        atomicNumber: 35,
        atomicMass: "79.904",
        category: "Halogen",
        description: "Only liquid nonmetal at room temperature. Used in flame retardants."
    },
    krypton: {
        name: "Krypton",
        symbol: "Kr",
        atomicNumber: 36,
        atomicMass: "83.798",
        category: "Noble Gas",
        description: "Used in lighting and photography. Named after the Greek word for 'hidden'."
    },
    rubidium: {
        name: "Rubidium",
        symbol: "Rb",
        atomicNumber: 37,
        atomicMass: "85.468",
        category: "Alkali Metal",
        description: "Highly reactive. Used in atomic clocks and medical imaging."
    },
    strontium: {
        name: "Strontium",
        symbol: "Sr",
        atomicNumber: 38,
        atomicMass: "87.62",
        category: "Alkaline Earth Metal",
        description: "Used in fireworks and medical imaging. Named after Strontian, Scotland."
    },
    yttrium: {
        name: "Yttrium",
        symbol: "Y",
        atomicNumber: 39,
        atomicMass: "88.906",
        category: "Transition Metal",
        description: "Used in LEDs and superconductors. Named after Ytterby, Sweden."
    },
    zirconium: {
        name: "Zirconium",
        symbol: "Zr",
        atomicNumber: 40,
        atomicMass: "91.224",
        category: "Transition Metal",
        description: "Used in nuclear reactors and jewelry. Highly resistant to corrosion."
    },
    niobium: {
        name: "Niobium",
        symbol: "Nb",
        atomicNumber: 41,
        atomicMass: "92.906",
        category: "Transition Metal",
        description: "Used in superconducting magnets and jewelry. Named after Niobe."
    },
    molybdenum: {
        name: "Molybdenum",
        symbol: "Mo",
        atomicNumber: 42,
        atomicMass: "95.96",
        category: "Transition Metal",
        description: "Essential for life. Used in steel alloys and catalysts."
    },
    technetium: {
        name: "Technetium",
        symbol: "Tc",
        atomicNumber: 43,
        atomicMass: "98",
        category: "Transition Metal",
        description: "First artificially produced element. Used in medical imaging."
    },
    ruthenium: {
        name: "Ruthenium",
        symbol: "Ru",
        atomicNumber: 44,
        atomicMass: "101.07",
        category: "Transition Metal",
        description: "Used in electronics and jewelry. Named after Russia."
    },
    rhodium: {
        name: "Rhodium",
        symbol: "Rh",
        atomicNumber: 45,
        atomicMass: "102.91",
        category: "Transition Metal",
        description: "Used in catalytic converters and jewelry. One of the rarest elements."
    },
    palladium: {
        name: "Palladium",
        symbol: "Pd",
        atomicNumber: 46,
        atomicMass: "106.42",
        category: "Transition Metal",
        description: "Used in catalytic converters and electronics. Named after Pallas."
    },
    silver: {
        name: "Silver",
        symbol: "Ag",
        atomicNumber: 47,
        atomicMass: "107.87",
        category: "Transition Metal",
        description: "Precious metal. Used in jewelry, photography, and electronics."
    },
    cadmium: {
        name: "Cadmium",
        symbol: "Cd",
        atomicNumber: 48,
        atomicMass: "112.41",
        category: "Transition Metal",
        description: "Toxic heavy metal. Used in batteries and pigments."
    },
    indium: {
        name: "Indium",
        symbol: "In",
        atomicNumber: 49,
        atomicMass: "114.82",
        category: "Post-Transition Metal",
        description: "Used in LCD screens and semiconductors. Named after indigo."
    },
    tin: {
        name: "Tin",
        symbol: "Sn",
        atomicNumber: 50,
        atomicMass: "118.71",
        category: "Post-Transition Metal",
        description: "Used in solder and bronze. One of the first metals used by humans."
    },
    antimony: {
        name: "Antimony",
        symbol: "Sb",
        atomicNumber: 51,
        atomicMass: "121.76",
        category: "Metalloid",
        description: "Used in alloys and semiconductors. Known since ancient times."
    },
    tellurium: {
        name: "Tellurium",
        symbol: "Te",
        atomicNumber: 52,
        atomicMass: "127.60",
        category: "Metalloid",
        description: "Used in solar cells and alloys. Named after Earth."
    },
    iodine: {
        name: "Iodine",
        symbol: "I",
        atomicNumber: 53,
        atomicMass: "126.90",
        category: "Halogen",
        description: "Essential for thyroid function. Used in medicine and photography."
    },
    xenon: {
        name: "Xenon",
        symbol: "Xe",
        atomicNumber: 54,
        atomicMass: "131.29",
        category: "Noble Gas",
        description: "Used in lighting and medical imaging. Named after 'stranger' in Greek."
    },
    cesium: {
        name: "Cesium",
        symbol: "Cs",
        atomicNumber: 55,
        atomicMass: "132.91",
        category: "Alkali Metal",
        description: "Used in atomic clocks. Most reactive metal."
    },
    barium: {
        name: "Barium",
        symbol: "Ba",
        atomicNumber: 56,
        atomicMass: "137.33",
        category: "Alkaline Earth Metal",
        description: "Used in medical imaging and fireworks. Toxic in water-soluble forms."
    },
    lanthanum: {
        name: "Lanthanum",
        symbol: "La",
        atomicNumber: 57,
        atomicMass: "138.91",
        category: "Lanthanide",
        description: "First of the lanthanides. Used in camera lenses and batteries."
    },
    cerium: {
        name: "Cerium",
        symbol: "Ce",
        atomicNumber: 58,
        atomicMass: "140.12",
        category: "Lanthanide",
        description: "Most abundant rare earth element. Used in catalytic converters."
    },
    praseodymium: {
        name: "Praseodymium",
        symbol: "Pr",
        atomicNumber: 59,
        atomicMass: "140.91",
        category: "Lanthanide",
        description: "Used in magnets and alloys. Named for its green color."
    },
    neodymium: {
        name: "Neodymium",
        symbol: "Nd",
        atomicNumber: 60,
        atomicMass: "144.24",
        category: "Lanthanide",
        description: "Used in powerful magnets and lasers. Named for 'new twin'."
    },
    promethium: {
        name: "Promethium",
        symbol: "Pm",
        atomicNumber: 61,
        atomicMass: "145",
        category: "Lanthanide",
        description: "Radioactive element. Used in nuclear batteries."
    },
    samarium: {
        name: "Samarium",
        symbol: "Sm",
        atomicNumber: 62,
        atomicMass: "150.36",
        category: "Lanthanide",
        description: "Used in magnets and nuclear reactors. Named after samarskite."
    },
    europium: {
        name: "Europium",
        symbol: "Eu",
        atomicNumber: 63,
        atomicMass: "151.96",
        category: "Lanthanide",
        description: "Used in phosphors and nuclear control rods. Named after Europe."
    },
    gadolinium: {
        name: "Gadolinium",
        symbol: "Gd",
        atomicNumber: 64,
        atomicMass: "157.25",
        category: "Lanthanide",
        description: "Used in MRI contrast agents and nuclear reactors."
    },
    terbium: {
        name: "Terbium",
        symbol: "Tb",
        atomicNumber: 65,
        atomicMass: "158.93",
        category: "Lanthanide",
        description: "Used in phosphors and magnets. Named after Ytterby."
    },
    dysprosium: {
        name: "Dysprosium",
        symbol: "Dy",
        atomicNumber: 66,
        atomicMass: "162.50",
        category: "Lanthanide",
        description: "Used in magnets and nuclear control rods. Named for 'hard to get'."
    },
    holmium: {
        name: "Holmium",
        symbol: "Ho",
        atomicNumber: 67,
        atomicMass: "164.93",
        category: "Lanthanide",
        description: "Used in magnets and nuclear control rods. Named after Stockholm."
    },
    erbium: {
        name: "Erbium",
        symbol: "Er",
        atomicNumber: 68,
        atomicMass: "167.26",
        category: "Lanthanide",
        description: "Used in fiber optics and lasers. Named after Ytterby."
    },
    thulium: {
        name: "Thulium",
        symbol: "Tm",
        atomicNumber: 69,
        atomicMass: "168.93",
        category: "Lanthanide",
        description: "Rarest rare earth element. Used in portable X-ray devices."
    },
    ytterbium: {
        name: "Ytterbium",
        symbol: "Yb",
        atomicNumber: 70,
        atomicMass: "173.05",
        category: "Lanthanide",
        description: "Used in atomic clocks and lasers. Named after Ytterby."
    },
    lutetium: {
        name: "Lutetium",
        symbol: "Lu",
        atomicNumber: 71,
        atomicMass: "174.97",
        category: "Lanthanide",
        description: "Last of the lanthanides. Used in catalysts and LEDs."
    },
    hafnium: {
        name: "Hafnium",
        symbol: "Hf",
        atomicNumber: 72,
        atomicMass: "178.49",
        category: "Transition Metal",
        description: "Used in nuclear reactors and microprocessors. Named after Copenhagen."
    },
    tantalum: {
        name: "Tantalum",
        symbol: "Ta",
        atomicNumber: 73,
        atomicMass: "180.95",
        category: "Transition Metal",
        description: "Used in capacitors and surgical implants. Named after Tantalus."
    },
    tungsten: {
        name: "Tungsten",
        symbol: "W",
        atomicNumber: 74,
        atomicMass: "183.84",
        category: "Transition Metal",
        description: "Highest melting point of all elements. Used in light bulb filaments."
    },
    rhenium: {
        name: "Rhenium",
        symbol: "Re",
        atomicNumber: 75,
        atomicMass: "186.21",
        category: "Transition Metal",
        description: "One of the rarest elements. Used in high-temperature alloys."
    },
    osmium: {
        name: "Osmium",
        symbol: "Os",
        atomicNumber: 76,
        atomicMass: "190.23",
        category: "Transition Metal",
        description: "Densest naturally occurring element. Used in pen tips and electrical contacts."
    },
    iridium: {
        name: "Iridium",
        symbol: "Ir",
        atomicNumber: 77,
        atomicMass: "192.22",
        category: "Transition Metal",
        description: "Most corrosion-resistant element. Used in spark plugs and jewelry."
    },
    platinum: {
        name: "Platinum",
        symbol: "Pt",
        atomicNumber: 78,
        atomicMass: "195.08",
        category: "Transition Metal",
        description: "Precious metal. Used in catalytic converters and jewelry."
    },
    gold: {
        name: "Gold",
        symbol: "Au",
        atomicNumber: 79,
        atomicMass: "196.97",
        category: "Transition Metal",
        description: "Precious metal. Used in jewelry, electronics, and currency."
    },
    mercury: {
        name: "Mercury",
        symbol: "Hg",
        atomicNumber: 80,
        atomicMass: "200.59",
        category: "Transition Metal",
        description: "Only metal liquid at room temperature. Toxic. Used in thermometers."
    },
    thallium: {
        name: "Thallium",
        symbol: "Tl",
        atomicNumber: 81,
        atomicMass: "204.38",
        category: "Post-Transition Metal",
        description: "Highly toxic. Used in electronics and medical imaging."
    },
    lead: {
        name: "Lead",
        symbol: "Pb",
        atomicNumber: 82,
        atomicMass: "207.2",
        category: "Post-Transition Metal",
        description: "Heavy metal. Used in batteries and radiation shielding."
    },
    bismuth: {
        name: "Bismuth",
        symbol: "Bi",
        atomicNumber: 83,
        atomicMass: "208.98",
        category: "Post-Transition Metal",
        description: "Least toxic heavy metal. Used in cosmetics and pharmaceuticals."
    },
    polonium: {
        name: "Polonium",
        symbol: "Po",
        atomicNumber: 84,
        atomicMass: "209",
        category: "Metalloid",
        description: "Highly radioactive. Named after Poland."
    },
    astatine: {
        name: "Astatine",
        symbol: "At",
        atomicNumber: 85,
        atomicMass: "210",
        category: "Halogen",
        description: "Rarest naturally occurring element. Radioactive."
    },
    radon: {
        name: "Radon",
        symbol: "Rn",
        atomicNumber: 86,
        atomicMass: "222",
        category: "Noble Gas",
        description: "Radioactive noble gas. Second leading cause of lung cancer."
    },
    francium: {
        name: "Francium",
        symbol: "Fr",
        atomicNumber: 87,
        atomicMass: "223",
        category: "Alkali Metal",
        description: "Most unstable naturally occurring element. Named after France."
    },
    radium: {
        name: "Radium",
        symbol: "Ra",
        atomicNumber: 88,
        atomicMass: "226",
        category: "Alkaline Earth Metal",
        description: "Highly radioactive. Used in cancer treatment. Named for its radioactivity."
    },
    actinium: {
        name: "Actinium",
        symbol: "Ac",
        atomicNumber: 89,
        atomicMass: "227",
        category: "Actinide",
        description: "First of the actinides. Highly radioactive. Named for its radioactivity."
    },
    thorium: {
        name: "Thorium",
        symbol: "Th",
        atomicNumber: 90,
        atomicMass: "232.04",
        category: "Actinide",
        description: "Used in nuclear reactors. Named after Thor."
    },
    protactinium: {
        name: "Protactinium",
        symbol: "Pa",
        atomicNumber: 91,
        atomicMass: "231.04",
        category: "Actinide",
        description: "Highly radioactive. Named for 'parent of actinium'."
    },
    uranium: {
        name: "Uranium",
        symbol: "U",
        atomicNumber: 92,
        atomicMass: "238.03",
        category: "Actinide",
        description: "Used in nuclear power and weapons. Named after Uranus."
    },
    neptunium: {
        name: "Neptunium",
        symbol: "Np",
        atomicNumber: 93,
        atomicMass: "237",
        category: "Actinide",
        description: "First transuranic element. Named after Neptune."
    },
    plutonium: {
        name: "Plutonium",
        symbol: "Pu",
        atomicNumber: 94,
        atomicMass: "244",
        category: "Actinide",
        description: "Used in nuclear weapons and power. Named after Pluto."
    },
    americium: {
        name: "Americium",
        symbol: "Am",
        atomicNumber: 95,
        atomicMass: "243",
        category: "Actinide",
        description: "Used in smoke detectors. Named after America."
    },
    curium: {
        name: "Curium",
        symbol: "Cm",
        atomicNumber: 96,
        atomicMass: "247",
        category: "Actinide",
        description: "Highly radioactive. Named after Marie and Pierre Curie."
    },
    berkelium: {
        name: "Berkelium",
        symbol: "Bk",
        atomicNumber: 97,
        atomicMass: "247",
        category: "Actinide",
        description: "Synthetic element. Named after Berkeley, California."
    },
    californium: {
        name: "Californium",
        symbol: "Cf",
        atomicNumber: 98,
        atomicMass: "251",
        category: "Actinide",
        description: "Used in neutron sources. Named after California."
    },
    einsteinium: {
        name: "Einsteinium",
        symbol: "Es",
        atomicNumber: 99,
        atomicMass: "252",
        category: "Actinide",
        description: "Synthetic element. Named after Albert Einstein."
    },
    fermium: {
        name: "Fermium",
        symbol: "Fm",
        atomicNumber: 100,
        atomicMass: "257",
        category: "Actinide",
        description: "Synthetic element. Named after Enrico Fermi."
    },
    mendelevium: {
        name: "Mendelevium",
        symbol: "Md",
        atomicNumber: 101,
        atomicMass: "258",
        category: "Actinide",
        description: "Synthetic element. Named after Dmitri Mendeleev."
    },
    nobelium: {
        name: "Nobelium",
        symbol: "No",
        atomicNumber: 102,
        atomicMass: "259",
        category: "Actinide",
        description: "Synthetic element. Named after Alfred Nobel."
    },
    lawrencium: {
        name: "Lawrencium",
        symbol: "Lr",
        atomicNumber: 103,
        atomicMass: "262",
        category: "Actinide",
        description: "Synthetic element. Named after Ernest Lawrence."
    },
    rutherfordium: {
        name: "Rutherfordium",
        symbol: "Rf",
        atomicNumber: 104,
        atomicMass: "267",
        category: "Transition Metal",
        description: "Synthetic element. Named after Ernest Rutherford."
    },
    dubnium: {
        name: "Dubnium",
        symbol: "Db",
        atomicNumber: 105,
        atomicMass: "268",
        category: "Transition Metal",
        description: "Synthetic element. Named after Dubna, Russia."
    },
    seaborgium: {
        name: "Seaborgium",
        symbol: "Sg",
        atomicNumber: 106,
        atomicMass: "269",
        category: "Transition Metal",
        description: "Synthetic element. Named after Glenn Seaborg."
    },
    bohrium: {
        name: "Bohrium",
        symbol: "Bh",
        atomicNumber: 107,
        atomicMass: "270",
        category: "Transition Metal",
        description: "Synthetic element. Named after Niels Bohr."
    },
    hassium: {
        name: "Hassium",
        symbol: "Hs",
        atomicNumber: 108,
        atomicMass: "269",
        category: "Transition Metal",
        description: "Synthetic element. Named after Hesse, Germany."
    },
    meitnerium: {
        name: "Meitnerium",
        symbol: "Mt",
        atomicNumber: 109,
        atomicMass: "278",
        category: "Transition Metal",
        description: "Synthetic element. Named after Lise Meitner."
    },
    darmstadtium: {
        name: "Darmstadtium",
        symbol: "Ds",
        atomicNumber: 110,
        atomicMass: "281",
        category: "Transition Metal",
        description: "Synthetic element. Named after Darmstadt, Germany."
    },
    roentgenium: {
        name: "Roentgenium",
        symbol: "Rg",
        atomicNumber: 111,
        atomicMass: "282",
        category: "Transition Metal",
        description: "Synthetic element. Named after Wilhelm Röntgen."
    },
    copernicium: {
        name: "Copernicium",
        symbol: "Cn",
        atomicNumber: 112,
        atomicMass: "285",
        category: "Transition Metal",
        description: "Synthetic element. Named after Nicolaus Copernicus."
    },
    nihonium: {
        name: "Nihonium",
        symbol: "Nh",
        atomicNumber: 113,
        atomicMass: "286",
        category: "Post-Transition Metal",
        description: "Synthetic element. Named after Japan (Nihon)."
    },
    flerovium: {
        name: "Flerovium",
        symbol: "Fl",
        atomicNumber: 114,
        atomicMass: "289",
        category: "Post-Transition Metal",
        description: "Synthetic element. Named after Georgy Flyorov."
    },
    moscovium: {
        name: "Moscovium",
        symbol: "Mc",
        atomicNumber: 115,
        atomicMass: "290",
        category: "Post-Transition Metal",
        description: "Synthetic element. Named after Moscow."
    },
    livermorium: {
        name: "Livermorium",
        symbol: "Lv",
        atomicNumber: 116,
        atomicMass: "293",
        category: "Post-Transition Metal",
        description: "Synthetic element. Named after Lawrence Livermore National Laboratory."
    },
    tennessine: {
        name: "Tennessine",
        symbol: "Ts",
        atomicNumber: 117,
        atomicMass: "294",
        category: "Halogen",
        description: "Synthetic element. Named after Tennessee."
    },
    oganesson: {
        name: "Oganesson",
        symbol: "Og",
        atomicNumber: 118,
        atomicMass: "294",
        category: "Noble Gas",
        description: "Synthetic element. Named after Yuri Oganessian."
    }
};

// Function to update info div content
function updateElementInfo(elementId) {
    const info = elementInfo[elementId];
    if (!info) return;

    const infoDiv = document.getElementById('info');
    infoDiv.innerHTML = `
        <div class="bg-white w-70 p-5 m-5 shadow-md relative rounded-md">
            <p class="text-lg font-bold font-sans">${info.name} (${info.symbol})</p>
            <div class="text-sm py-2 font-mono">
                <p>Atomic Number: ${info.atomicNumber}</p>
                <p>Atomic Mass: ${info.atomicMass}</p>
                <p>Category: ${info.category}</p>
                <p class="mt-2">${info.description}</p>
            </div>
        </div>
    `;
}

// Add hover event listeners to all elements
document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.element');
    
    elements.forEach(element => {
        element.addEventListener('mouseenter', (e) => {
            const elementId = e.currentTarget.id;
            updateElementInfo(elementId);
        });
    });
});


document.addEventListener('DOMContentLoaded', function() {
    // Get all legend items
    const legendItems = document.querySelectorAll('.detail .flex.items-center');
    
    // Add hover event listeners to each legend item
    legendItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            // Get the color from the span element
            const colorSpan = this.querySelector('span:first-child');
            const backgroundColor = window.getComputedStyle(colorSpan).backgroundColor;
            
            // Get all elements
            const allElements = document.querySelectorAll('.element');
            
            // Dim all elements first
            allElements.forEach(element => {
                element.style.opacity = '0.3';
                element.style.transition = 'opacity 0.3s ease';
            });
            
            // Highlight elements with matching background color
            allElements.forEach(element => {
                const elementBgColor = window.getComputedStyle(element).backgroundColor;
                if (elementBgColor === backgroundColor) {
                    element.style.opacity = '1';
                    element.style.transform = 'scale(1.1)';
                    element.style.transition = 'all 0.3s ease';
                }
            });
        });
        
        item.addEventListener('mouseleave', function() {
            // Reset all elements
            const allElements = document.querySelectorAll('.element');
            allElements.forEach(element => {
                element.style.opacity = '1';
                element.style.transform = 'scale(1)';
                element.style.transition = 'all 0.3s ease';
            });
        });
    });
});