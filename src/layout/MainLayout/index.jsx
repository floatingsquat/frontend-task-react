import Navbar from "../../components/Navbar";
import SecMenu from "../../components/SecMenu";
import styles from "./styles.module.scss";

function MainLayout({ children }) {
  return (
    <div className={styles.layout}>
      <Navbar />
      <main>
        <SecMenu />
        {children}
      </main>
    </div>
  );
}

export default MainLayout;
