function clo(id) {
  id.style.display = "none";
}
function more(id) {
  id.style.display = "block";
}
function onTopClick(flag) {
  if (flag == 1) window.location.hash = "#i1";
  else if (flag == 2) window.location.hash = "#i2";
  else if (flag == 3) window.location.hash = "#i3";
  else if (flag == 4) {
    $("#vote_modal").modal("show");
    const dateText = document.querySelector("#date");
    const currentDate = new Date();
    const voteDate = 1639756800000;
    const days = parseInt((voteDate - currentDate) / 86400000);
    const hours = parseInt((voteDate - currentDate) / 3600000 - days * 24);
    dateText.textContent = `${days}天${hours}小時`;
  }
}
