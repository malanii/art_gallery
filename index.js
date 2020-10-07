if ($('.img-item').length > 3) {
    $('.img-item:gt(2)').hide();
    $('.view-more-block').show();
}
$(document).ready(function () {
    $(document).on('mousemove', function (e) {
        let mouseX = e.pageX,
            offset = mouseX / $('body').width() *  $('#imgs').width() - mouseX / 1.12;
        $('#imgs').css({
            '-webkit-transform': 'translate3d(' + -offset + 'px,0,0)',
            'transform': 'translate3d(' + -offset + 'px,0,0)'
        });
    });
});

$('.view-more-block').on('click', function () {
    $('.img-item:gt(2)').toggle();
    $('.view-more-block').hide();
});
