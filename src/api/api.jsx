
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth'
import { getDatabase } from 'firebase/database'
import { getDownloadURL, getStorage, ref as storageRef, uploadBytes } from "firebase/storage";
import { adminUser } from "@/service/admin";
import { v4 as uuid } from 'uuid';

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DB_URL,
    storageBucket : process.env.NEXT_PUBLIC_STORAGE_BUCKET
}
//firebaseConfig : firebase 프로젝트 설정 값 객체 api키, 도메인 인증, 데이터베이스 키값...

const app = initializeApp(firebaseConfig) // firebaseConfig를 기반으로 firebase 설정 값을 초기화
const auth = getAuth(app) // 초기화된 앱을 기반으로 firebase 인증 객체 생성 (사용자 인증 관리)
const provider = new GoogleAuthProvider(); // google 로그인 기능을 사용할 때 추가하는 프로바이더 객체 생성
const database = getDatabase() // 초기화된 앱을 기반으로 firebase 데이터베이스 객체 생성
const storage = getStorage()
console.log(firebaseConfig)

// 구글 자동 로그인 방지
provider.setCustomParameters({
    // setCustomParameters : 인증 요청에 대한 사용자 정의 파라미터값을 설정
    prompt : 'select_account'
})

// 구글 로그인
export async function googleLogin() {
    try {
        const result = await signInWithPopup(auth, provider)
        // signInWithPopup : firebase 자체에 있는 인증 객체 provider를 인자로 받아서 google 계정을 연동해서 로그인 할 수 있게 하는 메서드
        const user = result.user
        console.log(user)
        return user
    } catch (error) {
        console.error(error)
    }
}

// 구글 로그아웃

export async function googleLogOut() {
    try {
        await signOut(auth);
    } catch (error) {
        console.error(error)
    }
}

// 로그인 유지 (새로고침 해도 로그인 유지)
export function onUserState(callback){
    onAuthStateChanged(auth, async(user) =>{
        if (user) {
            try {
                const updateUser = await adminUser(user)
                callback(updateUser)
            } catch (error){
                console.error(error)
                callback(user)
            }
        } else {
            callback(null)
        }
    })
}

export async function uploadImgs(file){

    try{
        const id = uuid()
        const imgRef = storageRef(storage, `images/${id}`)
        console.log(imgRef)
        await uploadBytes(imgRef, file)
        const imgUrl = await getDownloadURL(imgRef)
        return imgUrl

    }catch(error){
        console.error(error)
    }
}

export { database }