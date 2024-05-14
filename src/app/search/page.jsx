"use client"

import { getSearchProducts } from "@/api/api"
import ProductItem from "@/components/ProductItem"
import { useEffect, useState } from "react"
import styled from "styled-components"


export default function SearchPage(){

    const [text, setText] = useState('')
    const [result, setResult] = useState([])

    useEffect(()=>{
      const fetchProducts = async()=>{
        if(text.trim() === ''){
            setResult([])
        }else{
            try{
                const txt = await getSearchProducts(text)
                setResult(txt)
            }catch(error){
                console.error(error)
            }
        }
      }  
      fetchProducts()
    },[text])

    const handleSearchClick = (e) => {
        e.preventDefault()
        setText(e.target.value)
        console.log(text)
    }

    

    return(
        <Container>
        <h1>검색 페이지</h1>
        <input type="text" value={text} onChange={handleSearchClick} className="searchForm"/>
        <ul className="productList">
            {result.map((product)=>(
                <li key={product.id}>
                    <ProductItem product={product}/>
                </li>
            ))}
        </ul>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    ul{
        display: flex;
        width: 800px;
        li{
            height: 100%;
        }
        img{
            width: 100px;
        }
    }
`