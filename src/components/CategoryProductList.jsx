import { useEffect, useState } from "react";
import Product from "./Product";


export default function CategoryProductList({slug, products}){
    const [product, setProduct] = useState(products)

    useEffect(()=>{
        setProduct(products)
    },[products])

    return(
        <>
            <h3>{slug}</h3>
            <Product products={product}/>
        </>
    )
}