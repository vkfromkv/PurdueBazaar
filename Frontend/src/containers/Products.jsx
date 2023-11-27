import React from "react";
import ProductCard from "../components/ProductCard";

const Products = () => {
  const cards = [
    {
      id: 1,
      title: "Product 1",
      price: "$20",
      imageUrl:
        "https://cdn.thewirecutter.com/wp-content/media/2023/05/running-shoes-2048px-9718.jpg",
    },
    {
      id: 2,
      title: "Product 2",
      price: "$20",
      imageUrl:
        "https://www.montblanc.com/variants/images/34480784411808558/A/w2500.jpg",
    },
    {
      id: 3,
      title: "Product 3",
      price: "$20",
      imageUrl:
        "https://media.revolutionrace.com/api/media/image/303cd386-2600-4a26-b442-68d950ee44bb",
    },
    {
      id: 4,
      title: "Product 4",
      price: "$20",
      imageUrl:
        "https://media.revolutionrace.com/api/media/image/303cd386-2600-4a26-b442-68d950ee44bb",
    },
    {
      id: 5,
      title: "Product 5",
      price: "$20",
      imageUrl:
        "https://cdn.thewirecutter.com/wp-content/media/2023/05/running-shoes-2048px-9718.jpg",
    },
    {
      id: 6,
      title: "Product 6",
      price: "$20",
      imageUrl:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ase-header-iphone-202311?wid=556&hei=752&fmt=png-alpha&.v=1698078837213",
    },
    {
      id: 7,
      title: "T-shirts",
      price: "$20",
      imageUrl:
        "https://www.dubaitravelguide.info/cms/wp-content/uploads/img-world-of-adventure-park.jpeg",
    },
  ];

  return (
    <div className="container text-left my-5 h-100">
      <div className="d-flex flex-column text-left mx-auto mt-5">
        <div className="row">
          {cards.map((card) => (
            <div key={card.id} className="col-md-3 mb-4">
              <a href="/" className="text-decoration-none">
                <ProductCard
                  title={card.title}
                  price={card.price}
                  imageUrl={card.imageUrl}
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div> 
  );
  };

  export default Products;
