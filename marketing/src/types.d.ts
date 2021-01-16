export interface Poke {
  id: number;
  name: string;
  image: string;
  url: string;
  types?: object[];
  abilities?: object[];
  species?: string;
}
