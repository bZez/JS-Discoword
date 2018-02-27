$(function(){
    //POISTION
    word = "BZEZ";
    word_code = '';
    for (var i = 0; i < word.length; i++){
        word_code+=(word.charCodeAt(i))+",";
        $('.word').append('<h1 class="bg-light m-auto rounded letter" style="width: '+ ((100/word.length)-2) +'%;">A</h1>');
    }
    $('.letter').click(function () {
        letter = $(this).html();
        code = letter.charCodeAt(0);
        A = String.fromCharCode(65);
        next = String.fromCharCode(code+1);
        if(code >= 90) {
            $(this).html(A);
        } else {
            $(this).html(next);
        }
    });
    $('#check').click(function () {
        check_code = '';
        word_to_check = $('.letter').each(function() {
            check_code += $(this).html().charCodeAt(0)+',';
        });
        if (check_code === word_code) {
            $('.word').html('<h1 class=" col-12 text-center p-5 rounded text-white">BIEN JOUÉ !</h1>');
            $('#block').removeClass('bg-light').addClass('bg-success');
        } else {
            $('.word').html('<h1 class="col-12 text-center rounded text-white">ERREUR</h1>');
            $('#block').removeClass('bg-light').addClass('bg-danger');
            $('.check').html('<span class="align-middle">REJOUER</span>');
            $('.check').attr({'id':'replay'});
            $('#replay').click(function() {
                location.reload();
            });
        }
    });
});