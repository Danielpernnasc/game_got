if($('div#status').text()!='')
{
    alert($('div#status').text());
}
function myFunction() {
    alert("Essa página não é valida! Retorne a home e faça o login!");
    location.replace("/")
    
}
$(document).ready(function(){
    $("#btnsair").click(function(){
        window.location.href ='/sair';
    });

    $("#btn_suditos").click(function(){
        $('#msg').hide();
       $.ajax({
           url: '/suditos',
           method: 'get',
           success: function(data){
               $("#acoes").html(data);
           }
       });
    });

    $("#btn_pergaminhos").click(function(){
        $.ajax({
            url: '/pergaminhos',
            method: 'get',
            success: function(data){
                $("#acoes").html(data);

                clearTimeout(timerId);
                cronometro();
            }
        });
    });
});


var timerId = null;

function cronometro(){
            
    $('.tempo_restante').each(function(){
        var segundos = $(this).html();
        var segundos_atuais = parseInt(segundos) - 1;

        if(segundos_atuais < 0){
            window.location.href = '/jogo?msg=C';
        } else {
            $(this).html(segundos_atuais);
        }        
    });

    timerId = setTimeout('cronometro()', 1000);
}