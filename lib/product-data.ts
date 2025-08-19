export interface Product {
  id: string;
  imageUrl: string;
  name: string;
  description: string;
  price: number;
}

export const products: Product[] = [
  {
    id: '123',
    name: 'Hat',
    imageUrl: 'hat.jpg',
    description: 'Cheer the team on in style with our unstructured, low crown, six-panel baseball cap made of 100% organic cotton twill. Featuring our original Big Star Collectibles artwork, screen-printed with PVC- and phthalate-free inks. Complete with matching sewn ventilation eyelets, and adjustable fabric closure.',
    price: 29,
  },
  {
    id: '234',
    name: 'Mug',
    imageUrl: 'mug.jpg',
    description: 'Enjoy your morning coffee or tea in the company of your favorite Big Star Collectible character. Our strong ceramic mug, with its comfortable D-shaped handle, is microwave and dishwasher safe, and available in one size: 11 oz (3.2” diameter x 3.8” h).',
    price: 16,
  },
  {
    id: '345',
    name: 'Shirt',
    imageUrl: 'shirt.jpg',
    description: 'Our t-shirts are made from ring-spun, long-staple organic cotton that\'s ethically sourced from member farms of local organic cotton cooperatives. Original artwork is screen-printed using PVC- and phthalate-free inks. Features crew-neck styling, shoulder-to-shoulder taping, and a buttery soft feel. Machine-wash warm, tumble-dry low.',
    price: 26,
  },
  {
    id: '456',
    name: 'Apron',
    imageUrl: 'apron.jpg',
    description: 'Everyone’s a chef in our eco-friendly apron made from 55% organic cotton and 45% recycled polyester. Showcasing your favorite Big Star Collectibles design, the apron is screen-printed in PVC- and phthalate-free inks. Apron measures 24 inches wide by 30 inches long and is easily adjustable around the neck and waist with one continuous strap. Machine-wash warm, tumble-dry low.',
    price: 24,
  },
  // New products
  {
    id: '567',
    name: 'Blue Horizon T-Shirt',
    imageUrl: 'tshirt-blue.jpg',
    description: 'Comfortable blue t-shirt made from 100% organic cotton, perfect for casual wear.',
    price: 20,
  },
  {
    id: '568',
    name: 'Red Blaze T-Shirt',
    imageUrl: 'tshirt-red.jpg',
    description: 'Bright red t-shirt with a soft, breathable fabric and classic crew-neck design.',
    price: 22,
  },
  {
    id: '569',
    name: 'Green Forest T-Shirt',
    imageUrl: 'tshirt-green.jpg',
    description: 'Eco-friendly green t-shirt made from sustainable cotton, soft and durable.',
    price: 21,
  },
  {
    id: '570',
    name: 'Black Star Logo T-Shirt',
    imageUrl: 'tshirt-black1.jpg',
    description: 'Black t-shirt with a bold star logo on the chest, made of premium organic cotton.',
    price: 25,
  },
  {
    id: '571',
    name: 'Black Moon Logo T-Shirt',
    imageUrl: 'tshirt-black2.jpg',
    description: 'Sleek black t-shirt featuring a crescent moon logo, soft and comfortable for everyday wear.',
    price: 25,
  },
  {
    id: '572',
    name: 'Black Flame Logo T-Shirt',
    imageUrl: 'tshirt-black3.jpg',
    description: 'Stylish black t-shirt with a flame logo print, made from 100% organic cotton.',
    price: 25,
  },
  {
    id: '573',
    name: 'Sunny Yellow T-Shirt',
    imageUrl: 'tshirt-yellow.jpg',
    description: 'Vibrant yellow t-shirt made with 100% cotton, perfect for sunny days.',
    price: 23,
  },
  {
    id: '574',
    name: 'Women’s Chic Bag',
    imageUrl: 'womens-bag.jpg',
    description: 'Elegant women’s bag made from eco-friendly materials, spacious and stylish.',
    price: 45,
  },
];
