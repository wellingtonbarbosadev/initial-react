import "./global.css";
import styles from "./app.module.css";

import { useState, useEffect } from "react";

import { Button } from "./components/button";

export function App() {
  const [count, setCount] = useState(0);

  function handleAdd() {
    setCount((prevState) => prevState + 1);
  }

  function handleRemove() {
    if (count > 0) {
      setCount((prevState) => prevState - 1);
    }
  }

  useEffect(() => {
    if (count > 0) {
      console.log("O valor mudou para", count);
    }
  }, [count]);

  return (
    <div className={styles.container}>
      <Button name="Adicionar" onClick={handleAdd} />
      <span>{count}</span>
      <Button name="Remover" onClick={handleRemove} />
    </div>
  );
}
