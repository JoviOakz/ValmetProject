import { StyledPage } from "./styled.module";
import BudgetCard from "../../components/BudgetCard";
import BackgroundLogo from "../../components/BackgroundLogo";

const BudgetPage = () => {
    return (
        <StyledPage>
            <BackgroundLogo />
            <BudgetCard />
        </StyledPage>
    )
}

export default BudgetPage;