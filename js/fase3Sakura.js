function fase3Sakura()
{
    var tentativas = 2;
    
    while(tentativas>0)
    {
        var resposta = prompt("Escolha o jutsu favorito de Sakura\na - Ninjutsu de Cura\nb - Rasengan\nc - Chidori");

        if(resposta=='a')
        {
            alert("Parabéns, você acertou!");
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
        window.location.assign("../html/final.html");
    }
}