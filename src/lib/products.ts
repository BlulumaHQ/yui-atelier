import taroPudding from "@/assets/product-taro-pudding.webp";
import heart from "@/assets/product-heart-mousse.webp";
import blueberry from "@/assets/product-blueberry-mousse.webp";
import strawberryCake from "@/assets/product-strawberry-cake.webp";
import strawberryShortcake from "@/assets/product-strawberry-shortcake.webp";
import shineMuscat from "@/assets/product-shine-muscat.webp";
import strawberryLayered from "@/assets/product-strawberry-layered.webp";
import mangoCream from "@/assets/product-mango-cream.webp";

export type Product = {
  slug: string;
  name: string;
  nameJp: string;
  tagline: string;
  description: string;
  season: string;
  image: string;
  category: "Mousse" | "Cheesecake" | "Seasonal" | "Signature";
};

export const products: Product[] = [
  {
    slug: "strawberry-cake",
    name: "Strawberry Cake",
    nameJp: "草莓蛋糕",
    tagline: "The perfect balance of sweet and tangy.",
    description: "Three tiers of vanilla sponge, fresh strawberries, and whipped cream beneath a glossy berry glaze.",
    season: "Spring",
    image: strawberryCake,
    category: "Signature",
  },
  {
    slug: "strawberry-shortcake",
    name: "Strawberry Shortcake",
    nameJp: "草莓夾心蛋糕",
    tagline: "Fresh strawberries in every bite.",
    description:
      "Pillow-soft vanilla sponge layered with fresh strawberries and airy whipped cream — clean, fresh, never too sweet.",
    season: "Spring",
    image: strawberryShortcake,
    category: "Signature",
  },
  {
    slug: "shine-muscat-cheesecake",
    name: "Shine Muscat Cheesecake",
    nameJp: "青葡萄果凍生乳酪蛋糕",
    tagline: "Juicy Shine Muscat and creamy cheesecake — a taste of summer in every bite.",
    description:
      "Plump Shine Muscat grapes set in clear jelly above a silken cream cheese mousse and crisp cookie base.",
    season: "Summer",
    image: shineMuscat,
    category: "Cheesecake",
  },
  {
    slug: "strawberry-layered-cheesecake",
    name: "Strawberry Layered Cheesecake",
    nameJp: "草莓多層次乳酪蛋糕",
    tagline: "Seven layers of strawberry cheesecake — sweet, creamy, and perfectly balanced.",
    description:
      "Seven gradient layers of strawberry cream cheese, crowned with fresh berries and tied with a silk ribbon.",
    season: "Spring",
    image: strawberryLayered,
    category: "Cheesecake",
  },
  {
    slug: "mango-cream-cake",
    name: "Mango Cream Cake",
    nameJp: "鮮芒果夾心蛋糕",
    tagline: "Sweet mango and silky cream, a little moment of pure happiness.",
    description:
      "Fresh mango cubes nestled on cloud-soft whipped cream above a tender vanilla sponge, scattered with petals.",
    season: "Summer",
    image: mangoCream,
    category: "Signature",
  },
];
