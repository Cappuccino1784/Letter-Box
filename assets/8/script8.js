const question = document.getElementById('question');
const nextButton = document.getElementById('next-btn')
const container = document.getElementById('quiz-container')
const options = document.getElementById('options')
let score = 0;

let currentQuestion = 0;

const questions = [
  {
    question: "Ngày sinh của AM là vào tháng nào?",
    options: ["Tháng 1", "Tháng 4", "Tháng 2", "Tháng 12"],
    correct: 2
  },
  {
    question: "Màu sắc AM thích nhất là gì?",
    options: ["💚", "💙", "💛", "💜"],
    correct: 3
  },
  {
    question: "AM thích uống gì nhất vào buổi sáng?",
    options: ["Cà phê", "Trà", "Sữa", "Nước lọc", "Trà sữa", "còn ai nx 💦💦💦"],
    correct: 0
  },
  {
    question: "AM thường đi ngủ lúc mấy giờ?",
    options: ["Trước 10h", "10-11h", "11-12h", "Sau 12h"],
    correct: 2
  },
  {
    question: "AM thích làm gì vào thứ 7?",
    options: ["Ngủ", "Đi chơi với Khueeeeeee", "Nấu ăn", "Đá bóng", "Chơi với Mochi"],
    correct: 1
  },
  {
    question: "AM thuận tay nào?",
    options: ["Tay phải", "Tay trái", "Cả hai", "Không biết ;-;"],
    correct: 0
  },
  {
    question: "AM cao bao nhiêu?",
    options: ["< 1m50", "1m50 - 1m60", "1m60 - 1m70", "> 1m70"],
    correct: 2
  },
  {
    question: "Sở thích của AM là gì?",
    options: ["Chơi thể thao", "Nghe nhạc", "Vẽ furry 🐺", "Code", "Nch với Khueeeeeeeee", "All of the above"],
    correct: 5
  },
  {
    question: "AM là con thứ mấy trong gia đình?",
    options: ["Con cả", "Con giữa", "Con út", "Con một"],
    correct: 0
  },
  {
    question: "AM thích đi đâu nhất?",
    options: ["Biển", "Leo núi", "Singapore", "Về quê", "Inside you 🤫🤫🥴🥴"],
    correct: 4
  },
  {
    question: "AM thích mùa nào nhất?",
    options: ["Xuân", "Hạ", "Thu", "Đông"],
    correct: 3
  },
  {
    question: "Món ăn yêu thích của AM là gì?",
    options: ["Phở", "Spaghetti", "Fried Chicken", "Bún cá cay"],
    correct: 0
  },
  {
    question: "Khi rảnh rỗi, AM thường làm gì?",
    options: ["Lướt reels", "Tập thể dục", "Nghĩ xem nên nhắn Khuê cgi nhma thôi vì ko muốn làm phiền nhma AM cũng rất muốn gặp arrghhh", "Ngủ"],
    correct: 2
  },
  {
    question: "AM thường dậy lúc mấy giờ?",
    options: ["Trước 6h", "6h - 7h", "7h - 8h", "Sau 8h"],
    correct: 1
  },
  {
    question: "Bạn hay dùng mạng xã hội nào nhất?",
    options: ["Facebook", "Instagram", "TikTok", "YouTube", "Threads", "Reddit"],
    correct: 1
  },
  {
    question: "AM yêu thích môn học nào nhất?",
    options: ["Toán", "Văn", "Lý", "Tiếng Anh", "Mỹ thuật", "Sinh học"],
    correct: 3
  },
  {
    question: "AM thích kiểu nhạc nào?",
    options: ["Chillstep", "Pop", "EDM", "Lo-fi", "J-pop", "All of the above"],
    correct: 5
  },
  {
    question: "AM thuộc cung hoàng đạo nào?",
    options: ["Bạch Dương", "Bảo Bình", "Cự Giải", "Thiên Bình", "Ma Kết"],
    correct: 2
  },
  {
    question: "AM có nuôi thú cưng không?",
    options: ["Có, chó", "Có, mèo", "Có, Mochiiiiiiii", "Ko, chó ko đc có pet", "Không có (😭😭😭)"],
    correct: 2
  },
  {
    question: "AM có nuôi thú cưng không?",
    options: ["Có, chó", "Có, mèo", "Có, Mochiiiiiiii", "Ko, chó ko đc có pet", "Không có (😭😭😭)"],
    correct: 2
  },
  {
    question: "AM thuộc kiểu người nào?",
    options: ["Hướng nội", "Hướng ngoại", "Cân bằng", "Tùy tâm trạng"],
    correct: 3
  },
  {
    question: "AM có ny chưa?",
    options: ["Có rồiiiii 😘😘😘", "Still single baby 😥", "Situationship", "đ biết gọi là gì 😔😔😔 (i have feelings for u my nigga)"],
    correct: 3
  },
  {
    question: "Nếu AM có nguyên 1 ngày dành cho bạn, cả 2 sẽ làm gì?",
    options: ["Đi dateee (perfect)", "Đi chơi pickleball (im a pickle boy)", "Đi tắm biển (boing boing)", "Còn làm gì nx?😉😏"],
    correct: 3
  },
  {
    question: "AM thích điểm nào ở bạn TMK nhất?",
    options: ["Cười rất đẹp (so cute)", "Tính cách (siêu cute quan tâm funni omg arf arf)", "Bạn có xe máy (😲😲😲 vroom vroom)", "Bạn có nhiều ng bạn supporting mqh này (actually so cute)", "Những lúc bạn nhìn AM", "Những lúc bạn nhắn cho AM", "Những lúc bạn quay mặt đi vì ngại", "Những lúc bạn gửi voicenote", "Lúc bạn nắm tay AM", "click if you are speechless"],
    correct: 9
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
    options.innerHTML = '<3';
    nextButton.onclick = reset;
    return;
  }
  options.innerHTML = ''
  nextButton.style.display = 'none'
  question.innerText = `Câu ${currentQuestion + 1}: ${questions[currentQuestion].question}`;
  nextButton.innerText = 'Next'

  makeQuestion(currentQuestion)

  if (currentQuestion == 11) {
    console.log(1)
    makeQuestion(currentQuestion)
    const correctAnswer = document.querySelector('.yes');
    correctAnswer.classList.remove('yes');
    correctAnswer.classList.add('no');

    let optionList = document.getElementsByClassName('no');
    let optionListArray = Array.from(optionList);
    optionListArray.forEach(element => {
      element.removeEventListener('click', reveal)
      element.removeEventListener('click', correct)
      element.addEventListener('click', )
    });
  }

  currentQuestion++;
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
  nextButton.style.display = 'block'
}

function reset() {
  score = 0;
  currentQuestion = 0;
  nextButton.onclick = startQuiz;
  startQuiz();
}

