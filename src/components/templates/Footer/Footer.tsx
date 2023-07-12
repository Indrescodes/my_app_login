import { StyledContent, StyledFooterContainer, StyledFooterContent } from './styles';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <StyledFooterContainer>
      <StyledFooterContent>
        <StyledContent>
          &copy; {currentYear} Visos teisės saugomos
        </StyledContent>
      </StyledFooterContent>
    </StyledFooterContainer>
  );
};

export default Footer;
