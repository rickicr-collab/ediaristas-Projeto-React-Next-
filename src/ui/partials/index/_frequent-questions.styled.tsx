import { Accordion } from '@mui/material';
import { styled } from '@mui/material/styles';


export const SectionContainer = styled('section')`
    padding-bottom: ${({theme}) => theme.spacing(7)};
`;

export const WaveStyle = styled('img')`
    margin-top: -100px;
    height: 100px;
    width: 100%;
`;

export const SectionTitle = styled('h2')`
    margin: 0;
    text-align: center;

`;

export const SectionSubtitle = styled('p')`
    position: relative;
    text-align: center;
    margin: ${({theme}) => theme.spacing(2) + ' 0 ' + theme.spacing(10)};
    &::after{
        content:'';
        position: absolute;
        width: 96px;
        height: 3px;
        background-color: ${({theme}) => theme.palette.grey[300]};
        left: 50%;
        transform: translateX(-50%);
        bottom: ${({theme}) => theme.spacing(-5)};

    }
`;

export const AccordionStyle = styled(Accordion)`
   .MuiAccordionSummary-content .MuiTypography-root{
        font-weight: bold;
        
   }

   &.MuiAccordion-root{
        box-shadow: none;
        border: 2px solid ${({theme}) => theme.palette.primary.main};
        
        &::before{
            background-color: transparent;

        }

        &, &.Mui-expanded{
            margin: -2px 0 0;
        }
   }

   .MuiAccordionDetails-root{
        padding-right: ${({theme}) => theme.spacing(7)};
   }

   .MuiAccordionSummary-expandIconWrapper{
        color: ${({theme}) => theme.palette.text.secondary};
   }

`;