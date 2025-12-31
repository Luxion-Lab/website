import styled from "@emotion/styled";
import { MediaQuery } from "@styles/mediaQuery";

export const StyledContainer = styled.div`
    margin: 0 auto;
    padding: 10px;
    width: 100%;
    margin-top: -43px;

    max-width: 540px;

    ${MediaQuery.between("md", "lg")} {
        max-width: 720px;
    }

    ${MediaQuery.between("lg", "xl")} {
        max-width: 960px;
        padding: 40px;
    }

    ${MediaQuery.between("xl", "xxl")} {
        max-width: 1140px;
        padding: 40px;
    }

    ${MediaQuery.min("xxl")} {
        max-width: 1320px;
        padding: 40px;
    }
`;
