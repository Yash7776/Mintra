import React from 'react'
import bigbanner from '../assets/banner/bigbanner.png'
import { Carousel } from 'react-responsive-carousel'
import banner1 from '../assets/banner/banner.jpg'
import banner2 from '../assets/banner/banner2.jpg'
import banner3 from '../assets/banner/banner3.jpg'
const Banner = () => {
    return (
        <div className='text-center'>
            <div>
                <img src={bigbanner} alt="" />
            </div>
            <Carousel className='' autoPlay={true} showThumbs={false} showArrows={false} showStatus={false}>
                            <div>
                                <img src={banner1} />
                            </div>
                            <div>
                                <img src={banner2} />
                            </div>
                            <div>
                                <img src={banner3} />
                            </div>
                        </Carousel>
            
           
        </div>
    )
}

export default Banner
