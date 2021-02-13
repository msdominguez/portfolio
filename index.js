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