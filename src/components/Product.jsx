import styled from "styled-components"
import ProductItem from "./ProductItem"


export default function Product({products}){
    return(
        <ProductList>
            {products && products.map((el)=>(
                <li key={el.id}>
                    <ProductItem product={el}>

                    </ProductItem>
                </li>
            ))}
        </ProductList>
    )
}

const ProductList = styled.ul`
    display: flex;
    gap: 20px 5%;
    flex-wrap: wrap;
    justify-content: space-between;
    li{
        width: 20%;
        flex-shrink: 0;
    }

`