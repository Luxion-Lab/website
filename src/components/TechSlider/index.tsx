import type { FC } from "react";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { Colors, Theme } from "@styles/colors";
import { Fonts } from "@styles/fonts";
import { MediaQuery } from "@styles/mediaQuery";

const slideAnimation = keyframes`
    0% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(-50%);
    }
`;

const TechSliderContainer = styled.section`
    padding: 80px 0;
    background: ${Colors.white};
    overflow: hidden;

    ${MediaQuery.max("md")} {
        padding: 60px 0;
    }
`;

const TechSliderContent = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;

    ${MediaQuery.max("md")} {
        padding: 0 16px;
    }
`;

const TechSliderHeader = styled.div`
    text-align: center;
    margin-bottom: 60px;

    ${MediaQuery.max("md")} {
        margin-bottom: 40px;
    }
`;

const TechSliderSubtitle = styled.p`
    font-family: ${Fonts.primary};
    font-size: 14px;
    font-weight: 500;
    color: ${Theme.secondary};
    text-transform: uppercase;
    letter-spacing: 2px;
    margin: 0 0 16px 0;
    opacity: 0.8;

    ${MediaQuery.max("md")} {
        font-size: 12px;
        margin-bottom: 12px;
    }
`;

const TechSliderTitle = styled.h2`
    font-family: ${Fonts.primary};
    font-size: 42px;
    font-weight: 700;
    color: ${Theme.secondary};
    margin: 0 0 16px 0;
    line-height: 1.2;

    ${MediaQuery.max("md")} {
        font-size: 32px;
    }

    ${MediaQuery.max("sm")} {
        font-size: 28px;
    }
`;

const TechSliderDescription = styled.p`
    font-family: ${Fonts.primary};
    font-size: 18px;
    font-weight: 400;
    color: ${Theme.secondary};
    margin: 0 auto;
    line-height: 1.6;
    text-align: center;
    opacity: 0.8;

    ${MediaQuery.max("md")} {
        font-size: 16px;
    }

    ${MediaQuery.max("sm")} {
        font-size: 14px;
    }
`;

const TechSliderWrapper = styled.div`
    width: 100%;
    overflow: hidden;
    position: relative;
    
    &::before,
    &::after {
        content: '';
        position: absolute;
        top: 0;
        width: 100px;
        height: 100%;
        z-index: 2;
        pointer-events: none;
    }
    
    &::before {
        left: 0;
        background: linear-gradient(to right, ${Colors.white}, transparent);
    }
    
    &::after {
        right: 0;
        background: linear-gradient(to left, ${Colors.white}, transparent);
    }

    ${MediaQuery.max("md")} {
        &::before,
        &::after {
            width: 50px;
        }
    }
`;

const TechSliderTrack = styled.div`
    display: flex;
    animation: ${slideAnimation} 30s linear infinite;
    width: fit-content;
    padding: 20px 0;

    &:hover {
        animation-play-state: paused;
    }
`;

const TechSliderItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-width: 140px;
    height: 120px;
    margin: 0 20px;
    padding: 20px;
    background: white;
    border-radius: 16px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
    transition: all 0.3s ease;
    cursor: pointer;

    &:hover {
        transform: translateY(-8px);
        box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
    }

    ${MediaQuery.max("md")} {
        min-width: 120px;
        height: 100px;
        margin: 0 15px;
        padding: 16px;
    }

    ${MediaQuery.max("sm")} {
        min-width: 100px;
        height: 90px;
        margin: 0 10px;
        padding: 12px;
    }
`;

const TechSliderLogo = styled.img`
    width: 40px;
    height: 40px;
    object-fit: contain;
    margin-bottom: 8px;

    ${MediaQuery.max("md")} {
        width: 36px;
        height: 36px;
        margin-bottom: 6px;
    }

    ${MediaQuery.max("sm")} {
        width: 32px;
        height: 32px;
        margin-bottom: 4px;
    }
`;

const TechSliderName = styled.span`
    font-family: ${Fonts.primary};
    font-size: 12px;
    font-weight: 600;
    color: ${Theme.secondary};
    text-align: center;
    line-height: 1.2;

    ${MediaQuery.max("md")} {
        font-size: 11px;
    }

    ${MediaQuery.max("sm")} {
        font-size: 10px;
    }
`;

interface TechSliderProps {
    title?: string;
    subtitle?: string;
    description?: string;
}

export const TechSlider: FC<TechSliderProps> = ({ 
    title = "Tecnologías que usamos",
    subtitle = "STACK TECNOLÓGICO",
    description = "Usamos herramientas confiables, seguras y de última generación para crear software robusto y escalable."
}) => {
    const LaravelSVG = () => (
        <svg width="40" height="40" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M41 9.88889L33 5.44444L25 9.88889M41 9.88889L33 14.3333M41 9.88889V18.7778L33 23.2222M25 9.88889V18.7778M25 9.88889L33 14.3333M25 18.7778L33 23.2222M25 18.7778L9 27.6667M33 23.2222V32.1111L17 41M33 23.2222V14.3333M33 23.2222L17 32.1111M9 27.6667L17 32.1111M9 27.6667V9.88889M1 5.44444L9 1L17 5.44444M1 5.44444V32.1111L17 41M1 5.44444L9 9.88889M17 41V32.1111M9 9.88889L17 5.44444M17 5.44444V23.2222" stroke="#F53003" strokeWidth="1.5"/>
        </svg>
    );

    const technologies = [
        { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Angular", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" },
        { name: "Astro", logo: "https://astro.build/assets/press/astro-icon-dark.svg" },
        { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "Laravel", logo: <LaravelSVG />, isComponent: true },
        { name: "Django", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
        { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
        { name: "AWS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
        { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
        { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
        { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
        { name: "Vercel", logo: "https://assets.vercel.com/image/upload/v1662130559/nextjs/Icon_light_background.png" }
    ];

    return (
        <TechSliderContainer>
            <TechSliderContent>
                <TechSliderHeader>
                    <TechSliderSubtitle>{subtitle}</TechSliderSubtitle>
                    <TechSliderTitle>{title}</TechSliderTitle>
                    <TechSliderDescription>{description}</TechSliderDescription>
                </TechSliderHeader>
                
                <TechSliderWrapper>
                    <TechSliderTrack>
                        {/* Primera fila de tecnologías */}
                        {technologies.map((tech, index) => (
                            <TechSliderItem key={`first-${index}`}>
                                {tech.isComponent ? (
                                    <div style={{ marginBottom: '8px' }}>{tech.logo}</div>
                                ) : (
                                    <TechSliderLogo src={tech.logo as string} alt={tech.name} />
                                )}
                                <TechSliderName>{tech.name}</TechSliderName>
                            </TechSliderItem>
                        ))}
                        {/* Duplicamos para efecto infinito */}
                        {technologies.map((tech, index) => (
                            <TechSliderItem key={`second-${index}`}>
                                {tech.isComponent ? (
                                    <div style={{ marginBottom: '8px' }}>{tech.logo}</div>
                                ) : (
                                    <TechSliderLogo src={tech.logo as string} alt={tech.name} />
                                )}
                                <TechSliderName>{tech.name}</TechSliderName>
                            </TechSliderItem>
                        ))}
                    </TechSliderTrack>
                </TechSliderWrapper>
            </TechSliderContent>
        </TechSliderContainer>
    );
};