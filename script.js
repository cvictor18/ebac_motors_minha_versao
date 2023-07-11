$(document).ready(function() {

    //código que depende do jQuery
    
    $('#carousel').slick({
        autoplay: true,
        autoplaySpeed: 2500,
        pauseOnHover: false,
    })

    const hamburguer = $('header input[type=checkbox]')
    hamburguer.on('click', function() {
        if (hamburguer.is(':checked')) {
            $('i').text('close')
            $('nav').slideDown()
        } else {
            $('i').text('menu')
            $('nav').slideUp()
        }    
    })

    const inputVeiculoDeInteresse = $('#interesse')
    $('a').on('click', function(){
        if (this.id == 'fusca') {
            inputVeiculoDeInteresse.val('VW Fusca')
        } else if (this.id == 'moto') {
            inputVeiculoDeInteresse.val('Moto BMW')
        } else if (this.id == 'carro') {
            inputVeiculoDeInteresse.val('Carro BMW')
        }
    })

    const iptNome = $('#nome')
    const iptEmail = $('#email')
    $('form').on('submit', function(e){
        e.preventDefault()
        if(iptNome.val().length == 0) {
            if ($('#nome-invalido').length > 0) {} else {
                $('<p class="campo-invalido" id="nome-invalido">Por favor, insira seu nome</p>').insertAfter(iptNome)
            }
        } else {
            $('#nome-invalido').remove()
        }
        if (iptEmail.val().length == 0) {
            if ($('#email-invalido').length > 0) {} else {
                $('<p class="campo-invalido" id="email-invalido">Por favor, insira seu e-mail</p>').insertAfter(iptEmail)
            }
        } else {
            $('#email-invalido').remove()
        }
        if (iptNome.val().length > 0 && iptEmail.val().length > 0) {
            alert('Mensagem enviada com sucesso!')
            iptNome.val('')
            iptEmail.val('')
        }
    })
})