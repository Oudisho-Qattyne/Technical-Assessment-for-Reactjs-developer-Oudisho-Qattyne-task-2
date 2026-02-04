export interface ImageData {
  id: number;
  url: string;
  description: string;
  width?: number;
  height?: number;
  tags?: string[];
}

export const dummyImages: ImageData[] = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e",
    description: "A serene sunrise over a green valley, with soft mist rolling through the hills and sunlight piercing the clouds.",
    width: 1200,
    height: 800,
    tags: ["nature", "sunrise", "valley", "peaceful", "landscape"]
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    description: "A minimalist workspace featuring a MacBook displaying code, a cup of black coffee, and a notebook on a wooden desk.",
    width: 1200,
    height: 800,
    tags: ["tech", "workspace", "coding", "apple", "office"]
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38",
    description: "A delicious stack of pancakes topped with fresh strawberries, blueberries, and dripping maple syrup.",
    width: 1200,
    height: 800,
    tags: ["food", "breakfast", "pancakes", "dessert", "sweet"]
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba",
    description: "A close-up portrait of a tabby cat with striking green eyes looking intensely at the camera.",
    width: 1200,
    height: 800,
    tags: ["animal", "cat", "pet", "eyes", "cute"]
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b",
    description: "New York City skyline at night, showing the Empire State Building and bustling street traffic lights below.",
    width: 1200,
    height: 800,
    tags: ["city", "nyc", "urban", "night", "architecture"]
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    description: "A perfect tropical beach with white sand, turquoise ocean water, and a clear blue sky.",
    width: 1200,
    height: 800,
    tags: ["beach", "ocean", "summer", "travel", "vacation"]
  },
  {
    id: 7,
    url: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853",
    description: "A futuristic hallway illuminated by blue and pink neon lights, giving off a cyberpunk sci-fi vibe.",
    width: 1200,
    height: 800,
    tags: ["abstract", "neon", "cyberpunk", "lights", "future"]
  },
  {
    id: 8,
    url: "https://images.unsplash.com/photo-1517849845537-4d257902454a",
    description: "A funny pug dog running through green grass with its tongue out, looking extremely happy.",
    width: 1200,
    height: 800,
    tags: ["dog", "pug", "funny", "park", "animal"]
  },
  {
    id: 9,
    url: "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
    description: "A top-down view of a gourmet dinner table spread with salads, roasted vegetables, and wine.",
    width: 1200,
    height: 800,
    tags: ["food", "dinner", "healthy", "flatlay", "gathering"]
  },
  {
    id: 10,
    url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
    description: "Sunlight filtering through the dense canopy of a green forest, illuminating the ferns on the ground.",
    width: 1200,
    height: 800,
    tags: ["forest", "nature", "sunlight", "trees", "calm"]
  },
  {
    id: 11,
    url: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c",
    description: "A vintage retro car parked in a desert landscape during a golden sunset.",
    width: 1200,
    height: 800,
    tags: ["car", "vintage", "desert", "travel", "retro"]
  },
  {
    id: 12,
    url: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
    description: "A modern pair of wireless headphones resting on a wooden table with a blurred background.",
    width: 1200,
    height: 800,
    tags: ["music", "tech", "headphones", "gadget", "audio"]
  },
  {
    id: 13,
    url: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05",
    description: "A majestic herd of elephants walking across the African savanna with mountains in the background.",
    width: 1200,
    height: 800,
    tags: ["wildlife", "africa", "elephants", "safari", "animals"]
  },
  {
    id: 14,
    url: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2",
    description: "A professional woman working on a tablet in a bright, modern coffee shop.",
    width: 1200,
    height: 800,
    tags: ["people", "work", "cafe", "business", "lifestyle"]
  },
  {
    id: 15,
    url: "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a",
    description: "A macro shot of a camera lens showing the intricate glass details and reflections.",
    width: 1200,
    height: 800,
    tags: ["photography", "camera", "lens", "tech", "hobby"]
  },
  {
    id: 16,
    url: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30",
    description: "A dramatic shot of a live concert with a silhouette of the crowd raising hands against bright stage lights.",
    width: 1200,
    height: 800,
    tags: ["music", "concert", "event", "party", "crowd"]
  },
  {
    id: 17,
    url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    description: "A scenic view of a mountain lake reflecting the surrounding pine trees and blue sky.",
    width: 1200,
    height: 800,
    tags: ["lake", "mountain", "reflection", "nature", "travel"]
  },
  {
    id: 18,
    url: "https://images.unsplash.com/photo-1502082553048-f009c37129b9",
    description: "Close up of diverse green succulents and cacti growing in a botanical garden.",
    width: 1200,
    height: 800,
    tags: ["plants", "nature", "garden", "green", "texture"]
  },
  {
    id: 19,
    url: "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023",
    description: "A sleek modern car driving fast on a wet city road at night with light trails.",
    width: 1200,
    height: 800,
    tags: ["cars", "speed", "city", "night", "motion"]
  },
  {
    id: 20,
    url: "https://images.unsplash.com/photo-1519681393784-d120267933ba",
    description: "A starry night sky showing the Milky Way galaxy over snowy mountains.",
    width: 1200,
    height: 800,
    tags: ["space", "stars", "galaxy", "night", "astronomy"]
  },
  {
    id: 21,
    url: "https://images.unsplash.com/photo-1502680390469-be75c86b636f",
    description: "A surfer catching a massive blue wave, riding the barrel with water spraying in the air.",
    width: 1200,
    height: 800,
    tags: ["sports", "ocean", "surfing", "waves", "action"]
  },
  {
    id: 22,
    url: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085",
    description: "A cozy coffee shop setting with a steaming latte featuring heart-shaped latte art next to an open book.",
    width: 1200,
    height: 800,
    tags: ["coffee", "cafe", "latte art", "relaxing", "drink"]
  },
  {
    id: 23,
    url: "https://images.unsplash.com/photo-1550547660-d9450f859349",
    description: "A juicy gourmet burger with melted cheese, fresh lettuce, and tomato served on a rustic wooden board.",
    width: 1200,
    height: 800,
    tags: ["food", "burger", "meal", "lunch", "tasty"]
  },
  {
    id: 24,
    url: "https://images.unsplash.com/photo-1490750967868-bcdf92dd2184",
    description: "A vibrant field of tulips in full bloom with red, yellow, and pink flowers stretching to the horizon.",
    width: 1200,
    height: 800,
    tags: ["flowers", "spring", "nature", "colorful", "garden"]
  },
  {
    id: 25,
    url: "https://images.unsplash.com/photo-1479839672679-a46483c0e7c8",
    description: "Modern architecture showing a glass building facade reflecting the blue sky and clouds.",
    width: 1200,
    height: 800,
    tags: ["architecture", "building", "modern", "city", "glass"]
  },
  {
    id: 26,
    url: "https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22",
    description: "A winter wonderland landscape with snow-covered pine trees and a frozen path leading into the forest.",
    width: 1200,
    height: 800,
    tags: ["winter", "snow", "forest", "cold", "nature"]
  },
  {
    id: 27,
    url: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d",
    description: "Rows of old books in a classic library with wooden shelves and a quiet, studious atmosphere.",
    width: 1200,
    height: 800,
    tags: ["books", "library", "education", "vintage", "reading"]
  },
  {
    id: 28,
    url: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620",
    description: "A person wearing a Virtual Reality (VR) headset, reaching out to touch something in the digital world.",
    width: 1200,
    height: 800,
    tags: ["tech", "vr", "virtual reality", "gaming", "future"]
  },
  {
    id: 29,
    url: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1",
    description: "A close-up of an acoustic guitar being played, focusing on the fingers on the fretboard.",
    width: 1200,
    height: 800,
    tags: ["music", "guitar", "instrument", "art", "hobby"]
  },
  {
    id: 30,
    url: "https://images.unsplash.com/photo-1504194921103-f8b80c338d47",
    description: "Colorful hot air balloons floating over a rocky landscape during a festival.",
    width: 1200,
    height: 800,
    tags: ["travel", "balloons", "sky", "adventure", "colorful"]
  },
  {
    id: 31,
    url: "https://images.unsplash.com/photo-1544367563-12123d8965cd",
    description: "A woman practicing yoga in a meditation pose on a rock by the ocean at sunset.",
    width: 1200,
    height: 800,
    tags: ["wellness", "yoga", "fitness", "sunset", "health"]
  },
  {
    id: 32,
    url: "https://images.unsplash.com/photo-1515694346937-94d85e41e6f0",
    description: "Raindrops streaking down a glass window with blurred city lights in the background.",
    width: 1200,
    height: 800,
    tags: ["rain", "weather", "moody", "city", "abstract"]
  },
  {
    id: 33,
    url: "https://images.unsplash.com/photo-1473968512647-3cdd8687d382",
    description: "An aerial drone shot of a winding road cutting through a dense green forest.",
    width: 1200,
    height: 800,
    tags: ["drone", "aerial", "road", "forest", "travel"]
  },
  {
    id: 34,
    url: "https://images.unsplash.com/photo-1456926631375-92c8ce872def",
    description: "A majestic leopard resting on a tree branch, looking out over the savanna.",
    width: 1200,
    height: 800,
    tags: ["wildlife", "animal", "leopard", "cat", "nature"]
  },
  {
    id: 35,
    url: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
    description: "A screen displaying cascading green computer code, resembling a hacker interface or the Matrix.",
    width: 1200,
    height: 800,
    tags: ["tech", "code", "programming", "hacker", "abstract"]
  },
  {
    id: 36,
    url: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002",
    description: "A fresh pepperoni pizza with crispy crust and basil leaves on a dark background.",
    width: 1200,
    height: 800,
    tags: ["food", "pizza", "italian", "dinner", "delicious"]
  },
  {
    id: 37,
    url: "https://images.unsplash.com/photo-1551632811-561732d1e306",
    description: "A pair of hiking boots standing on a rocky peak overlooking a vast mountain range.",
    width: 1200,
    height: 800,
    tags: ["hiking", "adventure", "mountains", "travel", "boots"]
  },
  {
    id: 38,
    url: "https://images.unsplash.com/photo-1498931299472-f7a63a029766",
    description: "Bright colorful fireworks exploding in the night sky during a celebration.",
    width: 1200,
    height: 800,
    tags: ["celebration", "fireworks", "night", "party", "colorful"]
  },
  {
    id: 39,
    url: "https://images.unsplash.com/photo-1508057198894-247b6d788d65",
    description: "An antique gold pocket watch resting on a dark surface, symbolizing time.",
    width: 1200,
    height: 800,
    tags: ["vintage", "time", "watch", "antique", "object"]
  },
  {
    id: 40,
    url: "https://images.unsplash.com/photo-1465447142348-e9952c393450",
    description: "A symmetric view of a modern subway tunnel with lights leading into the distance.",
    width: 1200,
    height: 800,
    tags: ["urban", "city", "subway", "transport", "architecture"]
  }
];

