
//import bcrypt from 'bcrypt'
const data = {
    users:[
        {
            name: 'suraj',
            email: 'admin@abcd.com',
             // password : bcrypt.hashSync('123456'),
            password : "123456",
            isAdmin: true,
        },

        {
            name: 'mayank',
            email: 'user@abcd.com',
             //password : bcrypt.hashSync('123456'),
            password : "1234567",
            isAdmin: false,
        },
    ],
    products : [
        {   
            // _id: '1',
            name: 'Nike Slim Shirt',
            slug : 'nike-slim-shirt',
            category: "Shirts",
            image: '/images/p1.jpg',
            price:120,
            countInStock : 10,
            brand : 'Nike',
            rating: 10,
            numReviews: 10,
            description: 'high quality shirt'
        },


        {   
            // _id: '2',
            name: 'Adidas Slim Shirt',
            slug : 'adidas-slim-shirt',
            category: "Shirts",
            image: '/images/p2.jpg',
            price:250,
            countInStock : 20,
            brand : 'Adidas',
            rating: 4.0,
            numReviews: 10,
            description: 'high quality shirt'
        },

        {  
            //   _id: '3',
            name: 'Nike Slim Pant',
            slug : 'nike-slim-pant',
            category: "Pant",
            image: '/images/p3.jpg',
            price:120,
            countInStock : 10,
            brand : 'Nike',
            rating: 10,
            numReviews: 14,
            description: 'high quality shirt'
        },

        {
            // _id: '4',
            name: 'Adidas Fit Pant',
            slug : 'adidas-slim-pant',
            category: "pants",
            image: '/images/p4.jpg',
            price:65,
            countInStock : 0,
            brand : 'puma',
            rating: 4.5,
            numReviews: 10,
            description: 'high quality shirt'
        },
    ],
};
export default data