import React from "react";
import { Button } from "../../globalStyles";
import { FooterContainer, FooterLink, FooterLinkItems, FooterLinksContainer, FooterLinksWrapper, 
    FooterLinkTitle, FooterSubHeading, FooterSubscription, FooterSubText, Form, FormInput,
    SocialIconLink, SocialIcons, SocialMedia, SocialMediaWrap, SocialLogo, SocialIcon, WebsiteRights
} from "./Footer.elements";
import { FaFacebook, FaInstagram, FaVk, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <FooterContainer>
            <FooterSubscription>
                <FooterSubHeading>
                    Присоединяйтесь к нам и получайте свежие туры
                </FooterSubHeading>
                <FooterSubText>
                    Вы можете отписаться в любое время
                </FooterSubText>
                <Form>
                    <FormInput name="email" type="email" placeholder="Your Email" />
                    <Button fontBig primary>Подписаться</Button>
                </Form>
            </FooterSubscription>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>О компании</FooterLinkTitle>
                        <FooterLink to="/sign-up">Об услугах</FooterLink>
                        <FooterLink to="/">Дополнительно</FooterLink>
                        <FooterLink to="/">Работа у нас</FooterLink>
                        <FooterLink to="/">Финансы</FooterLink>
                        <FooterLink to="/">Если возникли вопросы</FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle>Контакты</FooterLinkTitle>
                        <FooterLink to="/sign-up">Об услугах</FooterLink>
                        <FooterLink to="/">Дополнительно</FooterLink>
                        <FooterLink to="/">Работа у нас</FooterLink>
                        <FooterLink to="/">Финансы</FooterLink>
                        <FooterLink to="/">Если возникли вопросы</FooterLink>
                    </FooterLinkItems>
                </FooterLinksWrapper>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>Видео</FooterLinkTitle>
                        <FooterLink to="/sign-up">Об услугах</FooterLink>
                        <FooterLink to="/">Дополнительно</FooterLink>
                        <FooterLink to="/">Работа у нас</FooterLink>
                        <FooterLink to="/">Финансы</FooterLink>
                        <FooterLink to="/">Если возникли вопросы</FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle>Соц. сети</FooterLinkTitle>
                        <FooterLink to="/sign-up">Об услугах</FooterLink>
                        <FooterLink to="/">Дополнительно</FooterLink>
                        <FooterLink to="/">Работа у нас</FooterLink>
                        <FooterLink to="/">Финансы</FooterLink>
                        <FooterLink to="/">Если возникли вопросы</FooterLink>
                    </FooterLinkItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to="/">
                        <SocialIcon />
                        Logo
                    </SocialLogo>
                    <WebsiteRights>Logo &copy; 2020</WebsiteRights>
                    <SocialIcons>
                        <SocialIconLink href={"/"} target="_blank" aria-label="Facebook">
                            <FaFacebook />
                        </SocialIconLink>
                        <SocialIconLink href={"/"} target="_blank" aria-label="Instagram">
                            <FaInstagram />
                        </SocialIconLink>
                        <SocialIconLink href={"/"} target="_blank" aria-label="Youtube">
                            <FaYoutube />
                        </SocialIconLink>
                        <SocialIconLink href={"/"} target="_blank" aria-label="Twitter">
                            <FaTwitter />
                        </SocialIconLink>
                        <SocialIconLink href={"/"} target="_blank" aria-label="LinkedIn">
                            <FaVk />
                        </SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterContainer>
    )
}

export default Footer;
