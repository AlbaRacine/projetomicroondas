/*Olá, você foi contratado para executar este projeto. É importante que você analise, entenda o pedido do cliente e desenvolva conforme solicitado. Veja abaixo os requisitos do projeto:

- Precisamos desenvolver um menu para um microondas super veloz, onde teremos 5 opções de comida com seus respectivos tempos pré-definidos. 

1 - Pipoca – 10 segundos (padrão);
2 - Macarrão – 8 segundos (padrão);
3 - Carne – 15 segundos (padrão);
4 - Feijão – 12 segundos (padrão);
5 - Brigadeiro – 8 segundos (padrão); 

- O usuário poderá alterar o tempo padrão, aumentando ou diminuindo de acordo com sua vontade. Se o tempo informado for maior que 2x o necessário, exibir mensagem que a comida queimou.
- Se o tempo for menor que o padrão, exibir a mensagem: "tempo insuficiente"; 
- Opções não listadas no menu, devem exibir uma mensagem de erro: "Prato inexistente";
- Se o tempo for 3x maior que o necessário para o prato, o microondas deve exibir a mensagem: “kabumm”;
- No final de cada tarefa, o microondas deverá exibir a mensagem: "Prato pronto, bom*/



let comida = "Pipoca";
let tempo = 27;
switch (comida) {
    case "Pipoca":
        if (tempo==10){
            console.log("Prato pronto, bom apetite")
        }else if (tempo<30 && tempo > 20){
            console.log("Comida queimo")
        }else if (tempo>=30){
            console.log("Kabumm!!")
        }else{
           console.log('tempo insuficiente')
        };
   
    break;
    case " Macarrão":
        if (tempo==8){
            console.log("Prato pronto, bom apetite")
        }else if (tempo<36 && tempo >24 ){
            console.log("Comida queimo")
        }else if (tempo>=36){
            console.log("Kabumm!!")
        }else{
           console.log('tempo insuficiente')
        };
    break;
    case "Carne":
            if (tempo==15){
                console.log("Prato pronto, bom apetite")
            }else if (tempo<45 && tempo>30){
                console.log("Comida queimo")
            }else if (tempo>=45){
                console.log("Kabumm!!")
            }else{
               console.log('tempo insuficiente')
            };
    break;
    case "Feijao":
                if (tempo==12){
                    console.log("Prato pronto, bom apetite")
                }else if (tempo<36 && tempo>24){
                    console.log("Comida queimo")
                }else if (tempo>=36){
                    console.log("Kabumm!!")
                }else{
                   console.log('tempo insuficiente')
                };
    break;
    case "Brigadeiro":
                    if (tempo==8){
                        console.log("Prato pronto, bom apetite")
                    }else if (tempo<24 && tempo>16){
                        console.log("Comida queimo")
                    }else if (tempo>=24){
                        console.log("Kabumm!!")
                    }else{
                       console.log('tempo insuficiente')
                    };
default:
                        console.log('Prato inexistente')
                    
}