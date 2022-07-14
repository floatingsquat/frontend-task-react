import React from "react";
import styles from "./styles.module.scss";
import Header from "../../components/Header";
import EventList from "../../components/EventList";
function Home() {
  return (
    <>
      <Header />
      <EventList />
    </>
  );
}

export default Home;
