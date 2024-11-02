import { createBrowserRouter } from "react-router-dom";
import BudgetPage from "../pages/BudgetPage";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <BudgetPage />
    }
])

export default routes;