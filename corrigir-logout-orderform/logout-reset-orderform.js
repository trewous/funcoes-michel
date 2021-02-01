// CMS
// Problema: Quando o usuário logado faz logout, os dados do checkout permanecem (email, CPF, etc)
// O script substitui o logout padrão da Vtex por um que reseta os dados de Usuário no Orderform
// Garantindo que caso ocorra um outro login, o sistema pegue os novos dados e coloque no checkout.

$(document).ready(function(){
    $('.os-account').on('click', '.vtex-modal__confirmation .bg-action-primary div',  function(event){
        event.stopPropagation();
        event.preventDefault();
        var orderFormID = vtexjs.checkout.orderFormId;
        var urlAnonimo = "/checkout/changeToAnonymousUser/" + orderFormID;
        fetch(urlAnonimo)
            .then(window.location = "/no-cache/user/logout")
    })
});