// Assignment 6: jQuery. Arlan Narushev, IT-2513

// All code runs after the page is fully loaded
$(document).ready(function () {

  //  Task 0: Setup 
  console.log("jQuery is ready!");
  $("#jquery-status").text("jQuery is ready!");


  //  Task 1: Selectors & CSS 

  // Greeting depends on the time of day (.text puts plain text)
  let hour = new Date().getHours();
  let greeting;
  if (hour < 12) {
    greeting = "Good morning!";
  } else if (hour < 18) {
    greeting = "Good afternoon!";
  } else {
    greeting = "Good evening!";
  }
  $("#greeting").text(greeting); // ID selector

  // Headlines contain <b> tags, so we use .html()
  let headlines = [
    "IT student at <b>Astana IT University</b>",
    "Future <b>software developer</b>",
    "I like building <b>useful tools</b>"
  ];
  let headlineIndex = 0;
  $("#headline").html(headlines[headlineIndex]);

  $("#headline-btn").click(function () {
    headlineIndex++;
    if (headlineIndex === headlines.length) {
      headlineIndex = 0; // after the last headline start again
    }
    $("#headline").html(headlines[headlineIndex]);
  });

  // Themes: .css() changes the colours of the selected elements
  $("#dark-btn").click(function () {
    $("body").css({ "background-color": "#121715", "color": "#e3ebe7" }); // tag selector
    $(".card").css("background-color", "#1c2420");                        // class selector
  });

  $("#light-btn").click(function () {
    $("body").css({ "background-color": "#eef2f0", "color": "#1e2a26" });
    $(".card").css("background-color", "#ffffff");
  });


  //  Task 2: Visibility Methods 
  $("#hide-btn").click(function () {
    $("#fun-facts").hide("slow");
  });

  $("#show-btn").click(function () {
    $("#fun-facts").show("slow");
  });

  $("#toggle-btn").click(function () {
    $("#fun-facts").toggle("slow");
  });


  //  Task 3: Fade Methods 
  // ".gallery img" = all images inside the gallery
  $("#fadein-btn").click(function () {
    $(".gallery img").fadeIn(800);
  });

  $("#fadeout-btn").click(function () {
    $(".gallery img").fadeOut(800);
  });

  $("#fadetoggle-btn").click(function () {
    $(".gallery img").fadeToggle(800);
  });


  //  Task 4: Slide Methods 
  // $(this) = the clicked heading, .next() = the text block right after it
  $(".fav-title").click(function () {
    $(this).next().slideToggle();
  });

  $("#open-btn").click(function () {
    $(".fav-text").slideDown();
  });

  $("#close-btn").click(function () {
    $(".fav-text").slideUp();
  });


  //  Task 5: Add & Remove Elements 
  $("#add-btn").click(function () {
    let skill = $("#skill-input").val().trim(); // .trim() removes spaces at the start and end
    if (skill === "") {
      $("#skill-error").text("Please type a skill first.");
      return; // stop here, an empty skill is not added
    }
    $("#skill-error").text("");
    $("#skill-list").append("<li>" + skill + "</li>"); // add to the end
    $("#skill-input").val("");                          // clear the input
  });

  $("#prepend-btn").click(function () {
    let skill = $("#skill-input").val().trim();
    if (skill === "") {
      $("#skill-error").text("Please type a skill first.");
      return;
    }
    $("#skill-error").text("");
    $("#skill-list").prepend("<li>" + skill + "</li>"); // add to the start
    $("#skill-input").val("");
  });

  $("#remove-btn").click(function () {
    $("#skill-list li").last().remove(); // remove the last skill
  });


  //  Task 6: Modifying Attributes 
  let githubLink = "https://github.com/EEw33/";
  let universityLink = "https://astanait.edu.kz";

  $("#link-btn").click(function () {
    if ($("#social-link").attr("href") === githubLink) { // .attr("href") reads the link
      $("#social-link").attr("href", universityLink);    // .attr("href", value) changes it
      $("#social-link").text("My University");
    } else {
      $("#social-link").attr("href", githubLink);
      $("#social-link").text("My GitHub");
    }
    $("#link-info").text("Current link: " + $("#social-link").attr("href"));
  });


  //  Task 7: Form Interaction 
  // keyup runs every time the user releases a key
  $("#name-input").keyup(function () {
    $("#name-preview").text($(this).val());
  });

  $("#email-input").keyup(function () {
    $("#email-preview").text($(this).val());
  });


  //  Task 8: Basic Animation 
  let barsFull = false;

  $("#animate-btn").click(function () {
    if (barsFull === false) {
      $("#bar-html").animate({ width: "85%" }, 1000);
      $("#bar-js").animate({ width: "65%" }, 1000);
      $("#bar-jquery").animate({ width: "60%" }, 1000);
      $("#bar-csharp").animate({ width: "50%" }, 1000);
      barsFull = true;
    } else {
      $(".bar-fill").animate({ width: "0%" }, 1000); // back to zero
      barsFull = false;
    }
  });

});
