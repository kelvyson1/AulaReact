export default function Exercicio1({fah})
{
  let  celsius= Number((fah-32)*5/9);

  return (
    <div>
        A conversão de graus Fahrenheit para graus Celsius é: {celsius.toFixed(4)}
    </div>    
  );
}