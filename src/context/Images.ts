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
      url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
      description: "A breathtaking mountain landscape at sunset with golden light illuminating the peaks and a calm lake in the foreground reflecting the colorful sky.",
      width: 1200,
      height: 800,
      tags: ["mountains", "sunset", "landscape", "nature", "lake"]
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1518837695005-2083093ee35b",
      description: "A curious fox in its natural habitat, peeking through autumn foliage with vibrant orange and red leaves surrounding its alert face.",
      width: 1200,
      height: 800,
      tags: ["wildlife", "fox", "autumn", "nature", "animal"]
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1519681393784-d120267933ba",
      description: "The majestic Milky Way galaxy stretching across a dark night sky above a serene mountain range, with stars twinkling brightly.",
      width: 1200,
      height: 800,
      tags: ["astrophotography", "milky way", "night sky", "stars", "mountains"]
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1540206395-68808572332f",
      description: "A tranquil cityscape at twilight with skyscrapers reflecting warm orange and purple sunset colors in their glass windows.",
      width: 1200,
      height: 800,
      tags: ["cityscape", "twilight", "urban", "architecture", "sunset"]
    },
    {
      id: 5,
      url: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0",
      description: "A vibrant coffee shop interior with warm lighting, wooden tables, and beautiful latte art featuring intricate leaf patterns.",
      width: 1200,
      height: 800,
      tags: ["coffee", "interior", "cafe", "latte art", "food"]
    },
    {
      id: 6,
      url: "https://images.unsplash.com/photo-1559827260-dc66d52bef19",
      description: "A surfer riding a perfect barrel wave at sunrise, with golden light filtering through the translucent curl of the ocean wave.",
      width: 1200,
      height: 800,
      tags: ["ocean", "surfing", "waves", "sunrise", "sports"]
    },
    {
      id: 7,
      url: "https://images.unsplash.com/photo-1528164344705-47542687000d",
      description: "Traditional Japanese temple with cherry blossom trees in full bloom, delicate pink petals floating in the spring breeze.",
      width: 1200,
      height: 800,
      tags: ["japan", "temple", "cherry blossoms", "spring", "culture"]
    },
    {
      id: 8,
      url: "https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5",
      description: "A vibrant field of lavender in Provence, France, with endless rows of purple flowers stretching to distant mountains under a clear blue sky.",
      width: 1200,
      height: 800,
      tags: ["lavender", "fields", "france", "flowers", "summer"]
    },
    {
      id: 9,
      url: "https://images.unsplash.com/photo-1511988617509-a57c8a288659",
      description: "A hot air balloon festival at dawn, with dozens of colorful balloons rising into the morning sky above misty fields.",
      width: 1200,
      height: 800,
      tags: ["hot air balloons", "festival", "dawn", "colorful", "travel"]
    },
    {
      id: 10,
      url: "https://images.unsplash.com/photo-1519681393784-d120267933ba",
      description: "The northern lights dancing across a starry night sky above a frozen lake, with vibrant green curtains illuminating the snowy landscape.",
      width: 1200,
      height: 800,
      tags: ["aurora borealis", "northern lights", "night", "stars", "winter"]
    },
    {
      id: 11,
      url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b",
      description: "A massive iceberg floating in turquoise Arctic waters, revealing intricate blue patterns and textures carved by nature over centuries.",
      width: 1200,
      height: 800,
      tags: ["iceberg", "arctic", "glacier", "blue ice", "nature"]
    },
    {
      id: 12,
      url: "https://images.unsplash.com/photo-1519996529931-28324d5a630e",
      description: "A dense tropical rainforest with sunlight filtering through the canopy, highlighting vibrant green leaves and hanging vines.",
      width: 1200,
      height: 800,
      tags: ["rainforest", "jungle", "tropical", "greenery", "nature"]
    },
    {
      id: 13,
      url: "https://images.unsplash.com/photo-1534088568595-a066f410bcda",
      description: "A delicious gourmet pizza fresh from the oven, with melted cheese, pepperoni, and fresh basil on a crispy crust.",
      width: 1200,
      height: 800,
      tags: ["food", "pizza", "gourmet", "cheese", "cooking"]
    },
    {
      id: 14,
      url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4",
      description: "Snow-capped mountain peaks piercing through clouds at sunrise, creating dramatic shadows and highlights across the rugged terrain.",
      width: 1200,
      height: 800,
      tags: ["alps", "mountains", "snow", "sunrise", "landscape"]
    },
    {
      id: 15,
      url: "https://images.unsplash.com/photo-1544551763-46a013bb70d5",
      description: "A macro shot of a honey bee collecting nectar from a bright yellow sunflower, with pollen visible on its legs and wings.",
      width: 1200,
      height: 800,
      tags: ["macro", "bee", "sunflower", "insect", "nature"]
    },
    {
      id: 16,
      url: "https://images.unsplash.com/photo-1536152470836-b943b246224c",
      description: "Ancient Roman Colosseum illuminated by golden hour light, highlighting the intricate arches and centuries-old stonework.",
      width: 1200,
      height: 800,
      tags: ["rome", "colosseum", "ancient", "architecture", "history"]
    },
    {
      id: 17,
      url: "https://images.unsplash.com/photo-1559827291-72ee739d0d9a",
      description: "A professional ballet dancer performing a graceful leap on stage, captured in mid-air with dramatic lighting.",
      width: 1200,
      height: 800,
      tags: ["ballet", "dance", "performance", "art", "movement"]
    },
    {
      id: 18,
      url: "https://images.unsplash.com/photo-1542204165-65bf26472b9b",
      description: "A colorful street art mural covering an entire building facade, featuring abstract patterns and vibrant geometric designs.",
      width: 1200,
      height: 800,
      tags: ["street art", "mural", "urban", "colorful", "graffiti"]
    },
    {
      id: 19,
      url: "https://images.unsplash.com/photo-1526047932273-341f2a7631f9",
      description: "A cozy reading nook by a window during rainfall, with a comfortable armchair, books, and warm lighting.",
      width: 1200,
      height: 800,
      tags: ["interior", "cozy", "reading", "rain", "home"]
    },
    {
      id: 20,
      url: "https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5",
      description: "A close-up of morning dew on a spider web, with each droplet perfectly formed and reflecting the early sunlight.",
      width: 1200,
      height: 800,
      tags: ["macro", "spider web", "dew", "morning", "nature"]
    },
    {
        id: 21,
        url: "https://picsum.photos/id/1015/1200/800",
        description: "A misty mountain landscape with winding roads and dramatic cliffs overlooking a deep valley.",
        width: 1200,
        height: 800,
        tags: ["mountains", "mist", "landscape", "road", "nature"]
      },
      {
        id: 22,
        url: "https://picsum.photos/id/1018/1200/800",
        description: "A serene forest path covered in autumn leaves, with sunlight filtering through the colorful canopy.",
        width: 1200,
        height: 800,
        tags: ["forest", "autumn", "path", "leaves", "nature"]
      },
      {
        id: 23,
        url: "https://picsum.photos/id/1020/1200/800",
        description: "A majestic bear standing in a mountain stream, surrounded by pine trees and rocky terrain.",
        width: 1200,
        height: 800,
        tags: ["wildlife", "bear", "mountains", "stream", "nature"]
      },
      {
        id: 24,
        url: "https://picsum.photos/id/1021/1200/800",
        description: "A beautiful husky dog with bright blue eyes, sitting in a snowy landscape.",
        width: 1200,
        height: 800,
        tags: ["dog", "husky", "snow", "animal", "winter"]
      },
      {
        id: 25,
        url: "https://picsum.photos/id/1022/1200/800",
        description: "A detailed macro shot of a blooming flower with vibrant purple petals and water droplets.",
        width: 1200,
        height: 800,
        tags: ["flower", "macro", "purple", "bloom", "nature"]
      },
      {
        id: 26,
        url: "https://picsum.photos/id/1023/1200/800",
        description: "A misty waterfall cascading down moss-covered rocks in a dense green forest.",
        width: 1200,
        height: 800,
        tags: ["waterfall", "forest", "mist", "nature", "water"]
      },
      {
        id: 27,
        url: "https://picsum.photos/id/1024/1200/800",
        description: "A curious mountain goat perched on steep cliffs with breathtaking valley views in the background.",
        width: 1200,
        height: 800,
        tags: ["goat", "mountains", "cliffs", "wildlife", "landscape"]
      },
      {
        id: 28,
        url: "https://picsum.photos/id/1025/1200/800",
        description: "A cute pug dog wearing glasses, looking curiously at the camera with a playful expression.",
        width: 1200,
        height: 800,
        tags: ["dog", "pug", "cute", "pet", "animal"]
      },
      {
        id: 29,
        url: "https://picsum.photos/id/1026/1200/800",
        description: "A professional cyclist racing through rugged mountain terrain during golden hour.",
        width: 1200,
        height: 800,
        tags: ["sports", "cycling", "mountains", "action", "adventure"]
      },
      {
        id: 30,
        url: "https://picsum.photos/id/1027/1200/800",
        description: "A modern city skyline at dusk with the first lights of evening twinkling in skyscraper windows.",
        width: 1200,
        height: 800,
        tags: ["city", "skyline", "dusk", "urban", "architecture"]
      },
      {
        id: 31,
        url: "https://picsum.photos/id/1028/1200/800",
        description: "Aerial view of winding roads through autumn-colored forests and mountains.",
        width: 1200,
        height: 800,
        tags: ["aerial", "roads", "forest", "autumn", "landscape"]
      },
      {
        id: 32,
        url: "https://picsum.photos/id/1029/1200/800",
        description: "A serene lake perfectly reflecting surrounding mountains and trees at sunrise.",
        width: 1200,
        height: 800,
        tags: ["lake", "reflection", "mountains", "sunrise", "calm"]
      },
      {
        id: 33,
        url: "https://picsum.photos/id/103/1200/800",
        description: "Colorful hot air balloons floating above a misty valley at dawn.",
        width: 1200,
        height: 800,
        tags: ["hot air balloons", "dawn", "valley", "colorful", "travel"]
      },
      {
        id: 34,
        url: "https://picsum.photos/id/1031/1200/800",
        description: "A majestic eagle in flight against a clear blue sky, wings spread wide.",
        width: 1200,
        height: 800,
        tags: ["eagle", "bird", "flight", "wildlife", "sky"]
      },
      {
        id: 35,
        url: "https://picsum.photos/id/1033/1200/800",
        description: "A peaceful country road lined with blooming trees leading to distant hills.",
        width: 1200,
        height: 800,
        tags: ["road", "countryside", "spring", "blossoms", "rural"]
      }
  ];