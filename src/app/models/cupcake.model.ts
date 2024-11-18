// create a class or an interface
export interface Cupcake {
  id: number;
  accessory_id: string;
  url: string;
  color1: string;
  color2: string;
  color3: string;
  name: string;
}

export type CupcakesList = Cupcake[];
