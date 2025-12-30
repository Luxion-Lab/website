import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { Theme } from "@styles/colors";
import { MediaQuery } from "@styles/mediaQuery";

interface CardProps {
  variant: "benefit" | "checklist" | "horizontal";
  isHovered?: boolean;
}

// Animaciones
const cardHover = keyframes`
  0% {
    transform: translateY(0) scale(1);
  }
  100% {
    transform: translateY(-8px) scale(1.02);
  }
`;

const iconBounce = keyframes`
  0%, 20%, 60%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  80% {
    transform: translateY(-5px);
  }
`;

const glowPulse = keyframes`
  0%, 100% {
    box-shadow: 0 0 20px rgba(0, 212, 255, 0.3);
  }
  50% {
    box-shadow: 0 0 30px rgba(0, 212, 255, 0.6);
  }
`;

const slideInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const CardContainer = styled.div<CardProps>`
  display: flex;
  align-items: ${({ variant }) => variant === "horizontal" ? "center" : "flex-start"};
  flex-direction: ${({ variant }) => variant === "horizontal" ? "row" : "column"};
  gap: ${({ variant }) => variant === "horizontal" ? "20px" : "12px"};
  padding: ${({ variant }) => {
    switch (variant) {
      case "benefit": return "25px";
      case "checklist": return "20px";
      case "horizontal": return "20px";
      default: return "25px";
    }
  }};
  background: ${({ variant }) => {
    switch (variant) {
      case "benefit": return Theme.secondary;
      case "checklist": return Theme.primary;
      case "horizontal": return Theme.secondary;
      default: return Theme.secondary;
    }
  }};
  border-radius: ${({ variant }) => {
    switch (variant) {
      case "benefit": return "12px";
      case "checklist": return "10px";
      case "horizontal": return "16px";
      default: return "12px";
    }
  }};
  border: ${({ variant }) => variant === "horizontal" ? `1px solid ${Theme.tertiary}` : "none"};
  text-align: ${({ variant }) => variant === "horizontal" ? "left" : "left"};
  cursor: ${({ onClick }) => onClick ? "pointer" : "default"};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  
  &:hover {
    transform: translateY(-6px);
    transition: transform 0.3s ease;
    ${({ variant }) => variant === "benefit" && `
      background: linear-gradient(135deg, ${Theme.secondary} 0%, ${Theme.tertiary} 100%);
    `}
    ${({ variant }) => variant === "horizontal" && `
      border-color: ${Theme.secondary};
      box-shadow: 0 8px 25px rgba(0, 212, 255, 0.15);
    `}
  }
  
  &:not(:hover) {
    transform: translateY(0);
    transition: transform 0.3s ease;
  }

  ${MediaQuery.max("lg")} {
    ${({ variant }) => variant === "horizontal" && `
      flex-direction: column;
      text-align: center;
      gap: 12px;
    `}
  }
`;

export const IconContainer = styled.div<CardProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: all 0.3s ease;
  
  ${({ variant, isHovered }) => variant === "checklist" && `
    width: 24px;
    height: 24px;
    background: ${Theme.tertiary};
    border-radius: 50%;
    margin-top: 2px;
    ${isHovered ? `animation: ${iconBounce} 0.6s ease-in-out;` : ""}
  `}
  
  ${({ variant, isHovered }) => variant === "benefit" && `
    margin-bottom: 5px;
    ${isHovered ? `animation: ${iconBounce} 0.6s ease-in-out;` : ""}
  `}
  
  ${({ variant, isHovered }) => variant === "horizontal" && `
    ${isHovered ? `animation: ${iconBounce} 0.6s ease-in-out;` : ""}
  `}
`;

export const CheckIcon = styled.span`
  color: ${Theme.primary};
  font-weight: bold;
  font-size: 14px;
`;

export const EmojiIcon = styled.span`
  font-size: ${({ variant }: { variant?: string }) => {
    switch (variant) {
      case "horizontal": return "48px";
      default: return "32px";
    }
  }};
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.2);
  }
`;

export const ContentContainer = styled.div<{ variant: string }>`
  flex: 1;
  animation: ${slideInLeft} 0.6s ease-out;
`;

export const Title = styled.h3<CardProps>`
  color: ${({ variant }) => {
    switch (variant) {
      case "benefit": return Theme.primary;
      case "checklist": return Theme.secondary;
      case "horizontal": return Theme.primary;
      default: return Theme.primary;
    }
  }};
  font-size: ${({ variant }) => {
    switch (variant) {
      case "benefit": return "18px";
      case "checklist": return "16px";
      case "horizontal": return "16px";
      default: return "18px";
    }
  }};
  margin-bottom: ${({ variant }) => variant === "checklist" ? "6px" : "8px"};
  font-weight: 600;
  transition: all 0.3s ease;
  
  ${({ isHovered, variant }) => isHovered && `
    transform: translateX(3px);
    color: ${variant === "checklist" ? Theme.tertiary : Theme.primary};
  `}
`;

export const Description = styled.p<{ variant: string }>`
  color: ${({ variant }) => {
    switch (variant) {
      case "benefit": return Theme.primary;
      case "checklist": return Theme.secondary;
      case "horizontal": return Theme.primary;
      default: return Theme.primary;
    }
  }};
  margin: 0;
  opacity: ${({ variant }) => variant === "benefit" ? "0.8" : "0.8"};
  font-size: ${({ variant }) => {
    switch (variant) {
      case "benefit": return "14px";
      case "checklist": return "13px";
      case "horizontal": return "13px";
      default: return "14px";
    }
  }};
  line-height: 1.4;
  transition: all 0.3s ease;
  
  &:hover {
    opacity: 1;
  }
`;