export default function Exercicio3({valor, taxa, tempo})

{
    let valorparcela = Number(valor) + (valor*(taxa**2/100)*tempo);
    return (
        <div>
            O valor da parcela atualizado: {valorparcela};
        </div>    
      );
}