import {Swiper, SwiperSlide} from "swiper"
import 'swiper/css'
import {Autoplay, EffectFade} from 'swiper/modules'
import 'swiper/css/effect-fade'


export default function CategorySlider({imgs}){

    const sliderStyle = {
        width : '500px',
        height : '500px'
    }

    return (

        <Swiper
        style={sliderStyle}
        loop = {true}
        slidesPerView = {1}
        autoplay = {{delay : 2000}}
        speed = {3000}
        modules = {[Autoplay, EffectFade]}
        effect = 'fade'
        >
                {imgs.map((img, index)=>(
                    <SwiperSlide key={index}>
                        <img src={img}/>
                    </SwiperSlide>
                ))} 
                

        </Swiper>

    )
}