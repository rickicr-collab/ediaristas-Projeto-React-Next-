import useIsMobile from "@/data/hooks/useIsMobile";
import {
  Container,
  Divider,
  IconButton,
  MenuItem,
  MenuList,
  Toolbar
} from "@mui/material";
import { useEffect, useState } from "react";
import RoundedButton from "../../inputs/RoudedButton/RoundedButton";
import Link from "../../navigations/Link/Link";
import {
  ButtonsContainer,
  HeaderAppBar,
  HeaderDrawer,
  HeaderLogo,
} from "./Header.style";

const Header = () => {
  const [mounted, setMounted] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    setMounted(true);
  }, []);

  if(!mounted){
    return <HeaderDesktop/>
  }; 
  return isMobile ? <HeaderMobile /> : <HeaderDesktop />;
};



const HeaderDesktop = () => {
 
  return (
    <HeaderAppBar position={'sticky'}>
      <Toolbar component={Container}>
        <Link href={"/"}>
          <HeaderLogo
            src={"./img/logos/logo.svg"}
            alt="e-diaristas"
          ></HeaderLogo>
        </Link>
        <div>&nbsp;</div>
        <div>&nbsp;</div>
        <ButtonsContainer>
          <RoundedButton
            component={Link}
            href={"/cadastro/diarista"}
            color="primary"
            variant="contained"
          >
            seja um(a) diarista
          </RoundedButton>
          <RoundedButton component={Link} href={"/login"}>
            Login
          </RoundedButton>
        </ButtonsContainer>
      </Toolbar>
    </HeaderAppBar>
  );
};

const HeaderMobile = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  return (
    <HeaderAppBar position={'sticky'}>
      <Toolbar component={Container}>
        <IconButton
          edge={"start"}
          color={"inherit"}
          onClick={() => setDrawerOpen(true)}
        >
          <i className={"twf-bars"} />
        </IconButton>
        <Link href={"/"}>
          <HeaderLogo
            src={"/img/logos/logo.svg"}
            alt="e-diaristas"
          ></HeaderLogo>
        </Link>
        <HeaderDrawer
          open={isDrawerOpen}
          onClose={() => setDrawerOpen(false)}
          onClick={() => setDrawerOpen(false)}
        >
          <MenuList>
            <Link href={"/"} component={MenuItem} color="inherit" onClick={() => setDrawerOpen(false)}>
              Login
            </Link>
            <Divider />
            <Link
              href={"/cadastro/diarista"}
              component={MenuItem}
              color="inherit"
              onClick={() => setDrawerOpen(false)}
            >
              Seja um(a) diarista
            </Link>
          </MenuList>
        </HeaderDrawer>
      </Toolbar>
    </HeaderAppBar>
  );
};

export default Header;
