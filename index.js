function onLoad() {
    showProjectsPage();
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

    $('#projects').show();
    $('.main-nav li h3:nth-last-child(1)').addClass('active');
}