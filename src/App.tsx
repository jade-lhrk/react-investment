import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import ResultsTable, { ResultDataType } from "./components/ResultsTable/ResultsTable";
import { initialUserInput } from './components/UserInput/UserInput';
import UserInput, {
  UserInputType
} from "./components/UserInput/UserInput";

function App() {
  const [userInput, setUserInput] = useState<UserInputType | null>(null);

  const calculateHandler = (userInput: UserInputType| null) => {
    setUserInput(userInput);
  };

  const yearlyData: ResultDataType[] = [];

  if (userInput) {
    let currentSavings = userInput["current-savings"];
    const yearlyContribution = userInput["yearly-contribution"];
    const expectedReturn = userInput["expected-return"] / 100;
    const duration = userInput["duration"];

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
  }

  return (
    <div>
      <Header></Header>

      <UserInput onCalculate={calculateHandler}></UserInput>

      {!userInput && <p style={{textAlign: "center"}}>No investment calculated yet.</p>}
      {userInput && <ResultsTable data={yearlyData} initialInvestment={userInput["current-savings"]}></ResultsTable>}
      
    </div>
  );
}

export default App;
