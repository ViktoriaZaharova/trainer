$(document).ready(function() {
    $('.panel-title').on('click', function () {
       $(this).parents('.panel').toggleClass('open');
    });

    $('.btn-mobile').click(function () {
        $('.navigation').slideToggle();
    });

    $('.btn-close').click(function () {
        $('.navigation').fadeOut();
    });

    // модальные окна (несколько)
    $(document).ready(function () {
        var overlay = $('.overlay');
        var open_modal = $('.open_modal');
        var close = $('.modal__close, .overlay');
        var modal = $('.modal__div');

        open_modal.click(function (event) {
            event.preventDefault();
            var div = $(this).attr('href');
            overlay.fadeIn(400,
                function () {
                    $(div)
                        .css('display', 'flex')
                        .animate({
                            opacity: 1,
                            top: '50%'
                        }, 200);
                });
        });

        close.click(function () {
            modal
                .animate({
                        opacity: 0,
                        top: '45%'
                    }, 200,
                    function () {
                        $(this).css('display', 'none');
                        overlay.fadeOut(400);
                    }
                );
        });
    });
//end

    $(".form").submit(function () {
        $.ajax({
            type: "POST",
            url: "mail.php",
            data: $(this).serialize()
        }).done(function () {
            $(this).find("input").val("");
            $('.overlay').fadeIn();
            $('#modal-thanks').css('display', 'flex')
                .animate({
                    opacity: 1,
                    top: '50%'
                }, 200);
            $(".form").trigger("reset");
        });
        return false;
    });
});

$('.reviews__content-video').slick({
    slidesToShow: 3,
    prevArrow: '<button type="button" class="slick-prev"><img src="img/arrow-right.png" alt=""></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="img/arrow-right.png" alt=""></button>',
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 670,
            settings: {
                slidesToShow: 2,
                arrows: false,
                autoplay: true,
                autoplaySpeed: 2000,
            }
        },
        {
            breakpoint: 570,
            settings: {
                slidesToShow: 1,
                arrows: false,
            }
        }
    ]
});

$('.reviews__content-slider').slick({
    slidesToShow: 4,
    arrows: false,
    dots: true,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
            }
        }
    ]
});
