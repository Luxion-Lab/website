import React, { useEffect, useRef, type FC } from "react";
import * as S from "./styled";

type FadeInProps = {
    children: React.ReactNode | string | TrustedHTML;
    delay?: number | string;
};

/**
 * Convert delay to milliseconds
 */
const convertToMilliseconds = (delay: number | string): number => {
    return Number(delay) || 0;
};

export const FadeIn: FC<FadeInProps> = ({ children, delay = 0 }) => {
    const elementRef = useRef<HTMLDivElement>(null);
    const observerRef = useRef<IntersectionObserver | null>(null);

    useEffect(() => {
        const element = elementRef.current;
        if (!element) return;

        // Limpiar observer anterior si existe
        if (observerRef.current) {
            observerRef.current.disconnect();
        }

        observerRef.current = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !entry.target.classList.contains("visible")) {
                        const targetElement = entry.target as HTMLElement;
                        
                        const timeoutId = setTimeout(() => {
                            targetElement.classList.add("visible");
                        }, convertToMilliseconds(delay));

                        // Desconectar inmediatamente después de activar
                        observerRef.current?.unobserve(targetElement);
                        
                        // Limpiar timeout si el componente se desmonta
                        return () => clearTimeout(timeoutId);
                    }
                });
            },
            {
                root: null,
                rootMargin: "0px 0px -10% 0px",
                threshold: 0.1,
            }
        );

        observerRef.current.observe(element);

        return () => {
            if (observerRef.current) {
                observerRef.current.disconnect();
                observerRef.current = null;
            }
        };
    }, []); // Removemos delay de las dependencias para evitar re-renders

    return (
        <S.FadeInStyled ref={elementRef}>
            {children as React.ReactNode}
        </S.FadeInStyled>
    );
};
