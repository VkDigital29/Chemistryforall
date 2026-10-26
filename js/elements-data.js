/* Periodic table dataset: all 118 elements.
   Row format: Z|Symbol|Name|Atomic mass|Configuration|Oxidation states|Electronegativity|Melting °C|Boiling °C|Note
   Masses in [brackets] are the mass number of the longest-lived isotope (no stable isotopes).
   Elements 104+ have predicted/limited data. Empty fields show as "—". */
const RAW = `
1|H|Hydrogen|1.008|1s1|-1,+1|2.20|-259|-253|Lightest element; hydrogen bonding underpins water, proteins and DNA, and H appears in every organic drug.
2|He|Helium|4.0026|1s2|0|||-269|Inert noble gas; liquid helium cools MRI superconducting magnets.
3|Li|Lithium|6.94|[He] 2s1|+1|0.98|181|1342|Lithium salts (e.g. lithium carbonate) are a first-line mood stabiliser; Li-ion batteries.
4|Be|Beryllium|9.0122|[He] 2s2|+2|1.57|1287|2470|Light, stiff and toxic; used in aerospace alloys and X-ray windows. No biological role.
5|B|Boron|10.81|[He] 2s2 2p1|+3|2.04|2076|3927|Boronic acids appear in drugs such as bortezomib; borate is a trace plant nutrient.
6|C|Carbon|12.011|[He] 2s2 2p2|-4,+2,+4|2.55|3550|4027|Backbone of organic chemistry and virtually all small-molecule drugs; allotropes include graphite and diamond.
7|N|Nitrogen|14.007|[He] 2s2 2p3|-3,+3,+5|3.04|-210|-196|Present in amines, amides, heterocycles, amino acids and nucleic acids; N₂ makes up 78% of air.
8|O|Oxygen|15.999|[He] 2s2 2p4|-2|3.44|-218|-183|Essential for respiration; carbonyls, alcohols and ethers are key pharmacophores.
9|F|Fluorine|18.998|[He] 2s2 2p5|-1|3.98|-220|-188|Most electronegative element; fluorination tunes potency and metabolic stability of drugs.
10|Ne|Neon|20.180|[He] 2s2 2p6|0||-249|-246|Inert noble gas used in lighting and cryogenics.
11|Na|Sodium|22.990|[Ne] 3s1|+1|0.93|98|883|Na⁺ is the main extracellular cation; sodium salts are common drug counter-ions.
12|Mg|Magnesium|24.305|[Ne] 3s2|+2|1.31|650|1090|Mg²⁺ is a cofactor for ATP and hundreds of enzymes; centre of chlorophyll.
13|Al|Aluminium|26.982|[Ne] 3s2 3p1|+3|1.61|660|2519|Aluminium hydroxide is used as an antacid and vaccine adjuvant.
14|Si|Silicon|28.085|[Ne] 3s2 3p2|-4,+4|1.90|1414|3265|Semiconductors and silicones; silica is used as a pharmaceutical excipient.
15|P|Phosphorus|30.974|[Ne] 3s2 3p3|-3,+3,+5|2.19|44|281|Phosphate groups in ATP, DNA/RNA and phospholipids; common in prodrug design.
16|S|Sulfur|32.06|[Ne] 3s2 3p4|-2,+4,+6|2.58|115|445|Found in cysteine, methionine, sulfonamides, penicillins and thiol drugs.
17|Cl|Chlorine|35.45|[Ne] 3s2 3p5|-1,+1,+3,+5,+7|3.16|-102|-34|Cl⁻ is the main extracellular anion; aryl chlorides are common in medicines.
18|Ar|Argon|39.948|[Ne] 3s2 3p6|0||-189|-186|Inert gas used as a protective atmosphere in welding and synthesis.
19|K|Potassium|39.098|[Ar] 4s1|+1|0.82|64|759|K⁺ sets membrane potential in nerves and muscle; essential nutrient.
20|Ca|Calcium|40.078|[Ar] 4s2|+2|1.00|842|1484|Ca²⁺ forms bones and teeth and acts as a signalling ion in muscle and nerve cells.
21|Sc|Scandium|44.956|[Ar] 3d1 4s2|+3|1.36|1541|2836|Used in lightweight aluminium alloys and stadium lighting.
22|Ti|Titanium|47.867|[Ar] 3d2 4s2|+2,+3,+4|1.54|1668|3287|Strong, biocompatible metal for implants; TiO₂ is a common pigment and excipient.
23|V|Vanadium|50.942|[Ar] 3d3 4s2|+2,+3,+4,+5|1.63|1910|3407|Steel alloying element; vanadium compounds are studied as insulin mimetics.
24|Cr|Chromium|51.996|[Ar] 3d5 4s1|+2,+3,+6|1.66|1907|2671|Stainless steel and plating; Cr(III) is a trace nutrient, Cr(VI) is toxic.
25|Mn|Manganese|54.938|[Ar] 3d5 4s2|+2,+3,+4,+6,+7|1.55|1246|2061|Cofactor in antioxidant enzymes; KMnO₄ is a classic oxidant and antiseptic.
26|Fe|Iron|55.845|[Ar] 3d6 4s2|+2,+3|1.83|1538|2861|Central to haemoglobin, cytochromes and iron-sulfur enzymes; iron supplements treat anaemia.
27|Co|Cobalt|58.933|[Ar] 3d7 4s2|+2,+3|1.88|1495|2927|Centre of vitamin B₁₂; used in magnets and battery cathodes.
28|Ni|Nickel|58.693|[Ar] 3d8 4s2|+2|1.91|1455|2913|Hydrogenation catalyst and stainless steel component; a common contact allergen.
29|Cu|Copper|63.546|[Ar] 3d10 4s1|+1,+2|1.90|1085|2562|Redox-active trace element in cytochrome c oxidase and superoxide dismutase.
30|Zn|Zinc|65.38|[Ar] 3d10 4s2|+2|1.65|420|907|Zn²⁺ is in over 300 enzymes and zinc fingers; used in supplements and sunscreens.
31|Ga|Gallium|69.723|[Ar] 3d10 4s2 4p1|+3|1.81|30|2204|Melts near room temperature; gallium nitrate and Ga-68 are used in medicine and PET imaging.
32|Ge|Germanium|72.630|[Ar] 3d10 4s2 4p2|+2,+4|2.01|938|2833|Semiconductor used in fibre optics and infrared optics.
33|As|Arsenic|74.922|[Ar] 3d10 4s2 4p3|-3,+3,+5|2.18|817|614|Toxic, yet arsenic trioxide treats acute promyelocytic leukaemia.
34|Se|Selenium|78.971|[Ar] 3d10 4s2 4p4|-2,+4,+6|2.55|221|685|Essential in selenocysteine and glutathione peroxidase; narrow safe range.
35|Br|Bromine|79.904|[Ar] 3d10 4s2 4p5|-1,+1,+5|2.96|-7|59|Liquid halogen; bromide salts were early sedatives and anticonvulsants.
36|Kr|Krypton|83.798|[Ar] 3d10 4s2 4p6|0,+2|3.00|-157|-153|Noble gas used in lighting and lasers.
37|Rb|Rubidium|85.468|[Kr] 5s1|+1|0.82|39|688|Reactive alkali metal; used in atomic clocks and research.
38|Sr|Strontium|87.62|[Kr] 5s2|+2|0.95|777|1382|Behaves like calcium in bone; Sr-89 treats bone pain and strontium ranelate was used for osteoporosis.
39|Y|Yttrium|88.906|[Kr] 4d1 5s2|+3|1.22|1526|3345|Phosphors and ceramics; Y-90 is used in radioembolisation therapy.
40|Zr|Zirconium|91.224|[Kr] 4d2 5s2|+4|1.33|1855|4409|Corrosion-resistant nuclear fuel cladding; zirconia is used in dental implants.
41|Nb|Niobium|92.906|[Kr] 4d4 5s1|+3,+5|1.6|2477|4744|Superconducting magnets and high-strength steel.
42|Mo|Molybdenum|95.95|[Kr] 4d5 5s1|+4,+6|2.16|2623|4639|Cofactor of enzymes such as xanthine oxidase and sulfite oxidase.
43|Tc|Technetium|[98]|[Kr] 4d5 5s2|+4,+7|1.9|2157|4265|First artificial element; Tc-99m is the most widely used diagnostic radioisotope.
44|Ru|Ruthenium|101.07|[Kr] 4d7 5s1|+3,+4|2.2|2334|4150|Catalyst metal; ruthenium complexes are investigated as anticancer agents.
45|Rh|Rhodium|102.91|[Kr] 4d8 5s1|+3|2.28|1964|3695|Catalytic converters and asymmetric hydrogenation catalysts for drug synthesis.
46|Pd|Palladium|106.42|[Kr] 4d10|+2,+4|2.20|1555|2963|Cross-coupling catalysts (Suzuki, Heck) are central to modern pharmaceutical synthesis.
47|Ag|Silver|107.87|[Kr] 4d10 5s1|+1|1.93|962|2162|Antimicrobial; used in wound dressings and silver sulfadiazine.
48|Cd|Cadmium|112.41|[Kr] 4d10 5s2|+2|1.69|321|767|Toxic heavy metal; used in NiCd batteries and some pigments.
49|In|Indium|114.82|[Kr] 4d10 5s2 5p1|+3|1.78|157|2072|Used in touchscreens (ITO); In-111 is a radiopharmaceutical for imaging.
50|Sn|Tin|118.71|[Kr] 4d10 5s2 5p2|+2,+4|1.96|232|2602|Solder, coatings and tin(II) fluoride in toothpaste.
51|Sb|Antimony|121.76|[Kr] 4d10 5s2 5p3|-3,+3,+5|2.05|631|1587|Antimony compounds treat leishmaniasis; alloy hardener.
52|Te|Tellurium|127.60|[Kr] 4d10 5s2 5p4|-2,+4,+6|2.1|450|988|Used in solar cells (CdTe) and thermoelectrics.
53|I|Iodine|126.90|[Kr] 4d10 5s2 5p5|-1,+1,+5,+7|2.66|114|184|Essential for thyroid hormones; I-131 treats thyroid disease; antiseptic povidone-iodine.
54|Xe|Xenon|131.29|[Kr] 4d10 5s2 5p6|0,+2,+4,+6|2.6|-112|-108|Forms compounds with fluorine and oxygen; used as an anaesthetic and in MRI of lungs.
55|Cs|Cesium|132.91|[Xe] 6s1|+1|0.79|28|671|Defines the second in atomic clocks; Cs-137 is a radiotherapy and industrial source.
56|Ba|Barium|137.33|[Xe] 6s2|+2|0.89|727|1897|Barium sulfate is the insoluble contrast agent for X-ray imaging of the gut.
57|La|Lanthanum|138.91|[Xe] 5d1 6s2|+3|1.10|920|3464|Lanthanum carbonate is a phosphate binder in kidney disease; catalyst and camera glass.
58|Ce|Cerium|140.12|[Xe] 4f1 5d1 6s2|+3,+4|1.12|795|3443|Most abundant rare earth; ceria is used in catalysts and glass polishing.
59|Pr|Praseodymium|140.91|[Xe] 4f3 6s2|+3|1.13|935|3520|Strong magnets and yellow-green glass pigments.
60|Nd|Neodymium|144.24|[Xe] 4f4 6s2|+3|1.14|1024|3074|Powerful Nd–Fe–B magnets and Nd:YAG lasers used in surgery.
61|Pm|Promethium|[145]|[Xe] 4f5 6s2|+3|1.13|1042|3000|Radioactive with no stable isotopes; used in niche luminous paints and batteries.
62|Sm|Samarium|150.36|[Xe] 4f6 6s2|+2,+3|1.17|1072|1794|Sm-153 lexidronam relieves pain from bone metastases; SmCo magnets.
63|Eu|Europium|151.96|[Xe] 4f7 6s2|+2,+3|1.2|826|1529|Red and blue phosphors; europium chelates are used in bioassays.
64|Gd|Gadolinium|157.25|[Xe] 4f7 5d1 6s2|+3|1.2|1312|3273|Gd³⁺ chelates are the standard MRI contrast agents.
65|Tb|Terbium|158.93|[Xe] 4f9 6s2|+3|1.1|1356|3230|Green phosphors and magnetostrictive alloys.
66|Dy|Dysprosium|162.50|[Xe] 4f10 6s2|+3|1.22|1407|2567|Added to high-temperature magnets and used in data storage.
67|Ho|Holmium|164.93|[Xe] 4f11 6s2|+3|1.23|1461|2720|Ho:YAG lasers are used for kidney stone lithotripsy and prostate surgery.
68|Er|Erbium|167.26|[Xe] 4f12 6s2|+3|1.24|1529|2868|Doped fibre amplifiers for telecom; Er:YAG dental lasers.
69|Tm|Thulium|168.93|[Xe] 4f13 6s2|+3|1.25|1545|1950|Rare; used in portable X-ray sources and lasers.
70|Yb|Ytterbium|173.05|[Xe] 4f14 6s2|+2,+3|1.1|824|1196|Atomic clocks and fibre lasers.
71|Lu|Lutetium|174.97|[Xe] 4f14 5d1 6s2|+3|1.27|1652|3402|Lu-177 radioligand therapies treat neuroendocrine and prostate cancers.
72|Hf|Hafnium|178.49|[Xe] 4f14 5d2 6s2|+4|1.3|2233|4603|Control rods and high-k dielectrics in microchips.
73|Ta|Tantalum|180.95|[Xe] 4f14 5d3 6s2|+5|1.5|3017|5458|Biocompatible, corrosion-resistant; used in implants and capacitors.
74|W|Tungsten|183.84|[Xe] 4f14 5d4 6s2|+4,+6|2.36|3422|5555|Highest melting point of all metals; cofactor in some bacterial enzymes.
75|Re|Rhenium|186.21|[Xe] 4f14 5d5 6s2|+4,+6,+7|1.9|3186|5596|Jet-engine superalloys; Re-186/188 are therapeutic radioisotopes.
76|Os|Osmium|190.23|[Xe] 4f14 5d6 6s2|+4,+8|2.2|3033|5012|Densest naturally occurring element; OsO₄ stains tissue for electron microscopy.
77|Ir|Iridium|192.22|[Xe] 4f14 5d7 6s2|+3,+4|2.20|2446|4428|Corrosion-resistant; iridium complexes used in OLEDs and catalysis.
78|Pt|Platinum|195.08|[Xe] 4f14 5d9 6s1|+2,+4|2.28|1768|3825|Cisplatin, carboplatin and oxaliplatin are frontline anticancer drugs.
79|Au|Gold|196.97|[Xe] 4f14 5d10 6s1|+1,+3|2.54|1064|2856|Gold compounds (auranofin) treat rheumatoid arthritis; gold nanoparticles in diagnostics.
80|Hg|Mercury|200.59|[Xe] 4f14 5d10 6s2|+1,+2|2.00|-39|357|Only metal liquid at room temperature; highly toxic and being phased out of medicine.
81|Tl|Thallium|204.38|[Xe] 4f14 5d10 6s2 6p1|+1,+3|1.62|304|1473|Highly toxic; Tl-201 is used in cardiac stress imaging.
82|Pb|Lead|207.2|[Xe] 4f14 5d10 6s2 6p2|+2,+4|2.33|327|1749|Neurotoxic; used in batteries and radiation shielding.
83|Bi|Bismuth|208.98|[Xe] 4f14 5d10 6s2 6p3|+3|2.02|271|1564|Bismuth subsalicylate treats nausea and diarrhoea; unusually low toxicity for a heavy metal.
84|Po|Polonium|[209]|[Xe] 4f14 5d10 6s2 6p4|+2,+4|2.0|254|962|Intensely radioactive alpha emitter discovered by Marie Curie.
85|At|Astatine|[210]|[Xe] 4f14 5d10 6s2 6p5|-1,+1|2.2|302||Rarest natural element; At-211 is studied for targeted alpha therapy.
86|Rn|Radon|[222]|[Xe] 4f14 5d10 6s2 6p6|0|2.2|-71|-62|Radioactive gas from uranium decay; a leading indoor lung-cancer risk.
87|Fr|Francium|[223]|[Rn] 7s1|+1|0.7|||Extremely unstable and rare alkali metal.
88|Ra|Radium|[226]|[Rn] 7s2|+2|0.9|700|1737|Historic radiotherapy source; Ra-223 treats bone metastases.
89|Ac|Actinium|[227]|[Rn] 6d1 7s2|+3|1.1|1050|3200|Ac-225 is investigated for targeted alpha therapy.
90|Th|Thorium|232.04|[Rn] 6d2 7s2|+4|1.3|1750|4788|Weakly radioactive; potential nuclear fuel.
91|Pa|Protactinium|231.04|[Rn] 5f2 6d1 7s2|+4,+5|1.5|1572||Rare, radioactive and toxic; research use only.
92|U|Uranium|238.03|[Rn] 5f3 6d1 7s2|+3,+4,+5,+6|1.38|1132|4131|Fuel for nuclear reactors; chemically toxic to the kidneys.
93|Np|Neptunium|[237]|[Rn] 5f4 6d1 7s2|+3,+4,+5,+6|1.36|644||First transuranic element; by-product of reactors.
94|Pu|Plutonium|[244]|[Rn] 5f6 7s2|+3,+4,+5,+6|1.28|640|3228|Reactor and weapons material; Pu-238 powers deep-space probes.
95|Am|Americium|[243]|[Rn] 5f7 7s2|+3|1.13|1176|2011|Am-241 is the radiation source in household smoke detectors.
96|Cm|Curium|[247]|[Rn] 5f7 6d1 7s2|+3|1.28|1345|3110|Strongly radioactive; used as a power source and in X-ray spectrometers.
97|Bk|Berkelium|[247]|[Rn] 5f9 7s2|+3,+4|1.3|986||Synthetic; used mainly to make heavier elements.
98|Cf|Californium|[251]|[Rn] 5f10 7s2|+3|1.3|900||Neutron source used in reactor start-up and cancer research.
99|Es|Einsteinium|[252]|[Rn] 5f11 7s2|+3|1.3|860||First found in hydrogen bomb debris; produced in microgram amounts.
100|Fm|Fermium|[257]|[Rn] 5f12 7s2|+3|1.3|1527||Heaviest element that can be made by neutron bombardment.
101|Md|Mendelevium|[258]|[Rn] 5f13 7s2|+2,+3|1.3|827||Synthetic; made atom by atom in accelerators.
102|No|Nobelium|[259]|[Rn] 5f14 7s2|+2,+3|1.3|827||Synthetic; the +2 state is unusually stable.
103|Lr|Lawrencium|[266]|[Rn] 5f14 7s2 7p1|+3|1.3|1627||Synthetic; the last actinide. Configuration is predicted.
104|Rf|Rutherfordium|[267]|[Rn] 5f14 6d2 7s2|+4|||||Superheavy synthetic element; half-life of minutes at best.
105|Db|Dubnium|[268]|[Rn] 5f14 6d3 7s2|+5|||||Superheavy synthetic element studied atom by atom.
106|Sg|Seaborgium|[269]|[Rn] 5f14 6d4 7s2|+6|||||Named for Glenn Seaborg; chemistry resembles tungsten.
107|Bh|Bohrium|[270]|[Rn] 5f14 6d5 7s2|+7|||||Synthetic group 7 element.
108|Hs|Hassium|[277]|[Rn] 5f14 6d6 7s2|+8|||||Forms a volatile tetroxide like osmium.
109|Mt|Meitnerium|[278]|[Rn] 5f14 6d7 7s2||||||Named for Lise Meitner; chemical properties unmeasured.
110|Ds|Darmstadtium|[281]|[Rn] 5f14 6d8 7s2||||||Named for Darmstadt, Germany; seconds-long half-life.
111|Rg|Roentgenium|[282]|[Rn] 5f14 6d10 7s1||||||Named for Wilhelm Röntgen; predicted to be a noble-metal-like element.
112|Cn|Copernicium|[285]|[Rn] 5f14 6d10 7s2|+2|||||Predicted to be volatile, possibly a gas or liquid at room temperature.
113|Nh|Nihonium|[286]|[Rn] 5f14 6d10 7s2 7p1|+1|||||First element discovered in Asia (RIKEN, Japan).
114|Fl|Flerovium|[289]|[Rn] 5f14 6d10 7s2 7p2|+2|||||Near the predicted island of stability; relatively volatile.
115|Mc|Moscovium|[290]|[Rn] 5f14 6d10 7s2 7p3|+1|||||Named for the Moscow region; extremely short-lived.
116|Lv|Livermorium|[293]|[Rn] 5f14 6d10 7s2 7p4|+2|||||Named for Lawrence Livermore National Laboratory.
117|Ts|Tennessine|[294]|[Rn] 5f14 6d10 7s2 7p5|-1|||||Second-heaviest known halogen; chemistry is predicted, not measured.
118|Og|Oganesson|[294]|[Rn] 5f14 6d10 7s2 7p6|||||| Heaviest known element; predicted to be a solid, not an inert gas.
`.trim().split('\n');

/* Hybridisation / geometry examples (element Z -> [hybridisation, geometry & example]) */
const HYBRID = {
  4:  [['sp','Linear (BeCl₂ gas)']],
  5:  [['sp²','Trigonal planar (BF₃)'],['sp³','Tetrahedral (BH₄⁻)']],
  6:  [['sp','Linear (CO₂, alkynes)'],['sp²','Trigonal planar (alkenes, C=O)'],['sp³','Tetrahedral (CH₄)']],
  7:  [['sp','Linear (nitriles, R–C≡N)'],['sp²','Trigonal planar (imines, amides)'],['sp³','Trigonal pyramidal (NH₃)']],
  8:  [['sp²','Planar (carbonyl, C=O)'],['sp³','Bent (H₂O, ethers)']],
  13: [['sp²','Trigonal planar (AlCl₃)'],['sp³','Tetrahedral (AlCl₄⁻)']],
  14: [['sp³','Tetrahedral (SiH₄, SiO₄ units)']],
  15: [['sp³','Trigonal pyramidal (PH₃); tetrahedral (phosphate)']],
  16: [['sp²','Bent (SO₂)'],['sp³','Bent (H₂S, thiols)']],
  32: [['sp³','Tetrahedral (GeH₄)']],
  33: [['sp³','Trigonal pyramidal (AsH₃)']],
  34: [['sp³','Bent (H₂Se)']],
  50: [['sp³','Tetrahedral (SnCl₄)']]
};

const SUP = {'0':'⁰','1':'¹','2':'²','3':'³','4':'⁴','5':'⁵','6':'⁶','7':'⁷','8':'⁸','9':'⁹'};
const CORES = {He:[2],Ne:[2,8],Ar:[2,8,8],Kr:[2,8,18,8],Xe:[2,8,18,18,8],Rn:[2,8,18,32,18,8]};
const sup = s => String(s).replace(/\d/g, d => SUP[d]);
const pretty = s => s.replace(/(\d[spdf])(\d+)/g, (_, a, b) => a + sup(b));
const nice = s => s ? s.replace(/-/g, '−').replace(/,/g, ', ') : '—';

const CAT = {
  nonmetal: [1,6,7,8,15,16,34],
  alkali: [3,11,19,37,55,87],
  alkaline: [4,12,20,38,56,88],
  metalloid: [5,14,32,33,51,52],
  halogen: [9,17,35,53,85],
  'noble-gas': [2,10,18,36,54,86],
  'post-transition': [13,31,49,50,81,82,83,84]
};
function categoryOf(n) {
  for (const [c, list] of Object.entries(CAT)) if (list.includes(n)) return c;
  if (n >= 57 && n <= 71) return 'lanthanide';
  if (n >= 89 && n <= 103) return 'actinide';
  if (n >= 109) return 'unknown';
  return 'transition';
}

/* Grid position: row/col in the 18-column table. f-block series sit in rows 9 and 10. */
function positionOf(n) {
  if (n === 1) return {r:1,c:1};
  if (n === 2) return {r:1,c:18};
  if (n >= 57 && n <= 71) return {r:9,c:n-54};
  if (n >= 89 && n <= 103) return {r:10,c:n-86};
  let row, first;
  if (n <= 10) { row = 2; first = 3; }
  else if (n <= 18) { row = 3; first = 11; }
  else if (n <= 36) { row = 4; first = 19; }
  else if (n <= 54) { row = 5; first = 37; }
  else if (n <= 86) { row = 6; first = 55; }
  else { row = 7; first = 87; }
  const i = n - first;
  if (row <= 3) return {r:row,c: i < 2 ? i + 1 : i + 11};       // s: 1-2, p: 13-18
  if (row <= 5) return {r:row,c:i + 1};                       // s: 1-2, d: 3-12, p: 13-18
  // periods 6 and 7: skip the f-block (14 or 15 elements)
  if (i < 2) return {r:row,c:i + 1};
  const offset = row === 6 ? n - 72 : n - 104;                   // 72/104 begin the 4th column
  return {r:row,c:offset + 4};
}

const ELEMENTS = RAW.map(line => {
  const parts = line.split('|').map(x => x.trim());
  const note = parts.pop();
  const [z, s, name, mass, config, oxid, en, mp, bp] = parts;
  const n = +z;
  // shells from configuration
  let shells = [];
  const core = config.match(/\[(\w+)\]/);
  if (core) shells = CORES[core[1]].slice();
  for (const [, shell, , count] of config.matchAll(/(\d)([spdf])(\d+)/g)) {
    const i = +shell - 1;
    shells[i] = (shells[i] || 0) + +count;
  }
  const pos = positionOf(n);
  const fSeries = (n >= 57 && n <= 70) || (n >= 89 && n <= 102);
  const group = fSeries ? null : (n >= 57 && n <= 71 ? 3 : n >= 89 && n <= 103 ? 3 : pos.c);
  const period = n <= 2 ? 1 : n <= 10 ? 2 : n <= 18 ? 3 : n <= 36 ? 4 : n <= 54 ? 5 : n <= 86 ? 6 : 7;
  const block = fSeries ? 'f' : (group <= 2 || n === 2) ? 's' : group >= 13 ? 'p' : 'd';
  const oxList = (oxid || '').split(',').filter(Boolean);
  const valSet = [...new Set(oxList.map(o => Math.abs(parseInt(o,10))))].sort((a,b)=>a-b);
  const valOverride = {6:'4'};
  const massNum = Math.round(parseFloat(mass.replace(/[\[\]]/g, '')));
  const mpN = mp === '' ? null : +mp, bpN = bp === '' ? null : +bp;
  let phase = '—';
  if (bpN !== null && bpN < 25) phase = 'Gas';
  else if (mpN !== null && mpN < 25) phase = 'Liquid';
  else if (mpN !== null) phase = 'Solid';
  else if (n >= 87 && n <= 103) phase = 'Solid';
  const hy = HYBRID[n] || [];
  return {
    n, s, name, mass, config, cfg: pretty(config), oxid: nice(oxid),
    valency: valOverride[n] || (valSet.length ? valSet.join(', ') : '—'),
    en: en || '—', mp: mpN, bp: bpN, phase, note,
    cat: categoryOf(n), group, period, block, shells,
    protons: n, neutrons: massNum - n,
    hybrid: hy.map(h => h[0]), geo: hy.map(h => h[1]),
    predicted: n >= 104, pos
  };
});
