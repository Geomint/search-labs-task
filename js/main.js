//nav open button
$('.nav-button').on('click', function () {
    $('html').addClass('open-nav show-overlay');
});

//click to close
$('.overlay, .mobile-nav').on('click', function () {
    $('html').removeClass('open-nav show-overlay')
});