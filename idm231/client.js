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

// make zodiac json objects w all the data i need for ajax

function showDetail() {
    // get input from calendar picker
    // put into dateToZodiac
    // do a switch on zods w output of dateToZodiac
    // case X: replace title w zod info
    // $('#home').addClass('hidden');
    // $("#detail-title").html("json data..");
}

function dateToZodiac(whichMonth, whichDayOfMonth) {
    if (
        (whichMonth == 12 && whichDayOfMonth >= 22) ||
        (whichMonth == 1 && whichDayOfMonth <= 19)
    ) {
        AstroSign = "Cap";
    } else if (
        (whichMonth == 11 && whichDayOfMonth >= 22) ||
        (whichMonth == 12 && whichDayOfMonth <= 21)
    ) {
        AstroSign = "Sag";
    } else if (
        (whichMonth == 10 && whichDayOfMonth >= 24) ||
        (whichMonth == 11 && whichDayOfMonth <= 21)
    ) {
        AstroSign = "Sco";
    } else if (
        (whichMonth == 9 && whichDayOfMonth >= 23) ||
        (whichMonth == 10 && whichDayOfMonth <= 23)
    ) {
        AstroSign = "Lib";
    } else if (
        (whichMonth == 8 && whichDayOfMonth >= 23) ||
        (whichMonth == 9 && whichDayOfMonth <= 22)
    ) {
        AstroSign = "Vir";
    } else if (
        (whichMonth == 7 && whichDayOfMonth >= 23) ||
        (whichMonth == 8 && whichDayOfMonth <= 22)
    ) {
        AstroSign = "Leo";
    } else if (
        (whichMonth == 6 && whichDayOfMonth >= 22) ||
        (whichMonth == 7 && whichDayOfMonth <= 22)
    ) {
        AstroSign = "Can";
    } else if (
        (whichMonth == 5 && whichDayOfMonth >= 21) ||
        (whichMonth == 6 && whichDayOfMonth <= 21)
    ) {
        AstroSign = "Gem";
    } else if (
        (whichMonth == 4 && whichDayOfMonth >= 20) ||
        (whichMonth == 5 && whichDayOfMonth <= 20)
    ) {
        AstroSign = "Tau";
    } else if (
        (whichMonth == 3 && whichDayOfMonth >= 21) ||
        (whichMonth == 4 && whichDayOfMonth <= 19)
    ) {
        AstroSign = "Ari";
    } else if (
        (whichMonth == 2 && whichDayOfMonth >= 19) ||
        (whichMonth == 3 && whichDayOfMonth <= 20)
    ) {
        AstroSign = "Pis";
    } else if (
        (whichMonth == 1 && whichDayOfMonth >= 20) ||
        (whichMonth == 2 && whichDayOfMonth <= 18)
    ) {
        AstroSign = "Aqu";
    }

    return AstroSign;
}