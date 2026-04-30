import { Container, ListItem, ListItemAvatar } from "@mui/material";
import React from "react";
import {
  AdvantagesAvatar,
  AdvantagesItemText,
  AdvantagesList,
  GradientBackground,
  ListDivider,
  SectionTitle,
} from "./_advantages.styled";

const ListAdvantages = [
  {
    icon: "twf-woman",
    title: "Diversidade",
    description: "São mais de 5.000 profissionais esperando por você!",
  },
  {
    icon: "twf-certificate",
    title: "Confiabilidade",
    description: "Todos os profissionais são verificados",
  },
  {
    icon: "twf-search-2",
    title: "Rastreabilidade",
    description: "Você pode acessar todo o histórico do(a) profissional",
  },
  {
    icon: "twf-frame-broken",
    title: "Segurança",
    description: "Seguro sobre qualquer possivel dano",
  },
  {
    icon: "twf-payment",
    title: "Controle",
    description:
      "O pagamento é realizado somente quando o(a) profissional está na sua casa",
  },
  {
    icon: "twf-broom-bucket",
    title: "Experiência",
    description: "Mais de 50.000 diárias realizadas",
  },
];
const Advantages = () => {
  return (
    <GradientBackground>
      <Container>
        <SectionTitle>Porque usar o E-diaristas?</SectionTitle>
        <AdvantagesList>
          {ListAdvantages.map((item, index) => (
            <React.Fragment key={item.icon}>
            {index !== 0 &&<ListDivider />}
              <ListItem disableGutters>
                <ListItemAvatar>
                  <AdvantagesAvatar>
                    <i className={item.icon} />
                  </AdvantagesAvatar>
                </ListItemAvatar>
                <AdvantagesItemText
                  primary={item.title}
                  secondary={item.description}
                />
              </ListItem>
            </React.Fragment>
          ))}
        </AdvantagesList>
      </Container>
    </GradientBackground>
  );
};

export default Advantages;
