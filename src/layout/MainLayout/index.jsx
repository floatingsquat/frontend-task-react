import Navbar from "../../components/Navbar";
import styles from "./styles.module.scss";
import { Provider } from "react-redux";
import { store } from "../../store";
import Menu from "../../components/Menu";
import { TOP_MENU } from "../../constants";

function MainLayout({ children }) {
  return (
    <Provider store={store}>
      <div className={styles.layout}>
        <Navbar />
        <main>
          <Menu type={TOP_MENU} />
          {children}
        </main>
      </div>
    </Provider>
  );
}

export default MainLayout;
