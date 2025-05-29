db.createCollections("products")
db.products.insertMany([
    {
    name:"Product1",
    price: 250,
    img:"https://picsum.photos/200/300?grayscale",
    },
    {
     name:"Product1",
    price: 200,
    img:"https://picsum.photos/200/300?grayscale",   
    },
    {
    name:"Product3",
    price: 300,
    img:"https://picsum.photos/200/300?grayscale",
    },
]);
db.products.find();