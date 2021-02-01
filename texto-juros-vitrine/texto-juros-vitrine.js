// @author Michel Silva <micheljanura@hotmail.com>
//Colocar c/ ou s/ juros na vitrine
//Ex: Kasamar, resolvi inserir os dados como metatags no template, para ficar mais objetivo
//Usado no caso de controles "maxinstallment" de qntd de parcelas e valores

$('.product').each(function () {
    var metaTagPor = $(this).find('meta[name="valor-por-calc"]').attr('content');
    var metaTagQntdParc = $(this).find('meta[name="qntd-parcelas-calc"]').attr('content');
    var metaTagValorParc = $(this).find('meta[name="valor-parcelas-calc"]').attr('content');
    if (metaTagPor && metaTagQntdParc && metaTagValorParc){
        //retirar o "R$ ", pontos e vírgulas e depois inserir
        //novamente as duas casas decimais, no padrão do javascript
        metaTagPor = metaTagPor.substr(3).replace(/[,.]/g, "");
        metaTagPor = (parseFloat(metaTagPor) / 100).toFixed(2);
        metaTagValorParc = metaTagValorParc.substr(3).replace(/[,.]/g, "");
        metaTagValorParc = (parseFloat(metaTagValorParc) / 100).toFixed(2);
        var parcelamentoTotal = Math.floor(metaTagQntdParc * metaTagValorParc);
        if (parcelamentoTotal > metaTagPor){
            $(this).find('.com-ou-sem').text("c/ juros");
        } else {
            $(this).find('.com-ou-sem').text("s/ juros");
        }
    }
})