export interface RootObject {
    ok: boolean;
    images: Image[];
  }
  
  export interface Image {
    date: string;
    _id: string;
    user: User;
    title: string;
    __v: number;
    image: string;
  }
  
  export interface User {
    _id: string;
    name: string;
  }