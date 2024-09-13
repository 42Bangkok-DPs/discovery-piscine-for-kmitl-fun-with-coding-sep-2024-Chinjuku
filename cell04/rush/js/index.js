const box = document.getElementById("box");
const image = document.getElementById("showcers");
function showCertificate1(data) {
  image.src = data;
  image.style.height = "600px";
  box.style.height = "600px";
  box.style.transition = ".5s";
  image.style.transition = ".5s";
}
function showActivities(data) {
  image.src = data;
  image.style.height = "400px";
  image.style.width = "auto";
  image.style.borderRadius = "40px"
  box.style.height = "600px";
  box.style.transition = ".5s";
  image.style.transition = ".5s";
}

function showText(element) {
  const textElement = element.nextElementSibling;
  // เพิ่มตัวแปร isShown เพื่อเก็บสถานะ
  const isShown = textElement.classList.contains("hidden");
  // ตรวจสอบสถานะก่อนที่จะสลับ class
  {
    if (isShown) {
      textElement.classList.remove("hidden");
    } else {
      textElement.classList.add("hidden");
    }
  }
}


const dropdownMenu = document.getElementById('dropdown-menu');
let isOpen = false;
const toggleMenu = () => {
  if (isOpen) {
    dropdownMenu.style.height = "0";
  } else {
    dropdownMenu.style.height = dropdownMenu.scrollHeight + "px";
  }
  isOpen = !isOpen;
};

const closeMenu = () => {
  dropdownMenu.style.height = "0";
  isOpen = false;
};