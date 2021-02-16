function showProjectsPage() {
    $('#art').hide();
    $('#projects').show();
    $('.toggle-knob').removeClass('after');
}

function showArtPage() {
    $('#projects').hide();
    $('#art').show();
    $('.toggle-knob').addClass('after');
}

function onClickToggle() {
    if ($('.toggle-knob').hasClass('after')) {
        showProjectsPage();
    } else {
        showArtPage();
    }
}

// for css animations
window.addEventListener(
    "scroll",
    () => {
        document.body.style.setProperty(
            "--scroll",
            window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
        );
    },
    false
);

function smoothScroll(goTo) {
    $("html, body").animate({
            scrollTop: $(goTo).offset().top,
        },
        800
    );
}

$(window).scroll(function() {
    $('nav').addClass('nav-sticky');
    if ($(window).scrollTop() < 50) {
        $('nav').removeClass('nav-sticky');
    }
});