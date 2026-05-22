import heart from "@/assets/product-heart-mousse.webp";
import ocean from "@/assets/product-ocean-mousse.webp";
import blueberry from "@/assets/product-blueberry-mousse.webp";
import strawberryCake from "@/assets/product-strawberry-cake.webp";
import strawberryCheese from "@/assets/product-strawberry-cheesecake.webp";
import cherry from "@/assets/hero-cherry.webp";

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
    slug: "geometric-heart-mousse",
    name: "Geometric Heart Mousse",
    nameJp: "幾何愛心慕斯",
    tagline: "Silky mousse with a hint of fruitiness and delicate sweetness — like a bite of love.",
    description:
      "An architectural heart sculpted in silky raspberry mousse, dusted in red velvet, finished with edible gold leaf.",
    season: "Spring",
    image: heart,
    category: "Signature",
  },
  {
    slug: "ocean-breeze-mousse",
    name: "Ocean Breeze Mousse",
    nameJp: "海洋微風慕斯",
    tagline: "Dreamy waves of mousse, as gentle as the sea breeze.",
    description:
      "A swirled mirror glaze over layered yuzu and blueberry mousse — fresh, clean, quietly cinematic.",
    season: "Summer",
    image: ocean,
    category: "Mousse",
  },
  {
    slug: "blueberry-mirror-mousse",
    name: "Blueberry Mirror Mousse",
    nameJp: "藍莓鏡面慕斯",
    tagline: "A delicate melt-in-your-mouth treat.",
    description:
      "Deep midnight glaze, brushed silver blossoms, tangy blueberry jam folded into a silken mousse.",
    season: "All Season",
    image: blueberry,
    category: "Mousse",
  },
  {
    slug: "strawberry-cheesecake",
    name: "Strawberry Cheesecake",
    nameJp: "草莓雙色乳酪蛋糕",
    tagline: "A creamy two-tone cheesecake with the perfect touch of strawberry.",
    description:
      "Layers of cultured cream cheese and fresh strawberry mousse on a delicate buttered crust.",
    season: "Spring",
    image: strawberryCheese,
    category: "Cheesecake",
  },
  {
    slug: "strawberry-cake",
    name: "Strawberry Cake",
    nameJp: "草莓蛋糕",
    tagline: "The perfect balance of sweet and tangy.",
    description:
      "Three tiers of vanilla sponge, fresh strawberries, and whipped cream beneath a glossy berry glaze.",
    season: "Spring",
    image: strawberryCake,
    category: "Signature",
  },
  {
    slug: "cherry-blossom-cheesecake",
    name: "Cherry Blossom Cheesecake",
    nameJp: "櫻桃乳酪蛋糕",
    tagline: "A limited seasonal creation inspired by cherry blossoms.",
    description:
      "Jewel-like dark cherries set in a quivering glaze over whipped vanilla cream cheese.",
    season: "Seasonal Limited",
    image: cherry,
    category: "Seasonal",
  },
];