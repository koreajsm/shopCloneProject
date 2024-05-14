'use client'

import { googleLogin, logInEmail } from "@/api/api"
import { useRouter } from "next/navigation"
import { useState } from "react"
import styled from "styled-components"


export default function LoginPage(){

    const [email, setEmail] = useState('')
    const [pw, setPw] = useState('')
    const [error, setError] = useState('')
    const router = useRouter()

    const handleSubmitEvent = async (e) => {
        e.preventDefault()
        setError('')
        try{
            const user = await logInEmail(email, pw)
            if(user){
                router.push('/')
            }else{
                setError('이메일이나 비밀번호가 일치하지 않습니다.')
            }
        }catch(error){
            console.error(error)
            setError('로그인 실패 : 시스템 오류')
        }
    }

    const googleLoginEvent = async()=>{
        try{
            const user = await googleLogin()
            if(user){
                router.push('/')
            }
        }catch(error){
            console.error(error)
            setError('로그인 중 오류가 발생했습니다.')
        }
    }

    return(
        <Container>
            <h2>로그인</h2>
            <form onSubmit={handleSubmitEvent}>
                <input 
                type="email"
                placeholder="이메일을 입력하세요."
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                />
                <input 
                type="password"
                placeholder="비밀번호를 입력하세요."
                value={pw}
                onChange={(e)=>setPw(e.target.value)}
                />
                <button>로그인</button>
                <button type="button" onClick={googleLoginEvent}>구글 로그인</button>
                {error && <span className="errorText">{error}</span>}
            </form>
        </Container>
    )
}

const Container = styled.div`
    
`