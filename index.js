function onLoad() {
    showArtPage();
}

function showHomePage() {
    $('.page').hide();
    $('.main-nav li h3').removeClass('active');

    $('#home').show();
}

function showAboutPage() {
    $('.page').hide();
    $('.nav-link').removeClass('active');

    $('#about').show();
    $('.main-nav li h3:first').addClass('active');
}

function showWorkPage() {
    $('.page').hide();
    $('.nav-link').removeClass('active');

    $('#work').show();
    $('li h3:nth-child(1)').addClass('active');
}

function showProjectsPage() {
    $('.page').hide();
    $('.nav-link').removeClass('active');
    $('.toggle').removeClass('toggle-knob');

    $('#projects').show();
    $('.main-nav li h3:nth-last-child(1)').addClass('active');
    $('.dev-toggle').addClass('toggle-knob');
}

function showArtPage() {
    $('.page').hide();
    $('.dev-toggle').addClass('toggle');
    $('.nav-link').removeClass('active');
    $('.toggle').removeClass('toggle-knob');

    $('#art').show();
    $('.main-nav li h3:nth-last-child(1)').addClass('active'); // projects
    $('.art-toggle').addClass('toggle-knob');
}