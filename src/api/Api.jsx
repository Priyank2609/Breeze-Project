 import {useLoaderData} from "react-router-dom"



// // Usage example:
// export const fetchData = await Api();
// console.log(fetchData);

export const fetchData=async()=>{
    
    const data=await fetch("http://localhost:2000/datas")
    return data.json()
}

export  const priyank=await fetchData()
console.log(priyank);
