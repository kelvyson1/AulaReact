import Exemplo1 from "./Componentes/Exemplo1"
import Exercio1 from "./Componentes/Exercicio1"
import Exercio2 from "./Componentes/Exercicio2"
export default function App()
 {
  return (
    <div>
      <h1> Exercicio de Componentes</h1>

      <h3>Chamada para o Exemplo1</h3>
      <Exemplo1 numero1={8} numero2={2} />
      <Exemplo1 numero1={10} numero2={22} />
      <Exemplo1 numero1={7.5} numero2={9.8} />
      <Exemplo1 numero1={-58} numero2={65} />

      <hr />
      <h3>Chamada para o Exercício 1</h3>
      <Exercio1 fah="100" />

      <hr />
      <h3>Chamada para o Exercício 2</h3>
      <Exercio2 peso={"70"} altura = {"1.90"} />
    </div>
  )
 }