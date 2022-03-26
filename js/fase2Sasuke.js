function fase2Sasuke(){

    var tentativas = 2;
    
    while(tentativas>0)
    {
        var resposta = prompt("Escolha o melhor Animal de Invocação para Sasuke: \na - Gamabunta (sapo)\nb - Katsuyu (lesma)\nc - Aoda (cobra)");

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
        window.location.assign("../html/fase3Sasuke.html");
    }
}