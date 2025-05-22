export default function Exercicio4({tipo, base, altura})

{
    let area;

    if(tipo=="triangulo"){
        area =  (base * altura/2);
    }else if(tipo=="retangulo"){
        area =  (base * altura);  
    }
    return (
        <div>
           A area do {tipo} é: {area};           
        </div>    
      );
}