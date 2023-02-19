const imageArray = [
  {
    id: 1,
    src: "/images/lion.png",
    name: "lion",
  },
  {
    id: 2,
    src: "/images/bird.png",
    name: "bird",
  },
  {
    id: 3,
    src: "/images/croco.png",
    name: "croco",
  },
  {
    id: 4,
    src: "/images/gazelle.png",
    name: "gazelle",
  },
  {
    id: 5,
    src: "/images/gorille.png",
    name: "gorille",
  },
  {
    id: 6,
    src: "/images/lemu.png",
    name: "lemu",
  },
  {
    id: 7,
    src: "/images/rino.png",
    name: "rino",
  },
  {
    id: 8,
    src: "/images/monkey.png",
    name: "monkey",
  },
];

export type imageType = {
  id: number;
  src: string;
  name: string;
};

// Function for images mixing
export const mixImages = (arr: imageType[]) => {
  for (let i = arr.length - 1; i > 0; i--) {
    const x = Math.floor(Math.random() * (i + 1));
    // Swap value
    [arr[i], arr[x]] = [arr[x], arr[i]];
  }

  return arr;
};

// We double images and then mixed them
const images = imageArray.concat(imageArray);
export default images;
