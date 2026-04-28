import { useEffect, useState } from "react";
import { BottomButton, ContainerStyled, SectionButton, SectionContainer, SectionDescription, SectionPictureContainer, SectionTitle } from "./_presentation.styled";



const Presentation = () => {
    const [cleanerPicture, setCleanerPicture] = useState('');

    useEffect(() => {
        const newCleanerPicture = Math.random() <0.5 ? '/img/home/housekeeper.png': '/img/home/janitor.png';
        setCleanerPicture(newCleanerPicture);
    }, [])
    return <div>
        <SectionContainer>
               <ContainerStyled>
                    <SectionTitle>Encontre agora mesmo um(a) <em>diarista!</em>
                        <i className={'twf-search'} />
                    </SectionTitle>
                    <SectionDescription>São mais de 5000 profissionais esperando por você!</SectionDescription>
                    <SectionButton href={'/encontrar-diaristas'} variant="contained" color="primary">Encontrar uma diaristas</SectionButton>
                    <SectionPictureContainer>
                        <img src={cleanerPicture}/>
                    </SectionPictureContainer>
               </ContainerStyled>
               <BottomButton>
                    <i className={'twf-caret-down'} />
               </BottomButton>
        </SectionContainer>
    </div>
}

export default Presentation;