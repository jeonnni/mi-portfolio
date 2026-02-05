import styles from "./Header.module.scss"
import logo from "../../../assets/logo.png"
import { Link } from "react-router-dom";

const Header = () => {
    return (
      <div className={styles.container}>
        <Link to="/">
            <img src={logo} alt="logo" className={styles.logo}></img>
        </Link>
      </div>
    );    
}

export default Header;