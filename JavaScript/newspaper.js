const newsletterBtn = document.querySelector(".newsletter-btn");
const newsletterBtnClose = document.querySelector(".newsletter-close-btn");
const newsletter = document.querySelector(".newsletter");


//event listener
newsletterBtn.addEventListener("click", modalOpen)
newsletterBtnClose.addEventListener("click", modalOpen)

//function

function modalOpen(){
    newsletter.classList.add("active");
    newsletterBtn.classList.add("active");
    newsletterBtn.parentElement.classList.remove("paddingwith");
};

function modalClose(){
    newsletter.classList.remove("active");
    newsletterBtn.classList.remove("active");
    newsletterBtn.parentElement.classList.add("paddingwith");

};