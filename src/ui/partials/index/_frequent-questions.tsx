import {
  AccordionDetails,
  AccordionSummary,
  Container,
  Typography,
} from "@mui/material";
import { useState } from "react";
import {
  AccordionStyle,
  SectionContainer,
  SectionSubtitle,
  SectionTitle,
  WaveStyle,
} from "./_frequent-questions.styled";

const QuestionsList = [
  {
    question: "Como funciona a contratação de uma diarista?",
    answer:
      "Você pode escolher a profissional disponível na sua região, selecionar a data e o horário desejados e confirmar a solicitação diretamente pela plataforma. Após a confirmação, você receberá todos os detalhes do agendamento.",
  },
  {
    question: "Os profissionais são verificados?",
    answer:
      "Sim, todas as diaristas passam por um processo de verificação que inclui análise de documentos e avaliações de clientes anteriores, garantindo mais segurança e confiança para você.",
  },
  {
    question: "Quais serviços estão incluídos na diária?",
    answer:
      "Os serviços normalmente incluem limpeza geral da casa, organização de ambientes e tarefas básicas do dia a dia. Você também pode alinhar necessidades específicas diretamente com a profissional antes do atendimento.",
  },
  {
    question: "Como funciona o pagamento?",
    answer:
      "O pagamento pode ser feito de forma online pela plataforma ou combinado diretamente com a diarista, dependendo da opção escolhida. Todas as informações são apresentadas antes da confirmação do serviço.",
  },
];
const FrequentQuestions = () => {
  const [activeAccordion, setActiveAccordion] = useState(0);

  function isOpenAccordion(accordionNumber: number): boolean {
    return activeAccordion === accordionNumber;
  }

  function changeOpenAccordion(accordionNumber: number): void {
    setActiveAccordion(accordionNumber);
    if (isOpenAccordion(accordionNumber)) {
      setActiveAccordion(0);
    } else {
      setActiveAccordion(accordionNumber);
    }
  }

  function getIcon(accordionNumber: number) {
    return isOpenAccordion(accordionNumber) ? 'twf-minus': 'twf-plus';
  }
  return (
    <SectionContainer>
      <WaveStyle src={"/img/home/waves.svg"} />
      <Container>
        <SectionTitle>Ainda possui alguma duvida?</SectionTitle>
        <SectionSubtitle>
          Veja abaixo as perguntas mais frequentes:
        </SectionSubtitle>
        {QuestionsList.map((item, index) => (
          <AccordionStyle
            key={index}
            expanded={isOpenAccordion(index + 1)}
            onChange={() => changeOpenAccordion(index + 1)}
          >
            <AccordionSummary expandIcon={<i className={getIcon(index + 1)} />}>
              <Typography color={"primary"}>{item.question}</Typography>
            </AccordionSummary>
            <AccordionDetails>{item.answer}</AccordionDetails>
          </AccordionStyle>
        ))}
      </Container>
    </SectionContainer>
  );
};

export default FrequentQuestions;
