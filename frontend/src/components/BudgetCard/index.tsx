import { CardWrapper } from "./styled.module";
import Button from "../Button";
import Input from "../Input";

const BudgetCard = () => {
    return (
        <CardWrapper>
            <Input label="Cliente" />
            <Button>Enter</Button>
        </CardWrapper>
    )
}

export default BudgetCard;