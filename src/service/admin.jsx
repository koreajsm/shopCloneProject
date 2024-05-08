// 관리자 아이디 체크

import { database } from "@/api/api";
import { get, ref } from "firebase/database";

export async function adminUser(user){
    try{
        const dbRef = ref(database, 'admin')
        console.log(database)
        const snapshot = await get(dbRef)
        
        if(snapshot.exists()){
            const admins = snapshot.val()
            const isAdmin = admins.includes(user.email)
            return {...user, isAdmin}
        }
        return user
    }catch(error){
        console.error(error)
        return user
    }
}