$(document).ready(function () {
    // Seleciona o elemento com o ID "texto-animado" usando o jQuery
    $('#textoAnimado').empty(); // Remove o texto original do elemento
    $.ajax({
        url: './js/textoAnimado.txt',
        type: 'GET',
        dataType: 'text',
        async: true,
        success: (data) => {
            var index = 0; // Variável para rastrear a posição atual no texto
            var delay = 100; // Tempo de atraso entre cada caractere (em milissegundos)

            function digitarTexto() {

                // Verifica se ainda há caracteres para adicionar
                console.log("oi")
                if (index < data.length) {

                    // Adiciona o próximo caractere ao elemento
                    $('#textoAnimado').append(data.charAt(index));

                    index++; // Incrementa a posição atual no texto

                    // Define um atraso para chamar a função digitarTexto() novamente
                    setTimeout(digitarTexto, delay);
                }
            }

            // Inicia a animação de digitação
            digitarTexto();
        }
    })


});

$(document).ready(function () {
    $(window).scroll(function () {
        var scrollPosition = $(this).scrollTop();
        var targetElement = $('#animacaoScroll');
        var targetOffset = targetElement.offset().top;
        var windowHeight = $(window).height();

        if (scrollPosition > targetOffset - windowHeight + 400) {
            targetElement.animate({ opacity: 1 }, 600);
        }
    });
});
