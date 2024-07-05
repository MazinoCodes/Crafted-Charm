import img1 from '../images/Product1.svg';
import img2 from '../images/Product2.svg';
import img3 from '../images/Product3.svg';
import img4 from '../images/Product4.svg';
import img5 from '../images/Product5.svg';
import img6 from '../images/Product6.svg';
import new1 from'../images/Newpic1.svg'
import opic2 from  '../images/opic2.svg'
import opic3 from  '../images/opic3.svg'

const products = [
  {
    id: 1,
    name: 'King’s Delight Sofa',
    price: 550.00,
    pic: img1,
    opic: [img1],
    review: 12,
    rating: 4.25,
    description:
      'Transform your living space with the timeless elegance of our Chateau Armchair. This exquisite piece blends classic design with modern comfort, making it a perfect addition to any home',
  },
  {
    id: 2,
    name: 'Royal Comfort Bed',
    price: 750.00,
    pic: img2,
    opic: [img2],
    review: 8,
    rating: 4.0,
    description:
      'Indulge in luxurious comfort with our Royal Comfort Bed. Crafted with premium materials and exquisite detailing, it promises a restful night’s sleep in unparalleled style.',
  },
  {
    id: 3,
    name: 'Cosmic Dining Table',
    price: 420.00,
    pic: img3,
    opic: [img3],
    review: 10,
    rating: 4.5,
    description:
      'Create unforgettable dining experiences with our Cosmic Dining Table. Its sleek, minimalist design and durable construction make it a perfect centerpiece for modern homes.',
  },
  {
    id: 4,
    name: 'Elegant Lounge Chair',
    price: 320.00,
    pic: img4,
    opic: [img4],
    review: 6,
    rating: 4.0,
    description:
      'Enhance your relaxation space with our Elegant Lounge Chair. With its ergonomic design and plush cushioning, it offers both comfort and sophistication.',
  },
  {
    id: 5,
    name: 'Zen Garden Sofa Set',
    price: 980.00,
    pic: img5,
    opic: [img5],
    review: 15,
    rating: 4.8,
    description:
      'Transform your outdoor oasis with our Zen Garden Sofa Set. Crafted for durability and style, it brings tranquility and luxury to your garden or patio.',
  },
  {
    id: 6,
    name: 'Vintage Bookshelf',
    price: 280.00,
    pic: img6,
    newpic: new1,
    opic: [new1, opic2, opic3],
    review: 20,
    rating: 4.7,
    description:
      'Organize your books in style with our Vintage Bookshelf. Its classic design and sturdy build make it a charming addition to any study or living room.',
  },
  {
    id: 7,
    name: 'Modern Ottoman Set',
    price: 480.00,
    pic: img1,
    opic: [img1],
    review: 18,
    rating: 4.6,
    description:
      'Add versatility to your seating arrangement with our Modern Ottoman Set. Its sleek design and multipurpose functionality make it a must-have for contemporary interiors.',
  },
  {
    id: 8,
    name: 'Contemporary Desk Lamp',
    price: 120.00,
    pic: img2,
    opic: [img2],
    review: 5,
    rating: 4.2,
    description:
      'Illuminate your workspace with our Contemporary Desk Lamp. Its adjustable design and energy-efficient lighting provide optimal brightness and style.',
  },
  {
    id: 9,
    name: 'Chic Wall Mirror',
    price: 180.00,
    pic: img3,
    opic: [img3],
    review: 7,
    rating: 4.3,
    description:
      'Enhance your decor with our Chic Wall Mirror. Its elegant frame and reflective surface add depth and sophistication to any room.',
  },
  {
    id: 10,
    name: 'Rustic Coffee Table',
    price: 380.00,
    pic: img4,
    opic: [img4],
    review: 9,
    rating: 4.1,
    description:
      'Bring warmth to your living space with our Rustic Coffee Table. Its sturdy construction and rustic charm make it a focal point in any cozy home.',
  },
  {
    id: 11,
    name: 'Minimalist Side Chair',
    price: 220.00,
    pic: img5,
    opic: [img5],
    review: 11,
    rating: 4.4,
    description:
      'Achieve simplicity and comfort with our Minimalist Side Chair. Its clean lines and ergonomic design offer both style and support for everyday use.',
  },
  {
    id: 12,
    name: 'Vintage Floor Lamp',
    price: 280.00,
    pic: img6,
    opic: [img6],
    review: 14,
    rating: 4.5,
    description:
      'Illuminate your living space with our Vintage Floor Lamp. Its timeless design and soft lighting create a cozy ambiance for reading and relaxation.',
  },
];

export default products;
