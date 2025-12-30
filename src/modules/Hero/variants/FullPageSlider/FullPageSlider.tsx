import React, { type FC } from "react";

import * as S from "./styled";
import { SwiperSlider } from "@components/SwiperSlider";
import { Parallax, Pagination, Autoplay } from "swiper/modules";
import { Icon } from "@static/icons";
import { FadeIn } from "@utils/animations/FadeIn";
import { Button } from "@components/Button";
import { LazyVideo } from "@components/LazyVideo";
import { 
    HeroSlider1Preview, 
    HeroSlider2Preview, 
    HeroSlider3Preview 
} from "@static/images";

export type FullPageSliderProps = {
    // content treated as HTML output
    content?: {
        background: string;
        subtitle?: string;
        title: string;
        paragraph?: string;
        button?: {
            text: string;
            link: string;
        };
    }[];
};

const isVideo = (url: string) => {
    const videoExtensions = ['.webm', '.mp4', '.mov', '.avi', '.mkv', '.ogg', '.ogv'];
    return videoExtensions.some(ext => url.toLowerCase().endsWith(ext));
};

const getPreviewImage = (videoSrc: string, index: number) => {
    // Map video sources to their corresponding preview images
    const previewMap: { [key: string]: any } = {
        'hero-slider-01.mp4': HeroSlider1Preview,
        'hero-slider-02.mp4': HeroSlider2Preview,
        'hero-slider-03.mp4': HeroSlider3Preview,
    };
    
    // Extract filename from video source
    const filename = videoSrc.split('/').pop() || '';
    return previewMap[filename] || HeroSlider1Preview; // fallback to first preview
};

export const FullPageSlider: FC<FullPageSliderProps> = ({ content }) => {
    // do not render if there are no elements
    if (!content || content.length === 0) {
        return null;
    }
    /**
     * All slides are generated here based on the content prop
     * @param slide - slide content
     */
    const slides = content.map((slide, index) => (
        <S.FullPageSliderSlide key={index} $bgImage={slide.background}>
            {slide.background && (
                !isVideo(slide.background) ? (
                    <S.FullPageSliderSlideImg data-swiper-parallax="70%">
                        <img src={slide.background} alt={slide.title} />
                    </S.FullPageSliderSlideImg>
                ) : (
                    <S.FullPageSliderSlideVideo data-swiper-parallax="70%">
                        <LazyVideo
                            videoSrc={slide.background}
                            previewSrc={getPreviewImage(slide.background, index)}
                            alt={slide.title}
                            autoPlay={true}
                            loop={true}
                            muted={true}
                            playsInline={true}
                            onError={(e) => console.error('Error loading video:', e)}
                        />
                    </S.FullPageSliderSlideVideo>
                )
            )}
            <FadeIn>
                <S.FullPageSliderSlideContent data-swiper-parallax="-40%">
                    {slide.subtitle && (
                        <S.FullPageSliderSlideContentSubtitle>
                            {slide.subtitle}
                        </S.FullPageSliderSlideContentSubtitle>
                    )}
                    {slide.title && <h1>{slide.title}</h1>}
                    {slide.paragraph && <p>{slide.paragraph}</p>}
                    {slide.button && slide.button.text && slide.button.link && (
                        <Button
                            variant="primary"
                            showIcon={true}
                            link={slide.button.link}
                        >
                            {slide.button.text}
                        </Button>
                    )}
                </S.FullPageSliderSlideContent>
            </FadeIn>
        </S.FullPageSliderSlide>
    ));

    return (
        <S.FullPageSliderStyled>
            <SwiperSlider
                modules={[Parallax, Pagination, Autoplay]}
                options={{
                    slidesPerView: 1,
                    parallax: true,
                    speed: 1000,
                    spaceBetween: 0,
                    effect: "slide",
                    loop: false,
                    grabCursor: true, // Add this line
                    pagination: {
                        // Add this option
                        el: ".swiper-pagination",
                        type: "progressbar",
                    },
                    autoplay: {
                        delay: 10000,
                    },
                }}
            >
                {slides}
            </SwiperSlider>
            {slides.length > 1 ? (
                <>
                    <S.FullPageSliderTextToSlide>
                        Desliza
                        <Icon iconData="arrowRight" alt="arrow icon" />
                    </S.FullPageSliderTextToSlide>
                    <div className="swiper-pagination"></div>
                </>
            ) : (
                <S.FullPageSliderTextToSlide>
                    Scroll down
                    <Icon iconData="arrowDown" alt="arrow icon" />
                </S.FullPageSliderTextToSlide>
            )}
        </S.FullPageSliderStyled>
    );
};
