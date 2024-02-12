import { CardData } from "../types/types";

const cardData: CardData[] = [
  {
    id: "vote_for_pedro",
    title: "Napoleon Dynamite",
    year: 2004,
    quote: "Vote for Pedro",
    actors: [
      {
        name: "Jon Hyder",
        role: "Napoleon Dynamite",
      },
      {
        name: "Efren Ramirez",
        role: "Pedro",
      },
      {
        name: "Jon Gries",
        role: "Uncle Rico",
      },
    ],
  },
  {
    id: "hes_a_very_naughty_boy",
    title: "Life of Brian",
    quote: "He's not the Messiah, he's a very naughty boy!",
    year: 1979,
    actors: [
      {
        name: "Graham Chapman",
        role: "Brian Cohen",
      },
      {
        name: "John Cleese",
        role: "Jewish Official",
      },
      {
        name: "Terry Gilliam",
        role: "Man Even Further Forward",
      },
      {
        name: "Eric Idle",
        role: "Stan aka Loretta",
      },
      {
        name: "Terry Jones",
        role: "Simon the Holy Man",
      },
      {
        name: "Michael Palin",
        role: "Shoe Follower",
      },
    ],
  },
  {
    id: "nakki_on_varma",
    title: "Katsastus",
    quote: "Ei kannata kävellä, kengät kuluu",
    year: 1988,
    actors: [
      {
        name: "Vesa Vierikko",
        role: "Viltteri",
      },
      {
        name: "Sulevi Peltola",
        role: "Öövini",
      },
      {
        name: "Markku Maalismaa",
        role: "Junnu",
      },
      {
        name: "Kaija Pakarinen",
        role: "Mallu",
      },
    ],
  },
];

export default cardData;
