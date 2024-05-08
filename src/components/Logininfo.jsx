import { googleLogOut, googleLogin, onUserState } from "@/api/api"
import Link from "next/link"
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

    useEffect(()=>{
        onUserState((user)=>{
            setUser(user)
        })
    },[])
    

    
    return(
        <>
            {user && user.isAdmin &&
            <Link href='/upload' className="uploadBtn">업로드</Link>
            }
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