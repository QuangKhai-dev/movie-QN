import { Carousel } from 'antd';
import React from 'react';

import { openModal } from '../../redux/slice/modalSlice';
import { store } from '../../redux/store';
import { banners } from '../../utils/banners';

const Banner = () => {

    const renderBanner = () => {
        return banners.map(item => (
            <div className='banner' key={item.id}>
                <img src={item.banner} alt="" />
                <div className="banner__overlay">
                    <img className="banner__overlay-left" src={item.subBanner} alt="" />
                    <div className="banner__overlay-right">
                        <h2>{item.name}</h2>
                        <button
                            onClick={() => store.dispatch(openModal(item.trailer))}
                            className='btns btns-orange'
                        >Xem trailer</button>
                    </div>
                </div>
            </div>
        ))
    }

    return (
        <Carousel effect="fade" autoplay={true}>
            {renderBanner()}
        </Carousel>
    )

}


export default Banner;