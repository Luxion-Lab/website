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

interface ChatbotTechSliderProps {
    title?: string;
    subtitle?: string;
    description?: string;
}

export const ChatbotTechSlider: FC<ChatbotTechSliderProps> = ({ 
    title = "Tecnologías de IA y automatización",
    subtitle = "TECNOLOGÍAS DE CHATBOTS",
    description = "Utilizamos las mejores herramientas de inteligencia artificial y procesamiento de lenguaje natural para crear chatbots inteligentes y efectivos."
}) => {
    // URLs de logos oficiales desde CDNs confiables

    const technologies = [
        { name: "OpenAI GPT", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/ChatGPT_logo.svg/1024px-ChatGPT_logo.svg.png", isComponent: false },
        { name: "Dialogflow", logo: "https://cloudaiworld.com/wp-content/uploads/2022/01/dialogflow-logo.png", isComponent: false },
        { name: "Botpress", logo: "https://avatars.githubusercontent.com/u/23510677?s=200&v=4", isComponent: false },
        { name: "IBM Watson", logo: "https://logodix.com/logo/44136.png", isComponent: false },
        { name: "Hugging Face", logo: "https://cdn.worldvectorlogo.com/logos/huggingface-2.svg", isComponent: false },
        { name: "LangChain", logo: "https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/dark/langgraph-color.png", isComponent: false },
        { name: "Microsoft Bot", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg", isComponent: false },
        { name: "Wit.ai", logo: "https://inten.to/img/api/wit_ai_detect_intent.png", isComponent: false },
        { name: "TensorFlow", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg", isComponent: false },
        { name: "PyTorch", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg", isComponent: false }
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