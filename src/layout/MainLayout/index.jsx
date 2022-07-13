import Navbar from "../../components/Navbar";
import styles from "./styles.module.scss";

function MainLayout({ children }) {
  return (
    <div className={styles.layout}>
      <Navbar />
      <main>{children}</main>
    </div>
  );
}

export default MainLayout;
