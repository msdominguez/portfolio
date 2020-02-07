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

function isValidDate(d) {
    return d instanceof Date && !isNaN(d);
}

function showDetail() {
    let userBirth = new Date($("#birth-input").val());

    if (isValidDate(userBirth)) {
        let userMonth = userBirth.getMonth() + 1;
        let userDay = userBirth.getUTCDate();

        let zod = dateToZodiac(userMonth, userDay);

        $.ajax({
            type: "GET",
            url: "/idm231/detail",
            success: function(msg) {
                populatePage(zod);
                $("#content").html(msg);
            }
        });
    }
}

function populatePage(zod) {
    $.ajax({
        type: "GET",
        url: "/getZod",
        dataType: "json",
        success: function(msg) {
            msg.zods.map(val => {
                if (val.shortname === zod) {
                    $("#description").html(val.description);
                    $("#detail-title").html(val.artist);
                    $("#birthdate").html(val.dob);
                    $("#detail-img").attr("src", val.img);
                    $("#caption").html(`${val.title} - ${val.range}`);
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