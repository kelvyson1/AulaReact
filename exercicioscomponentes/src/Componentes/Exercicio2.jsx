export default function Exercicio2({peso, altura})
{
    let  IMC= Number(peso/(altura*altura));
    return (
        <div>
            O IMC é: {IMC};
        </div>    
      );
}