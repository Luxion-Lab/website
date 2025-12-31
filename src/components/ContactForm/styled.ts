import styled from "@emotion/styled";
import { Theme, Colors } from "@styles/colors";
import { MediaQuery } from "@styles/mediaQuery";

export const ContactFormContainer = styled.section`
    background: ${Theme.primary};
    padding: 60px;
    border-top-left-radius: 50px;
    border-top-right-radius: 50px;
    margin: -43px 0 0;
    z-index: 1;
    position: relative;
`;

export const ContactFormTitle = styled.h2`
    font-size: 48px;
    line-height: 52px;
    font-weight: 900;
    text-align: center;
    margin-bottom: 20px;
    color: ${Theme.secondary};

    ${MediaQuery.max("lg")} {
        font-size: 36px;
        line-height: 40px;
    }

    ${MediaQuery.max("md")} {
        font-size: 28px;
        line-height: 32px;
    }
`;

export const ContactFormSubtitle = styled.p`
    font-size: 18px;
    line-height: 24px;
    text-align: center;
    margin-bottom: 60px;
    color: ${Theme.secondary};
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;

    ${MediaQuery.max("lg")} {
        font-size: 16px;
        line-height: 22px;
        margin-bottom: 40px;
    }
`;

export const ContactFormWrapper = styled.div`
    margin: 0 auto;
    background: ${Colors.white};
`;

export const FormRow = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    margin-bottom: 5px;

    ${MediaQuery.max("md")} {
        grid-template-columns: 1fr;
        gap: 20px;
        margin-bottom: 5px;
    }
`;

export const FormGroup = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 5px;

    ${MediaQuery.max("md")} {
        margin-bottom: 5px;
    }
`;

export const FormLabel = styled.label`
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 8px;
    color: ${Theme.tertiary};
`;

export const FormInput = styled.input<{ $hasError?: boolean }>`
    padding: 15px 20px;
    border: 2px solid ${({ $hasError }) => $hasError ? '#ff4444' : '#f4f4f4'};
    border-radius: 8px;
    background: ${Colors.white};
    font-size: 16px;
    transition: all 0.3s ease;

    &:focus {
        outline: none;
        border-color: ${Theme.tertiary};
        box-shadow: 0 0 0 3px rgba(0, 255, 255, 0.1);
    }

    &::placeholder {
        color: ${Colors.darkLighter};
    }

    ${MediaQuery.max("md")} {
        padding: 12px 16px;
        font-size: 14px;
    }
`;

export const FormTextarea = styled.textarea<{ $hasError?: boolean }>`
    padding: 15px 20px;
    border: 2px solid ${({ $hasError }) => $hasError ? '#ff4444' : '#f4f4f4'};
    border-radius: 8px;
    background: ${Colors.white};
    font-size: 16px;
    font-family: inherit;
    resize: vertical;
    min-height: 120px;
    transition: all 0.3s ease;

    &:focus {
        outline: none;
        border-color: ${Theme.tertiary};
        box-shadow: 0 0 0 3px rgba(0, 255, 255, 0.1);
    }

    &::placeholder {
        color: ${Colors.darkLighter};
    }

    ${MediaQuery.max("md")} {
        padding: 12px 16px;
        font-size: 14px;
        min-height: 100px;
    }
`;

export const ErrorMessage = styled.span`
    color: #ff4444;
    font-size: 14px;
    margin-top: 5px;
    display: block;
`;

export const SuccessMessage = styled.div`
    background: #4CAF50;
    color: white;
    padding: 15px 20px;
    border-radius: 8px;
    margin-bottom: 20px;
    text-align: center;
    font-weight: 500;
`;

export const FormButtonWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 10px;
    padding-bottom: 30px;

    ${MediaQuery.max("md")} {
        margin-top: 10px;
        padding-bottom: 20px;
    }

    /* Ensure button inherits Hero button styling */
    > div {
        margin-top: 0;
    }
`;