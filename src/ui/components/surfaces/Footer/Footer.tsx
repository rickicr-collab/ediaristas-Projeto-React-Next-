import { Box, List, Typography } from "@mui/material";
import Link from "../../navigations/Link/Link";
import { AppList, FooterContainer, FooterGrid, FooterListItem, FooterSocialList, FooterTitle, SocialButton, SocialContainer } from "./Footer.style";

const Footer = () => {
  return (
    <FooterContainer>
        <FooterGrid>
      <div>
        <FooterTitle variant="body2">Menu</FooterTitle>

        <List>
          <FooterListItem disablePadding>
            <Link
              href="/encontrar-diarista"
              color={"inherit"}
              variant={"body2"}
            >
              Encontre um(a) diarista
            </Link>
          </FooterListItem>

          <FooterListItem disablePadding>
            <Link href="/cadastro-diarista" color={"inherit"} variant={"body2"}>
              Seja um(a) diarista
            </Link>
          </FooterListItem>

          <FooterListItem disablePadding>
            <Link href="/" color={"inherit"} variant={"body2"}>
              Por que usar o Ediaristas?
            </Link>
          </FooterListItem>

          <FooterListItem disablePadding>
            <Link href="/" color={"inherit"} variant={"body2"}>
              Principais dúvidas
            </Link>
          </FooterListItem>
        </List>
      </div>

      <Box sx={{maxWidth: '400px'}}>
        <FooterTitle>Quem Somos</FooterTitle>
        <Typography variant={'body2'} sx={{mt: 2, mb: 1}}>
            Ediaristas te ajuda a encontrar um(a) diarista perto de você. São profissionais avaliados por outros clientes. Assim, você pode contratar o serviço com mais segurança.
        </Typography>
      </Box>

      <SocialContainer>
        <Box>
            <FooterTitle variant={'body2'}>Baixe nossos Aplicativos</FooterTitle>
            <AppList>
            <li>
                <a href={'#'} target={'_blank'} rel={'noopener noreferrer'}>
                    <img src={'/img/logos/app-store.png'} alt={'AppStore'}/>
                </a>
            </li>

             <li>
                <a href={'#'} target={'_blank'} rel={'noopener noreferrer'}>
                    <img src={'/img/logos/google-play.png'} alt={'Google Play'}/>
                </a>
            </li>
            </AppList>
        </Box>

        <div>
            <FooterTitle variant={'body2'}>Redes Sociais</FooterTitle>
            <FooterSocialList>
                <FooterListItem disablePadding>
                    <Link
                      href="http://www.facebook.com"
                      color="inherit"
                      variant="body2"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <SocialButton sx={{ marginRight: 1.5 }}>
                        <i className={'twf-facebook-f'}/>
                      </SocialButton>
                    </Link>

                    <Link
                      href="http://www.instagram.com"
                      color="inherit"
                      variant="body2"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <SocialButton sx={{ marginRight: 1.5 }}>
                        <i className={'twf-instagram'}/>
                      </SocialButton>
                    </Link>

                    <Link
                      href="http://www.youtube.com"
                      color="inherit"
                      variant="body2"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <SocialButton sx={{ marginRight: 1.5 }}>
                        <i className={'twf-youtube'}/>
                      </SocialButton>
                    </Link>
                </FooterListItem>
            </FooterSocialList>
        </div>
      </SocialContainer>
      </FooterGrid>
    </FooterContainer>
  );
};

export default Footer;
