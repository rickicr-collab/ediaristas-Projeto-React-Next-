import { Avatar, Divider, List, ListItemText } from "@mui/material";
import { styled } from "@mui/material/styles";

export const GradientBackground = styled("section")`
  background: ${({ theme }) =>
    "linear-gradient(180deg, " +
    theme.palette.secondary.main +
    " 0% ,  " +
    theme.palette.primary.main +
    " 100%)"};
  color: ${({ theme }) => theme.palette.primary.contrastText};
`;

export const SectionTitle = styled("h2")`
  position: relative;
  text-align: center;
  font-size: ${({ theme }) => theme.typography.h6.fontSize};
  font-weight: normal;
  margin: 0;
  padding: ${({ theme }) => theme.spacing(7) + " 0 " + theme.spacing(4)};
  &::after {
    content: "";
    position: absolute;
    width: 44px;
    height: 2px;
    background-color: currentColor;
    bottom: ${({ theme }) => theme.spacing(2)};
    left: 50%;
    transform: translateX(-50%);
  }

  // Modo Desktop
  ${({ theme }) => theme.breakpoints.up("md")} {
    font-size: ${({ theme }) => theme.typography.h5.fontSize};
    padding: ${({ theme }) => theme.spacing(15) + " 0 " + theme.spacing(13)};
    &::after {
      bottom: ${({ theme }) => theme.spacing(10)};
    }
  }
`;

export const AdvantagesList = styled(List)`
  // Modo Desktop
  ${({ theme }) => theme.breakpoints.up("md")} {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: ${({ theme }) => theme.spacing(7)};
    padding-bottom: ${({ theme }) => theme.spacing(20)};
  }
`;

export const AdvantagesItemText = styled(ListItemText)`
  .MuiListItemText-primary {
    font-weight: bold;
  }
  .MuiListItemText-secondary {
    color: currentColor;
  }
`;

export const AdvantagesAvatar = styled(Avatar)`
  background-color: transparent;
  border: 2px solid currentColor;
  padding: 2px;
  margin-right: ${({ theme }) => theme.spacing(2)} i {
    font-size: 25px;
  }

  // Modo Desktop
  ${({ theme }) => theme.breakpoints.up("md")} {
    padding: 20px;
    margin-right: ${({ theme }) => theme.spacing(4)};
    i {
      font-size: 50px;
    }
  }
`;

export const ListDivider = styled(Divider)`
  &.MuiDivider-root {
    border-color: rgba(255, 255, 255, 0.25);
  }

  //Modo Desktop
  ${({ theme }) => theme.breakpoints.up("md")} {
    display: none;
  }
`;
