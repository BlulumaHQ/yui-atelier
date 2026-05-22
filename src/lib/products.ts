import heart from "@/assets/product-heart-mousse.webp";
import ocean from "@/assets/product-ocean-mousse.webp";
import blueberry from "@/assets/product-blueberry-mousse.webp";
import strawberryCake from "@/assets/product-strawberry-cake.webp";
import strawberryCheese from "@/assets/product-strawberry-cheesecake.webp";
import cherry from "@/assets/product-cherry-cheesecake.webp";
import strawberryLayered from "@/assets/product-strawberry-layered.webp";
import berryCrumble from "@/assets/product-berry-crumble.webp";
import shineMuscat from "@/assets/product-shine-muscat.webp";
import taroPudding from "@/assets/product-taro-pudding.webp";

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
    slug: "cherry-cheesecake",
    name: "Cherry Cheesecake",
    nameJp: "櫻桃凍乳酪蛋糕",
    tagline: "Juicy cherries, creamy cheesecake, and a crisp cookie base — a perfect balance in every bite.",
    description:
      "Jewel-like dark cherries suspended in a glossy jelly above a silken cheese mousse and crisp cookie base.",
    season: "Seasonal Limited",
    image: cherry,
    category: "Seasonal",
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
    slug: "berry-crumble-cake",
    name: "Berry Crumble Cake",
    nameJp: "莓果雲朵蛋糕",
    tagline: "Soft and fluffy cake topped with delicate crumbs, fresh berries, and a touch of sweetness.",
    description:
      "A pillow-soft sponge wrapped in fine buttered crumbs and adorned with raspberries and blueberries.",
    season: "All Season",
    image: berryCrumble,
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
    slug: "taro-pudding-cake",
    name: "Taro Pudding Cake",
    nameJp: "芋泥布丁蛋糕",
    tagline: "Creamy taro and silky pudding — a perfect blend of comfort and sweetness.",
    description:
      "Layers of vanilla sponge, taro mousse, and silky pudding crowned with hand-piped taro rosettes.",
    season: "Autumn",
    image: taroPudding,
    category: "Signature",
  },
];