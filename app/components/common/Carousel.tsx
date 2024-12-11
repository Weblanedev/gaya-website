"use client"
import Slider from 'react-slick';
import styled from 'styled-components';
import { CarouselType } from '../../utils/types';

const Carousel = ({ children }: CarouselType) => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        nextArrow: <div></div>,
        prevArrow: <div></div>,
        cssEase: 'linear',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            // {
            //     breakpoint: 764,
            //     settings: {
            //         slidesToShow: 1,
            //         slidesToScroll: 1,

            //     },
            // },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],

    };




    return (
        <Styles width='405px'>
            <Slider {...settings}>
                {children}
            </Slider>
        </Styles>
    )
}

export default Carousel

type StylesProps = {
    width?: string;
    marginRight?: string;
}

const Styles = styled.div<StylesProps>`
    margin:0;
    .slick-list:{
        overflow:hidden;
        padding:10px 0px;
    }
    .slick-track{
        display:flex;
        justify-content:space-between;
    }
    .slick-slide {
        width: ${({ width }) => width};
	    margin-right: ${({ marginRight }) => marginRight || '8px'};
        }

        `