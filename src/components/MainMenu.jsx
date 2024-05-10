import { CategoryContext } from "@/utils/categoryContext";
import Link from "next/link";
import { useContext } from "react";
import styled from "styled-components";


export default function MainMenu(){
    const {categoryList} = useContext(CategoryContext);
    return(
        <Nav>
            <ul>
                {categoryList.map((el,index)=>(
                    <li key={index}>
                        <Link href={`/product/${el}`}>{el}</Link>
                    </li>
                ))}
            </ul>
        </Nav>
    )
}

const Nav = styled.nav`
    
`