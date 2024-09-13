import { createContext, useContext, useState } from "react";
import { getData } from "../pages/Women";

export const CardContext = createContext({
    items: [],
    getProductQuantity: () => { },
    addOneToCart: () => { },
    removeOneFromCart: () => { },
    deleteFromCart: () => { },
    getTotalCost: () => { }
});


export default function CardProvider({ children }) {
    const [cartProducts, setCartProducts] = useState([]);

    function getProductQuantity(id) {
        const quantity = cartProducts.find((el) => el.id === id)?.quantity;
        if (quantity == undefined) {
            return 0;
        }
        return quantity;
    }

    function addOneToCart(id) {
        const quantity = getProductQuantity(id);
        if (quantity == 0) {
            setCartProducts((prevProducts) => {
                return [
                    ...prevProducts,
                    {
                        id: id,
                        quantity: 1
                    }
                ]
            })
            alert(" Your Items Added  In Your Shopping Cart")
        }
        else {
            setCartProducts((prevProducts) => {
                return prevProducts.map((product) =>
                    product.id === id ? { ...product, quantity: product.quantity + 1 } : product);
             
            })
          
        }
    

    }

    function deleteFromCart(id) {
        setCartProducts(prevProducts =>
            prevProducts.filter((products) => products.id !== id)
        )
    }

    function removeOneFromCart(id) {
        const quantity = getProductQuantity(id);
        if (quantity == 1) {
            deleteFromCart(id)
        }
        else {
            setCartProducts((prevProducts) => {
                return prevProducts.map((product) =>
                    product.id === id ? { ...product, quantity: product.quantity - 1 } : product)
            })
        }
    }

    function getTotalCost() {
        let totalCost = 0;
        cartProducts.map(products => {
            let productData =getData(products.id);
            totalCost += productData.price * products.quantity
        })
        return totalCost;
    }

    const contextValue = {
        items: cartProducts,
        getProductQuantity,
        addOneToCart,
        removeOneFromCart,
        deleteFromCart,
        getTotalCost
    }
    return (
        <>
            <CardContext.Provider value={contextValue}>
                {children}
            </CardContext.Provider>
        </>
    );
}

export const useCart = () => {
    return useContext(CardContext);
}