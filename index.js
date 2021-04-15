var firebaseConfig = {
    apiKey: "AIzaSyAKNNSByd6dTSurAodlIdDZ6c8i5NX89f8",
    authDomain: "mariasdominguez-d084a.firebaseapp.com",
    databaseURL: "https://mariasdominguez-d084a.firebaseio.com",
    projectId: "mariasdominguez-d084a",
    storageBucket: "mariasdominguez-d084a.appspot.com",
    messagingSenderId: "381117452410",
    appId: "1:381117452410:web:a51b43c71e4d91427aebc3",
    measurementId: "G-9L7V00YCKZ",
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

function showProjectsPage() {
    $("#art").hide();
    $("#projects").show();
    $(".toggle-knob").removeClass("after");
}

function showArtPage() {
    $("#projects").hide();
    $("#art").show();
    $(".toggle-knob").addClass("after");
}

function onClickToggle() {
    if ($(".toggle-knob").hasClass("after")) {
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
    $("nav").addClass("nav-sticky");
    if ($(window).scrollTop() < 50) {
        $("nav").removeClass("nav-sticky");
    }
});