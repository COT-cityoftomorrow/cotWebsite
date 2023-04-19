$(document).on("load", () => {
    $("body").append("<div id='navidiv'></div>");
    $("#navidiv").load("/HTML/Navi.html");
    const newsletterBtn = document.querySelector(".newsletter-btn");
    const newsletterBtnClose = document.querySelector(".newsletter-close-btn");
    const newsletter = document.querySelector(".newsletter");


    //event listener
    newsletterBtn.addEventListener("click", modalOpen)
    newsletterBtnClose.addEventListener("click", modalClose)

    //function

    function modalOpen() {
        newsletter.classList.add("active");
        newsletterBtn.classList.add("active");
        newsletterBtn.parentElement.classList.remove("paddingwith");
    };

    function modalClose() {
        newsletter.classList.remove("active");
        newsletterBtn.classList.remove("active");
        newsletterBtn.parentElement.classList.add("paddingwith");

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
});