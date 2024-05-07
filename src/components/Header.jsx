"use client"

import Link from "next/link";
import styled from "styled-components";
import LoginInfo from "./Logininfo";


export default function Header(){

    return(
        <HeaderContainer>
            <h1 className="logo">
                <Link href='/'>Shop</Link>
            </h1>
            <LoginInfo/>
        </HeaderContainer>
    )

}

const HeaderContainer  = styled.header`
    width: 100%;
    padding: 12px 24px;
    box-sizing: border-box;
    border-bottom: 1px solid #aaa;
    display: flex;
    justify-content: space-between;
`