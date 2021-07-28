//nav open button
$('.nav-button').on('click', function (e) {
    $('html').addClass('open-nav show-overlay');
    e.preventDefault;
});

//click to close
$('.overlay, .mobile-nav .close-nav').on('click', function () {
    $('html').removeClass('open-nav show-overlay')
});

$('.close-nav').on('click', function () {
    $('html').removeClass('open-nav show-overlay')
})

