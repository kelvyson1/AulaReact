import Exemplo1 from "./Componentes/Exemplo1"
import Exercio1 from "./Componentes/Exercicio1"
import Exercio2 from "./Componentes/Exercicio2"
import Exercio3 from "./Componentes/Exercicio3"
import Exercio4 from "./Componentes/Exercicio4"
import Exercio5 from "./Componentes/Exercicio5"

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

     <hr />
     <h3>Chamada para o Exercicio 3</h3>
     <Exercio3 valor={"100"} taxa = {"10"} tempo = {"2"}/>

    <hr />
     <h3>Chamada para o Exercicio 4</h3>
     <Exercio4 tipo={"triangulo"} base = {"10"} altura = {"5"}/>
     <Exercio4 tipo={"retangulo"} base = {"10"} altura = {"5"}/>

    <hr />
    <h3>Chamada para o Exercicio 5</h3>
    <Exercio5 quantidade="10" />
    <Exercio5 quantidade="20" />
    

    </div>
  )
 }