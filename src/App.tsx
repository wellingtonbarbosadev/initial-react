import { Button } from "./components/button";

export function App() {
  return (
    <div>
      <Button name="Salvar" onClick={() => alert("Salvo")} />
      <Button name="Editar" />
      <Button name="Apagar" />
    </div>
  );
}
