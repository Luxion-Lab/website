import { type FC, useState } from "react";
import * as S from "./styled";
import { FadeIn } from "@utils/animations/FadeIn";

interface AnimatedCardProps {
  icon: string;
  title: string;
  description: string;
  delay?: number;
  variant?: "benefit" | "checklist" | "horizontal";
  onClick?: () => void;
}

export const AnimatedCard: FC<AnimatedCardProps> = ({ 
  icon, 
  title, 
  description, 
  delay = 0,
  variant = "benefit",
  onClick 
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <FadeIn delay={delay}>
      <S.CardContainer 
        variant={variant}
        isHovered={isHovered}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={onClick}
        role={onClick ? "button" : undefined}
        tabIndex={onClick ? 0 : undefined}
      >
        {(variant === "checklist" || icon) && (
          <S.IconContainer variant={variant} isHovered={isHovered}>
            {variant === "checklist" ? (
              <S.CheckIcon>✓</S.CheckIcon>
            ) : (
              <S.EmojiIcon variant={variant}>{icon}</S.EmojiIcon>
            )}
          </S.IconContainer>
        )}
        
        <S.ContentContainer variant={variant}>
          <S.Title variant={variant} isHovered={isHovered}>
            {title}
          </S.Title>
          <S.Description variant={variant}>
            {description}
          </S.Description>
        </S.ContentContainer>
      </S.CardContainer>
    </FadeIn>
  );
};