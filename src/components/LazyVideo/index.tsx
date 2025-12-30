import React, { useState, useEffect, useRef, type FC } from "react";
import { shouldLoadVideos } from "@utils/networkUtils";
import styled from "@emotion/styled";

const LazyVideoContainer = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
`;

const PreviewImage = styled.img<{ $isVisible: boolean }>`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: opacity 0.3s ease-in-out;
    opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
    pointer-events: ${({ $isVisible }) => ($isVisible ? "auto" : "none")};
`;

const VideoElement = styled.video<{ $isVisible: boolean }>`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: opacity 0.3s ease-in-out;
    opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
    pointer-events: ${({ $isVisible }) => ($isVisible ? "auto" : "none")};
`;

export type LazyVideoProps = {
    videoSrc: string;
    previewSrc: any; // ImageMetadata from Astro
    alt: string;
    autoPlay?: boolean;
    loop?: boolean;
    muted?: boolean;
    playsInline?: boolean;
    className?: string;
    onError?: (e: React.SyntheticEvent<HTMLVideoElement, Event>) => void;
};

export const LazyVideo: FC<LazyVideoProps> = ({
    videoSrc,
    previewSrc,
    alt,
    autoPlay = true,
    loop = true,
    muted = true,
    playsInline = true,
    className,
    onError,
}) => {
    const [shouldLoad, setShouldLoad] = useState(false);
    const [isIntersecting, setIsIntersecting] = useState(false);
    const [showVideo, setShowVideo] = useState(false);
    const [videoLoaded, setVideoLoaded] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const videoRef = useRef<HTMLVideoElement>(null);

    // Check network conditions on mount
    useEffect(() => {
        const checkNetwork = async () => {
            const canLoadVideos = await shouldLoadVideos();
            setShouldLoad(canLoadVideos);
        };
        
        checkNetwork();
    }, []);

    // Intersection Observer for lazy loading
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsIntersecting(true);
                    }
                });
            },
            {
                root: null,
                rootMargin: "50px",
                threshold: 0.1,
            }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => {
            if (containerRef.current) {
                observer.unobserve(containerRef.current);
            }
        };
    }, []);

    // Load video when conditions are met
    useEffect(() => {
        if (shouldLoad && isIntersecting && !showVideo) {
            // Add a small delay to ensure smooth transition
            const timer = setTimeout(() => {
                setShowVideo(true);
            }, 100);

            return () => clearTimeout(timer);
        }
    }, [shouldLoad, isIntersecting, showVideo]);

    const handleVideoLoad = () => {
        setVideoLoaded(true);
    };

    const handleVideoError = (e: React.SyntheticEvent<HTMLVideoElement, Event>) => {
        console.error('Error loading video:', e);
        setShowVideo(false);
        if (onError) {
            onError(e);
        }
    };

    return (
        <LazyVideoContainer ref={containerRef} className={className}>
            {/* Preview image - always shown initially */}
            <PreviewImage
                src={typeof previewSrc === 'string' ? previewSrc : previewSrc.src}
                alt={alt}
                $isVisible={!showVideo || !videoLoaded}
            />
            
            {/* Video - loaded conditionally */}
            {showVideo && (
                <VideoElement
                    ref={videoRef}
                    src={videoSrc}
                    autoPlay={autoPlay}
                    loop={loop}
                    muted={muted}
                    playsInline={playsInline}
                    preload="metadata"
                    onLoadedData={handleVideoLoad}
                    onError={handleVideoError}
                    $isVisible={videoLoaded}
                />
            )}
        </LazyVideoContainer>
    );
};