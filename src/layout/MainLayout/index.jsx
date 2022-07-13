import Navbar from "../../components/Navbar";
import SecMenu from "../../components/SecMenu";
import styles from "./styles.module.scss";
import { Provider } from "react-redux";
import { store } from "../../../store";
function MainLayout({ children }) {
  return (
    <Provider store={store}>
      <div className={styles.layout}>
        <Navbar />
        <main>
          <SecMenu />
          {children}
        </main>
      </div>
    </Provider>
  );
}

export default MainLayout;
