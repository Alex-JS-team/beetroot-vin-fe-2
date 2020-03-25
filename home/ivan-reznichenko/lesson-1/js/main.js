function changeLang() {
    let langform = document.querySelector("#langform");
    let eng = langform[0];
    let ua = langform[1];
    eng.addEventListener("click", () => {
        location.href='eng.html';
    });
    ua.addEventListener("click", () => {
        location.href='index.html';
    })
}
changeLang();
$(window).scroll(function(){   
    if($(this).scrollTop() > 350){       
        $("#to__top").fadeIn();
    } else {
        $("#to__top").fadeOut();
    }
})

$("#to__top").click(function(event){
    event.preventDefault();
    $("html, body").animate({scrollTop: 0}, 1000);
    
})