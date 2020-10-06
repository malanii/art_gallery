$(document).ready(function () {
    let docWidth = $('body').width(),
        slidesWidth = $('#imgs').width(),
        $images = $('#imgs');
    $(document).on('mousemove', function (e) {
        let mouseX = e.pageX,
            offset = mouseX / docWidth * slidesWidth - mouseX / 1.12;
        $images.css({
            '-webkit-transform': 'translate3d(' + -offset + 'px,0,0)',
            'transform': 'translate3d(' + -offset + 'px,0,0)'
        });
    });
});
