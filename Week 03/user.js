$(document).ready(function () {

    // ---------- HAMBURGER MENU ----------
    const $navLinks = $("#navLinks");
    const $hamburger = $("#hamburgerBtn");

    // Toggle menu on small screens
    $hamburger.on("click", function () {
        $navLinks.toggleClass("open");
    });

    // Optional: when resizing to big screen, remove mobile class
    $(window).on("resize", function () {
        if ($(window).width() > 700) {
            $navLinks.removeClass("open");
        }
    });

    // ---------- IMAGE ANIMATION ----------

    // Two images (online URLs)
    const imgA = "https://t4.ftcdn.net/jpg/00/56/96/27/360_F_56962791_o8syVNM8Ojo19TxJhLy1JW6RPHOin2zS.jpg";
    const imgB = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjk9ZnVHLvlJKay80hXEPCBZpYpxPKD8oG3A&s";

    let toggleImage = false; // false → show B next, true → show A next
    let animating = false;   // prevent multiple simultaneous animations

    $("#animateBtn").on("click", function () {
        if (animating) return;           // ignore clicks while running
        animating = true;
        $("#animateBtn").prop("disabled", true);

        const $photo = $("#photo");

        // Ensure base styles
        $photo.css({
            position: "relative",
            left: "0px",
            width: "250px",
            height: "250px",
            opacity: 1
        });

        // Animation sequence
        $photo
            // 1) slide right
            .animate({ left: "+=200px" }, 800)
            // 2) grow
            .animate({ width: "400px", height: "400px" }, 800)
            // 3) swap image
            .queue(function (next) {
                if (!toggleImage) {
                    $photo.attr("src", imgB);
                } else {
                    $photo.attr("src", imgA);
                }
                toggleImage = !toggleImage;
                next();
            })
            // 4) fade + shrink
            .animate({ opacity: 0.3, width: "150px", height: "150px" }, 800)
            // 5) reset to original size + position
            .animate({
                left: "0px",
                width: "250px",
                height: "250px",
                opacity: 1
            }, 800, function () {
                // done
                animating = false;
                $("#animateBtn").prop("disabled", false);
            });
    });
});
