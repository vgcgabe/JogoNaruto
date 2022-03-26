function fase1Sakura()
{
    //window.location.assign("./html/EscolhaSensei.html");
    //var resposta = prompt("Digite a letra correspondente ao sensei que você escolheu: \na - Orochimaru\nb - Tsunade\nc - Jiraiya\n");
    var tentativas = 2;
    
    while(tentativas>0)
    {
        var resposta = prompt("Escolha o melhor Sensei para Sakura: \na - Orochimaru\nb - Tsunade\nc - Jiraiya");

        if(resposta=='b' || resposta =='B')
        {
            alert("Parabéns, você acertou! Agora você pode passar para a próxima fase.");
            break;
        }
        else{
            tentativas--;
            alert("Resposta incorreta. Tente novamente, você ainda possui "+ tentativas +" tentativas");
        }
    }
    if (tentativas==0){
        window.location.assign("../html/gameOver.html");
    }
    else{
        window.location.assign("../html/fase2Sakura.html");
    }
}