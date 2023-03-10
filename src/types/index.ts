export interface Painting {
  id: string;
  name: string;
  price: number;
  isSold: boolean;
  createdDate: number; // the number of milliseconds since the epoch
}

export interface ESPainting {
  id: string;
  name: string;
  price: number;
  isSold: boolean;
  createdDate: string; // the number of milliseconds since the epoch
}
