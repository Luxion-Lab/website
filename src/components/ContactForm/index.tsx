import React, { useState, type FC } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import axios from "axios";
import * as S from "./styled";
import { Container } from "@components/Container";
import { Button } from "@components/Button";
import { FadeIn } from "@utils/animations/FadeIn";

// Esquema de validación con Zod
const contactSchema = z.object({
    name: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
    email: z.string().email("Por favor ingresa un email válido"),
    phone: z.string().min(10, "El teléfono debe tener al menos 10 dígitos"),
    company: z.string().optional(),
    message: z.string().min(10, "El mensaje debe tener al menos 10 caracteres"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export const ContactForm: FC = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactSchema),
    });

    const onSubmit = async (data: ContactFormData) => {
        setIsSubmitting(true);
        setSubmitStatus('idle');

        // Construir el body para el API externo
        const apiBody = {
            subject: `Nuevo mensaje de contacto de ${data.name} (${data.email})`,
            body: `Nombre: ${data.name}\nEmail: ${data.email}\nTeléfono: ${data.phone}\nEmpresa: ${data.company || "-"}\n\nMensaje:\n${data.message}`,
        };

        try {
            const response = await fetch('https://luxion.ddns.net/api/send_email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(apiBody),
            });

            if (response.ok) {
                setSubmitStatus('success');
                reset();
            } else {
                setSubmitStatus('error');
            }
        } catch (error) {
            console.error('Error al enviar el formulario:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <Container>
            <S.ContactFormContainer>
                <FadeIn delay={0.2}>
                    <S.ContactFormWrapper>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <S.FormRow>
                                <S.FormGroup>
                                    <S.FormLabel>Nombre *</S.FormLabel>
                                    <S.FormInput
                                        {...register("name")}
                                        placeholder="Tu nombre completo"
                                        $hasError={!!errors.name}
                                    />
                                    {errors.name && (
                                        <S.ErrorMessage>{errors.name.message}</S.ErrorMessage>
                                    )}
                                </S.FormGroup>

                                <S.FormGroup>
                                    <S.FormLabel>Email *</S.FormLabel>
                                    <S.FormInput
                                        {...register("email")}
                                        type="email"
                                        placeholder="tu@email.com"
                                        $hasError={!!errors.email}
                                    />
                                    {errors.email && (
                                        <S.ErrorMessage>{errors.email.message}</S.ErrorMessage>
                                    )}
                                </S.FormGroup>
                            </S.FormRow>

                            <S.FormRow>
                                <S.FormGroup>
                                    <S.FormLabel>Teléfono *</S.FormLabel>
                                    <S.FormInput
                                        {...register("phone")}
                                        type="tel"
                                        placeholder="+52 123 456 7890"
                                        $hasError={!!errors.phone}
                                    />
                                    {errors.phone && (
                                        <S.ErrorMessage>{errors.phone.message}</S.ErrorMessage>
                                    )}
                                </S.FormGroup>

                                <S.FormGroup>
                                    <S.FormLabel>Empresa</S.FormLabel>
                                    <S.FormInput
                                        {...register("company")}
                                        placeholder="Nombre de tu empresa"
                                    />
                                </S.FormGroup>
                            </S.FormRow>

                            <S.FormGroup>
                                <S.FormLabel>Mensaje *</S.FormLabel>
                                <S.FormTextarea
                                    {...register("message")}
                                    placeholder="Cuéntanos sobre tu proyecto y cómo podemos ayudarte..."
                                    rows={4}
                                    $hasError={!!errors.message}
                                />
                                {errors.message && (
                                    <S.ErrorMessage>{errors.message.message}</S.ErrorMessage>
                                )}
                            </S.FormGroup>

                            {submitStatus === 'success' && (
                                <S.SuccessMessage>
                                    ¡Gracias por contactarnos! Te responderemos pronto.
                                </S.SuccessMessage>
                            )}

                            {submitStatus === 'error' && (
                                <S.ErrorMessage>
                                    Hubo un error al enviar el mensaje. Por favor intenta de nuevo.
                                </S.ErrorMessage>
                            )}

                            <S.FormButtonWrapper>
                                <Button
                                    asButton={true}
                                    type="submit"
                                    variant="primary"
                                    showIcon={true}
                                >
                                    {isSubmitting ? "Enviando..." : "Enviar mensaje"}
                                </Button>
                            </S.FormButtonWrapper>
                        </form>
                    </S.ContactFormWrapper>
                </FadeIn>
            </S.ContactFormContainer>
        </Container>
    );
};