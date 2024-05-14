'use client'

import { signUpEmail } from "@/api/api";
import { useRouter } from "next/navigation";
import { useState } from "react";
import styled from "styled-components";


export default function SignUpPage(){

    const [userName, setUserName] = useState('')
    const [userEmail, setUserEmail] = useState('')
    const [userPw, setUserPw] = useState('')

    const [nameError, setNameError] = useState('')
    const [pwError, setPwError] = useState('')
    const [emailError, setEmailError] = useState('')

    const router = useRouter()

    const validatorName = (userName) => {
        if(!userName){
            setNameError('이름을 입력해주세요')
            return false
        }
        if(userName.length <= 2 || userName.length > 10){
            setNameError('이름은 2글자 이상 10글자 이하로 작성해주세요.')
            return false
        }
        if(!/^[A-Za-z가-힣0-9\s'-]+$/.test(userName)){
            setNameError('유효하지 않은 문자가 포함되어 있습니다.')
            return false
        }
            // 정규 표현식
            // /^[A-Za-z가-힣\s'-] = 입력한 이름이 인터넷 대소문자, 한글, 공백, 작은따옴표, 하이픈만으로
            // 구성되어 있는지 검사하는 구문 사용자 이름에 숫자나 특수문자가 포함되지 않도록 검사
            // 만약에 숫자를 추가하고 싶다면
    }

    const handleSubmitEvent = async (e) => {

        e.preventDefault();
        setNameError('')
        setPwError('')

        if(validatorName(userName)){
            return
        }
        if(userPw.length < 6){
            setPwError('비밀번호는 6글자 이상이어야 합니다.')
            return false
        }

        try{
            const result = await signUpEmail(userEmail, userPw, userName)
            if(result.error){
                if(result.error === 'auth,email-already-in-use'){
                    setEmailError('중복된 이메일입니다.')
                }
                return
            }else{
                router.push('/login')
            }
        } catch(error){
            console.error(error)
        }
    }

    return(
        <Container>
            <h2>회원 가입</h2>
            <form onSubmit={handleSubmitEvent}>
                <div>
                    <input
                    type="text"
                    placeholder="이름은 2글자 이상 10글자 이하로 작성해주세요."
                    value={userName}
                    onChange={(e)=>setUserName(e.target.value)}
                    />
                {nameError && <span className="errorText">{nameError}</span>}
                </div>
                <div>
                    <input
                    type="email"
                    placeholder="이메일을 입력하세요."
                    value={userEmail}
                    onChange={(e)=> setUserEmail(e.target.value)}
                    />
                    {emailError && <span className="errorText">{emailError}</span>}
                </div>
                <div>
                    <input
                    type="password"
                    placeholder="비밀번호를 입력하세요."
                    value={userPw}
                    onChange={(e)=>setUserPw(e.target.value)}
                    />
                    {pwError && <span className="errorText">{pwError}</span>}
                </div>

                <button className="submitBtn">회원 가입</button>
            </form>
        </Container>
    )
}

const Container = styled.div`
    

`