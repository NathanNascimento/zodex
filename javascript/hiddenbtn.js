
function SaibaMais()
{
    var pontos = document.getElementById("pontos");
    var maisTexto = document.getElementById("mais");
    var btnLeiaMais = document.getElementById("btnSaibaMais");

    if(pontos.style.display === "none")
    {
        pontos.style.display = "inline";
        maisTexto.style.display = "none";
        btnLeiaMais.innerHTML = "SaibaMais";

    }

    else
    {
        pontos.style.display = "none";
        maisTexto.style.display = "inline";
        btnLeiaMais.innerHTML = "leia Menos";
    }

}