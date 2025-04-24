const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const captionText = document.getElementById("caption");
const closeBtn = document.getElementById("closeBtn");

const pictures = [
  {
    img: '../../images/gallery/cutest shit.jpg',
    desc: 'nắm tay omg'
  },
  {
    img: './chup vgo.jpg',
    desc: 'nắm tay omg'
  },
  {
    img: './chup vgo 2.jpg',
    desc: 'nắm tay omg'
  },
  {
    img: './chup vgo 3.jpg',
    desc: 'nắm tay omg'
  },
]

function loadImages() {
  const gallery = document.getElementById('gallery')
  pictures.forEach(element => {
    const newImg = document.createElement('img')
    newImg.src = element.img;
    newImg.alt = 'picture';
    gallery.append(newImg)
  });
  
}



document.querySelectorAll(".gallery img").forEach(img => {
  img.addEventListener("click", () => {
    modal.style.display = "block";
    modalImg.src = img.src;
    captionText.innerText = img.alt;
  });
});

closeBtn.onclick = () => {
  modal.style.display = "none";
};

window.onclick = (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};
