import React from "react";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.container}>
        <h1>Home Page</h1>
        <a href={"/login"}>Retornar a Login</a>
    </div>
  )
}

export default App
