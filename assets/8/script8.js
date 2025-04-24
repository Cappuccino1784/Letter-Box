const question = document.getElementById('question');
const nextButton = document.getElementById('next-btn')
const container = document.getElementById('quiz-container')
const options = document.getElementById('options')
const comment = document.getElementById('comment')

let score = 0;

let currentQuestion = 0;

const questions = [
  {
    question: "Ngày sinh của AM là vào tháng nào?",
    options: ["Tháng 1", "Tháng 4", "Tháng 2", "Tháng 12"],
    correct: 2,
    comment: ":> lại bảo ko nhớ"
  },
  {
    question: "Màu sắc AM thích nhất là gì?",
    options: ["💚", "💙", "💛", "💜"],
    correct: 3,
    comment: "ê ko có trái tim màu pastel m ạ :))))))"
  },
  {
    question: "AM thích uống gì nhất vào buổi sáng?",
    options: ["Cà phê", "Trà", "Sữa", "Nước lọc", "Trà sữa", "còn ai nx 💦💦💦"],
    correct: 0,
    comment: "t có có phase tu cà phê như nước :> ực ực ực"
  },
  {
    question: "AM thường đi ngủ lúc mấy giờ?",
    options: ["Trước 10h", "10-11h", "11-12h", "Sau 12h"],
    correct: 2,
    comment: "thinking bout you shawty 🤫🤫🤫"
  },
  {
    question: "AM thích làm gì vào thứ 7?",
    options: ["Ngủ", "Đi chơi với Khueeeeeee", "Nấu ăn", "Đá bóng", "Chơi với Mochi"],
    correct: 1,
    comment: "..."
  },
  {
    question: "AM thuận tay nào?",
    options: ["Tay phải", "Tay trái", "Cả hai", "Không biết ;-;"],
    correct: 0,
    comment: "nắm r mà còn ko biết"
  },
  {
    question: "AM cao bao nhiêu?",
    options: ["< 1m50", "1m50 - 1m60", "1m60 - 1m70", "> 1m70"],
    correct: 2,
    comment: "knee sniffer"
  },
  {
    question: "Sở thích của AM là gì?",
    options: ["Chơi thể thao", "Nghe nhạc", "Vẽ furry 🐺", "Code", "Nch với Khueeeeeeeee", "All of the above"],
    correct: 5,
    comment: "my hobby is u bbg"
  },
  {
    question: "AM là con thứ mấy trong gia đình?",
    options: ["Con cả", "Con giữa", "Con út", "Con một"],
    correct: 0,
    comment: ";-; quá buồn"
  },
  {
    question: "AM thích đi đâu nhất?",
    options: ["Biển", "Leo núi", "Singapore", "Về quê", "Inside you 🤫🤫🥴🥴"],
    correct: 4,
    comment: "quá rõ rồi 😳"
  },
  {
    question: "AM thích mùa nào nhất?",
    options: ["Xuân", "Hạ", "Thu", "Đông"],
    correct: 3,
    comment: "lạnh quá xin 1 cái ôm dmdmm cringe vcut nah bro"
  },
  {
    question: "Món ăn yêu thích của AM là gì?",
    options: ["Phở", "Spaghetti", "Fried Chicken", "Bún cá cay"],
    correct: 0,
    comment: "bululululul"
  },
  {
    question: "Khi rảnh rỗi, AM thường làm gì?",
    options: ["Lướt reels", "Tập thể dục", "Nghĩ xem nên nhắn Khuê cgi nhma thôi vì ko muốn làm phiền nhma AM cũng rất muốn gặp arrghhh", "Ngủ"],
    correct: 2,
    comment: "👉👈"
  },
  {
    question: "AM thường dậy lúc mấy giờ?",
    options: ["Trước 6h", "6h - 7h", "7h - 8h", "Sau 8h"],
    correct: 1,
    comment: "morning wood"
  },
  {
    question: "Bạn hay dùng mạng xã hội nào nhất?",
    options: ["Facebook", "Instagram", "TikTok", "YouTube", "Threads", "Reddit"],
    correct: 1,
    comment: "ko thì nhắn m kiểu gì"
  },
  {
    question: "AM yêu thích môn học nào nhất?",
    options: ["Toán", "Văn", "Lý", "Tiếng Anh", "Mỹ thuật", "Sinh học"],
    correct: 3,
    comment: "u speak engrish?"
  },
  {
    question: "AM thích kiểu nhạc nào?",
    options: ["Chillstep", "Pop", "EDM", "Lo-fi", "J-pop", "All of the above"],
    correct: 5,
    comment: "gì cx nghe ý tạm nham vcl, tất cả trừ nhạc việt"
  },
  {
    question: "AM thuộc cung hoàng đạo nào?",
    options: ["Bạch Dương", "Bảo Bình", "Cự Giải", "Thiên Bình", "Ma Kết"],
    correct: 1,
    comment: "uwu bảo bình uwu"
  },
  {
    question: "AM có nuôi thú cưng không?",
    options: ["Có, chó", "Có, mèo", "Có, Mochiiiiiiii", "Ko, chó ko đc có pet", "Không có (😭😭😭)"],
    correct: 2,
    comment: "Mochi is da baby 🐶"
  },
  {
    question: "AM thuộc kiểu người nào?",
    options: ["Hướng nội", "Hướng ngoại", "Cân bằng", "Tùy tâm trạng"],
    correct: 3,
    comment: ":> flexible ig nhma hướng nội nhiều hơn"
  },
  {
    question: "AM tuổi gì?",
    options: ["Chóa arf arf", "Lợn ỉn ỉn", "Gà tok tok", "Đà điểu 🥚"],
    correct: 0,
    comment: "đầu chó đuôi lợn"
  },
  {
    question: "Love language của AM là gì?",
    options: ["Quality time (love being with her)", "Physical touch (imma touch u)", "Gift giving", "Words of affirmaion (i loveeeee)", "Acts of service"],
    correct: 1,
    comment: "ewwwwww nắm tay ewwwww"
  },
  {
    question: "AM có ny chưa?",
    options: ["Có rồiiiii 😘😘😘", "Still single baby 😥", "Situationship", "đ biết gọi là gì 😔😔😔 (i have feelings for u my nigga)"],
    correct: 3,
    comment: "yes the one reading"
  },
  {
    question: "Nếu AM có nguyên 1 ngày dành cho bạn, cả 2 sẽ làm gì?",
    options: ["Đi dateee (perfect)", "Đi chơi pickleball (im a pickle boy)", "Đi tắm biển (boing boing)", "Còn làm gì nx?😉😏"],
    correct: 3,
    comment: "muahahahahahaha"
  },
  {
    question: "AM thích điểm nào ở bạn TMK nhất?",
    options: ["Cười rất đẹp (so cute)", "Tính cách (siêu cute quan tâm funni omg arf arf)", "Bạn có xe máy (😲😲😲 vroom vroom)", "Bạn có nhiều ng bạn supporting mqh này (actually so cute)", "Những lúc bạn nhìn AM", "Những lúc bạn nhắn cho AM", "Những lúc bạn quay mặt đi vì ngại", "Những lúc bạn gửi voicenote", "Lúc bạn nắm tay AM", "click if you are speechless"],
    correct: 9,
    comment: "<3"
  }
];



function createButton(question, number, answer) {
  let newButton = document.createElement('button');
  newButton.innerText = answer;
  newButton.id = `${question}-${number}`
  newButton.classList.add("option")

  return newButton;
}

function startQuiz() {
  if (currentQuestion == questions.length) {
    nextButton.style.display = 'block'
    nextButton.innerText = 'Retry';
    question.innerText =`Bạn đã đúng ${score}/${questions.length} câuuuuu 🎉🎉🎉`
    options.innerHTML = '';
    nextButton.onclick = reset;
    return;
  }

  comment.innerText = ''
  options.innerHTML = ''
  nextButton.style.display = 'none'
  question.innerText = `Câu ${currentQuestion + 1}: ${questions[currentQuestion].question}`;
  nextButton.innerText = 'Next'

  makeQuestion(currentQuestion)

  if (currentQuestion == 11) {
    
    const correctAnswer = document.querySelector('.yes');
    correctAnswer.classList.remove('yes');
    correctAnswer.classList.add('no');

    let optionList = document.getElementsByClassName('no');
    let optionListArray = Array.from(optionList);
    optionListArray.forEach(element => {
      element.removeEventListener('click', reveal)
      element.removeEventListener('click', correct)
      element.addEventListener('click', troll)
    });
  }

  currentQuestion++;
}

function troll() {
  let optionList = document.getElementsByClassName('no');
  let optionListArray = Array.from(optionList);
  optionListArray.forEach(element => {
    element.classList.add('wrong')
    element.disabled = true;
  });
  const trollOption = createButton(12, 4, "ăn m đấy 🤤")
  trollOption.addEventListener('click', correct)
  trollOption.classList.add('yes')
  options.append(trollOption);
    
}

function makeQuestion(currentQuestion) {
  for (i = 0; i < questions[currentQuestion].options.length; i++) {
    const newOption = createButton(currentQuestion, i, questions[currentQuestion].options[i]);
    
    if (i == questions[currentQuestion].correct) {
      newOption.classList.add('yes')
      newOption.addEventListener('click', correct)
    } else {
      newOption.classList.add('no')
      newOption.addEventListener('click', reveal)
    }
    options.append(newOption);
  }
}

function correct() {
  score++;
  reveal();
}

function reveal() {
  const questionList = document.getElementsByClassName('option')
  const m = Array.from(questionList)
  m.forEach(element => {
    element.disabled = true;
  });

  const list = document.getElementsByClassName('no')
  const wrongAnswers = Array.from(list)
  wrongAnswers.forEach(element => {
    element.classList.add('wrong')
  });
  document.querySelector('.yes').classList.add('correct')
  nextButton.style.display = 'block';

  comment.innerText = questions[currentQuestion-1].comment
}

function reset() {
  comment.innerText = ''
  score = 0;
  currentQuestion = 0;
  nextButton.onclick = startQuiz;
  startQuiz();
}

function leave() {
  window.location.href = "../../index.html"
}
