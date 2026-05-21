import "./global.css";
import styles from "./app.module.css";

import { Button } from "./components/button";

export function App() {
  return (
    <div className={styles.container}>
      <Button name="Adicionar" />
      <span>0</span>
      <Button name="Remover" />
    </div>
  );
}
