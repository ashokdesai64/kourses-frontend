import $ from 'jquery';

$(document).on('keyup', '.float-input', function () {
    if ($(this).val()) {
        $(this).parents('.ci-type').addClass('float-control');
    }
    else {
        $(this).parents('.ci-type').removeClass('float-control');
    }
});
$(".float-input").each(function () {
    if ($(this).val()) {
        $(this).parents('.ci-type').addClass('float-control');
    }
    else {
        $(this).parents('.ci-type').removeClass('float-control');
    }
});
$(document).on('focus', '.float-input', function () {
    $(this).parents('.custom-input-control').addClass('focus');
    $(this).closest('.custom-input-group').find('.custom-prepend').addClass('focus');
});
$(document).on('blur', '.float-input', function () {
    $(this).parents('.custom-input-control').removeClass('focus');
    $(this).closest('.custom-input-group').find('.custom-prepend').removeClass('focus');
});
$(document).on('click', '#gotoAccount', function () {
    $('#login-content').addClass('d-none');
    $('#create-content').removeClass('d-none');
});
$(document).on('click', '#gotoForgot', function () {
    $('#login-content').addClass('d-none');
    $('#forgot-content').removeClass('d-none');
});
$(document).on('click', '.gotoLogin', function () {
    $('#create-content').addClass('d-none');
    $('#forgot-content').addClass('d-none');
    $('#check_otp').addClass('d-none');
    $('#login-content').removeClass('d-none');
});
$(document).on('click', '#openSignUp', function () {
    $('#sign-modal').modal();
    $('#check_otp').addClass('d-none');
    $('#login-content').addClass('d-none');
    $('#create-content').removeClass('d-none');
});
$(document).on('click', '#openSignIn', function () {
    $('#sign-modal').modal();
    $('#check_otp').addClass('d-none');
    $('#create-content').addClass('d-none');
    $('#forgot-content').addClass('d-none');
    $('#login-content').removeClass('d-none');
});

$(document).on('keyup','#search_bar',function () {
    var check = ""
    $('#nocoursetitle').html('');
    var input, filter, div_full, subdiv,i, txtValue;
    input = document.getElementById('search_bar');
    filter = input.value.toUpperCase();
    div_full = document.getElementById("course_full");
    subdiv = div_full.getElementsByTagName('h2');
    for (i = 0; i < subdiv.length; i++) {
        txtValue = subdiv[i].textContent || subdiv[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            check = "";
            $(subdiv[i]).parent().parent().parent().css('display', 'block');
        } else {
            $(subdiv[i]).parent().parent().parent().css('display', 'none');
            check = i;
        }
    }
    if (check) {
        $('#nocoursetitle').html('<h2 class="text-center w-100">Courses Not Found</h2>');
    }
});



$(window).on('load', function () {
    var video = document.getElementById('my-video');
    if (video) {
        video.addEventListener('ended', function () {
            // $('#complete').click();
        });
    }
});

