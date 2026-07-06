export interface Rider {
  id: number;
  name: string;
  phone: string;
  vehicle: string;
  rating: number;
  status: "Available" | "Busy";
  avatar: string;
}