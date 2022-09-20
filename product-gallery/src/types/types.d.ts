export interface Product {
  id: string;
  title: string;
  comments?: string[];
  images: Image[];
  price: string;
}

export interface Image {
  thumb: string;
  original: string;
}

export interface CommentObject {
  name: string;
  content: string;
}
