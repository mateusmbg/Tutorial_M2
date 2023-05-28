$(document).ready(function () {
    // Seleciona o elemento com o ID "texto-animado" usando o jQuery

    var texto = $('#textoAnimado').text(); // Obtém o texto original do elemento
    $('#textoAnimado').empty(); // Remove o texto original do elemento

    var index = 0; // Variável para rastrear a posição atual no texto
    var delay = 100; // Tempo de atraso entre cada caractere (em milissegundos)

    function digitarTexto() {

        // Verifica se ainda há caracteres para adicionar
        if (index < texto.length) {

            // Adiciona o próximo caractere ao elemento
            $('#textoAnimado').append(texto.charAt(index));

            index++; // Incrementa a posição atual no texto

            // Define um atraso para chamar a função digitarTexto() novamente
            setTimeout(digitarTexto, delay);
        }
    }

    // Inicia a animação de digitação
    digitarTexto();
});

$(document).ready(function () {
    $(window).scroll(function () {
        var scrollPosition = $(this).scrollTop();
        var targetElement = $('#animacaoScroll');
        var targetOffset = targetElement.offset().top;
        var windowHeight = $(window).height();

        if (scrollPosition > targetOffset - windowHeight + 200) {
            targetElement.animate({ opacity: 1 }, 600);
        }
    });
});
