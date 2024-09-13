import { createContext, useContext, useState } from "react";
import { data } from "../pages/Women";
const ProductData=createContext(
    {
        products:[],
        filterByColor:()=>{},
        sortByName:()=>{},
        sortByPositions:()=>{},
        sortByPrice:()=>{},
        removeColor:()=>{},
       
        color:[]
    }
);


export default function ProductDataProvider({children}){
    const [val,setVal]=useState(data);
    const[color,setColor]=useState([])

    function filterByColor(color){

        setColor((prevColor)=>{
            return [...prevColor,color]
        })
         setVal((prevData)=>{
            return prevData.filter((el)=>{
              
                if(el.color){
                    return el.color.includes(color)
                } 
            })
         })
    }

    function sortByName(){
        setVal((prevData)=>{
            const hey=prevData.slice().sort((a, b) => a.like.localeCompare(b.like))
            return hey   
        })
      
     }
function sortByPositions(){
    setVal(data)
    }
    
    
    
function sortByPrice() {
    setVal((prevData)=>{
        const price=prevData.slice().sort((a,b)=>a.price-b.price)
        console.log(price);
        return price
        
    })
   
}
function removeColor(){
    setColor([])
    setVal(data)
   
    
}
    const contextVal={
        products:val,
        filterByColor,
        sortByName,
        sortByPositions,
        sortByPrice,
        removeColor,
        color
    }

    return (
        <ProductData.Provider value={contextVal}>
            {children}
        </ProductData.Provider>
    )
}


export function useData(){
    return useContext(ProductData);
}