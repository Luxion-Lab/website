import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { Colors, Theme } from "@styles/colors";
import { Fonts } from "@styles/fonts";
import { MediaQuery } from "@styles/mediaQuery";

// Animaciones mejoradas
const fadeInUp = keyframes`
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`;

const slideInFromLeft = keyframes`
    from {
        opacity: 0;
        transform: translateX(-50px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
`;

const slideInFromRight = keyframes`
    from {
        opacity: 0;
        transform: translateX(50px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
`;

const pulseGlow = keyframes`
    0%, 100% {
        box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
    }
    50% {
        box-shadow: 0 15px 50px rgba(0, 212, 255, 0.3);
    }
`;

const lineGrow = keyframes`
    from {
        height: 0;
        opacity: 0;
    }
    to {
        height: 60px;
        opacity: 1;
    }
`;

export const ProcessStepperStyled = styled.section`
    padding: 100px 0;
    background: ${Theme.primary};
`;

export const ProcessStepperHeader = styled.div`
    text-align: center;
    margin-bottom: 80px;
    animation: ${fadeInUp} 0.8s ease-out;
`;

export const ProcessStepperSubtitle = styled.p`
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

export const ProcessStepperTitle = styled.h2`
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

export const ProcessStepperDescription = styled.p`
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

export const ProcessStepperMainContent = styled.div`
    display: flex;
    gap: 60px;
    align-items: flex-start;
    
    ${MediaQuery.max("lg")} {
        flex-direction: column;
        gap: 40px;
    }
`;

export const ProcessStepperImageContainer = styled.div`
    flex: 0 0 400px;
    animation: ${slideInFromLeft} 0.8s ease-out 0.3s both;
    
    ${MediaQuery.max("lg")} {
        flex: none;
        width: 100%;
        max-width: 500px;
        margin: 0 auto;
    }
`;

export const ProcessStepperImage = styled.img`
    width: 100%;
    height: auto;
    border-radius: 16px;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
    transition: all 0.4s ease;
    
    &:hover {
        transform: translateY(-8px) scale(1.02);
        box-shadow: 0 25px 80px rgba(0, 0, 0, 0.2);
    }
`;

export const ProcessStepperContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 60px;
    position: relative;
    flex: 1;
    animation: ${slideInFromRight} 0.8s ease-out 0.5s both;
`;

export const ProcessStepperStep = styled.div<{ index?: number }>`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    text-align: left;
    position: relative;
    flex: 1;
    padding: 0 10px;
    gap: 30px;
    opacity: 0;
    animation: ${fadeInUp} 0.6s ease-out forwards;
    animation-delay: ${({ index }) => `${0.7 + (index || 0) * 0.2}s`};

    &:not(:last-child) {
        &::after {
            content: '';
            position: absolute;
            bottom: -30px;
            left: 50px;
            width: 2px;
            height: 60px;
            background: linear-gradient(to bottom, ${Theme.tertiary}, ${Colors.darkLighter});
            z-index: 1;
            animation: ${lineGrow} 0.8s ease-out forwards;
            animation-delay: ${({ index }) => `${1.2 + (index || 0) * 0.2}s`};
        }
    }
`;

export const ProcessStepperStepNumber = styled.div`
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background: linear-gradient(135deg, ${Theme.tertiary}, ${Colors.darkLighter});
    color: ${Theme.primary};
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: ${Fonts.primary};
    font-size: 28px;
    font-weight: 700;
    margin: 0;
    position: relative;
    z-index: 2;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
    transition: all 0.4s ease;
    flex-shrink: 0;

    &:hover {
        transform: translateY(-6px) scale(1.05);
        box-shadow: 0 15px 50px rgba(0, 0, 0, 0.2);
        animation: ${pulseGlow} 2s ease-in-out infinite;
    }

    ${MediaQuery.max("md")} {
        width: 60px;
        height: 60px;
        font-size: 20px;
    }
`;

export const ProcessStepperStepContent = styled.div`
    max-width: 500px;
    flex: 1;
`;

export const ProcessStepperStepTitle = styled.h3`
    font-family: ${Fonts.primary};
    font-size: 22px;
    font-weight: 600;
    color: ${Theme.secondary};
    margin: 0 0 16px 0;
    line-height: 1.3;
    transition: color 0.3s ease;

    ${MediaQuery.max("lg")} {
        font-size: 20px;
        margin-bottom: 14px;
    }

    ${MediaQuery.max("md")} {
        font-size: 18px;
        margin-bottom: 12px;
    }
`;

export const ProcessStepperStepDescription = styled.p`
    font-family: ${Fonts.primary};
    font-size: 14px;
    font-weight: 400;
    color: ${Theme.secondary};
    line-height: 1.5;
    margin: 0;
    opacity: 0.85;
    transition: opacity 0.3s ease;

    ${MediaQuery.max("md")} {
        font-size: 13px;
        line-height: 1.4;
    }
`;