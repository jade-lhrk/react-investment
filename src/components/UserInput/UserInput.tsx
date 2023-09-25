import { useState } from "react";
import classes from "./UserInput.module.css"

export type UserInputType = {
  "current-savings": number;
  "yearly-contribution": number;
  "expected-return": number;
  duration: number;
};

export const initialUserInput: UserInputType = {
  "current-savings": 10000,
  "yearly-contribution": 1200,
  "expected-return": 7,
  duration: 10,
};

interface UserInputProps {
  onCalculate: (userInput: UserInputType | null) => void;
}

const UserInput = ({ onCalculate }: UserInputProps) => {
  const [userInput, setUserInput] = useState(initialUserInput);

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    //  ...
    onCalculate(userInput);
  };

  const resetHandler = () => {
    setUserInput(initialUserInput);
    onCalculate(null);
  };

  const inputChangeHandler = (input: string, value: string) => {
    setUserInput((prevInput) => {
      return {
        ...prevInput,
        [input]: +value,
      };
    });
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <div className={classes["input-group"]}>
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            onChange={(event) =>
              inputChangeHandler("current-savings", event.target.value)
            }
            value={userInput["current-savings"]}
            type="number"
            id="current-savings"
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            onChange={(event) =>
              inputChangeHandler("yearly-contribution", event.target.value)
            }
            value={userInput["yearly-contribution"]}
            type="number"
            id="yearly-contribution"
          />
        </p>
      </div>
      <div className={classes["input-group"]}>
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            onChange={(event) =>
              inputChangeHandler("expected-return", event.target.value)
            }
            value={userInput["expected-return"]}
            type="number"
            id="expected-return"
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            onChange={(event) =>
              inputChangeHandler("duration", event.target.value)
            }
            value={userInput["duration"]}
            type="number"
            id="duration"
          />
        </p>
      </div>
      <p className={classes.actions}>
        <button onClick={resetHandler} type="reset" className={classes.buttonAlt}>
          Reset
        </button>
        <button type="submit" className={classes.button}>
          Calculate
        </button>
      </p>
    </form>
  );
};

export default UserInput;
