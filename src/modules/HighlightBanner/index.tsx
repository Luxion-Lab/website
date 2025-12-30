import { type FC } from "react";
import * as S from "./styled";
import { Container } from "@components/Container";
import { FadeIn } from "@utils/animations/FadeIn";

interface HighlightBannerProps {
  tagline?: string;
  mainText: string;
  variant?: "default" | "gradient" | "minimal";
}

export const HighlightBanner: FC<HighlightBannerProps> = ({ 
  tagline, 
  mainText, 
  variant = "default" 
}) => {
  return (
    <S.HighlightBannerContainer variant={variant}>
      <S.GradientOverlay />
      <Container>
        <FadeIn>
          <S.ContentWrapper>
            {tagline && (
              <S.TagLine>{tagline}</S.TagLine>
            )}
            <S.MainText>{mainText}</S.MainText>
          </S.ContentWrapper>
        </FadeIn>
      </Container>
    </S.HighlightBannerContainer>
  );
};