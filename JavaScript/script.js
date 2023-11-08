


// Diese Datei ist das Hauptstück der Website. Bitte NUR mit Absprache mit Lonnie bearbeiten!!!!!









var loading = document.createElement("img");
loading.id = "loading";
loading.src = "/Fotos/loading.gif";
loading.style = "height: 200px; width: 200px; background-color: black; position: fixed; top: calc(50% - 50px); left: calc(50% - 50px); z-index: 1000;";
document.addEventListener("DOMContentLoaded", () => {
    document.body.appendChild(loading);
    $("body").append("<div id='navidiv'></div>");
    $("body").append("<div id='uebernewsletter'></div>");
    $("#uebernewsletter").load("/HTML/newsletter.html");
    $("#navidiv").load("/HTML/Navi.html");
    //document.style = document.style + "body>*:not(#loading) {filter: blur(3em);}";
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
                if (!localStorage.getItem("emailsubscription"))
                    modalOpen();
                    //setInterval(modalOpen(), 60000);
            }, 600000)
            if (localStorage.getItem("token") != undefined && localStorage.getItem("token") != "" && localStorage.getItem("token") != null) {
                $("a[href='HTML/Login.html']").parent("li").css("display", "none");
                $("a[href='../HTML/Login.html']").paren("li").css("display", "none");
                $("a[href='Login.html']").parent("li").css("display", "none");
                $("a[href='HTML/Register.html']").parent("li").css("display", "none");
                $("a[href='../HTML/Register.html']").parent("li").css("display", "none");
                $("a[href='Register.html']").parent("li").css("display", "none");
            }
            $("button[type='submit']").on("click", () => {
                $.ajax({
                    method: "POST",
                    url: "https://lonn90.uber.space/aaseecoinbackend/newsletter",
                    contentType: 'application/json',
                    dataType: 'json',
                    data: JSON.stringify({
                        email: $(".newsletter-form").children("input").val(),
                    }),
                    success: (data) => {
                        modalClose();
                        localStorage.setItem("emailsubscription", "banane"); 
                    },
                    error: (error) => {
                        alert(error.responseJSON.error);
                    }
                })
            })
            $("#contact-submit").on("click", () => {
                $.ajax({
                    method: "POST",
                    url: "https://lonn90.uber.space/aaseecoinbackend/kontakt",
                    contentType: 'application/json',
                    dataType: 'json',
                    data: JSON.stringify({
                        Vorname: $("#contact-fname").val(),
                        Nachname: $("#contact-lname").val(),
                        Email: $("#contact-email").val(),
                        Nachricht: $("#contact-subject").val(),
                    }),
                    success: (data) => {
                        $("#contact-submit-form").html("<h1>Vielen Dank für Ihre Nachricht</h1><br><br><br><br><br><br><p>Wir werden uns so schnell wie möglich bei Ihnen melden.</p><br><br><br><br><p>Mit freundlichen Grüßen</p><br><br><p>Ihr Aaseecoin Team</p>")
                    },
                    error: (error) => {
                        alert(error.responseJSON.error);
                    }
                })
            })
                
            /*$( ".change" ).on("click", function() {
                if( $( "body" ).hasClass( "dark" )) {
                    $( "body" ).removeClass( "dark" );
                    $( ".change" ).text( "Light Mode" );
                } else {
                    $( "body" ).addClass( "dark" );
                    $( ".change" ).text( "Dark Mode" );
                }
            }); Funktioniert nicht*/
            $("#menubutton").click(() => {
                if ($("#menuklein").children("ul").css("display") == "none") {
                    $("#menuklein").children("ul").css("display", "flex");
                    $("#menuklein").css("height", "100%");
                } else {
                    $("#menuklein").children("ul").css("display", "none");
                    $("#menuklein").css("height", "60px");
                }
            })
        }
    }, 100);
});