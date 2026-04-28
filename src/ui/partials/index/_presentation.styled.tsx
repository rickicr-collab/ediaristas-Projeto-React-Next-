import RoundedButton from "@/ui/components/inputs/RoudedButton/RoundedButton";
import { Container } from "@mui/material";
import { styled } from "@mui/material/styles";




export const SectionContainer = styled('section')`
    position: relative;
    min-height: 250px;
    background-image: url('/img/home/living-room.svg');
    background-repeat: no-repeat;
    background-position: right center;
    background-size: cover;

    // Modo Desktop 
    ${({theme}) => theme.breakpoints.up('md')}{
        background-position: center;
    }

    // Modo Mobile
    ${({theme}) => theme.breakpoints.down('md')}{
        display: flex;
        text-align: center;
    }
`;

export const ContainerStyled = styled(Container)`
    display: grid;
    grid-template-rows: repeat(3, auto);
    grid-template-areas: 'title' 'description' 'button';

    // Modo Mobile
    ${({theme}) => theme.breakpoints.down('md')}{
        align-items: center;
        max-width: 350px;
    }

    // Modo Desktop
    ${({theme}) => theme.breakpoints.up('md')}{
        grid-template-columns: 450px minmax(200px, 450px);
        grid-template-rows: 125px 55px 60px;
        text-align: center;
        grid-template-areas: "title picture" "description picture" "button picture";
        gap: ${({theme}) => theme.spacing(4)};
        min-height: 450px;
        align-items: center;
        align-content: center;
        justify-content: space-between;
        justify-items: center;

    }

`;

export const SectionTitle = styled('h1')`
    margin: 0;
    position: relative;
    grid-area: title;
    em{
        font-style: inherit;
    }

    .twf-search{
        position: absolute;
        top: 0;
        right: 0;
        background-color: ${({theme}) => theme.palette.grey[200]};
        border-radius: 60px;
        padding: ${({theme}) => theme.spacing(2)};
        transform: translate(25%, -25%);
    }

    // Modo desktop
    ${({theme}) => theme.breakpoints.up('md')}{
        border: 4px solid ${({theme}) => theme.palette.grey[200]};
        border-radius: 60px;
        padding: ${({theme}) => theme.spacing(4) + ' ' + theme.spacing(5)};
        max-width: 300px;
        line-height: 30px;
        
       
       

        em{
            color: ${({theme}) => theme.palette.primary.main};
        }
    }

    // Modo mobile
    ${({theme}) => theme.breakpoints.down('md')}{
        font-size: ${({theme}) => theme.typography.body1.fontSize};
        font-weight: normal;
        margin-bottom: ${({theme}) => theme.spacing(-8)};
        .twf-search{
            display: none;
        }

    }
`;

export const SectionDescription = styled('p')`
    grid-area: description;
    //Modo desktop
    ${({theme}) => theme.breakpoints.up('md')}{
        width: 350px;
        font-size: ${({theme}) => theme.typography.h6.fontSize};
       
    }



    // Modo Mobile
    ${({theme}) => theme.breakpoints.down('md')}{
        margin: 0 0 ${({theme}) => theme.spacing(3)};
    }
`;

export const SectionButton = styled(RoundedButton)`
    grid-area: button;
    // Modo Desktop
    ${({theme}) => theme.breakpoints.up('md')}{
        width: 400px;
        height: 100%;
    }
`;

export const SectionPictureContainer = styled('div')`
    grid-area: picture;
    position: relative;
    img{
        position: relative;
        top: 35px;
        width: 100%;
    }

    &::before, &::after{
        content: '';
        position: absolute;
        border-radius: 100%;

    }

    &::before{
        top: 20%;
        right: -5%;
        width: 130px;
        height: 130px;
        background-color: ${({theme}) => theme.palette.primary.main};
        z-index: 2;
    }

    &::after {
        top: 90%;
        bottom: 0;
        right: 0;
        width: 40px;
        height: 40px;
        background-color: ${({theme}) => theme.palette.grey[200]};
    }

    ${({theme}) => theme.breakpoints.down('md')}{
        display: none;
    }
`;

export const BottomButton = styled('span')`
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 50%);
    background-color: ${({theme}) => theme.palette.secondary.main};
    padding: 12px 12px;
    border-radius: 50%;
    color: ${({theme}) => theme.palette.common.white};
    border: 5px solid currentColor;

    i{
        position: relative;
        left: -2px;
    }
`;

