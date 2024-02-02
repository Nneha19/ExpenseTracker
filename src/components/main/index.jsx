import { Button, Flex, Heading, useDisclosure} from "@chakra-ui/react";
import Summary from "../summary";
import ExpenseView from "../expense-view";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../../context";

export default function Main() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    totalExpense,
    allTransactions,
    setTotalExpense,
    totalIncome,
    setTotalIncome,
  } = useContext(GlobalContext);

  useEffect(() => {
    let income = 0;
    let expense = 0;

    allTransactions.forEach((item) => {
      item.type === "income"
        ? (income = income + parseFloat(item.amount))
        : (expense = expense + parseFloat(item.amount));
    });

    setTotalExpense(expense);
    setTotalIncome(income);
  }, [allTransactions]);

  return (
    <Flex textAlign={"center"} flexDirection={"column"} pr={"5"} pl={"5"}>
      <Flex
        alignItems="center"
        flexDirection={["column", "column", "row"]}
        justifyContent="space-between"
        mt={12} ml={6} mr={6}
      >
        <Heading
          color="#0000FF"
          mb={[4, 4, 4]}
          textAlign={["center", "center", "left"]}
        >
          Expense Tracker
        </Heading>
        <Flex alignItems={["center", "center", "flex-start"]} mb={[4, 4, 0]}>
          <Button onClick={onOpen} bg="#0000FF" color="white">
            Add New Transaction
          </Button>
        </Flex>
      </Flex>

      <Summary
        totalExpense={totalExpense}
        totalIncome={totalIncome}
        isOpen={isOpen}
        onClose={onClose}
      />

      <Flex
        alignItems={"flex-start"}
        borderRadius={"10"}    
        mb={'5'}
        justifyContent={"space-evenly"}
        flexDirection={["column", "column", "column", "row", "row"]}
      >
        <ExpenseView
          data={allTransactions.filter((item) => item.type === "expense")}
          type={"expense"}
        />
        <ExpenseView
          data={allTransactions.filter((item) => item.type === "income")}
          type={"income"}
        />
      </Flex>
      
    </Flex>
  );
}
