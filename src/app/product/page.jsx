'use client'

import { getProducts } from "@/api/api"
import Product from "@/components/Product"
import {useEffect, useState} from 'react'
import styled from "styled-components"


export default function ProductPage(){

    const [product, setProduct] = useState([])

    useEffect(()=>{
        const fetchProducts = async()=>{
            try{
                const products = await getProducts()
                setProduct(products)
                console.log(products)
            }catch (error){
                console.error(error)
            }
        }
        fetchProducts() 
    },[])
    return(
        <Container>
            <Product products={product}/>
        </Container>
    )
}

const Container = styled.div`
    
`