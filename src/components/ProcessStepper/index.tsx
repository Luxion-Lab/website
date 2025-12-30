import React, { type FC } from "react";
import * as S from "./styled";
import { Container } from "@components/Container";
import { InfiniteImg1 } from "@static/images";

export type ProcessStep = {
    number: string;
    title: string;
    description: string;
};

export type ProcessStepperProps = {
    title?: string;
    subtitle?: string;
    description?: string;
    steps: ProcessStep[];
    image?: string;
};

export const ProcessStepper: FC<ProcessStepperProps> = ({
    title,
    subtitle,
    description,
    steps,
    image = InfiniteImg1.src,
}) => {
    return (
        <S.ProcessStepperStyled>
            <Container>
                {(title || subtitle) && (
                    <S.ProcessStepperHeader>
                        {subtitle && (
                            <S.ProcessStepperSubtitle>
                                {subtitle}
                            </S.ProcessStepperSubtitle>
                        )}
                        {title && (
                            <S.ProcessStepperTitle>
                                {title}
                            </S.ProcessStepperTitle>
                        )}
                        {description && (
                            <S.ProcessStepperDescription>{description}</S.ProcessStepperDescription> 
                        )}
                    </S.ProcessStepperHeader>
                )}
                
                <S.ProcessStepperMainContent>
                    <S.ProcessStepperImageContainer>
                        <S.ProcessStepperImage 
                            src={image} 
                            alt="Process illustration"
                        />
                    </S.ProcessStepperImageContainer>
                    
                    <S.ProcessStepperContainer>
                        {steps.map((step, index) => (
                            <S.ProcessStepperStep key={index} index={index}>
                                <S.ProcessStepperStepNumber>
                                    {step.number}
                                </S.ProcessStepperStepNumber>
                                
                                <S.ProcessStepperStepContent>
                                    <S.ProcessStepperStepTitle>
                                        {step.title}
                                    </S.ProcessStepperStepTitle>
                                    <S.ProcessStepperStepDescription>
                                        {step.description}
                                    </S.ProcessStepperStepDescription>
                                </S.ProcessStepperStepContent>
                            </S.ProcessStepperStep>
                        ))}
                    </S.ProcessStepperContainer>
                </S.ProcessStepperMainContent>
            </Container>
        </S.ProcessStepperStyled>
    );
};

export default ProcessStepper;