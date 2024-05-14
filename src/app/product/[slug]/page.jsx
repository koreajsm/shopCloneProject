"use client"

import { getCategoryProduct } from "@/api/api"
import CategoryProductList from "@/components/CategoryProductList"
import { usePathname } from "next/navigation"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import styled from "styled-components"
import NoProduct from "./NoProduct"
import CategorySlider from "@/components/CategorySlider"


export default function CategoryPage(){

    const pathName = usePathname()
    const slug = pathName.split('/').pop()
    console.log(slug)

    const [products, setProducts] = useState([])
    const [randomImages, setRandomImages] = useState([])

    useEffect(() => {
        getCategoryProduct(slug).then((product)=>{
            setProducts(product)
        }).catch((error)=>{
            console.error(error)
        })
    },[slug])

    useEffect(()=>{
        if(products.length > 0){
            const randomImg = [...products].sort(()=>0.5 - Math.random())
            console.log(randomImg)
            // .sort(()=>0.5 - Math.random() 랜덤 정렬을 위한 로직
            // sort()=> 배열 정렬하기
            const selectImg = randomImg.slice(0,4).map((el)=>el.image)
            setRandomImages(selectImg)
        }
    },[products])
    console.log(products)

    return (
        <Container>
            <CategorySlider imgs={randomImages}/>
            <h2>{slug}페이지</h2>
            {/* <CategoryProductList slug={slug} products={products}/> */}
            {products.length > 0 ? (
                <CategoryProductList slug={slug} products={products}/> 
            ) : (
                <NoProduct/>
            )}
        </Container>
    )
}

const Container = styled.div`
    
`