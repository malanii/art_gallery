$(document).ready(function () {
    let docWidth = $('body').width(),
        slidesWidth = $('#imgs').width(),
        // rangeX = slidesWidth - docWidth,
        $images = $('#imgs');
    // console.log(docWidth);

    $(document).on('mousemove', function (e) {
        let mouseX = e.pageX,
            offset = mouseX / docWidth * slidesWidth - mouseX / 1.149;

        $images.css({
            '-webkit-transform': 'translate3d(' + -offset + 'px,0,0)',
            'transform': 'translate3d(' + -offset + 'px,0,0)'
        });

        // console.log(mouseX)
    });

});
