const compliments = [
    "T thích ánh mắt của m lúc m chăm chú nghe t nói.",
    "T thích giọng m khi đang thì thầm trong thư viện",
    "T thích cách m hay nghiêng đầu suy nghĩ",
    "T thích m lúc m cười ngại ngùng :)",
    "T thích cái kiểu m luôn biết quan tâm người khác",
    "T thích lúc m đợi t mà chẳng cần nói ra.",
    "T thích cái điệu cười khúc khích của m",
    "T thích cách m hay yap linh tinh nhưng nghe vẫn cuốn",
    "T thích m lúc m không cố gắng gì cả mà vẫn rất cute",
    "T thích cái cách m nhẹ nhàng với mọi thứ xung quanh",
    "T thích cái cách m gọi tên t, nghe gần gũi :> ảgrhgarh",
    "T thích m khi m im lặng ngồi nhìn t",
    "T thích ánh mắt của m khi m kể về điều m yêu thích.",
    "T thích cách m đỏ mặt khi bị khen agghhhhhhhh",
    "T biết m đang cố gắng một mình nhiều lắm, nhma m cx có t mà ;)",
    "M đã đi được xa hơn m nghĩ rồi đó, đừng có mà chết",
    "Chỉ cần m còn muốn tiếp tục, t sẽ luôn ở đây ủng hộ m... chắc thế",
    "Nếu hôm nay m thấy mệt, thì nghỉ một chút rồi tiếp tục nha",
    "Tự tin lên, vì m có nhiều thứ tuyệt vời hơn m nghĩ.",
    "T thích mỗi lần m đứng ở cửa sổ vẫy t",
    "T thích khi có mỗi hai đứa ngồi nói chuyện",
    "T tự hào về m, nhiều hơn m biết đấy."

  ]

  let card = document.getElementById("card")
  function generateCompliment() {
    const randomIndex = Math.floor(Math.random() * compliments.length);
    document.getElementById("compliment").textContent = compliments[randomIndex];
  }

  function loadExit() {
    console.log(1)
    let exitButton = createButton("exit");
    exitButton.addEventListener("click", leave)
    exitButton.id = "exit"
    card.append(exitButton);
  }

  function leave() {
    window.location.href = '../../index.html';
  }