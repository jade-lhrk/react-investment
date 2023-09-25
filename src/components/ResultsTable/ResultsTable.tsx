import classes from "./ResultsTable.module.css"

interface ResultsTable {
  data: ResultDataType[];
  initialInvestment: number;
}

export type ResultDataType = {
  year: number;
  yearlyInterest: number;
  savingsEndOfYear: number;
  yearlyContribution: number;
};

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const ResultsTable = ({ data }: ResultsTable) => {
  return (
    <table className={classes.result}>
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {data.map((yearData, i) => (
          <tr key={i}>
            <td>{yearData.year}</td>
            <td>{formatter.format(yearData.savingsEndOfYear)}</td>
            <td>{formatter.format(yearData.yearlyInterest)}</td>
            <td>
              {formatter.format(yearData.savingsEndOfYear -
                -yearData.yearlyContribution * yearData.year)}
            </td>
            <td>{yearData.year}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ResultsTable;
