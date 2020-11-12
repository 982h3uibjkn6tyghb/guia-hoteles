$(function() {
    $("[data-toggle='tooltip']").tooltip();
    $("[data-toggle='popover']").popover();
    $('.carousel').carousel({
        interval: 500
    });

    $('#contacto').on('show.bs.modal', function(e) {
        console.log('el modal se esta mostrando');

        $('#contactoBtn').removeClass('btn-outline-success');
        $('#contactoBtn').addClass('btn-primary');
        $('#contactoBtn').prop('disabled', true);

    });
    $('#contacto').on('shows.bs.modal', function(e) {
        console.log('el modal mostro');
    });
    $('#contacto').on('hide.bs.modal', function(e) {
        console.log('el modal se esta ocultando');
    });
    $('#contacto').on('hidden.bs.modal', function(e) {
        console.log('el modal se oculto');
    });

});