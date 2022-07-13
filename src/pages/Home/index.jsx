import React from "react";
import styles from "./styles.module.scss";
import Header from "../../components/Header";
import EventList from "../../components/EventList";
import Pagination from "../../components/Pagination";
function Home() {
  return (
    <>
      <Header />
      <EventList />
      <Pagination />
    </>
  );
}

export default Home;
