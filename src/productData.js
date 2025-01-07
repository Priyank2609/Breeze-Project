// import { fetchData } from "./api/Api";

import { useParams } from "react-router-dom";
import { priyank } from "./api/Api";

// export const data=fetchData
// export const data=[
//     {
//       id:1,
//       img:"https://breeze.swissupdemo.com/media/catalog/product/cache/a3063d49e258086bae41b9f4c66f61c4/w/s/wsh12-green_main_1.jpg",
//        img1:"https://breeze.swissupdemo.com/media/catalog/product/cache/055514c0e35704d8d808601260e4cf3f/w/s/wsh12-green_alt1_1.jpg",
//        img2: "https://breeze.swissupdemo.com/media/catalog/product/cache/055514c0e35704d8d808601260e4cf3f/w/s/wsh12-green_back_1.jpg",
        
//       btnn:"Add to cart",
//       like:"Erika Running Short",
//       color:["black","gray",],
//       price:45.00
//     },
//     {  
//       id:2,
//       img:"https://breeze.swissupdemo.com/media/catalog/product/cache/3406ad5e0f20394a25ade9a969fb1fe2/w/s/wsh11-blue_main_1.jpg",
//       btnn:"Add to cart",
//       like:"Ina Compression Short",
//       color:["black","gray"],
//       price:49.00
//     },
//     {  
//       id:3,
//       img:"https://breeze.swissupdemo.com/media/catalog/product/cache/3406ad5e0f20394a25ade9a969fb1fe2/w/s/wsh10-black_main_1.jpg",
//       btnn:"Add to cart",
//       like:"Ana Running Short",
//       color:["black","gray","green","blue","brown"],
//       price:40.00
//     },
//     {  
//         id:4,
//         img:"https://breeze.swissupdemo.com/media/catalog/product/cache/a3063d49e258086bae41b9f4c66f61c4/w/s/wsh09-gray_main_1.jpg",
//         btnn:"Add to cart",
//         like:"Mimi All-Purpose Short",
//         price:44.00
//       },
//       {  
//         id:5,
//         img:"https://breeze.swissupdemo.com/media/catalog/product/cache/a3063d49e258086bae41b9f4c66f61c4/w/s/wsh08-purple_main_1.jpg",
//         btnn:"Add to cart",
//         like:"Sybil Running Short",
//         price:44.00
//       },
//       {  
//         id:6,
//         img:"https://breeze.swissupdemo.com/media/catalog/product/cache/a3063d49e258086bae41b9f4c66f61c4/w/s/wsh07-black_main_1.jpg",
//         btnn:"Add to cart",
//         like:"Echo Fit Compression Short",
//         color:["green","blue","brown"],
//         price:24.00
//       },
//       {  
//         id:7,
//         img:"https://breeze.swissupdemo.com/media/catalog/product/cache/a3063d49e258086bae41b9f4c66f61c4/w/s/wsh06-gray_main_1.jpg",
//         btnn:"Add to cart",
//         like:"Angel Light Running Short",
//         price:42.0
//       },
//       {  
//         id:8,
//         img:"https://breeze.swissupdemo.com/media/catalog/product/cache/a3063d49e258086bae41b9f4c66f61c4/w/s/wsh05-blue_main_1.jpg",
//         img1:"https://breeze.swissupdemo.com/media/catalog/product/cache/659686017cfcdb082a7ae6dd4e59213d/w/s/wsh05-blue_back_1.jpg",
       
//         btnn:"Add to cart",
//         like:"Bess Yoga Short",
//         price:28.00
//       },
//       {  
//         id:9,
//         img:"https://breeze.swissupdemo.com/media/catalog/product/cache/a3063d49e258086bae41b9f4c66f61c4/w/s/wsh04-black_main_1.jpg",
//         btnn:"Add to cart",
//         like:"Artemis Running Short",
//         color:["green","blue","brown"],
//         price:45.00
//       }
   
// ]

export const getData=(id)=>{
   const productData=priyank.find((db)=>db._id === id)
   console.log(productData);
   
   return productData;
}

