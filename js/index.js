function onTopClick(flag) {
    if(flag==1){
        const i3 = document.querySelector("#i1");
        const height = i3.getBoundingClientRect().top + window.scrollY;
        window.scrollBy({
            left: 0,
            top: height,
            behavior: 'smooth',
        });
    }
    else if(flag==2){
        const i3 = document.querySelector("#i2");
        const height = i3.getBoundingClientRect().top + window.scrollY;
        window.scrollBy({
            left: 0,
            top: height,
            behavior: 'smooth',
        });
    }
    else if(flag==3){
        const i3 = document.querySelector("#i3");
        const height = i3.getBoundingClientRect().top + window.scrollY;
        window.scrollBy({
            left: 0,
            top: height,
            behavior: 'smooth',
        });
    }
    else if(flag==4){
        const i3 = document.querySelector("#i4");
        const height = i3.getBoundingClientRect().top + window.scrollY;
        window.scrollBy({
            left: 0,
            top: height,
            behavior: 'smooth',
        });
    }
}
function clo(id) {
    id.style.display = "none";
}
function more(id){
    id.style.display = "block";
}
function toTop(){
    var top = document.getElementById("view")
    document.documentElement.scrollTop=top.offsetTop
    window.pageYOffset=top.offsetTop
    document.body.scrollTop=top.offsetTop ;
}
    