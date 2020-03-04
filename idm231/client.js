let zods = [
    "Cap",
    "Sag",
    "Sco",
    "Lib",
    "Vir",
    "Leo",
    "Can",
    "Gem",
    "Tau",
    "Ari",
    "Pis",
    "Aqu"
];

let userBirth;
let zod;

function isValidDate(d) {
    return d instanceof Date && !isNaN(d);
}

function storeBirthInput() {
    userBirth = new Date($("#birth-input").val());
}

function showDetailInput() {
    if (isValidDate(userBirth)) {
        $("input").removeClass("input-error");
        $("#error").html("");

        let userMonth = userBirth.getMonth() + 1;
        let userDay = userBirth.getUTCDate();

        zod = dateToZodiac(userMonth, userDay);

        $.ajax({
            type: "GET",
            url: "/idm231/detail.html",
            async: true,
            success: function(msg) {
                populatePage(zod);
                $("#content").html(msg);
            }
        });
    } else {
        $("#error").html("Invalid date");
        $("input").addClass("input-error");
    }
}

function openModal() {
    $("#modal").removeClass("hidden");
}

function closeModal() {
    $("#modal").addClass("hidden");
}

$(window).click(function(e) {
    if (e.target == $("#modal")[0]) {
        closeModal();
    }
});

$(".token").click(function() {
    zod = $(this).attr("id");

    $.ajax({
        type: "GET",
        url: "/idm231/detail.html",
        async: true,
        success: function(msg) {
            populatePage(zod);
            $("#content").html(msg);
        }
    });
});

function populatePage(zod) {
    $.ajax({
        type: "GET",
        url: "/getZod",
        dataType: "json",
        async: true,
        success: function(msg) {
            msg.zods.map(val => {
                if (val.shortname === zod) {
                    $("#audio-src").attr("src", val.song);

                    $("#description").html(val.description);
                    $("#detail-title").html(val.artist);
                    $("#birthdate").html(`Born: ${val.dob}`);
                    $("#detail-img").attr("src", val.img);
                    $("#caption").html(`${val.title} • ${val.range}`);
                    $("#song-link").attr("href", val.songlink);
                    $("#song-title").html(val.songtitle);

                    $("#audio").append(
                        `<source id="audio-src" src="${val.songlink}" type="audio/mpeg">`
                    );

                    $(".content-right").removeClass("hidden");
                }
            });
        }
    });
}

function dateToZodiac(whichMonth, whichDayOfMonth) {
    if (
        (whichMonth === 12 && whichDayOfMonth >= 22) ||
        (whichMonth === 1 && whichDayOfMonth <= 19)
    ) {
        AstroSign = "Cap";
    } else if (
        (whichMonth === 11 && whichDayOfMonth >= 22) ||
        (whichMonth === 12 && whichDayOfMonth <= 21)
    ) {
        AstroSign = "Sag";
    } else if (
        (whichMonth === 10 && whichDayOfMonth >= 24) ||
        (whichMonth === 11 && whichDayOfMonth <= 21)
    ) {
        AstroSign = "Sco";
    } else if (
        (whichMonth === 9 && whichDayOfMonth >= 23) ||
        (whichMonth === 10 && whichDayOfMonth <= 23)
    ) {
        AstroSign = "Lib";
    } else if (
        (whichMonth === 8 && whichDayOfMonth >= 23) ||
        (whichMonth === 9 && whichDayOfMonth <= 22)
    ) {
        AstroSign = "Vir";
    } else if (
        (whichMonth === 7 && whichDayOfMonth >= 23) ||
        (whichMonth === 8 && whichDayOfMonth <= 22)
    ) {
        AstroSign = "Leo";
    } else if (
        (whichMonth === 6 && whichDayOfMonth >= 22) ||
        (whichMonth === 7 && whichDayOfMonth <= 22)
    ) {
        AstroSign = "Can";
    } else if (
        (whichMonth === 5 && whichDayOfMonth >= 21) ||
        (whichMonth === 6 && whichDayOfMonth <= 21)
    ) {
        AstroSign = "Gem";
    } else if (
        (whichMonth === 4 && whichDayOfMonth >= 20) ||
        (whichMonth === 5 && whichDayOfMonth <= 20)
    ) {
        AstroSign = "Tau";
    } else if (
        (whichMonth === 3 && whichDayOfMonth >= 21) ||
        (whichMonth === 4 && whichDayOfMonth <= 19)
    ) {
        AstroSign = "Ari";
    } else if (
        (whichMonth === 2 && whichDayOfMonth >= 19) ||
        (whichMonth === 3 && whichDayOfMonth <= 20)
    ) {
        AstroSign = "Pis";
    } else if (
        (whichMonth === 1 && whichDayOfMonth >= 20) ||
        (whichMonth === 2 && whichDayOfMonth <= 18)
    ) {
        AstroSign = "Aqu";
    }

    return AstroSign;
}