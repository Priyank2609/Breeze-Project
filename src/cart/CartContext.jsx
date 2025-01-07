// import { createContext, useContext, useState } from "react";
// // import { getData } from "../pages/Women";

// export const CardContext = createContext({
//     items: [],
//     getProductQuantity: () => { },
//     addOneToCart: () => { },
//     removeOneFromCart: () => { },
//     deleteFromCart: () => { },
//     getTotalCost: () => { },
//     visible:false,
//     setispopup:true
    
// });


// export default function CardProvider({ children }) {
//     const [cartProducts, setCartProducts] = useState([]);
//     const [isPopupVisible, setIsPopupVisible] = useState(false);

//     const visible=isPopupVisible;
//     const setispopup=setIsPopupVisible

//     function getProductQuantity(id) {
//         const quantity = cartProducts.find((el) => el.id === id)?.quantity;
//         if (quantity == undefined) {
//             return 0;
//         }
//         return quantity;
//     }

//     function addOneToCart(id) {
//         const quantity = getProductQuantity(id);

//         setIsPopupVisible(true)

//         if (quantity == 0) {
//             setCartProducts((prevProducts) => {
//                 return [
//                     ...prevProducts,
//                     {
//                         id: id,
//                         quantity: 1
//                     }
//                 ]
//             })
            
//         }
//         else {
//             setCartProducts((prevProducts) => {
//                 return prevProducts.map((product) =>
//                     product.id === id ? { ...product, quantity: product.quantity + 1 } : product);
             
//             })
          
//         }
    

//     }

//     function deleteFromCart(id) {
//         setCartProducts(prevProducts =>
//             prevProducts.filter((products) => products.id !== id)
//         )
//     }

//     function removeOneFromCart(id) {
//         const quantity = getProductQuantity(id);
//         if (quantity == 1) {
//             deleteFromCart(id)
//         }
//         else {
//             setCartProducts((prevProducts) => {
//                 return prevProducts.map((product) =>
//                     product.id === id ? { ...product, quantity: product.quantity - 1 } : product)
//             })
//         }
//     }

//     function getTotalCost() {
//         let totalCost = 0;
//         cartProducts.map(products => {
//             let productData =getData(products.id);
//             totalCost += productData.price * products.quantity
//         })
//         return totalCost;
//     }

   

//     const contextValue = {
//         items: cartProducts,
//         getProductQuantity,
//         addOneToCart,
//         removeOneFromCart,
//         deleteFromCart,
//         getTotalCost,
//         visible,
//         setispopup
//         // changeVisiblity
//     }
//     return (
//         <>
//             <CardContext.Provider value={contextValue}>
//                 {children}
//             </CardContext.Provider>
//         </>
//     );
// }

// export const useCart = () => {
//     return useContext(CardContext);
// }