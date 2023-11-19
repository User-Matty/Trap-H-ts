$(function(){
    //comandos:
    abrirPlayer();
    fecharPlayer();
    tocarMusica();

    // funcões:
    function abrirPlayer(){ //Abrir o player
        $(".ImgMusica").click(function(){
            $(".Reproduzir").css("display","flex")
        });
    }

    function fecharPlayer(){ //Fechar o player
        $(".Fechar").click(function(){
            $(".Reproduzir").fadeOut()
            $("#img").remove();
            $("#nomeDaMusica").remove();
            $("#musica").remove();
        });
    }
    function tocarMusica(){ //Tocar musica
        var img;
        var nomeDaMusica;
        var musica;
                                        // Matue
        $(".maquina-do-tempo").click(function(){
            img = `<img src="/img/artistas/Matue/MaquinaDoTempo-matue.jfif" height="90%" style="margin: 6px" id="img">`
            nomeDaMusica = `<div id="nomeDaMusica"><h2 style="margin: 6px; color: white;">Maquina do Tempo</h2><h3 style="margin: 6px; color: white;">Matue</h3></div>`
            musica = `<audio src="musicas/Matue/maquina do tempo/01. Cogulandia.mp3" controls style="width: 50%; margin-left: -90px;" id="musica"></audio>`
            $("#img").remove();
            $("#nomeDaMusica").remove();
            $("#musica").remove();
            $(".Reproduzir .Musica").append(img)
            $(".Reproduzir .Musica").append(nomeDaMusica)
            $(".Reproduzir .Controle").append(musica)
        })
        $(".anos-luz").click(function(){
            img = `<img src="img/artistas/Matue/AnosLuz-Matue.jfif" height="90%" style="margin: 6px" id="img">`
            nomeDaMusica = `<div id="nomeDaMusica"><h2 style="margin: 6px; color: white;">Anos Luz</h2><h3 style="margin: 6px; color: white;">Matue</h3></div>`
            musica = `<audio src="musicas/Matue/Matuê - Anos Luz.mp3" controls style="width: 50%; margin-left: -90px;" id="musica"></audio>`
            $("#img").remove();
            $("#nomeDaMusica").remove();
            $("#musica").remove();
            $(".Reproduzir .Musica").append(img)
            $(".Reproduzir .Musica").append(nomeDaMusica)
            $(".Reproduzir .Controle").append(musica)
        })
        $(".kenny-g").click(function(){
            img = `<img src="/img/artistas/Matue/kennyG-Matue.jfif" height="90%" style="margin: 6px" id="img">`
            nomeDaMusica = `<div id="nomeDaMusica"><h2 style="margin: 6px; color: white;">Kenny G</h2><h3 style="margin: 6px; color: white;">Matue</h3></div>`
            musica = `<audio src="musicas/Matue/Matue - KennyG.mp3" controls style="width: 50%; margin-left: -90px;" id="musica"></audio>`
            $("#img").remove();
            $("#nomeDaMusica").remove();
            $("#musica").remove();
            $(".Reproduzir .Musica").append(img)
            $(".Reproduzir .Musica").append(nomeDaMusica)
            $(".Reproduzir .Controle").append(musica)
        })
        $(".quer-voar").click(function(){
            img = `<img src="/img/artistas/Matue/QuerVoar-Matue.jfif" height="90%" style="margin: 6px" id="img">`
            nomeDaMusica = `<div id="nomeDaMusica"><h2 style="margin: 6px; color: white;">Quer Voar</h2><h3 style="margin: 6px; color: white;">Matue</h3></div>`
            musica = `<audio src="musicas/Matue/Matue - Quer voar.mp3" controls style="width: 50%; margin-left: -90px;" id="musica"></audio>`
            $("#img").remove();
            $("#nomeDaMusica").remove();
            $("#musica").remove();
            $(".Reproduzir .Musica").append(img)
            $(".Reproduzir .Musica").append(nomeDaMusica)
            $(".Reproduzir .Controle").append(musica)
        })
        $(".vampiro").click(function(){
            img = `<img src="/img/artistas/Matue/Vampiro-Matue.jfif" height="90%" style="margin: 6px" id="img">`
            nomeDaMusica = `<div id="nomeDaMusica"><h2 style="margin: 6px; color: white;">Vampiro</h2><h3 style="margin: 6px; color: white;">Matue</h3></div>`
            musica = `<audio src="musicas/Matue/Matue  - Vampiro.mp3" controls style="width: 50%; margin-left: -90px;" id="musica"></audio>`
            $("#img").remove();
            $("#nomeDaMusica").remove();
            $("#musica").remove();
            $(".Reproduzir .Musica").append(img)
            $(".Reproduzir .Musica").append(nomeDaMusica)
            $(".Reproduzir .Controle").append(musica)
        })
                                            // Pose do Rodo
        $(".a-cara-do-crime").click(function(){
            img = `<img src="/img/artistas/Pose/ACaraDoCrime-Pose.jfif" height="90%" style="margin: 6px" id="img">`
            nomeDaMusica = `<div id="nomeDaMusica"><h2 style="margin: 6px; color: white;">A cara do crime</h2><h3 style="margin: 6px; color: white;">MC Pose do rodo</h3></div>`
            musica = `<audio src="musicas/Pose do rodo/1 - A cara do crime.mp3" controls style="width: 50%; margin-left: -90px;" id="musica"></audio>`
            $("#img").remove();
            $("#nomeDaMusica").remove();
            $("#musica").remove();
            $(".Reproduzir .Musica").append(img)
            $(".Reproduzir .Musica").append(nomeDaMusica)
            $(".Reproduzir .Controle").append(musica)
        })
        $(".eu-fiz-o-jogo-virar").click(function(){
            img = `<img src="img/artistas/Pose/EuFizOjogoVirar-Pose.jfif" height="90%" style="margin: 6px" id="img">`
            nomeDaMusica = `<div id="nomeDaMusica"><h2 style="margin: 6px; color: white;">Eu fiz o jogo virar</h2><h3 style="margin: 6px; color: white;">MC Pose do rodo</h3></div>`
            musica = `<audio src="musicas/Pose do rodo/2 - Eu fiz o jogo virar.mp3" controls style="width: 50%; margin-left: -90px;" id="musica"></audio>`
            $("#img").remove();
            $("#nomeDaMusica").remove();
            $("#musica").remove();
            $(".Reproduzir .Musica").append(img)
            $(".Reproduzir .Musica").append(nomeDaMusica)
            $(".Reproduzir .Controle").append(musica)
        })
        $(".me-sinto-abencoado").click(function(){
            img = `<img src="img/artistas/Pose/MeSintoAbençoado-Pose.jfif" height="90%" style="margin: 6px" id="img">`
            nomeDaMusica = `<div id="nomeDaMusica"><h2 style="margin: 6px; color: white;">Me sinto abençoado</h2><h3 style="margin: 6px; color: white;">MC Pose do rodo</h3></div>`
            musica = `<audio src="musicas/Pose do rodo/3 - Me Sinto Abençoado.mp3" controls style="width: 50%; margin-left: -90px;" id="musica"></audio>`
            $("#img").remove();
            $("#nomeDaMusica").remove();
            $("#musica").remove();
            $(".Reproduzir .Musica").append(img)
            $(".Reproduzir .Musica").append(nomeDaMusica)
            $(".Reproduzir .Controle").append(musica)
        })
        $(".metflix").click(function(){
            img = `<img src="img/artistas/Pose/Metflix-Pose.jfif" height="90%" style="margin: 6px" id="img">`
            nomeDaMusica = `<div id="nomeDaMusica"><h2 style="margin: 6px; color: white;">Metflix</h2><h3 style="margin: 6px; color: white;">MC Pose do rodo</h3></div>`
            musica = `<audio src="musicas/Pose do rodo/4 - Metflix.m4a" controls style="width: 50%; margin-left: -90px;" id="musica"></audio>`
            $("#img").remove();
            $("#nomeDaMusica").remove();
            $("#musica").remove();
            $(".Reproduzir .Musica").append(img)
            $(".Reproduzir .Musica").append(nomeDaMusica)
            $(".Reproduzir .Controle").append(musica)
        })
        $(".vida-louca").click(function(){
            img = `<img src="img/artistas/Pose/VidaLouca-Pose.jfif" height="90%" style="margin: 6px" id="img">`
            nomeDaMusica = `<div id="nomeDaMusica"><h2 style="margin: 6px; color: white;">Vida louca</h2><h3 style="margin: 6px; color: white;">MC Pose do rodo</h3></div>`
            musica = `<audio src="musicas/Pose do rodo/5 - Vida louca.mp3" controls style="width: 50%; margin-left: -90px;" id="musica"></audio>`
            $("#img").remove();
            $("#nomeDaMusica").remove();
            $("#musica").remove();
            $(".Reproduzir .Musica").append(img)
            $(".Reproduzir .Musica").append(nomeDaMusica)
            $(".Reproduzir .Controle").append(musica)
        })
                                        // Orochi
        $(".lobo").click(function(){
            img = `<img src="img/artistas/Orochi/Lobo-Orochi.jfif" height="90%" style="margin: 6px" id="img">`
            nomeDaMusica = `<div id="nomeDaMusica"><h2 style="margin: 6px; color: white;">Lobo</h2><h3 style="margin: 6px; color: white;">Orochi</h3></div>`
            musica = `<audio src="musicas/Pose do rodo/1 - A cara do crime.mp3" controls style="width: 50%; margin-left: -90px;" id="musica"></audio>`
            $("#img").remove();
            $("#nomeDaMusica").remove();
            $("#musica").remove();
            $(".Reproduzir .Musica").append(img)
            $(".Reproduzir .Musica").append(nomeDaMusica)
            $(".Reproduzir .Controle").append(musica)
        })
        $(".arrasta-pra-cima").click(function(){
            img = `<img src="img/artistas/Orochi/ArrastaPraCima-Orochi.jfif" height="90%" style="margin: 6px" id="img">`
            nomeDaMusica = `<div id="nomeDaMusica"><h2 style="margin: 6px; color: white;">Arrasta pra cima</h2><h3 style="margin: 6px; color: white;">Orochi</h3></div>`
            musica = `<audio src="musicas/Pose do rodo/2 - Eu fiz o jogo virar.mp3" controls style="width: 50%; margin-left: -90px;" id="musica"></audio>`
            $("#img").remove();
            $("#nomeDaMusica").remove();
            $("#musica").remove();
            $(".Reproduzir .Musica").append(img)
            $(".Reproduzir .Musica").append(nomeDaMusica)
            $(".Reproduzir .Controle").append(musica)
        })
        $(".sobre-nos").click(function(){
            img = `<img src="img/artistas/Orochi/SobreNos-Orochi.jfif" height="90%" style="margin: 6px" id="img">`
            nomeDaMusica = `<div id="nomeDaMusica"><h2 style="margin: 6px; color: white;">Sobre nós</h2><h3 style="margin: 6px; color: white;">Orochi</h3></div>`
            musica = `<audio src="musicas/Pose do rodo/3 - Me Sinto Abençoado.mp3" controls style="width: 50%; margin-left: -90px;" id="musica"></audio>`
            $("#img").remove();
            $("#nomeDaMusica").remove();
            $("#musica").remove();
            $(".Reproduzir .Musica").append(img)
            $(".Reproduzir .Musica").append(nomeDaMusica)
            $(".Reproduzir .Controle").append(musica)
        })
        $(".balao").click(function(){
            img = `<img src="/img/artistas/Orochi/Balao-Orochi.jfif" height="90%" style="margin: 6px" id="img">`
            nomeDaMusica = `<div id="nomeDaMusica"><h2 style="margin: 6px; color: white;">Balão</h2><h3 style="margin: 6px; color: white;">Orochi</h3></div>`
            musica = `<audio src="musicas/Pose do rodo/4 - Metflix.m4a" controls style="width: 50%; margin-left: -90px;" id="musica"></audio>`
            $("#img").remove();
            $("#nomeDaMusica").remove();
            $("#musica").remove();
            $(".Reproduzir .Musica").append(img)
            $(".Reproduzir .Musica").append(nomeDaMusica)
            $(".Reproduzir .Controle").append(musica)
        })
        $(".amor-de-fim-de-noite").click(function(){
            img = `<img src="/img/artistas/Orochi/AmorDeFimDeNoite-Orochi.jfif" height="90%" style="margin: 6px" id="img">`
            nomeDaMusica = `<div id="nomeDaMusica"><h2 style="margin: 6px; color: white;">Amor de fim de noite</h2><h3 style="margin: 6px; color: white;">Orochi</h3></div>`
            musica = `<audio src="musicas/Pose do rodo/5 - Vida louca.mp3" controls style="width: 50%; margin-left: -90px;" id="musica"></audio>`
            $("#img").remove();
            $("#nomeDaMusica").remove();
            $("#musica").remove();
            $(".Reproduzir .Musica").append(img)
            $(".Reproduzir .Musica").append(nomeDaMusica)
            $(".Reproduzir .Controle").append(musica)
        })
                                        // Poesia
        $(".poesia2").click(function(){
            img = `<img src="/img/artistas/PoesiaArcustica/Poesia2.jfif" height="90%" style="margin: 6px" id="img">`
            nomeDaMusica = `<div id="nomeDaMusica"><h2 style="margin: 6px; color: white;">Poesia arcustica 2</h2><h3 style="margin: 6px; color: white;">pineapple</h3></div>`
            musica = `<audio src="musicas/PoesiaArcustica/PoesiaAcústica2-SobreNós.mp3" controls style="width: 50%; margin-left: -90px;" id="musica"></audio>`
            $("#img").remove();
            $("#nomeDaMusica").remove();
            $("#musica").remove();
            $(".Reproduzir .Musica").append(img)
            $(".Reproduzir .Musica").append(nomeDaMusica)
            $(".Reproduzir .Controle").append(musica)
        })
        $(".poesia6").click(function(){
            img = `<img src="/img/artistas/PoesiaArcustica/Poesia6.jfif" height="90%" style="margin: 6px" id="img">`
            nomeDaMusica = `<div id="nomeDaMusica"><h2 style="margin: 6px; color: white;">Poesia arcustica 6</h2><h3 style="margin: 6px; color: white;">pineapple</h3></div>`
            musica = `<audio src="musicas/PoesiaArcustica/PoesiaAcústica6-EraUmaVez.mp3" controls style="width: 50%; margin-left: -90px;" id="musica"></audio>`
            $("#img").remove();
            $("#nomeDaMusica").remove();
            $("#musica").remove();
            $(".Reproduzir .Musica").append(img)
            $(".Reproduzir .Musica").append(nomeDaMusica)
            $(".Reproduzir .Controle").append(musica)
        })
        $(".poesia7").click(function(){
            img = `<img src="img/artistas/PoesiaArcustica/Poesia7.jfif" height="90%" style="margin: 6px" id="img">`
            nomeDaMusica = `<div id="nomeDaMusica"><h2 style="margin: 6px; color: white;">Poesia arcustica 7</h2><h3 style="margin: 6px; color: white;">pineapple</h3></div>`
            musica = `<audio src="musicas/PoesiaArcustica/PoesiaAcustica7-CeuAzul.mp3" controls style="width: 50%; margin-left: -90px;" id="musica"></audio>`
            $("#img").remove();
            $("#nomeDaMusica").remove();
            $("#musica").remove();
            $(".Reproduzir .Musica").append(img)
            $(".Reproduzir .Musica").append(nomeDaMusica)
            $(".Reproduzir .Controle").append(musica)
        })
        $(".poesia9").click(function(){
            img = `<img src="/img/artistas/PoesiaArcustica/Poesia9.jfif" height="90%" style="margin: 6px" id="img">`
            nomeDaMusica = `<div id="nomeDaMusica"><h2 style="margin: 6px; color: white;">Poesia arcustica 9</h2><h3 style="margin: 6px; color: white;">pineapple</h3></div>`
            musica = `<audio src="musicas/PoesiaArcustica/PoesiaAcústica9-MelhorForma.mp3" controls style="width: 50%; margin-left: -90px;" id="musica"></audio>`
            $("#img").remove();
            $("#nomeDaMusica").remove();
            $("#musica").remove();
            $(".Reproduzir .Musica").append(img)
            $(".Reproduzir .Musica").append(nomeDaMusica)
            $(".Reproduzir .Controle").append(musica)
        })
        $(".poesia12").click(function(){
            img = `<img src="/img/artistas/PoesiaArcustica/Poesia12.jfif" height="90%" style="margin: 6px" id="img">`
            nomeDaMusica = `<div id="nomeDaMusica"><h2 style="margin: 6px; color: white;">Poesia arcustica 12</h2><h3 style="margin: 6px; color: white;">pineapple</h3></div>`
            musica = `<audio src="musicas/PoesiaArcustica/PoesiaAcústica12-PraSempre.mp3" controls style="width: 50%; margin-left: -90px;" id="musica"></audio>`
            $("#img").remove();
            $("#nomeDaMusica").remove();
            $("#musica").remove();
            $(".Reproduzir .Musica").append(img)
            $(".Reproduzir .Musica").append(nomeDaMusica)
            $(".Reproduzir .Controle").append(musica)
        })
    }
});
