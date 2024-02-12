interface Actor {
  name: string;
  role: string;
}

export interface CardData {
  id: string;
  quote: string;
  title: string;
  year: number;
  actors: Actor[];
}
