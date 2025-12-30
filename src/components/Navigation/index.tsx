import * as S from "./styled";
import { useState, type FC } from "react";
import { Hamburger } from "./components/Hamburger";

export const Navigation: FC = () => {
    // to update values for all components, keep the state here
    const [isOpen, setIsOpen] = useState(false);
    const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);

    return (
        <S.NavigationStyled>
            <S.NavigationListWrapper $isOpen={isOpen}>
                <S.NavigationList>
                    <li>
                        <a href="/">Inicio</a>
                    </li>
                    <li>
                        <S.DropdownContainer
                            onMouseEnter={() => setIsServicesDropdownOpen(true)}
                            onMouseLeave={() => setIsServicesDropdownOpen(false)}
                        >
                            <S.DropdownTrigger>
                                Servicios
                                <S.DropdownArrow $isOpen={isServicesDropdownOpen}>▼</S.DropdownArrow>
                            </S.DropdownTrigger>
                            <S.DropdownMenu $isOpen={isServicesDropdownOpen}>
                                <S.DropdownItem href="/servicios/software-a-medida">
                                    Software a medida
                                </S.DropdownItem>
                                <S.DropdownItem href="/servicios/automatizaciones">
                                    Automatizaciones
                                </S.DropdownItem>
                                <S.DropdownItem href="/servicios/integraciones">
                                    Integraciones
                                </S.DropdownItem>
                                <S.DropdownItem href="/servicios/apps-moviles">
                                    Apps Moviles
                                </S.DropdownItem>
                                <S.DropdownItem href="/servicios/ia-chatbots">
                                    IA Chatbots
                                </S.DropdownItem>
                                <S.DropdownItem href="/servicios/soporte">
                                    Soporte
                                </S.DropdownItem>
                                <S.DropdownItem href="/servicios/sitio-web-express">
                                    Sitio web Express
                                </S.DropdownItem>
                            </S.DropdownMenu>
                        </S.DropdownContainer>
                    </li>
                    <li>
                        <a href="/contacto">Contacto</a>
                    </li>
                </S.NavigationList>
            </S.NavigationListWrapper>
            <Hamburger
                state={{
                    open: isOpen,
                    setOpen: setIsOpen,
                }}
            />
        </S.NavigationStyled>
    );
};
