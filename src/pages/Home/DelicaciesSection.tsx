import {
  Apple,
  UtensilsCrossed,
  Wine,
  Coffee,
  Drumstick,
  Soup,
} from "lucide-react"; // Import icons from Lucide
import React from "react";

// Define the type for a delicacy
interface Delicacy {
  name: string;
  description: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>; // Icon component type
}

const delicacies: Delicacy[] = [
  {
    name: "Apple Products",
    description:
      "Local apple-made products like apple pie, cider drink, pickles, and brandy.",
    icon: Apple,
  },
  {
    name: "Thukpa",
    description:
      "A popular noodle soup with vegetables, meat, and flavorful broth.",
    icon: Soup,
  },
  {
    name: "Tongba",
    description:
      "A traditional hot alcoholic beverage made by fermenting millet.",
    icon: Wine,
  },
  {
    name: "Thakali Meal",
    description:
      "A complete meal with rice, pulses, lentils, vegetables, meat, pickles, and gundruk.",
    icon: UtensilsCrossed,
  },
  {
    name: "Butter Tea (Ghiu Chiya)",
    description:
      "A unique and renowned tea made with yak butter and salt, famous in the region.",
    icon: Coffee,
  },
  {
    name: "Yak Momos",
    description:
      "Steamed or fried dumplings made with flavorful yak meat, a local specialty.",
    icon: Drumstick,
  },
];

export function DelicaciesSection() {
  return (
    <section className="py-12 md:py-20">
      <div className="container px-4">
        <h2 className="text-3xl text-center mb-8 font-roboto-flex">
          Delicacies of Marpha
        </h2>       
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {delicacies.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-6 duration-300"
            >
              <item.icon className="h-12 w-12 text-yellow-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {item.name}
              </h3>
              <p className="text-gray-600 text-center">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
