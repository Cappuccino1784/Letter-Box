const modal = document.getElementById("modal");
const captionText = document.getElementById("caption");
const closeBtn = document.getElementById("closeBtn");


const pictures = [
  {
    img: 'chup vgo',
    desc: 'đm lúc đứng đây nhé, t ngại vcutttt lại còn ôm mặt đm sợ ai đi qua chỉ chỉ kia là áo 12i1 đi với bạn nào kia uwaaaaa :> nhma thsu t quý ảnh này vcl dù 2 đứa cringe vl :))))) cam on bạn hmi vì đã chụp ảnh và ko thấy 2 đứa kinh tởm quá bỏ chạy về mất :> nhìn bcuoi vcl nhma rất rất cute và t thấy đáng công sức quá :) so worth it',
    type: 'img'
  },
  {
    img: 'chup vgo 2',
    desc: 'ĐMM CRINGEEEEEEEEEEE',
    type: 'img'
  },
  {
    img: 'chup vgo 3',
    desc: 'đ nhìn ddc cười đm tình huống gi đây',
    type: 'img'
  },
  {
    img: 'chup vgo 4',
    desc: 'LẠI CÒN THUMBS UP Ạ THUAAAAAAAAAAAAA',
    type: 'img'
  },
  {
    img: 'chup vgo 5',
    desc: 'đ nhìn thẳng vào mắt đc luôn :> làm t nhớ đến hôm đầu tiên tặng milo haha sao nhanh vậy :3',
    type: 'img'
  },
  {
    img: 'chup vgo 6',
    desc: 'cool ngầu yessirrr sugoiiiiiii',
    type: 'img'
  },
  {
    img: 'chup vgo 7',
    desc: ':> sau còn cầm tay nữa cơ hơ hơ ai biết sau cái bắt tay này mình còn cầm tay kiểu khác 😘😘',
    type: 'img'
  },
  {
    img: 'cong vien',
    desc: 'công viên thống nhấtttttt lâu lắm r ko ra ý cgiac nostalgic quá mà m còn bảo m làm skien ở đây ạ thề đi lung tung với m làm t kiểu thoải mái vãi bro, chỉ chỉ trỏ trỏ khuê ơi nhìn kìa đmm, trẻ con hồn nhiên vcl 😭😭😭 i love this shit bro ahhhhhhhhh',
    type: 'img'
  },
  {
    img: 'first dateeeeee',
    desc: 'safe spot của 2 đứa, comfort space :> t yêu chỗ này quá đm chill vcl usual hangout place ạ omg bro t muốn 1 cái sofa so baddddd, biết cgi t cx muốn ko :3 hmm?',
    type: 'img'
  },
  {
    img: 'hit tho',
    desc: 'nhìn nắng kìa đẹp vcl 😭 toại nguyện r',
    type: 'img'
  },
  {
    img: 'harmonica',
    desc: ':))))))))))) đcm cái này gay quá trò gì đây broooooo',
    type: 'vid'
  },
  {
    img: 'chum dau',
    desc: 'hello ngớ ngẩn :>',
    type: 'img'
  },
  {
    img: 'xem phim',
    desc: 'flowwww đm giờ t nhớ phim này r :) mèo argrgrhrg bro lúc đi vào circle k mua đồ đmmm t đ biết tsao nhma kỷ niệm vãi m ạ',
    type: 'vid'
  },
  {
    img: 'cutest shit',
    desc: 'omg bro arghhhhhhhhhhhhh m toàn làm như t có nhiều kinh nghiệm nắm tay với làm mấy cái này nhma lúc đấy tim đập vãi mà huhu mình tiến triển đến đây r đấy :3 thề lúc trước khi t gặp m t đã ko nghĩ gì nhiều, còn định từ chối :) nhma m đã cho t thấy là m rất là đáng để yêu :> đáng yêu đmmm nghĩ gì vậy, nhma its so worth it và t thực sự muốn mình đi đến đâu đó :) đi đâu ko biết, đi với m là đc <3',
    type: 'img'
  },
  {
    img: 'buoc toc',
    desc: ':3 uwu sướng quá đc gái nghịch tóc sống như vua r hô hô',
    type: 'img'
  },
  {
    img: 'tran nha',
    desc: 'trần nhà quán bánh cuốn bạn mẹ t đấy :))))))) m lấy máy bấm bấm đm lúc đấy 2 đứa ngại vcut ý :> đ biêt gì về nhau nhma sau nch thoải mái về lúc đi ăn thì cgiac nostalgic quá huhu kiểu ê nhớ hồi đầu mình bắt đầu date 2 đứa cringe với ngại đến mức nào ko :) kiểu t rất thích những khoảng khắc như thế đmm mỗi cái trần nhà mà m viết dài thế am đmm t schizo mẹ r thoi scroll ảnh khác đi 😊',
    type: 'img'
  },
  {
    img: 'ngo ngan',
    desc: 'phản ứng của t khi thấy khuê nắm tay (trụy tim)',
    type: 'img'
  },
  {
    img: 'us when cat',
    desc: 'omg bro cute vãiiiiiii t chỉ muốn nằm ườn ra với m như thế :> ngồi nch ý 😭😭😭 như 2 con mèo ngáo',
    type: 'img'
  },
  {
    img: 'yolo',
    desc: 'ê ảnh này funny vãi :))))) kiểu wassup am xong nhảy vào cuộc sống t :> nhma t ko có than phiền đâu t thấy t khá may mắn haha',
    type: 'img'
  },
  {
    img: 'holy moly',
    desc: 'mặt t lúc m gửi ảnh nay kiểu :000000000, đmmmmm kiểu, của t hết à? đmm xinh vãi ý mà t thích lúc m cười nhìn rất hạnh phúc dmdmmmm m cười đẹp lắm ý oh my dayssss thao niềng răng ra chắc t chết mẹ mất arghrghrgahrgahr',
    type: 'img'
  },
  {
    img: 'ga lang',
    desc: 'hello hình như đây là hôm đầu m chở t về ý :> omg bro ngớ người r',
    type: 'img'
  },
  {
    img: 'bo ho',
    desc: 'yoooo chill vcl m ạ ngồi ăn bmi ngắm hồ đm lãng mạn vl ahhhhhhhhh core memory ạ',
    type: 'vid'
  },
  {
    img: 'cafe 2',
    desc: 'hít thở omgggggg đây là cái hôm mình đến sớm quá xong đ có chỗ gay ass quá bro :> nhma ngồi dưới cx chill với cả có mèo',
    type: 'vid'
  },
  {
    img: 'cafe',
    desc: 'hôm cafe chơi game kinh dị này :))))))))) vui vãi m ạ :> t muốn đi thêm nx omg hôm nào tải thêm game mang máy đi chơi tiếp uwu với cả sướng vãi tầng 2 đ có 1 ai ý t thích mấy không gian riêng vcl',
    type: 'vid'
  },
  {
    img: 'am',
    desc: 'ú ù pickle boi',
    type: 'img'
  },
  {
    img: 'khue',
    desc: 'ú ù silly girl',
    type: 'img'
  },
  {
    img: 'bulul',
    desc: 'đmmmmm quỳ 2 gối ạ cringe cringe :> troll vcl, ở với m t toàn làm mấy trò ngu ngu hại danh tiếng dòng họ quá',
    type: 'vid'
  },
  {
    img: 'blep',
    desc: 'ngáo ảnh này tởm quá đmm t thấy bản thân t kinh hãi quá sao làm đc biểu cảm như vậy kms rn bro',
    type: 'img'
  },
  {
    img: 'selfie',
    desc: 'cuteeeeee quá cute m ý đm m đấy khuê ạ chụp quả ảnh kìa',
    type: 'img'
  },
  {
    img: 'am lai xe',
    desc: 'kinh ko ê t cgiac t lái xe giỏi hơn từ khi chơi với m :)))))) đmmm tại m hết đấy t đã biết đánh võng, trượt bách khoa t đua xe đêm m đã làm t dấn thân vào con đường tội ác',
    type: 'img'
  },
  {
    img: 'nha guong',
    desc: 'omg vuiii vcl 2 đứa chơi đuổi bắt trốn tìm trong đây ý :> ',
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
