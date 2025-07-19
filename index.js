// Ẩn/hiện form theo checkbox
function showForm(type) {
  document.getElementById("organization").checked = type === "company";
  document.getElementById("personal").checked = type === "personal";
  document.getElementById("companyForm").style.display =
    type === "company" ? "flex" : "none";
  document.getElementById("personalForm").style.display =
    type === "personal" ? "flex" : "none";
}
window.onload = function () {
  showForm("company");
};
