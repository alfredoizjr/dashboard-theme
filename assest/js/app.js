
$(document).ready(function () {

    // handle preloading 
    setTimeout(() => {
        $('#loading').css('display', 'none');
    }, 500);


    // aside menu show and hide 
    $('#btn-menu').on('click', function () {
        $('#sidebar').toggle('fast');
        // change icon
        if ($('#icon-menu').hasClass('fa-times')) {
            $('#icon-menu').removeClass('fa-times');
        } else {
            $('#icon-menu').addClass('fa-times');
        }
    });
});