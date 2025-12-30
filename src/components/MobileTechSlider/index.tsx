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

interface MobileTechSliderProps {
    title?: string;
    subtitle?: string;
    description?: string;
}

export const MobileTechSlider: FC<MobileTechSliderProps> = ({ 
    title = "Tecnologías que usamos",
    subtitle = "STACK TECNOLÓGICO",
    description = "Usamos herramientas confiables, seguras y de última generación para crear apps móviles robustas y escalables."
}) => {
    // Tecnologías específicas para desarrollo de aplicaciones móviles
    const mobileTechnologies = [
        { name: "React Native", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Flutter", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
        { name: "Swift", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg" },
        { name: "Kotlin", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg" },
        { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
        { name: "Dart", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg" },
        { name: "Ionic", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ionic/ionic-original.svg" },
        { name: "Xamarin", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xamarin/xamarin-original.svg" },
        { name: "Firebase", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
        { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
        { name: "AWS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" }
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
                        {mobileTechnologies.map((tech, index) => (
                            <TechSliderItem key={`first-${index}`}>
                                <TechSliderLogo src={tech.logo} alt={tech.name} />
                                <TechSliderName>{tech.name}</TechSliderName>
                            </TechSliderItem>
                        ))}
                        {/* Duplicamos para efecto infinito */}
                        {mobileTechnologies.map((tech, index) => (
                            <TechSliderItem key={`second-${index}`}>
                                <TechSliderLogo src={tech.logo} alt={tech.name} />
                                <TechSliderName>{tech.name}</TechSliderName>
                            </TechSliderItem>
                        ))}
                    </TechSliderTrack>
                </TechSliderWrapper>
            </TechSliderContent>
        </TechSliderContainer>
    );
};