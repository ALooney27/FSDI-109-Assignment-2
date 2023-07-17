let catalog = [
  {
    title: "Orange",
    category: "fruits",
    price: 12.99,
    image: "Orange.jpg",
    id: "1",
  },
  {
    title: "Apple",
    category: "fruits",
    price: 10.99,
    image: "Apple.avif",
    id: "2",
  },
  {
    title: "Celery",
    category: "vegetables",
    price: 3.99,
    image: "Celery.jpg",
    id: "3",
  },
  {
    title: "Snake",
    category: "animals",
    price: 99.99,
    image: "Ekans.webp",
    id: "4",
  },
  {
    title: "Crunch",
    category: "candy",
    price: 2.99,
    image: "Crunch.jpg",
    id: "5",
  },
  {
    title: "Marlboro",
    category: "cigarettes",
    price: 11.99,
    image: "Marlboro-NXT_225x.jpg",
    id: "6",
  },
  {
    title: "Teddy Bear",
    category: "toys",
    price: 49.99,
    image: "Teddy.jpg",
    id: "7",
  },
];

class DataService {
  getProducts() {
    return catalog;
  }
}

export default DataService;
