const modal = document.getElementById("modal");
const captionText = document.getElementById("caption");
const closeBtn = document.getElementById("closeBtn");


const pictures = [
  {
    img: 'chup vgo',
    desc: 'đm lúc đứng đây nhé, t ngại vcutttt lại còn ôm mặt đm sợ ai đi qua chỉ chỉ kia là áo 12i1 bạn nào kia uwaaaaa :> nhma thsu t quý ảnh này vcl dù 2 đứa cringe vl :)))))',
    type: 'img'
  },
  {
    img: 'chup vgo 2',
    desc: 'nắm tay omg',
    type: 'img'
  },
  {
    img: 'chup vgo 3',
    desc: 'nắm tay omg',
    type: 'img'
  },
  {
    img: 'chup vgo 4',
    desc: 'nắm tay omg',
    type: 'img'
  },
  {
    img: 'chup vgo 5',
    desc: 'nắm tay omg',
    type: 'img'
  },
  {
    img: 'chup vgo 6',
    desc: 'nắm tay omg',
    type: 'img'
  },
  {
    img: 'chup vgo 7',
    desc: 'nắm tay omg',
    type: 'img'
  },
  {
    img: 'cong vien',
    desc: 'nắm tay omg',
    type: 'img'
  },
  {
    img: 'first dateeeeee',
    desc: 'nắm tay omg',
    type: 'img'
  },
  {
    img: 'hit tho',
    desc: 'nắm tay omg',
    type: 'img'
  },
  {
    img: 'harmonica',
    desc: 'nắm tay omg',
    type: 'vid'
  },
  {
    img: 'chum dau',
    desc: 'nắm tay omg',
    type: 'img'
  },
  {
    img: 'xem phim',
    desc: 'đi xem phimmm',
    type: 'vid'
  },
  {
    img: 'cutest shit',
    desc: 'nắm tay omg',
    type: 'img'
  },
  {
    img: 'buoc toc',
    desc: 'nắm tay omg',
    type: 'img'
  },
  {
    img: 'tran nha',
    desc: 'nắm tay omg',
    type: 'img'
  },
  {
    img: 'ngo ngan',
    desc: 'nắm tay omg',
    type: 'img'
  },
  {
    img: 'us when cat',
    desc: 'nắm tay omg',
    type: 'img'
  },
  {
    img: 'yolo',
    desc: 'nắm tay omg',
    type: 'img'
  },
  {
    img: 'holy moly',
    desc: 'nắm tay omg',
    type: 'img'
  },
  {
    img: 'ga lang',
    desc: 'nắm tay omg',
    type: 'img'
  },
  {
    img: 'bo ho',
    desc: 'nắm tay omg',
    type: 'vid'
  },
  {
    img: 'cafe 2',
    desc: 'nắm tay omg',
    type: 'vid'
  },
  {
    img: 'cafe',
    desc: 'nắm tay omg',
    type: 'vid'
  },
  {
    img: 'am',
    desc: 'nắm tay omg',
    type: 'img'
  },
  {
    img: 'khue',
    desc: 'nắm tay omg',
    type: 'img'
  },
  {
    img: 'bulul',
    desc: 'nắm tay omg',
    type: 'vid'
  },
  {
    img: 'blep',
    desc: 'nắm tay omg',
    type: 'img'
  },
  {
    img: 'selfie',
    desc: 'nắm tay omg',
    type: 'img'
  },
  {
    img: 'am lai xe',
    desc: 'nắm tay omg',
    type: 'img'
  },
  {
    img: 'nha guong',
    desc: 'nắm tay omg',
    type: 'vid'
  },
]

function loadImages() {
  const gallery = document.getElementById('gallery')

  pictures.forEach(element => {
    if (element.type === 'img') {
      const newImg = document.createElement('img')
      newImg.classList.add('content', 'img')
      newImg.src = `../../images/gallery/${element.img}.jpg`;
      newImg.alt = element.desc;
      gallery.append(newImg)
    } else if (element.type === 'vid') {
      const newVid = document.createElement('video')
      const source = document.createElement('source')
      newVid.classList.add('content', 'vid')
      newVid.alt = element.desc;
      newVid.append(source)
      newVid.muted = true;
      newVid.controls = true;
      newVid.autoplay = true;
      newVid.loop = 'true'
      source.src = `../../images/gallery/${element.img}.mp4`;
      
      gallery.append(newVid)
    }
  });
  addModal();
}

function addModal() {
document.querySelectorAll(".content").forEach(img => {
  img.addEventListener("click", () => {
    
    modal.style.display = "block";
    const modalContent = img.cloneNode(true);
    modalContent.classList.add('modal-content')
    modal.append(modalContent)
    const caption = document.createElement('div')
    caption.innerText = img.alt;
    caption.classList.add('caption')
    modal.append(caption)
    
  });
});
}



window.onclick = (event) => {
  if (event.target === modal) {
    modal.innerHTML=''
    modal.style.display = "none";
    
  }
};
