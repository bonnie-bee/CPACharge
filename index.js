windowSize();

// windows.scroll(function (event) {

//     console.log($(this).scrollTop());
// });



//check if mobile size window
//if mobile size on scroll up, navbar shrinks
//on scroll down, navbar grows

function windowSize() {
    const view = $(window);

    if (view.width() < 570) {
        console.log("Help me, I'm little");
        navBarSize();
    } else {
        console.log("I'm fine");
        return;
    }

}


function navBarSize() {
    const view = $(window);
    const navBar = $(".navbar");
    const navCon = $(".navContainer");
    const logo = $("#logo");
    const phone = $(".navbar-text");
    const navBtn = $("#navBtn");
    const toggle = $(".navbar-toggler-icon");
    let top = 0;
    //detect scroll action
    view.scroll(function (event) {
        let here = $(this).scrollTop();
        if (here > top) {
            console.log("scrolled up")
            // navBar.css("height", "12%");
            // logo.css("height","70%");
            // logo.css("width","70%");
            // phone.css("display", "inline");
            // navBtn.css("display", "inline");
        } else {
            console.log("scrolled down");
            // navBar.css("height", "17%");
            // logo.css("height","90%");
            // logo.css("width","90%");
            // phone.css("display", "none");
            // navBtn.css("display", "none");


        };
        top = here;
    })
    //scroll up then navbar shrinks
    //change navbar height
    //change logo size
    //hide phone and button
    //scroll down then navbar grows
    //change navbar height
    //change logo size
    //show phone and button
}