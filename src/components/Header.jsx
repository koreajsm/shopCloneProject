"use client"

import Link from "next/link";
import styled from "styled-components";
import LoginInfo from "./Logininfo";
import MainMenu from "./MainMenu";


export default function Header(){

    return(
        <HeaderContainer>
            <h1 className="logo">
                <Link href='/'>Shop</Link>
            </h1>
            <MainMenu/>
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