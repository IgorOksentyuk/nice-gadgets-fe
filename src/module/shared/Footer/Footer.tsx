/* eslint-disable max-len */
import * as FooterStyles from './Footer.styled';
import logoFooter from '../../../assets/images/logo_footer.png';

export const Footer = () => {
  return (
    <FooterStyles.StyledFooter>
      <FooterStyles.LogoFooter src={logoFooter} />

      <FooterStyles.ListContainer>
        <FooterStyles.ListItem>Github</FooterStyles.ListItem>

        <FooterStyles.ListItem>Contacts</FooterStyles.ListItem>

        <FooterStyles.ListItem>rights</FooterStyles.ListItem>
      </FooterStyles.ListContainer>

      <FooterStyles.ButtonLink>
        <FooterStyles.ButtonText>Back to top</FooterStyles.ButtonText>

        <svg
          className="footer__button-content"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="0.5"
            y="31.5"
            width="31"
            height="31"
            rx="15.5"
            transform="rotate(-90 0.5 31.5)"
            stroke="#B4BDC4"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M11.5285 18.4712C11.2682 18.2109 11.2682 17.7888 11.5285 17.5284L15.5285 13.5284C15.7889 13.2681 16.211 13.2681 16.4713 13.5284L20.4713 17.5284C20.7317 17.7888 20.7317 18.2109 20.4713 18.4712C20.211 18.7316 19.7889 18.7316 19.5285 18.4712L15.9999 14.9426L12.4713 18.4712C12.211 18.7316 11.7889 18.7316 11.5285 18.4712Z"
            fill="#0F0F11"
          />
        </svg>
      </FooterStyles.ButtonLink>
    </FooterStyles.StyledFooter>
  );
};
