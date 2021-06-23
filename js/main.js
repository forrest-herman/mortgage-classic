// $(document).ready(function () {
//     $(".carousel")
//         .carousel({
//             interval: 5000,
//         })
//         .on("slide.bs.carousel", function (e) {
//             var nextH = $(e.relatedTarget).height()
//             $(this).find("div.active").parent().animate({ height: nextH }, 10)
//         })
// })
window.onscroll = function () {
    scrollFunction()
}

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("navbar").classList.add("shrink")
        //document.getElementById("logo").style.width = "160px"
    } else {
        // document.getElementById("logo").style.width = "190px"
        document.getElementById("navbar").classList.remove("shrink")
    }
}
