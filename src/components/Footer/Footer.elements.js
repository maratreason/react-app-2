import styled from "styled-components";
import { Link } from "react-router-dom";
import { DiNetbeans } from "react-icons/di";

export const FooterContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #003041;
    padding: 4rem 0 2rem 0;
`;

export const FooterSubscription = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-bottom: 24px;
    padding: 24px;
    color: #fff;
`;

export const FooterSubHeading = styled.div`
    font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande", "Lucida Sans", Arial, Helvetica, sans-serif, sans-serif;
    margin-bottom: 24px;
    font-size: 24px;
`;

export const FooterSubText = styled.div`
    margin-bottom: 24px;
    font-size: 20px;
`;

export const Form = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 820px) {
        flex-direction: column;
        width: 80%;
    }
`;

export const FormInput = styled.input`
    padding: 10px 20px;
    border-radius: 2px;
    margin-right: 10px;
    outline: none;
    border: none;
    font-size: 16px;
    border: 1px solid #fff;

    &::placeholder {
        color: #242424;
    }

    @media screen and (max-width: 820px) {
        width: 100%;
        margin: 0 0 16px 0;
    }
`;

export const FooterLinksContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    max-width: 1000px;

    @media screen and (max-width: 820px) {
        padding-top: 32px;
    }
`;

export const FooterLinksWrapper = styled.div`
    display: flex;

    @media screen and (max-width: 820px) {
        flex-direction: column;
    }
`;

export const FooterLinkItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 16px;
    text-align: left;
    width: 160px;
    box-sizing: border-box;
    color: #fff;

    @media screen and (max-width: 420px) {
        flex-wrap: wrap;
        width: 100%;
        margin: 0;
        padding: 10px;
    }
`;

export const FooterLinkTitle = styled.h2`
    margin-bottom: 16px;
`;

export const FooterLink = styled(Link)`
    color: #fff;
    text-decoration: none;
    margin-bottom: 0.5rem;

    &:hover {
        color: #0467fb;
        transition: 0.3s ease-out;
    }
`;

export const SocialMedia = styled.section`
    max-width: 1000px;
    width: 100%;
`;

export const SocialMediaWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    max-width: 1000px;
    margin: 40px auto 0 auto;

    @media screen and (max-width: 820px) {
        flex-direction: column;
    }
`;

export const SocialLogo = styled(Link)`
    display: flex;
    justify-self: start;
    align-items: center;
    text-decoration: none;
    font-size: 2rem;
    margin-bottom: 16px;
    color: #fff;
    cursor: pointer;
`;

export const SocialIcon = styled(DiNetbeans)`
    margin-right: 10px;
`;

export const WebsiteRights = styled.small`
    margin-bottom: 16px;
    color: #fff;
`;

export const SocialIcons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 240px;
`;

export const SocialIconLink = styled.div`
    font-size: 24px;
    color: #fff;
`