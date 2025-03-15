import React from 'react';
import { Carousel } from 'antd';

import './CarouselCustomize/index.scss'

const CarouselCustomize = ({images, overlay = true, imageSize}) => {
    return (
        <Carousel 
            autoplay={{
                dotDuration: true,
            }}
            autoplaySpeed={5000}
        >
            {
                images?.length && images.map((e, index) => (
                    <div key={index} className='image-cover relative' style={{height: `${imageSize?.height || '100vh'}`, width: `${imageSize?.width || '100%'}`}}>
                        <img className="object-cover" src={e} style={{height: `${imageSize?.height || '100vh'}`, width: `${imageSize?.width || '100%'}`}} />
                        {
                            overlay && <div className='overlay w-full h-[300px] absolute bottom-0 right-0 left-0'></div>
                        }
                    </div>
                ))
            }
        </Carousel>
    )
}

export default CarouselCustomize