export default function Exercicio5({quantidade})

{
    let bruto = Number(quantidade)*150;
    let INSS = bruto*0.08;
    let liquido = bruto-INSS;
    return (
        <div>
           Quantidade de consultas = {quantidade};
           Salario bruto = {bruto};
           Desconto INSS = {INSS};
           salario liquido ={liquido};

        </div>    
      );
}