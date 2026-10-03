export interface Hobby {
  id: string;
  title: string;
  category: string;
  tag: string;
  description: string;
  aspects: string[];
}

export const hobbies: Hobby[] = [
  {
    id: "photography",
    title: "Photography",
    category: "Visual Arts",
    tag: "Nature & Architectural",
    description:
      "Passionate about framing the intersection between the natural world and human engineering. Focusing on raw natural landscapes, golden hour light, and the clean geometric symmetry of architectural structures.",
    aspects: [
      "Architectural symmetry & facades",
      "Nature & wilderness landscapes",
      "Golden hour shadows & contrasts",
      "Minimalist visual composition",
    ],
  },
  {
    id: "culinary",
    title: "Culinary Arts & Cooking",
    category: "Gastronomy",
    tag: "Bangla Cuisine",
    description:
      "Deeply love crafting authentic Bangla culinary dishes. Enjoy the patience of slow-cooked curries, whole spice tempering, complex aromatic biryanis, and traditional family recipes.",
    aspects: [
      "Traditional Bangla curries & bhortas",
      "Authentic layered biryanis & pulao",
      "Custom spice roasting & tempering",
      "Slow-braised savory gravies",
    ],
  },
  {
    id: "travel",
    title: "Travel & Exploration",
    category: "Adventure",
    tag: "Journeys & Destinations",
    description:
      "An avid traveler always drawn toward new horizons, scenic topography, historic architecture, and remote nature trails. Traveling broadens perspective and offers a fresh lens on how cultures interact with their environments.",
    aspects: [
      "Mountain & coastal expeditions",
      "Historical landmarks & heritage sites",
      "Cultural immersion & local food trails",
      "Spontaneous road trips & hikes",
    ],
  },
  {
    id: "gardening",
    title: "Gardening & Greenery",
    category: "Nature",
    tag: "Urban Botanicals",
    description:
      "A peaceful hands-on hobby tending to ornamental plants and urban greenery. Caring for botanical growth teaches patience, consistent attention, and the quiet satisfaction of watching seeds flourish.",
    aspects: [
      "Indoor foliage & botanical care",
      "Urban balcony greenery",
      "Soil health & propagation",
      "Quiet daily mindfulness",
    ],
  },
];
