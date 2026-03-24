import { ReactNode } from "react";
import { RoundedButtonStyled } from "./RoundedButton.style";


function RoundedButton({children, ...props}: {children: ReactNode; [key: string]: any}) {
    return <RoundedButtonStyled {...props}>{children}</RoundedButtonStyled>
}

export default RoundedButton;