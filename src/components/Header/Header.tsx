import logo from "./../../assets/investment-calculator-logo.png";
import classes from './Header.module.css'

interface HeaderProps {
  // logo: string
}

const Header = ({}: HeaderProps) => {
  return (
    <header className={classes.header}>
      <img src={logo} alt="logo" />
      <h1>Investment Calculator</h1>
    </header>
  );
};

export default Header;
