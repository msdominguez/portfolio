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

showProjectsPage = () => {
  $("#art").hide();
  $("#projects").insertAfter($("nav"));
  $("#projects").show();
  $("#toggle").removeClass("art");
};

showArtPage = () => {
  $("#projects").hide();
  $("#art").insertAfter($("nav"));
  $("#art").show();
  $("#toggle").addClass("art");
};

toggleProjects = () => {
  $("#toggle").hasClass("art") ? showProjectsPage() : showArtPage();
};

$(window).scroll(() => {
  $(window).scrollTop() === 0 && $("nav").removeClass("nav-sticky");
  $(window).scrollTop() !== 0 && $("nav").addClass("nav-sticky");
});
