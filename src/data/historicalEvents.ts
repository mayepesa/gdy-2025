export interface HistoricalEvent {
  year: string;
  month:
    | "1"
    | "2"
    | "3"
    | "4"
    | "5"
    | "6"
    | "7"
    | "8"
    | "9"
    | "10"
    | "11"
    | "12";
  day: string;
  event: string;
  image: string;
  description: string;
  wikipediaUrl: string;
}

export const historicalEvents: HistoricalEvent[] = [
  {
    year: "2560 BCE",
    month: "1",
    day: "1",
    event: "Great Pyramid of Giza completed",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Kheops-Pyramid.jpg/640px-Kheops-Pyramid.jpg",
    description:
      "The Great Pyramid of Giza, the oldest of the Seven Wonders of the Ancient World, is completed during the reign of Pharaoh Khufu.",
    wikipediaUrl: "https://en.wikipedia.org/wiki/Great_Pyramid_of_Giza"
  },
  {
    year: "330 BCE",
    month: "5",
    day: "1",
    event: "Alexander the Great founds Alexandria",
    image: "/gdy-2025/alexandria.jpeg",
    description:
      "Alexander the Great founds the city of Alexandria in Egypt, which would become one of the greatest centers of learning and culture in the ancient world.",
    wikipediaUrl: "https://en.wikipedia.org/wiki/History_of_Alexandria"
  },
  {
    year: "283 BCE",
    month: "1",
    day: "1",
    event: "Great Library of Alexandria opens",
    image: "/gdy-2025/alexandria.JPG",
    description:
      "The Great Library of Alexandria officially opens under the patronage of Ptolemy II Philadelphus, becoming the largest library of the ancient world.",
    wikipediaUrl: "https://en.wikipedia.org/wiki/Library_of_Alexandria"
  },
  {
    year: "240 BCE",
    month: "6",
    day: "19",
    event: "Eratosthenes calculates Earth's circumference",
    image: "/gdy-2025/eratostenes.jpeg",
    description:
      "Eratosthenes, the chief librarian of Alexandria, calculates the Earth's circumference with remarkable accuracy using the library's resources.",
    wikipediaUrl: "https://en.wikipedia.org/wiki/Eratosthenes#Measurement_of_Earth's_circumference"
  },
  {
    year: "235 BCE",
    month: "3",
    day: "15",
    event: "Archimedes' Principle discovered",
    image: "/gdy-2025/archimedes.jpeg",
    description:
      "Archimedes discovers his famous principle while visiting Alexandria, making a breakthrough in understanding buoyancy and fluid mechanics.",
    wikipediaUrl: "https://en.wikipedia.org/wiki/Archimedes%27_principle"
  },
  {
    year: "221 BCE",
    month: "1",
    day: "1",
    event: "Qin Dynasty unifies China",
    image:
      "/gdy-2025/QinDynasty.jpeg",
    description:
      "Qin Shi Huang unifies China and becomes the first emperor of the Qin Dynasty, beginning the imperial era of Chinese history.",
    wikipediaUrl: "https://en.wikipedia.org/wiki/Qin_dynasty"
  },
  {
    year: "216 BCE",
    month: "8",
    day: "2",
    event: "Battle of Cannae",
    image:
      "/gdy-2025/BatailledeCannes_.jpeg",
    description:
      "Hannibal's Carthaginian army achieves one of the most decisive victories in military history, encircling and annihilating a much larger Roman army.",
    wikipediaUrl: "https://en.wikipedia.org/wiki/Battle_of_Cannae"
  },
  {
    year: "200 BCE",
    month: "8",
    day: "3",
    event: "First star catalog completed",
    image:
      "/gdy-2025/astronomy.jpeg",
    description:
      "Hipparchus completes the first comprehensive star catalog at the Library of Alexandria, documenting over 850 stars and their positions.",
    wikipediaUrl: "https://en.wikipedia.org/wiki/Hipparchus#Star_catalog"
  },
  {
    year: "150 BCE",
    month: "4",
    day: "12",
    event: "First anatomical studies",
    image:
      "/gdy-2025/Anatomy.jpeg",
    description:
      "Herophilus and Erasistratus conduct the first systematic human anatomical studies at the Library's medical school, advancing medical knowledge significantly.",
    wikipediaUrl: "https://en.wikipedia.org/wiki/Herophilus#Anatomical_discoveries"
  },
  {
    year: "100 BCE",
    month: "7",
    day: "25",
    event: "First steam-powered device",
    image:
      "/gdy-2025/Hero.jpeg",
    description:
      "Hero of Alexandria creates the first known steam-powered device, the aeolipile, demonstrating the potential of steam power.",
    wikipediaUrl: "https://en.wikipedia.org/wiki/Aeolipile"
  },
  {
    year: "48 BCE",
    month: "7",
    day: "1",
    event: "Great Library of Alexandria burns",
    image:
      "/gdy-2025/Burns.jpeg",
    description:
      "The Great Library of Alexandria, one of the largest and most significant libraries of the ancient world, is destroyed during Julius Caesar's civil war.",
    wikipediaUrl: "https://en.wikipedia.org/wiki/Library_of_Alexandria#Destruction"
  },
  {
    year: "44 BCE",
    month: "3",
    day: "15",
    event: "Julius Caesar is assassinated",
    image:
      "/gdy-2025/Julius.jpeg",
    description:
      "Roman dictator Julius Caesar is assassinated by a group of Roman senators led by Brutus and Cassius, marking the end of the Roman Republic.",
    wikipediaUrl: "https://en.wikipedia.org/wiki/Assassination_of_Julius_Caesar"
  },
  {
    year: "30 BCE",
    month: "8",
    day: "1",
    event: "Cleopatra's death",
    image:
      "/gdy-2025/Cleo.jpeg",
    description:
      "Cleopatra VII, the last pharaoh of Egypt, dies, marking the end of the Ptolemaic dynasty and the beginning of Roman rule in Egypt.",
    wikipediaUrl: "https://en.wikipedia.org/wiki/Death_of_Cleopatra"
  },
  {
    year: "20 BCE",
    month: "5",
    day: "15",
    event: "Library restoration begins",
    image:
      "/gdy-2025/restore.jpeg",
    description:
      "Roman Emperor Augustus begins restoration of the Library of Alexandria, attempting to rebuild its collection and prestige.",
    wikipediaUrl: "https://en.wikipedia.org/wiki/Library_of_Alexandria#Roman_period"
  },
  {
    year: "1",
    month: "1",
    day: "1",
    event: "First mechanical computer",
    image:
      "/gdy-2025/first.jpeg",
    description:
      "The Antikythera mechanism, an ancient Greek analog computer, is created, demonstrating advanced astronomical and mathematical knowledge from the Library's scholars.",
    wikipediaUrl: "https://en.wikipedia.org/wiki/Antikythera_mechanism"
  },
  {
    year: "79",
    month: "8",
    day: "24",
    event: "Mount Vesuvius erupts",
    image:
      "/gdy-2025/erupt.jpeg",
    description:
      "Mount Vesuvius erupts, burying the Roman cities of Pompeii and Herculaneum under volcanic ash, preserving them for centuries.",
    wikipediaUrl: "https://en.wikipedia.org/wiki/Eruption_of_Mount_Vesuvius_in_79_AD"
  },
  {
    year: "313",
    month: "2",
    day: "13",
    event: "Edict of Milan",
    image:
      "/gdy-2025/edict.jpeg",
    description:
      "Roman emperors Constantine and Licinius issue the Edict of Milan, legalizing Christianity throughout the Roman Empire.",
    wikipediaUrl: "https://en.wikipedia.org/wiki/Edict_of_Milan"
  },
  {
    year: "476",
    month: "9",
    day: "4",
    event: "Fall of the Western Roman Empire",
    image:
      "/gdy-2025/fall.jpeg",
    description:
      "The last Roman emperor, Romulus Augustus, is deposed by Odoacer, marking the fall of the Western Roman Empire.",
    wikipediaUrl: "https://en.wikipedia.org/wiki/Fall_of_the_Western_Roman_Empire"
  },
  {
    year: "732",
    month: "10",
    day: "10",
    event: "Battle of Tours",
    image:
      "/gdy-2025/battle.jpeg",
    description:
      "Charles Martel's Frankish army defeats the Umayyad Caliphate, halting Muslim expansion into Western Europe.",
    wikipediaUrl: "https://en.wikipedia.org/wiki/Battle_of_Tours"
  },
  {
    year: "800",
    month: "12",
    day: "25",
    event: "Charlemagne crowned Holy Roman Emperor",
    image:
      "/gdy-2025/Charlemagne.jpeg",
    description:
      "Pope Leo III crowns Charlemagne as Holy Roman Emperor, marking the beginning of the Holy Roman Empire and the Carolingian Renaissance.",
    wikipediaUrl: "https://en.wikipedia.org/wiki/Coronation_of_Charlemagne"
  },
  {
    year: "1066",
    month: "10",
    day: "14",
    event: "Battle of Hastings",
    image: "/gdy-2025/hasting2.jpeg",
    description:
      "William the Conqueror defeats King Harold II at the Battle of Hastings, leading to the Norman conquest of England and significant changes in English culture and language.",
    wikipediaUrl: "https://en.wikipedia.org/wiki/Battle_of_Hastings"
  },
  {
    year: "1099",
    month: "7",
    day: "15",
    event: "First Crusade captures Jerusalem",
    image: "/gdy-2025/jerusalem.jpeg",
    description:
      "Crusader forces capture Jerusalem after a long siege, establishing the Kingdom of Jerusalem and marking a turning point in the First Crusade.",
    wikipediaUrl: "https://en.wikipedia.org/wiki/Siege_of_Jerusalem_(1099)"
  },
  {
    year: "1206",
    month: "3",
    day: "1",
    event: "Genghis Khan proclaimed ruler",
    image: "/gdy-2025/genghis.jpeg",
    description:
      "Temüjin is proclaimed Genghis Khan, uniting the Mongol tribes and beginning the creation of the largest contiguous empire in history.",
    wikipediaUrl: "https://en.wikipedia.org/wiki/Genghis_Khan#Rise_to_power"
  },
  {
    year: "1215",
    month: "6",
    day: "15",
    event: "Magna Carta is signed",
    image: "/gdy-2025/magna.jpeg",
    description:
      "King John of England signs the Magna Carta, establishing the principle that everyone, including the king, is subject to the law and laying the foundation for constitutional government.",
    wikipediaUrl: "https://en.wikipedia.org/wiki/Magna_Carta"
  },
  {
    year: "1271",
    month: "1",
    day: "1",
    event: "Marco Polo begins his journey to China",
    image: "/gdy-2025/marco.jpeg",
    description:
      "Venetian explorer Marco Polo begins his journey to China, which would last 24 years and introduce Europeans to Asian culture.",
    wikipediaUrl: "https://en.wikipedia.org/wiki/Marco_Polo#Journey_to_Asia"
  },
  {
    year: "1347",
    month: "10",
    day: "1",
    event: "Black Death reaches Europe",
    image: "/gdy-2025/plague.jpeg",
    description:
      "The Black Death arrives in Europe through Sicily, beginning a pandemic that would kill an estimated 30-60% of Europe's population and profoundly change medieval society.",
    wikipediaUrl: "https://en.wikipedia.org/wiki/Black_Death"
  },
  {
    year: "1431",
    month: "5",
    day: "30",
    event: "Joan of Arc burned at the stake",
    image: "/gdy-2025/joan.jpeg",
    description:
      "Joan of Arc, the French heroine who led the French army to several victories during the Hundred Years' War, is burned at the stake by the English.",
    wikipediaUrl: "https://en.wikipedia.org/wiki/Joan_of_Arc#Execution"
  },
  {
    year: "1453",
    month: "5",
    day: "29",
    event: "Fall of Constantinople",
    image: "/gdy-2025/constantinople.jpeg",
    description:
      "The Ottoman Empire captures Constantinople, marking the end of the Byzantine Empire and the beginning of Ottoman dominance in the region.",
    wikipediaUrl: "https://en.wikipedia.org/wiki/Fall_of_Constantinople"
  },
  {
    year: "1461",
    month: "3",
    day: "29",
    event: "Battle of Towton",
    image: "/gdy-2025/towton.jpeg",
    description:
      "The Battle of Towton, the largest and bloodiest battle ever fought on English soil, takes place during the Wars of the Roses. Edward IV's Yorkist forces defeat the Lancastrian army, leading to his coronation as King of England.",
    wikipediaUrl: "https://en.wikipedia.org/wiki/Battle_of_Towton"
  },
  {
    year: "1492",
    month: "10",
    day: "12",
    event: "Christopher Columbus reaches the Americas",
    image: "/gdy-2025/columbus.jpeg",
    description:
      "Christopher Columbus makes landfall in the Bahamas, marking the first European contact with the Americas since the Norse colonization of North America.",
    wikipediaUrl: "https://en.wikipedia.org/wiki/Voyages_of_Christopher_Columbus#First_voyage"
  },
  {
    year: "1517",
    month: "10",
    day: "31",
    event: "Martin Luther posts 95 Theses",
    image:
      "/gdy-2025/Martin.jpeg",
    description:
      "Martin Luther posts his 95 Theses on the door of Wittenberg Castle Church, sparking the Protestant Reformation and permanently dividing Western Christianity.",
    wikipediaUrl: "https://en.wikipedia.org/wiki/Ninety-five_Theses"
  },
  {
    year: "1521",
    month: "8",
    day: "13",
    event: "Fall of Tenochtitlan",
    image:
      "/gdy-2025/Tenochtitlan.jpeg",
    description:
      "Spanish conquistadors and their indigenous allies capture Tenochtitlan, the capital of the Aztec Empire, marking the end of Aztec civilization.",
    wikipediaUrl: "https://en.wikipedia.org/wiki/Siege_of_Tenochtitlan"
  },
  {
    year: "1538",
    month: "8",
    day: "6",
    event: "Bogotá is founded",
    image:
      "/gdy-2025/bgta.jpeg",
    description:
      "Spanish conquistador Gonzalo Jiménez de Quesada founds Santa Fe de Bogotá, which would become the capital of Colombia.",
    wikipediaUrl: "https://en.wikipedia.org/wiki/History_of_Bogotá#Spanish_founding"
  },
  {
    year: "1549",
    month: "3",
    day: "29",
    event: "Thomas Cranmer becomes Archbishop of Canterbury",
    image:
      "/gdy-2025/Thomas.jpeg",
    description:
      "Thomas Cranmer is appointed Archbishop of Canterbury, becoming a key figure in the English Reformation and the development of the Church of England.",
    wikipediaUrl: "https://en.wikipedia.org/wiki/Thomas_Cranmer#Archbishop_of_Canterbury"
  },
  {
    year: "1588",
    month: "7",
    day: "29",
    event: "Spanish Armada defeated",
    image:
      "/gdy-2025/spanish.jpeg",
    description:
      "The English navy defeats the Spanish Armada, marking the beginning of England's rise as a naval power and the decline of Spanish dominance in Europe.",
    wikipediaUrl: "https://en.wikipedia.org/wiki/Spanish_Armada"
  },
  {
    year: "1607",
    month: "5",
    day: "14",
    event: "Jamestown founded",
    image:
      "/gdy-2025/james.jpeg",
    description:
      "The first permanent English settlement in North America is established at Jamestown, Virginia, marking the beginning of English colonization in America.",
    wikipediaUrl: "https://en.wikipedia.org/wiki/Jamestown,_Virginia#History"
  },
  {
    year: "1683",
    month: "9",
    day: "12",
    event: "Battle of Vienna",
    image:
      "/gdy-2025/vienna.jpeg",
    description:
      "The Ottoman Empire's siege of Vienna is broken by a combined force of Polish and Austrian troops, marking the beginning of Ottoman decline in Europe.",
    wikipediaUrl: "https://en.wikipedia.org/wiki/Battle_of_Vienna"
  },
  {
    year: "1687",
    month: "7",
    day: "5",
    event: "Newton publishes Principia Mathematica",
    image:
      "/gdy-2025/newton.jpeg",
    description:
      "Isaac Newton publishes Philosophiæ Naturalis Principia Mathematica, laying the foundations for classical mechanics and revolutionizing scientific thought.",
    wikipediaUrl: "https://en.wikipedia.org/wiki/Philosophiæ_Naturalis_Principia_Mathematica"
  },
  {
    year: "1776",
    month: "7",
    day: "4",
    event: "Declaration of Independence is adopted",
    image:
      "/gdy-2025/declare.jpeg",
    description:
      "The Continental Congress adopts the Declaration of Independence, announcing the thirteen American colonies' independence from Great Britain.",
    wikipediaUrl: "https://en.wikipedia.org/wiki/United_States_Declaration_of_Independence"
  },
  {
    year: "1789",
    month: "7",
    day: "14",
    event: "Storming of the Bastille",
    image:
      "/gdy-2025/storm.jpeg",
    description:
      "Parisian revolutionaries storm the Bastille prison, a key event in the French Revolution.",
    wikipediaUrl: "https://en.wikipedia.org/wiki/Storming_of_the_Bastille"
  },
  {
    year: "1792",
    month: "3",
    day: "29",
    event: "King Gustav III of Sweden assassinated",
    image:
      "/gdy-2025/sweden.jpeg",
    description:
      "King Gustav III of Sweden is shot at a masked ball in Stockholm and dies 13 days later. This event inspired Giuseppe Verdi's opera 'Un ballo in maschera'.",
    wikipediaUrl: "https://en.wikipedia.org/wiki/Assassination_of_Gustav_III"
  },
  {
    year: "1805",
    month: "12",
    day: "2",
    event: "Battle of Austerlitz",
    image:
      "/gdy-2025/auster.jpeg",
    description:
      "Napoleon Bonaparte achieves his greatest victory at the Battle of Austerlitz, defeating the combined armies of Austria and Russia, establishing French dominance in Europe.",
    wikipediaUrl: "https://en.wikipedia.org/wiki/Battle_of_Austerlitz"
  },
  {
    year: "1810",
    month: "7",
    day: "20",
    event: "Colombian Declaration of Independence",
    image:
      "/gdy-2025/indepen.jpeg",
    description:
      "Colombia declares independence from Spain, beginning the Colombian War of Independence. This date is celebrated as Colombia's Independence Day.",
    wikipediaUrl: "https://en.wikipedia.org/wiki/Colombian_War_of_Independence"
  },
  {
    year: "1815",
    month: "6",
    day: "18",
    event: "Battle of Waterloo",
    image:
      "/gdy-2025/water.jpeg",
    description:
      "Napoleon Bonaparte is defeated at the Battle of Waterloo, marking the end of his rule and the Napoleonic Wars.",
    wikipediaUrl: "https://en.wikipedia.org/wiki/Battle_of_Waterloo"
  },
  {
    year: "1819",
    month: "8",
    day: "7",
    event: "Battle of Boyacá",
    image:
      "/gdy-2025/boyaca.jpeg",
    description:
      "Simón Bolívar's forces defeat the Spanish army at the Battle of Boyacá, securing Colombia's independence and leading to the creation of Gran Colombia.",
    wikipediaUrl: "https://en.wikipedia.org/wiki/Battle_of_Boyacá"
  },
  {
    year: "1827",
    month: "3",
    day: "29",
    event: "Gran Colombia Congress convenes in Bogotá",
    image:
      "/gdy-2025/royalty.jpeg",
    description:
      "The Congress of Gran Colombia convenes in Bogotá, marking a significant moment in the political history of the newly formed republic.",
    wikipediaUrl: "https://en.wikipedia.org/wiki/Gran_Colombia#Congress_of_Cúcuta"
  },
  {
    year: "1859",
    month: "11",
    day: "24",
    event: "Darwin publishes On the Origin of Species",
    image:
      "/gdy-2025/species.jpeg",
    description:
      "Charles Darwin publishes On the Origin of Species, introducing the theory of evolution by natural selection and revolutionizing biology.",
    wikipediaUrl: "https://en.wikipedia.org/wiki/On_the_Origin_of_Species"
  },
  {
    year: "1876",
    month: "3",
    day: "10",
    event: "First telephone call",
    image:
      "/gdy-2025/telephone.jpeg",
    description:
      "Alexander Graham Bell makes the first successful telephone call, saying 'Mr. Watson, come here, I want to see you.'",
    wikipediaUrl: "https://en.wikipedia.org/wiki/History_of_the_telephone#First_successful_telephone_call"
  },
  {
    year: "1886",
    month: "3",
    day: "29",
    event: "Coca-Cola is first sold",
    image:
      "/gdy-2025/coca.jpeg",
    description:
      "The first Coca-Cola is sold in a drugstore in Atlanta, Georgia, marking the beginning of one of the world's most successful beverage companies.",
    wikipediaUrl: "https://en.wikipedia.org/wiki/History_of_Coca-Cola"
  },
  {
    year: "1903",
    month: "11",
    day: "3",
    event: "Panama declares independence from Colombia",
    image:
      "/gdy-2025/panama.jpeg",
    description:
      "Panama declares independence from Colombia with U.S. support, leading to the creation of the Panama Canal Zone.",
    wikipediaUrl: "https://en.wikipedia.org/wiki/History_of_Panama#Separation_from_Colombia"
  },
  {
    year: "1905",
    month: "6",
    day: "30",
    event: "Einstein publishes Special Relativity",
    image:
      "/gdy-2025/relativity.jpeg",
    description:
      "Albert Einstein publishes his paper on special relativity, revolutionizing our understanding of space, time, and energy.",
    wikipediaUrl: "https://en.wikipedia.org/wiki/Special_relativity#Einstein's_original_paper"
  },
  {
    year: "1912",
    month: "4",
    day: "15",
    event: "Titanic sinks",
    image:
      "/gdy-2025/titanic.jpeg",
    description:
      "The RMS Titanic sinks in the North Atlantic Ocean after hitting an iceberg, resulting in the deaths of over 1,500 people.",
    wikipediaUrl: "https://en.wikipedia.org/wiki/Sinking_of_the_Titanic"
  },
  {
    year: "1914",
    month: "7",
    day: "28",
    event: "World War I begins",
    image:
      "/gdy-2025/war1.jpeg",
    description:
      "Austria-Hungary declares war on Serbia, marking the beginning of World War I.",
    wikipediaUrl: "https://en.wikipedia.org/wiki/World_War_I#Beginning"
  },
  {
    year: "1917",
    month: "11",
    day: "7",
    event: "October Revolution",
    image:
      "/gdy-2025/oct.jpeg",
    description:
      "The Bolsheviks, led by Vladimir Lenin, overthrow the Russian Provisional Government, establishing the world's first communist state and changing the course of 20th-century history.",
    wikipediaUrl: "https://en.wikipedia.org/wiki/October_Revolution"
  },
  {
    year: "1928",
    month: "9",
    day: "28",
    event: "Discovery of Penicillin",
    image:
      "/gdy-2025/peni.jpeg",
    description:
      "Alexander Fleming discovers penicillin, the first antibiotic, revolutionizing medicine and saving countless lives.",
    wikipediaUrl: "https://en.wikipedia.org/wiki/History_of_penicillin"
  },
  {
    year: "1944",
    month: "6",
    day: "6",
    event: "D-Day Invasion",
    image:
      "/gdy-2025/dd.jpeg",
    description:
      "Allied forces launch the largest amphibious invasion in history on the beaches of Normandy, beginning the liberation of Western Europe from Nazi control.",
    wikipediaUrl: "https://en.wikipedia.org/wiki/Normandy_landings"
  },
  {
    year: "1945",
    month: "8",
    day: "6",
    event: "First atomic bomb dropped on Hiroshima",
    image:
      "/gdy-2025/Ww2.jpeg",
    description:
      "The United States drops the first atomic bomb on Hiroshima, Japan, during World War II.",
    wikipediaUrl: "https://en.wikipedia.org/wiki/Atomic_bombings_of_Hiroshima_and_Nagasaki"
  },
  {
    year: "1947",
    month: "10",
    day: "14",
    event: "First supersonic flight",
    image:
      "/gdy-2025/super.jpeg",
    description:
      "Chuck Yeager becomes the first person to break the sound barrier in level flight, flying the Bell X-1 aircraft.",
    wikipediaUrl: "https://en.wikipedia.org/wiki/Bell_X-1#Breaking_the_sound_barrier"
  },
  {
    year: "1948",
    month: "4",
    day: "9",
    event: "El Bogotazo",
    image:
      "/gdy-2025/BOGOTAZO.jpeg",
    description:
      "The assassination of presidential candidate Jorge Eliécer Gaitán triggers massive riots in Bogotá, known as El Bogotazo, marking the beginning of La Violencia.",
    wikipediaUrl: "https://en.wikipedia.org/wiki/El_Bogotazo"
  },
  {
    year: "1953",
    month: "4",
    day: "25",
    event: "DNA structure discovered",
    image:
      "/gdy-2025/dna.jpeg",
    description:
      "James Watson and Francis Crick publish their discovery of the double helix structure of DNA, revolutionizing genetics and molecular biology.",
    wikipediaUrl: "https://en.wikipedia.org/wiki/Double_helix#Discovery"
  },
  {
    year: "1962",
    month: "10",
    day: "16",
    event: "Cuban Missile Crisis begins",
    image:
      "/gdy-2025/cuban.jpeg",
    description:
      "The Cuban Missile Crisis begins when U.S. intelligence discovers Soviet nuclear missiles in Cuba, bringing the world to the brink of nuclear war.",
    wikipediaUrl: "https://en.wikipedia.org/wiki/Cuban_Missile_Crisis"
  },
  {
    year: "1963",
    month: "8",
    day: "28",
    event: "Martin Luther King Jr. delivers 'I Have a Dream' speech",
    image:
      "/gdy-2025/Luther.jpeg",
    description:
      "Martin Luther King Jr. delivers his iconic 'I Have a Dream' speech during the March on Washington for Jobs and Freedom.",
    wikipediaUrl: "https://en.wikipedia.org/wiki/I_Have_a_Dream"
  },
  {
    year: "1964",
    month: "5",
    day: "27",
    event: "FARC is founded",
    image:
      "/gdy-2025/.jpg",
    description:
      "The Revolutionary Armed Forces of Colombia (FARC) is founded, beginning a decades-long armed conflict with the Colombian government.",
    wikipediaUrl: "https://en.wikipedia.org/wiki/Revolutionary_Armed_Forces_of_Colombia"
  },
  {
    year: "1969",
    month: "7",
    day: "20",
    event: "First humans land on the Moon",
    image:
      "/gdy-2025/moon.jpeg",
    description:
      "Neil Armstrong and Buzz Aldrin become the first humans to land on the Moon during the Apollo 11 mission.",
    wikipediaUrl: "https://en.wikipedia.org/wiki/Apollo_11"
  },
  {
    year: "1973",
    month: "3",
    day: "29",
    event: "Last U.S. troops leave Vietnam",
    image:
      "/gdy-2025/Huey.jpeg",
    description:
      "The last U.S. combat troops leave Vietnam, marking the end of direct U.S. military involvement in the Vietnam War.",
    wikipediaUrl: "https://en.wikipedia.org/wiki/Withdrawal_of_United_States_troops_from_Vietnam"
  },
  {
    year: "1985",
    month: "11",
    day: "6",
    event: "Palace of Justice siege",
    image:
      "/gdy-2025/justicia.jpeg",
    description:
      "M-19 guerrillas storm the Palace of Justice in Bogotá, leading to a deadly siege that results in the deaths of over 100 people.",
    wikipediaUrl: "https://en.wikipedia.org/wiki/Palace_of_Justice_siege"
  },
  {
    year: "1986",
    month: "1",
    day: "28",
    event: "Space Shuttle Challenger disaster",
    image:
      "/gdy-2025/space.jpeg",
    description:
      "The Space Shuttle Challenger breaks apart 73 seconds into its flight, killing all seven crew members.",
    wikipediaUrl: "https://en.wikipedia.org/wiki/Space_Shuttle_Challenger_disaster"
  },
  {
    year: "1989",
    month: "11",
    day: "9",
    event: "Fall of the Berlin Wall",
    image:
      "/gdy-2025/berlin.jpeg",
    description:
      "The Berlin Wall falls, marking the beginning of German reunification and the end of the Cold War.",
    wikipediaUrl: "https://en.wikipedia.org/wiki/Fall_of_the_Berlin_Wall"
  },
  {
    year: "1991",
    month: "7",
    day: "4",
    event: "New Colombian Constitution",
    image:
      "/gdy-2025/const.jpeg",
    description:
      "Colombia adopts a new constitution, establishing a more democratic and pluralistic political system.",
    wikipediaUrl: "https://en.wikipedia.org/wiki/Constitution_of_Colombia#1991_Constitution"
  },
  {
    year: "2001",
    month: "9",
    day: "11",
    event: "September 11 attacks",
    image:
      "/gdy-2025/twin.jpeg",
    description:
      "Terrorist attacks on the World Trade Center and Pentagon lead to the deaths of nearly 3,000 people.",
    wikipediaUrl: "https://en.wikipedia.org/wiki/September_11_attacks"
  },
  {
    year: "2004",
    month: "3",
    day: "29",
    event: "Bulgaria joins NATO",
    image:
      "/gdy-2025/nato.jpeg",
    description:
      "Bulgaria officially joins NATO, becoming a member of the North Atlantic Treaty Organization along with Estonia, Latvia, Lithuania, Romania, Slovakia, and Slovenia.",
    wikipediaUrl: "https://en.wikipedia.org/wiki/Enlargement_of_NATO#Fourth_enlargement"
  },
  {
    year: "2004",
    month: "3",
    day: "29",
    event:
      "Republic of Ireland becomes first country to ban smoking in workplaces",
    image:
      "/gdy-2025/smoking.jpeg",
    description:
      "Ireland becomes the first country in the world to ban smoking in all workplaces, including bars and restaurants, setting a precedent for other nations.",
    wikipediaUrl: "https://en.wikipedia.org/wiki/Public_Health_(Tobacco)Acts_2002%E2%80%932004"
  },
  {
    year: "2004",
    month: "3",
    day: "29",
    event: "Colombian government announces major FARC demobilization",
    image:
      "/gdy-2025/farc.jpeg",
    description:
      "The Colombian government announces a significant demobilization of FARC guerrillas in the northern region of the country, marking a step forward in the peace process.",
    wikipediaUrl: "https://en.wikipedia.org/wiki/Colombian_peace_process"
  },
  {
    year: "2004",
    month: "3",
    day: "29",
    event: "Colombia hosts first Latin American Film Festival",
    image:
      "/gdy-2025/film.jpeg",
    description:
      "Bogotá hosts the first Latin American Film Festival, showcasing regional cinema and promoting cultural exchange in the region.",
    wikipediaUrl: "https://en.wikipedia.org/wiki/Bogotá_Film_Festival"
  },
  {
    year: "2016",
    month: "11",
    day: "24",
    event: "Colombian Peace Agreement",
    image:
      "/gdy-2025/paz.jpeg",
    description:
      "The Colombian government and FARC sign a historic peace agreement, ending more than 50 years of armed conflict.",
    wikipediaUrl: "https://en.wikipedia.org/wiki/Colombian_peace_process#2016_agreement"
  },
  {
    year: "2019",
    month: "11",
    day: "21",
    event: "National Strike in Colombia",
    image:
      "/gdy-2025/col.jpeg",
    description:
      "A nationwide strike takes place in Colombia, with millions protesting against government policies and social inequality.",
    wikipediaUrl: "https://en.wikipedia.org/wiki/2019%E2%80%932020_Colombian_protests"
  },
  {
    year: "2020",
    month: "3",
    day: "11",
    event: "WHO declares COVID-19 a pandemic",
    image:
      "/gdy-2025/virus.jpeg",
    description:
      "The World Health Organization declares COVID-19 a global pandemic, leading to worldwide lockdowns and significant changes in daily life.",
    wikipediaUrl: "https://en.wikipedia.org/wiki/COVID-19_pandemic"
  },
  {
    year: "2022",
    month: "2",
    day: "24",
    event: "Russian invasion of Ukraine begins",
    image:
      "/gdy-2025/ukraine.jpeg",
    description:
      "Russia launches a full-scale invasion of Ukraine, marking the beginning of the largest European conflict since World War II.",
    wikipediaUrl: "https://en.wikipedia.org/wiki/Russian_invasion_of_Ukraine"
  },
  {
    year: "2022",
    month: "6",
    day: "19",
    event: "Gustavo Petro elected president",
    image:
      "/gdy-2025/Gustavo.jpeg",
    description:
      "Gustavo Petro becomes Colombia's first leftist president, marking a significant political shift in the country's history.",
    wikipediaUrl: "https://en.wikipedia.org/wiki/Gustavo_Petro#Presidency"
  },
];
