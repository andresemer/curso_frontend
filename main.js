$(document).ready(function(){

    $('form button').on('click', function(e){
        e.preventDefault();

        const novaTarefa = $('#tarefa').val();
        const novaLista = $('<li class="lista-tarefa"></li>');

        $(`<h3>${novaTarefa}<h3>`).appendTo(novaLista);

        $(novaLista).appendTo('ul');
        $('#tarefa').val('');
        
        
    });

    $('.espaco-tarefas').on('click', 'li', function() {
        $(this).toggleClass('active');
    });

});