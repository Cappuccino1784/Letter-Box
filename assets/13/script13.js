const canvas = document.getElementById('rain-canvas');
const ctx = canvas.getContext('2d');
let rain = false;
let random = true;
let count = 0;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let drops = [];

for (let i = 0; i < 300; i++) {
  drops.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    length: Math.random() * 20 + 10,
    speed: Math.random() * 5 + 4
  });
}

function drawRain() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.strokeStyle = 'rgba(174,194,224,0.5)';
  ctx.lineWidth = 1;

  for (let drop of drops) {
    ctx.beginPath();
    ctx.moveTo(drop.x, drop.y);
    ctx.lineTo(drop.x, drop.y + drop.length);
    ctx.stroke();

    drop.y += drop.speed;
    if (drop.y > canvas.height) {
      drop.y = -drop.length;
      drop.x = Math.random() * canvas.width;
    }
  }

  requestAnimationFrame(drawRain);
}

drawRain();

function playSound() {
    if (rain == false) {
        document.getElementById("rain-sound").play();
        rain = true;
    } else if (rain == true) {
        document.getElementById("rain-sound").pause();
        rain = false;
    }
}

function leave() {
    window.location.href = "../../index.html"
}

const quotes = [
    "Cơn mưa làm t nhớ m quá :<",
    "Lạnh quá, ôm cái cho ấm",
    "Mưa rơi ngoài hiên, còn m thì rơi vào trong tim t oeoeoeoe",
    "Mỗi giọt mưa làm t nhớ đến giọng m gọi am am am am am",
    "Ướt hết áo r, cởi ra cho khô 🥴",
    "T thích cảm giác đi dưới mưa… vì đang nhớ m 👉👈",
    "Mở mắt thấy trời mưa, lòng t cũng nặng hạt vì m (┬┬﹏┬┬)",
    "T muốn cùng m trú mưa… rồi chẳng cần mưa tạnh nữa",
    "T muốn đc nắm tay 👉👈",
    "Nghe tiếng mưa, t lại nhớ giọng m",
    "Ước gì lúc này cả 2 cùng đứng dưới mưa, không cần nói gì",
    "Mưa ngoài trời, nhưng m là cơn mưa trong lòng t 🤢🤢🤮🤮 skip skip skip",
    "Mưa có thể làm lạnh vai m, nhưng không thể làm t thôi muốn ôm m ༼ つ ◕_◕ ༽つ",
    "Mỗi cơn mưa qua, t chỉ mong m vẫn còn ở đây (đừng bỏ t pls)",
    "T nhớ m, rất nhiều huhuhuhuhu o(TヘTo)",
    "Nhìn vào vũng nước thấy ảnh phản chiếu của 2 đứa 😞😖😩",
    "Trời mưa lạnh, nhưng sao lòng t còn lạnh hơn khi không có m ở đây 🥴🥴🥴",
    "Ước gì mưa này cuốn trôi hết nỗi buồn, nhma đừng cuốn m đi (cuốn m về đây thì được)",
    "Nếu m là điện thoại, t sẽ là sạc dự phòng… Vì t muốn luôn bên m khi m hết pin 🔋 (cringe quá tung tung tung tung)",
    "M có tin vào tình yêu từ cái nhìn đầu tiên? Hay t phải đi ngang qua thêm lần nữa? 🤫🤫🤫",
    "M có phải là 1 con mèo ko? Vì t muốn làm… xúc xích để m cắn một miếng 🥓 meo meo meo",
    "T vừa bị phạt 500k... Vì tội nhìn m mà không thể rời mắt! 👀"
  ];

  function changeQuote() {
    if (random == true) {
        const random = Math.floor(Math.random() * quotes.length);
        const quote = `${random+1}. ${quotes[random]}`;
        document.getElementById('quote').innerText = quote
    } else if (random == false) {
        if (count == quotes.length - 1) {
            count = 0;
        }
        const quote = quotes[count];
        document.getElementById('quote').innerText = `${count + 1}. ${quote}`
        count++;
    }
  }

  function changeMode() {
    if (random == true) {
        random = false;
        document.getElementById('random').innerText = "theo trình tự";
    } else {
        random = true;
        document.getElementById('random').innerText = "random";
    }
  }

  setInterval(changeQuote, 5000)