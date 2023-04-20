var blurin = document.createElement("div");
blurin.id = "blurin";
blurin.style = "position: fixed; top: 0; left: 0; width: 100%; height: 100%; background-color: rgba(0, 0, 0, 0.5); z-index: 999; display: none; filter: blur(3)";
var loading = document.createElement("img");
loading.id = "loading";
loading.src = "/Fotos/loading.gif";
loading.style = "height: 200px; width: 200px; background-color: black; position: fixed; top: calc(50% - 50px); left: calc(50% - 50px); z-index: 1000;";
document.addEventListener("DOMContentLoaded", () => {
    document.body.appendChild(loading);
    document.body.appendChild(blurin);
    $("body").append("<div id='navidiv'></div>");
    $("#navidiv").load("/HTML/Navi.html");
    var newsletterBtn = $(".newsletter-btn");
    var newsletterBtnClose = $(".newsletter-close-btn");
    var newsletter = $(".newsletter");
    var navidiv = $("#navidiv");
var interaveltest = setInterval(() => {
        newsletterBtn = $(".newsletter-btn");
        newsletterBtnClose = $(".newsletter-close-btn");
        newsletter = $(".newsletter");
        navidiv = $("#navidiv");
        if (newsletterBtn.length != 0 && newsletterBtn != null && newsletterBtnClose.length != 0 && newsletterBtnClose != null && $(newsletterBtn).parents("li") != null) {
            clearInterval(interaveltest);
            document.getElementById("loading").remove();
            //document.getElementById("blurin").remove();
            newsletterBtn = $(".newsletter-btn");
            newsletterBtnClose = $(".newsletter-close-btn");
            newsletter = $(".newsletter");
            navidiv = $("#navidiv");

            $("a[href='" + window.location.pathname + "']").parents("li").addClass("active");
            $("a[href='" + window.location.pathname + "']").parents("li").removeClass("paddingwith");
            //event listener
            $(newsletterBtn).on("click", modalOpen)
            $(newsletterBtnClose).on("click", modalClose)

            //function

            function modalOpen() {
                $(newsletter).addClass("active");
                $(newsletterBtn).addClass("active");
                $(newsletterBtn).parents("li").removeClass("paddingwith");
            };

            function modalClose() {
                $(newsletter).removeClass("active");
                $(newsletterBtn).removeClass("active");
                $(newsletterBtn).parents("li").addClass("paddingwith");

            };
            //modalOpen();
            setTimeout(() => {
                modalOpen()
                setInterval(modalOpen(), 60000);
            }, 60000)
            if (localStorage.getItem("token") != undefined && localStorage.getItem("token") != "" && localStorage.getItem("token") != null) {
                $("a[href='HTML/Login.html']").parent("li").css("display", "none");
                $("a[href='../HTML/Login.html']").parent("li").css("display", "none");
                $("a[href='Login.html']").parent("li").css("display", "none");
                $("a[href='HTML/Register.html']").parent("li").css("display", "none");
                $("a[href='../HTML/Register.html']").parent("li").css("display", "none");
                $("a[href='Register.html']").parent("li").css("display", "none");
            }
            $("button[type='submit']").on("click", () => {
                $.ajax({
                    method: "POST",
                    url: "https://uberspace.lonnie-schemann.de/aaseecoinbackend/newsletter",
                    contentType: 'application/json',
                    dataType: 'json',
                    data: JSON.stringify({
                        email: $(".newsletter-form").children("input").val(),
                    }),
                    success: (data) => {
                        alert(data.message);
                    },
                    error: (error) => {
                        alert(error.responseJSON.error);
                    }
                })
            })
        }
    }, 1000);
});