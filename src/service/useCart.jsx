import { getCart, removeCart, updateCart } from "@/api/api";
import { useAuthContext } from "@/context/authContext";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";


export default function useCart(){
    const {uid} = useAuthContext()
    const queryClient = useQueryClient()
    // yarn add @tanstack/react-query
    // 서버 상태 관리 쿼리문, 데이터 동기화, 캐싱 업데이트를 관리하는 라이브러리

    const cartInfo = useQuery({
        queryKey: ['cart', uid || ''],
        queryFn: () => getCart(uid),
        enabled: !!uid
    })
    // 카트정보를 가져오기 위한 쿼리
    const addItemCart = useMutation({
        // useMutation 정보를 업데이트 할 때 사용하는 구문
        mutationFn : (product)=>updateCart(uid, product),
        onSuccess : ()=>{
            queryClient.invalidateQueries(['cart',uid])
            // 최신상태로 업데이트(쿠키값을 무효화 시켜서 상품의 정보를 최신으로 업데이트 해주는 구문)
        }
    })

    const removeItemCart = useMutation({
        mutationFn : (id) => removeCart(uid, id),
        onSuccess : ()=>{
            queryClient.invalidateQueries(['cart',uid])
        }
    })
    return {addItemCart, cartInfo, removeItemCart}
}