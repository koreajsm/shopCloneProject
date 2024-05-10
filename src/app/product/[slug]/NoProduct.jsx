import styled from "styled-components"


export default function NoProduct(){
    return(
        <Container>
            <p>등록된 상품이 없습니다.</p>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    p{
        font-size: 40px;
        color: #000;
    }
`