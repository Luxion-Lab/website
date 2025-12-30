import { type FC, useState, useEffect } from "react";
import { FadeIn } from "@utils/animations/FadeIn";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { Theme } from "@styles/colors";

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const SliderContainer = styled.div`
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  overflow: hidden;
  
`;

const SliderWrapper = styled.div<{ currentIndex: number; totalItems: number }>`
  display: flex;
  transition: transform 0.5s ease-in-out;
  transform: translateX(-${({ currentIndex }) => currentIndex * 100}%);
`;

const SlideItem = styled.div`
  min-width: 100%;
  display: flex;
  align-items: flex-start;
  gap: 20px;
  padding: 24px 32px;
  background: transparent;
  border: 1px solid ${Theme.tertiary}20;
  border-radius: 12px;
  box-sizing: border-box;
`;

const ItemTextContent = styled.div`
  wdth:auto;
  margin-left:30px;
`;

const CheckIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  background: ${Theme.tertiary};
  color: ${Theme.primary};
  border-radius: 50%;
  font-size: 14px;
  font-weight: bold;
  flex-shrink: 0;
  margin-top: 2px;
`;

const ItemContent = styled.div`
  flex: 1;
  display: flex;
  justify-content:center;
  align-items: center;
`;

const ItemTitle = styled.h4`
  color: ${Theme.tertiary};
  font-size: 38px;
  font-weight: 700 !important;
  margin: 0 0 4px 0 !important;
  line-height: 1.3;
`;

const ItemDescription = styled.p`
  color: ${Theme.tertiary};
  font-size: 15px;
  margin: 0;
  opacity: 0.8;
  line-height: 1.4;
`;

const NavigationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-top: 24px;
`;

const NavButton = styled.button<{ disabled?: boolean }>`
  background: ${({ disabled }) => disabled ? Theme.tertiary + '20' : Theme.tertiary};
  color: ${({ disabled }) => disabled ? Theme.tertiary + '40' : Theme.primary};
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: ${({ disabled }) => disabled ? 'not-allowed' : 'pointer'};
  transition: all 0.3s ease;
  font-size: 16px;
  font-weight: bold;

  &:hover:not(:disabled) {
    background: ${Theme.tertiary};
    transform: scale(1.1);
  }
`;

const DotsContainer = styled.div`
  display: flex;
  justify-content:center;
  gap: 8px;
`;

const Dot = styled.button<{ active: boolean }>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: none;
  background-color: ${props => props.active ? Theme.tertiary : 'rgba(0, 0, 0, 0.3)'};
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${props => props.active ? Theme.tertiary : 'rgba(0, 0, 0, 0.5)'};
    transform: scale(1.1);
  }
`;

interface CompactChecklistProps {
  items: Array<{
    title: string;
    description: string;
  }>;
  delay?: number;
  autoPlay?: boolean;
  autoPlayInterval?: number;
}

export const CompactChecklist: FC<CompactChecklistProps> = ({ 
  items, 
  delay = 0,
  autoPlay = true,
  autoPlayInterval = 4000
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!autoPlay || items.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === items.length - 1 ? 0 : prevIndex + 1
      );
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [autoPlay, autoPlayInterval, items.length]);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? items.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === items.length - 1 ? 0 : currentIndex + 1);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <FadeIn delay={delay}>
      <SliderContainer>
        <SliderWrapper currentIndex={currentIndex} totalItems={items.length}>
          {items.map((item, index) => (
            <SlideItem key={index}>
              
              <ItemContent>
                <ItemTextContent>
                  <ItemTitle>{item.title}</ItemTitle>
                  <ItemDescription>{item.description}</ItemDescription>
                </ItemTextContent>
              </ItemContent>
            </SlideItem>
          ))}
        </SliderWrapper>
        
        <DotsContainer>
          {items.map((_, index) => (
            <Dot
              key={index}
              active={index === currentIndex}
              onClick={() => goToSlide(index)}
              aria-label={`Ir al slide ${index + 1}`}
            />
          ))}
        </DotsContainer>
      </SliderContainer>
    </FadeIn>
  );
};