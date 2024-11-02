import { CardWrapper, StyledDates, StyledDescription, StyledInformation } from "./styled.module";
import Button from "../Button";
import Input from "../Input";

const BudgetCard = () => {
    return (
        <CardWrapper>
            <StyledInformation>
                <Input label="Cliente" />
                <Input label="Desenho" />
                <Input label="Quantidade" />
            </StyledInformation>

            <StyledDescription>
                <Input label="Descrição" />
            </StyledDescription>

            <StyledDates>
                <Input label="Data da Cotação" type="date" />
                <Input label="Prazo de Fabricação" />
                <Input label="Validade da Cotação" />
            </StyledDates>
            <Button>Enter</Button>
        </CardWrapper>
    )
}

export default BudgetCard;