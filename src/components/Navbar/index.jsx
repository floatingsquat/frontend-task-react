import { LEFT_MENU } from "../../constants";
import Logo from "../Logo";
import Menu from "../Menu";
import styles from "./styles.module.scss";
function Navbar() {
  return (
    <div className={styles.navbar}>
      <Logo />
      <Menu type={LEFT_MENU} />
    </div>
  );
}

export default Navbar;
