function fase1Naruto()
{
    var tentativas = 2;
    
    while(tentativas>0)
    {
        var resposta = prompt("Escolha o melhor Sensei para Naruto: \na - Orochimaru\nb - Tsunade\nc - Jiraiya");

        if(resposta=='c')
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
        window.location.assign("../html/fase2Naruto.html");
    }
}

