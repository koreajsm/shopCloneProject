"use client"

import { getCategoryProduct } from "@/api/api"
import { useEffect, useState } from "react"
import ProductItem from "./ProductItem"
import styled from "styled-components"


export default function MainCategoryList({category}){

    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(()=>{
        setLoading(true)
        getCategoryProduct(category)
        .then(products=>{
            setItems(products.slice(0,10)) // 최대 10개까지
            setLoading(false)
        })
        .catch(error=>{
            console.error(error)
        })
    },[category])

    return (
        <Container>
        <h2>{category}</h2>
        <ul>
            {items.map((item,index)=>(
                <li key={index}>
                    <ProductItem product={item}/>
                </li>
            ))}
        </ul>
        </Container>
    )

}

const Container = styled.div`
    width: 100%;
    max-width: 100vw;
    box-sizing: border-box;
    padding: 24px 12px;
    h2{
        color: #000;
        font-size: 24px;
        text-align: center;
        margin-bottom: 12px;
    }
    ul{
        display: flex;
        justify-content: center;
        gap: 20px;
        li{
            width: 10%;
            max-width: 170px;
            flex-shrink: 0;
        }
    }

`