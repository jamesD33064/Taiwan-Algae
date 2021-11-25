function clo(id) {
    id.style.display = "none";
}
function more(id){
    id.style.display = "block";
}
function onTopClick(flag) {
    if(flag==1)
    window.location.hash = "#i1";
    else if(flag==2)
    window.location.hash = "#i2";
    else if(flag==3)
    window.location.hash = "#i3";
    else if(flag==4)
    window.location.hash = "#i4";
  }