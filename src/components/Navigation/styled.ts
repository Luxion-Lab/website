import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Theme } from "@styles/colors";
import { MediaQuery } from "@styles/mediaQuery";

export const NavigationStyled = styled.div`
    display: flex;
    gap: 50px;

    ${MediaQuery.max("xl")} {
        gap: 20px;
    }
`;

export const NavigationListWrapper = styled.nav<{
    $isOpen: boolean;
}>`
    display: flex;
    align-items: center;
    justify-content: center;

    ${MediaQuery.max("lg")} {
        position: fixed;
        top: 0;
        right: -100%;

        background: ${Theme.secondary};
        height: 100dvh;
        z-index: 2;
        transform: translateX(100%);
        transition: transform 0.3s linear, right 0.7s;
        padding-top: 85px;

        width: clamp(300px, 80%, 300px);

        ${({ $isOpen }) =>
            $isOpen &&
            css`
                right: 0;
                transform: translateX(0);
            `};
    }
`;

export const NavigationList = styled.ul`
    padding: 0;
    margin: 0;
    list-style-type: none;
    display: flex;

    ${MediaQuery.min("lg")} {
        gap: 20px;
        align-items: center;
        justify-content: center;
    }

    ${MediaQuery.max("lg")} {
        gap: 10px;
        padding: 20px 10px 53px;
        overflow: auto;
        width: 100%;
        height: 100%;

        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
    }

    > li a {
        text-decoration: none;
        color: ${Theme.primary};
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 20px;
        line-height: 25px;
        text-transform: uppercase;
        font-weight: 900;
        letter-spacing: 1px;
        text-shadow: 1px 1px 1px rgba(0, 0, 0, 1);
        padding: 10px;
        border-radius: 5px;
        background-color: transparent;
        cursor: pointer;
        transition: background-color 0.3s, color 0.3s;

        ${MediaQuery.max("lg")} {
            padding: 10px 20px;
        }

        &:hover {
            background-color: ${Theme.primary};
            color: ${Theme.secondary};

            text-shadow: none;
        }

        img {
            margin: 0 15px 0 0;

            max-width: 30px;
            max-height: 30px;

            ${MediaQuery.max("xl")} {
                margin: 0 10px 0 0;
            }
        }
    }
`;

// Dropdown styles
export const DropdownContainer = styled.div`
    position: relative;
    display: inline-block;
`;

export const DropdownTrigger = styled.div`
    text-decoration: none;
    color: ${Theme.primary};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    line-height: 25px;
    text-transform: uppercase;
    font-weight: 700;
    letter-spacing: 1px;
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 1);
    padding: 12px 16px;
    border-radius: 8px;
    cursor: pointer;
    position: relative;
    overflow: hidden;

    ${MediaQuery.max("lg")} {
        padding: 12px 20px;
        border: none;
        background: transparent;
        
        &::before {
            display: none;
        }
    }

    &:hover {
        background: linear-gradient(135deg, ${Theme.primary} 0%, rgba(255, 255, 255, 0.9) 100%);
        color: ${Theme.secondary};
        text-shadow: none;
        border-color: ${Theme.primary};
        box-shadow: 0 8px 25px rgba(255, 255, 255, 0.2);
        transform: translateY(-2px);

        &::before {
            left: 100%;
        }

        ${MediaQuery.max("lg")} {
            background: ${Theme.primary};
            transform: none;
            box-shadow: none;
        }

        & span {
            color: ${Theme.secondary} !important;
        }
    }
`;

export const DropdownArrow = styled.span<{ $isOpen: boolean }>`
    margin-left: 10px;
    font-size: 14px;
    font-weight: bold;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    transform: ${({ $isOpen }) => $isOpen ? 'rotate(180deg) scale(1.1)' : 'rotate(0deg) scale(1)'};
    color: ${({ $isOpen }) => $isOpen ? Theme.primary : 'inherit'};
    filter: ${({ $isOpen }) => $isOpen ? 'drop-shadow(0 0 3px rgba(255, 255, 255, 0.5))' : 'none'};
`;

export const DropdownMenu = styled.div<{ $isOpen: boolean }>`
    position: absolute;
    top: calc(100% + 8px);
    left: 50%;
    transform: translateX(-50%);
    background: linear-gradient(145deg, ${Theme.secondary} 0%, rgba(0, 0, 0, 0.95) 100%);
    border-radius: 6px;
    box-shadow: 
        0 20px 40px rgba(0, 0, 0, 0.4),
        0 0 0 1px rgba(255, 255, 255, 0.1),
        inset 0 1px 0 rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    opacity: ${({ $isOpen }) => $isOpen ? 1 : 0};
    visibility: ${({ $isOpen }) => $isOpen ? 'visible' : 'hidden'};
    transform: ${({ $isOpen }) => 
        $isOpen 
            ? 'translateX(-50%) translateY(0) scale(1)' 
            : 'translateX(-50%) translateY(-15px) scale(0.95)'
    };
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    z-index: 1000;
    min-width: 280px;
    overflow: hidden;

    &::before {
        content: '';
        position: absolute;
        top: -8px;
        left: 50%;
        transform: translateX(-50%);
        width: 0;
        height: 0;
        border-left: 8px solid transparent;
        border-right: 8px solid transparent;
        border-bottom: 8px solid ${Theme.primary};
        z-index: 1001;
    }

    &::after {
        content: '';
        position: absolute;
        top: -6px;
        left: 50%;
        transform: translateX(-50%);
        width: 0;
        height: 0;
        border-left: 6px solid transparent;
        border-right: 6px solid transparent;
        border-bottom: 6px solid ${Theme.secondary};
        z-index: 1002;
    }

    ${MediaQuery.max("lg")} {
        position: static;
        opacity: 1;
        visibility: visible;
        transform: none;
        box-shadow: none;
        border: none;
        background: transparent;
        backdrop-filter: none;
        min-width: auto;
        width: 100%;
        margin-left: 20px;
        border-radius: 0;
        display: ${({ $isOpen }) => $isOpen ? 'block' : 'none'};

        &::before,
        &::after {
            display: none;
        }
    }
`;

export const DropdownItem = styled.a`
    display: block !important;
    padding: 16px 24px !important;
    color: ${Theme.primary} !important;
    text-decoration: none !important;
    font-size: 16px !important;
    font-weight: 500 !important;
    letter-spacing: 0.5px !important;
    position: relative;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    background: transparent !important;
    text-align: left !important;
    justify-content: flex-start !important;
    align-items: flex-start !important;
    text-transform: none !important;
    text-shadow: none !important;
    border-radius: 0 !important;

    &:hover {
        background: linear-gradient(90deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%) !important;
        color: ${Theme.primary} !important;
        padding-left: 32px !important;
        border-left: 3px solid ${Theme.primary};
        box-shadow: 0 4px 15px rgba(255, 255, 255, 0.1);
        
        &::before {
            content: '→';
            position: absolute;
            left: 12px;
            top: 50%;
            transform: translateY(-50%);
            color: ${Theme.primary};
            font-weight: bold;
            opacity: 1;
            transition: all 0.3s ease;
        }
    }

    &::before {
        content: '';
        position: absolute;
        left: 12px;
        top: 50%;
        transform: translateY(-50%);
        opacity: 0;
        transition: all 0.3s ease;
    }

    &:last-child {
        border-bottom: none;
    }

    &:active {
        transform: translateX(2px) scale(0.98);
    }

    ${MediaQuery.max("lg")} {
        padding: 12px 16px;
        font-size: 16px;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);

        &::before,
        &::after {
            display: none;
        }

        &:hover {
            padding-left: 16px;
            transform: none;
            background: rgba(255, 255, 255, 0.1);
        }

        &:active {
            transform: none;
        }
    }
`;
