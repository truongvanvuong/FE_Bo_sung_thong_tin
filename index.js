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
function handleNav() {
  const nav = document.querySelector(".nav-responsive");
  nav.classList.add("nav-show");
}
function closeNav() {
  const nav = document.querySelector(".nav-responsive");
  nav.classList.remove("nav-show");
}
let companyImages = [];

function previewMultipleImages(event, containerId) {
  const input = event.target;
  const container = document.getElementById(containerId);

  // Thêm ảnh mới vào mảng, tối đa 2 ảnh
  const files = Array.from(input.files);
  companyImages = companyImages.concat(files).slice(0, 2);

  renderPreview(container, companyImages, containerId);

  // Reset input để có thể chọn tiếp cùng 1 file nếu muốn
  input.value = "";
}

function renderPreview(container, images, containerId) {
  container.innerHTML = "";
  images.forEach((file, idx) => {
    const reader = new FileReader();
    reader.onload = function (e) {
      // Tạo khung preview
      const wrapper = document.createElement("div");
      wrapper.className = "relative inline-block mr-2";

      // Nút xóa
      const btn = document.createElement("button");
      btn.className =
        "absolute top-1 right-0 size-8 rounded-lg bg-[#3D3D3DCC] flex items-center justify-center cursor-pointer";
      btn.innerHTML = `<img src="./assets/close-circle.svg" alt="Close" class="w-4 h-4" />`;
      btn.onclick = function () {
        companyImages.splice(idx, 1);
        renderPreview(container, companyImages, containerId);
      };

      // Ảnh
      const figure = document.createElement("figure");
      figure.className = "size-[80px] rounded-[10px]";
      const img = document.createElement("img");
      img.src = e.target.result;
      img.className = "w-full h-full object-cover rounded";
      img.alt = "Ảnh";
      figure.appendChild(img);

      wrapper.appendChild(btn);
      wrapper.appendChild(figure);
      container.appendChild(wrapper);
    };
    reader.readAsDataURL(file);
  });
}
