
export interface CatData {
  id: number;
  name: string;
  breed: string;
  age: number;
  weight: number;
  color: string;
  description: string;
  traits: string[];
  playfulness: number; // 1-5
  friendliness: number; // 1-5
  funFact: string;
}

export interface CatFact {
  id: number;
  title: string;
  content: string;
  category: string;
}

// Sample data for cats
export const cats: CatData[] = [
  {
    id: 1,
    name: "Whiskers",
    breed: "Maine Coon",
    age: 3,
    weight: 6.5,
    color: "#A67B5B", // Light brown
    description: "Whiskers is a majestic Maine Coon with a playful personality. He loves to chase laser pointers and cuddle on the couch.",
    traits: ["Playful", "Affectionate", "Curious"],
    playfulness: 4,
    friendliness: 5,
    funFact: "Whiskers can open doors by jumping and hanging on the handle!"
  },
  {
    id: 2,
    name: "Luna",
    breed: "Siamese",
    age: 2,
    weight: 4.2,
    color: "#E5D8C9", // Cream
    description: "Luna is a talkative Siamese who always has something to say. She enjoys sitting on windowsills and watching birds outside.",
    traits: ["Vocal", "Intelligent", "Demanding"],
    playfulness: 3,
    friendliness: 4,
    funFact: "Luna can recognize her name and comes when called, just like a dog!"
  },
  {
    id: 3,
    name: "Oliver",
    breed: "British Shorthair",
    age: 5,
    weight: 5.8,
    color: "#536878", // Steel blue-gray
    description: "Oliver is a dignified British Shorthair who enjoys napping in sunbeams. He's not big on high-energy play but loves gentle petting.",
    traits: ["Calm", "Independent", "Gentle"],
    playfulness: 2,
    friendliness: 3,
    funFact: "Oliver has a unique method of drinking water, dipping his paw in first and then licking it off!"
  },
  {
    id: 4,
    name: "Bella",
    breed: "Ragdoll",
    age: 1,
    weight: 3.9,
    color: "#FFFFFF", // White
    description: "Bella is a fluffy Ragdoll kitten who loves to be held. True to her breed, she goes limp when picked up and enjoys being carried around.",
    traits: ["Relaxed", "Cuddly", "Gentle"],
    playfulness: 5,
    friendliness: 5,
    funFact: "Bella has heterochromia - one blue eye and one green eye!"
  },
  {
    id: 5,
    name: "Max",
    breed: "Bengal",
    age: 4,
    weight: 5.2,
    color: "#D2B48C", // Tan with spots
    description: "Max is an energetic Bengal who needs lots of playtime. He's fascinated by water and sometimes joins his humans in the shower!",
    traits: ["Energetic", "Adventurous", "Athletic"],
    playfulness: 5,
    friendliness: 3,
    funFact: "Max can jump over 6 feet high from a standing position!"
  },
  {
    id: 6,
    name: "Cleo",
    breed: "Scottish Fold",
    age: 3,
    weight: 4.5,
    color: "#808080", // Gray
    description: "Cleo is an adorable Scottish Fold with folded ears that give her an owl-like appearance. She's known for her sweet temperament.",
    traits: ["Quiet", "Sweet", "Reserved"],
    playfulness: 3,
    friendliness: 5,
    funFact: "Cleo likes to sleep on her back with all four paws in the air!"
  },
  {
    id: 7,
    name: "Simba",
    breed: "Orange Tabby",
    age: 2,
    weight: 5.5,
    color: "#FF9D00", // Orange
    description: "Simba is a bold and confident orange tabby who rules the household. He's always the first to investigate new things.",
    traits: ["Bold", "Curious", "Friendly"],
    playfulness: 4,
    friendliness: 4,
    funFact: "Simba knows how to play fetch with small toys and will bring them back to you repeatedly!"
  },
  {
    id: 8,
    name: "Mochi",
    breed: "Japanese Bobtail",
    age: 1,
    weight: 3.8,
    color: "#FFFDD0", // Cream with patches
    description: "Mochi is an active Japanese Bobtail with a distinctive bobbed tail. She's incredibly agile and loves interactive toys.",
    traits: ["Agile", "Smart", "Talkative"],
    playfulness: 5,
    friendliness: 4,
    funFact: "Mochi can recognize over 10 different toys by name and will retrieve the correct one when asked!"
  }
];

// Sample cat facts
export const catFacts: CatFact[] = [
  {
    id: 1,
    title: "Super Hearing",
    content: "Cats can hear sounds up to 64kHz, which is 1.6 octaves above the human range and even 1 octave above a dog's hearing.",
    category: "Biology"
  },
  {
    id: 2,
    title: "Unique Nose Print",
    content: "Just like human fingerprints, a cat's nose pad has a unique pattern of ridges and bumps that can be used for identification.",
    category: "Biology"
  },
  {
    id: 3,
    title: "Ancient Companions",
    content: "Cats have been living alongside humans for approximately 12,000 years, making them one of the oldest domesticated animals.",
    category: "History"
  },
  {
    id: 4,
    title: "Power Naps",
    content: "Cats sleep for 70% of their lives. An average cat sleeps between 13-16 hours a day, conserving energy for their moments of intense activity.",
    category: "Behavior"
  },
  {
    id: 5,
    title: "Whisker Sensitivity",
    content: "A cat's whiskers are roughly as wide as their body - they use them to determine if they can fit through a space without getting stuck.",
    category: "Biology"
  },
  {
    id: 6,
    title: "Night Vision",
    content: "Cats need only 1/6 of the light humans do to see in the dark, thanks to a layer of extra reflecting cells behind their retina.",
    category: "Biology"
  },
  {
    id: 7,
    title: "Falling Experts",
    content: "Cats have a flexible backbone and a specialized righting reflex that allows them to almost always land on their feet when falling.",
    category: "Biology"
  },
  {
    id: 8,
    title: "Purring Healing",
    content: "A cat's purr vibrates at a frequency of 25 to 150 Hz, which is known to be therapeutic and can help heal bones, tendons, and muscles.",
    category: "Biology"
  },
  {
    id: 9,
    title: "Calico Genetics",
    content: "Almost all calico cats (cats with orange, black, and white fur) are female due to the genetics of coat color being linked to the X chromosome.",
    category: "Genetics"
  },
  {
    id: 10,
    title: "Water Preference",
    content: "Many cats prefer running water to still water in a bowl because in the wild, running water is less likely to be contaminated.",
    category: "Behavior"
  },
  {
    id: 11,
    title: "Vocalization Power",
    content: "Cats have over 100 vocal sounds, while dogs only have about 10. Their varied communication includes meows, purrs, trills, hisses, and more.",
    category: "Communication"
  },
  {
    id: 12,
    title: "Taste Limitations",
    content: "Cats lack the ability to taste sweetness due to a mutation in the gene that codes for the sweet taste receptor.",
    category: "Biology"
  }
];
