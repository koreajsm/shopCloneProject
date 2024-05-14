"use client"

import CartItem from "@/components/CartItem"
import useCart from "@/service/useCart"
import styled from "styled-components"


export default function CartPage (){

    const {cartInfo : {data: products}} = useCart()
    const isItem = products && products.length > 0

    return (
        <Container>
            <h2 className="itemTitle">장바구니 리스트</h2>
            {!isItem && <p>장바구니에 상품이 없습니다.</p>}
            {isItem&&(
                <CartList>
                    {products && products.map((el, index)=>(
                        <CartItem key={el.id} product={el} index={index}/>
                    ))}
                </CartList>
            )}
        </Container>
    )

}


const Container = styled.div`
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 100px 0;
    .itemTitle{
        font-size: 24px;
        font-weight: normal;
        margin-bottom: 24px;
    }
`

const CartList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 20px;
    border-top: 1px solid rgba(255,255,255,0.2);
    padding: 24px 0;
    li{
        display: flex;
        align-items: center;
        border-bottom: 1px solid rgba(255,255,255,0.2);
        padding: 12px 0;
        gap: 12px;
        img{
            width: 100px;
            display: block;
        }
    }
`