// @author Michel Silva <micheljanura@hotmail.com>

//Inserir span no label do nome da cor
//Util quando deseja mostrar o nome das cores e ter um controle maior sobre o texto
//independentemente do label
//Ex: Projecta

$('.item-dimension-Cor span').find('label').each (function(idx, ele) {
    var antigoLabel = $(ele).context.innerHTML;
    let novoLabel = $('<span></span>').text(antigoLabel);
    $(ele).empty().append(novoLabel);
});