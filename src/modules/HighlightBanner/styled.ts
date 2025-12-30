import styled from "@emotion/styled";
import { Theme } from "@styles/colors";
import { MediaQuery } from "@styles/mediaQuery";

interface HighlightBannerContainerProps {
  variant?: "default" | "gradient" | "minimal";
}

export const HighlightBannerContainer = styled.section<HighlightBannerContainerProps>`
  background: ${Theme.primary};
    padding-top: 90px;
    border-top-left-radius: 50px;
    border-top-right-radius: 50px;
    margin: -43px 0 50px;
    z-index: 1;
    position: relative;
`;

export const GradientOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: 1;
`;

export const ContentWrapper = styled.div`
  position: relative;
  z-index: 2;
  text-align: center;
  max-width: 900px;
  margin: 0 auto;
`;

export const TagLine = styled.p`
  color: ${Theme.tertiary};
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 20px;
  opacity: 0.9;

  ${MediaQuery.max("lg")} {
    font-size: 12px;
  }
`;

export const MainText = styled.h2`
  color: ${Theme.tertiary};
  font-size: 48px;
  line-height: 1.2;
  font-weight: 700;
  margin: 0;
  text-align: center;

  ${MediaQuery.max("lg")} {
    font-size: 36px;
  }

  ${MediaQuery.max("md")} {
    font-size: 28px;
  }
`;