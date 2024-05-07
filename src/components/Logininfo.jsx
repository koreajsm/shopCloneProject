import { googleLogOut, googleLogin } from "@/api/api"
import { useEffect, useState } from "react"


export default function LoginInfo(){

    const [user, setUser] = useState(null) // 로그인된 사용자 정보를 받아올 상태값
    console.log(user)

    const login = async ()=>{
        googleLogin().then(setUser)
    }
    const logOut = async ()=>{
        googleLogOut().then(setUser)
    }

    
    return(
        <>
            {user ? (
                <>
                <span>{user.displayName}</span>
                <button onClick={logOut}>로그아웃</button>
                </>
            ): (
                <button onClick={login}>로그인</button>
            )}
        </>
    )

}