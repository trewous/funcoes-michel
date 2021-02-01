// @author Michel Silva <micheljanura@hotmail.com>
//CMS possui um bug que mostra o ID do ponto de retirada no calculo do frete
//na página de produto

$(document).ajaxStop(function() {
    $('.freight-values').find('td').each (function(idx, ele) {
        var coiso = $(ele).context.innerHTML.match(/\((.*)\)/);
          if(coiso){
            var newcoiso = $(ele).context.innerHTML.replace(/ *\([^)]*\) */g, "");
            $(ele)[0].innerHTML = newcoiso;
          }
      });
})