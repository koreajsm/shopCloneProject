"use client"

import Link from "next/link";
import styled from "styled-components";
import LoginInfo from "./Logininfo";
import MainMenu from "./MainMenu";
import { IoCartOutline } from "react-icons/io5";
import { useAuthContext } from "@/context/authContext";
import { googleLogin } from "@/api/api";
import { CiSearch } from "react-icons/ci";


export default function Header(){

    const {user} = useAuthContext()

    const handleCartClick = (e)=>{
        if(!user){
            e.preventDefault()
            googleLogin()
        }
    }

    return(
        <HeaderContainer>
            <h1 className="logo">
                <Link href='/'>Shop</Link>
            </h1>
            <MainMenu/>
            <LoginInfo/>
            <Link href='/cart' onClick={handleCartClick}>
                <IoCartOutline />
            </Link>
            <Link href='/search'>
            <CiSearch />
            </Link>
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