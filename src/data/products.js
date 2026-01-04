import { nanoid } from "nanoid";

const products = [
  {
    id: nanoid(),
    name: "ube halaya",
    price: 80,
    image:
      "https://i.pinimg.com/736x/f2/22/c4/f222c44e9d92f6f1927e2fa66b6a033e.jpg",
    description:
      "Our Ube Halaya with Cheese takes the traditional, velvety purple yam jam and elevates it with a bold, salty twist. Slow-cooked to creamy perfection and topped with a generous layer of grated cheddar.",
  },
  {
    id: nanoid(),
    name: "cassava cake",
    price: 70,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSmb2XP28zWpl_4ZqSi63VtIrJgRyNQEPHEw&s",
    description:
      "Savor the soul of Filipino desserts with our Cassava Cake. Crafted from finely grated cassava and rich coconut milk, this cake is baked to a soft, custard-like consistency and finished with a signature golden-brown topping.",
  },
  {
    id: nanoid(),
    name: "bibingkang malagkit",
    price: 70,
    image:
      "https://www.kawalingpinoy.com/wp-content/uploads/2018/09/bibingkang-malagkit-11.jpg",
    description:
      "Indulge in the ultimate Filipino soul food with our Biko. This classic sticky rice cake is slow-cooked in rich coconut milk and brown sugar, resulting in a chewy, decadent treat infused with deep caramel notes.",
  },
  {
    id: nanoid(),
    name: "nilupak",
    image:
      "https://yummykitchentv.com/wp-content/uploads/2022/04/nilupak-na-saging-yummy-kitchen.jpg",
    price: 70,
    description:
      "This traditional delicacy is made from mashed cassava and sweet bananas, pounded to a smooth, velvety consistency and enriched with fresh coconut and condensed milk.",
  },
];

export default products;
