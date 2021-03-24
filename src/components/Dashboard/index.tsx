import { Container } from "./styles";
import { Summary } from "../Summary";
import { TransctionTable } from "../TransactionTable";

export function Dashboard() {
    return (
        <Container>
            <Summary/>
            <TransctionTable/>
        </Container>
    )
}