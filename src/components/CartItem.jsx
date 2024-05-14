
import useCart from "@/service/useCart";
import { formatCurrency } from "@/utils/formatCurrency";
import Image from "next/image";
import { MdArrowDropUp, MdArrowDropDown } from "react-icons/md";
export default function CartItem({product, index}){

    const {addItemCart, removeItemCart} = useCart()
    const plusQuantity =() =>{
        addItemCart.mutate({...product, quantity : product.quantity +1})
    }
    const minusQuantity =() =>{
        if(product.quantity < 2){
            alert('상품 개수는 한개 이상 등록해야 합니다.')
            return
        }
        addItemCart.mutate({...product, quantity : product.quantity -1})
    }
    
    const itemDelete = () => {
        removeItemCart.mutate(product.id)
    }

    
    return (
        <li>
            <p>{index}</p>
            <img src={product.image} alt = {product.title}/>
            <p className="cartItemTitle">상품명 : {product.title}</p>
            <p className="cartItemOpt">옵션 : {product.option}</p>
            <p className="cartItemPrice">가격 : {formatCurrency(product.price)}원</p>
            <div className="cartItemColor">
                <p>컬러</p><span style={{backgroundColor:product.color}}></span>
            </div>
            <div className="cartItemQu">
                <p>수량 : {product.quantity}개</p>
                <button onClick={plusQuantity}><MdArrowDropUp /></button>
                <button onClick={minusQuantity}><MdArrowDropDown /></button>
            </div>
            <button className="remobeBtn" onClick={()=>itemDelete(product.id)}>삭제</button>


        </li>
    )
}