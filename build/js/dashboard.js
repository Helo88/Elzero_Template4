window.onload = function () {
  console.log(document.querySelector("#nav-menu li:first-child").style.color);
  // document.querySelector(
  //   "#nav-menu li:first-child"
  // ).sytle.;
};

function HandleSearchForm(that) {
  console.log(that.value);
  if (that.value) {
    document.getElementById("searchReset").style.visibility = "visible";
  } else {
    document.getElementById("searchReset").style.visibility = "hidden";
  }
}
function handleResetSearchForm() {
  console.log("sjsjsj", document.getElementById("searchForm").value);
  document.getElementById("searchFormField").value = "";
}
