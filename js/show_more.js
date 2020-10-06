if ($('.img-item').length > 3) {
    $('.img-item:gt(2)').hide();
    $('.view-more-block').show();
}

$('.view-more-block').on('click', function () {

    $('.img-item:gt(2)').toggle();

    let docWidth = $('body').width(),
        slidesWidth = $('#imgs').width(),
        $images = $('#imgs');
    $(document).on('mousemove', function (e) {
        let mouseX = e.pageX,
            offset = mouseX / docWidth * slidesWidth - mouseX / 0.9;
        $images.css({
            '-webkit-transform': 'translate3d(' + -offset + 'px,0,0)',
            'transform': 'translate3d(' + -offset + 'px,0,0)'
        });

    });
    $('.view-more-block').hide();
});
