// Smooth navigation

const links = document.querySelectorAll("nav a");

links.forEach(function(link) {

    link.addEventListener("click", function() {

        console.log("Navigation clicked");

    });

});
function showPhone() {
    document.getElementById("contact-info").innerHTML =
        "📱 0554152544";
}

function showEmail() {
    document.getElementById("contact-info").innerHTML =
        "📧halaaalzaila@gmail.com";
}