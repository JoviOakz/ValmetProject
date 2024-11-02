import { StyledButton } from "./styled.module"

interface IButton {
    children: string;
    onClick?: () => void;
}

const Button: React.FC<IButton> = ({ children, onClick }) => {
    return (
        <StyledButton onClick={onClick}>{children}</StyledButton>
    )
}

export default Button;