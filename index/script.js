let container = document.getElementById("container");
let currentLetter = 0;

const letters = [
    {
        "number": "1",
        "instruction": "Mở thư này khi muốn đc yêu thương :>",
    },
    {
        "number": "2",
        "instruction": "Mở thư này khi m sắp thi mà não đ có gì",
    },
    {
        "number": "3",
        "instruction": "Mở thư này khi m nhìn ra cửa sổ và ko thấy t",
    },
    {
        "number": "4",
        "instruction": "Mở thư này khi m vừa cãi nhau và muốn cả 2 giảng hòa",
    },
    {
        "number": "5",
        "instruction": "Mở thư này khi m có chuyện muốn khoe nhma ko biết khoe ai",
    },
    {
        "number": "6",
        "instruction": "Mở thư này khi m đang chờ kết quả mà hồi hộp sắp lên cơn",
    },
    {
        "number": "7",
        "instruction": "Mở thư này khi m đang đi bộ một mình (đồ tự kỉ)",
    },
    {
        "number": "8",
        "instruction": "Mở thư này khi m đang chán (vì ko có t)",
    },
    {
        "number": "9",
        "instruction": "Mở thư này khi m đang say :0 (đồ bợm rượu)",
    },
    {
        "number": "10",
        "instruction": "Mở thư này khi ai đó làm m buồn 😭😭😭",
    },
    {
        "number": "11",
        "instruction": "Mở thư này khi m đang nghe nhạc và nghĩ đến t (gay af bro)",
    },
    {
        "number": "12",
        "instruction": "Mở thư này khi vừa gặp ác mộng",
    },
    {
        "number": "13",
        "instruction": "Mở thư này khi đang ngắm trời mưa 💦💦💦",
    },
    {
        "number": "14",
        "instruction": "Mở thư này khi bị dí deadline :<",
    },
    {
        "number": "15",
        "instruction": "Mở thư này khi m cảm thấy cuộc đời bế tắc",
    },
    {
        "number": "16",
        "instruction": "Mở thư này khi m đang scroll qua ảnh 2 đứa",
    },
    {
        "number": "17",
        "instruction": "Mở thư này khi đang lướt tiktok 2h sáng",
    },
    {
        "number": "18",
        "instruction": "Mở thư này khi m định bỏ cuộc",
    },
    {
        "number": "19",
        "instruction": "Mở thư này khi m đang khóc lén mà không muốn ai phát hiện ",
    },
    {
        "number": "20",
        "instruction": "Mở thư này khi m nhớ t (same)", 
    },
    {
        "number": "21",
        "instruction": "Mở thư này khi m đang muốn xem cái này funni",
    },
    {
        "number": "22",
        "instruction": "Mở thư này khi muốn đc bất ngờ :>",
    },
    {
        "number": "23",
        "instruction": "Mở thư này khi nhìn thấy 2 con mèo",    
    },
    {
        "number": "24",
        "instruction": "Mở thư này khi cần đc ai ôm",       
    },
    {
        "number": "25",
        "instruction": "Mở thư này khi t bảo m mở ;)",    
    }
];

const passwords = [
    "<3",
    "ngu nhu choa",
    "buon thiu ;-;",
    "im so sorry bbg",
    "am am am am am",
    "chet me mat",
    "aw tysm",
    "qua buon",
    "wife beater",
    "nha no o dau",
    "timebomb",
    "boo",
    "uot at qua :>",
    "lam di con gi nua",
    "cho t lam thong bon cau",
    "dmmmmmmm ararghar",
    "brr brr patapim",
    "co len ganbare",
    "come to daddy",
    "i miss u too pooki",
    "soi guong chua",
    "ur pregnant",
    "meomeomeo",
    "ily",
    "02032025"
]

function createTable() {
    container.innerHTML = `
        <h1 id="title">Letter Box</h1>
        <p id="text"></p>
    `;

    let title = document.getElementById("title");
    let text = document.getElementById("text");

    title.innerText = "Khuê's Letter Box";
    text.style.display = "none";


    const newTable = document.createElement("table");
    newTable.id = "table";
    container.append(newTable);

    let count = 1;
    for (i = 0; i < 5; i++){
        let newRow = document.createElement("tr");
        newTable.append(newRow)
        newRow.id = `${i}`;
        for (j = 0; j < 5; j++){
            const newData = document.createElement("td");
            newRow.append(newData);
            let button = createButton(count);
            button.id = `${count}`
            button.addEventListener("click", loadPage)
            newData.append(button);
            count++;
        }
    }
    
}

function loadPage() {
    text.style.display = "block"

    const id = this.id;
    currentLetter = id;
    table.innerHTML = '';
    title.innerHTML = `Letter ${id}`;
    text.innerText = letters[id-1].instruction;

    //letter
    let letterBox = document.createElement("div");
    letterBox.id = "letter-box";

    let letter = document.createElement("img");
    letter.src = "./images/love-letter.png";
    letter.id = "letter";

    container.append(letterBox)
    letterBox.append(letter)
    letter.addEventListener("click", showPassword)

    //password window
    let newWindow = document.createElement("div");
    newWindow.id = ("password-box");
    letterBox.append(newWindow);
    newWindow.style.display = "none";

    //exit button
    let exitButton = createButton("exit")
    exitButton.id = "exit";
    exitButton.addEventListener("click", createTable)
    container.append(exitButton);


}

function createButton(id) {
    const newButton = document.createElement("button");
    newButton.classList.add("button")
    newButton.innerHTML = `
        ${id}
        <div class="star-1">
            <svg
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            version="1.1"
            style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd"
            viewBox="0 0 784.11 815.53"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            >
            <defs></defs>
            <g id="Layer_x0020_1">
                <metadata id="CorelCorpID_0Corel-Layer"></metadata>
                <path
                class="fil0"
                d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                ></path>
            </g>
            </svg>
        </div>
        <div class="star-2">
            <svg
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            version="1.1"
            style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd"
            viewBox="0 0 784.11 815.53"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            >
            <defs></defs>
            <g id="Layer_x0020_1">
                <metadata id="CorelCorpID_0Corel-Layer"></metadata>
                <path
                class="fil0"
                d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                ></path>
            </g>
            </svg>
        </div>
        <div class="star-3">
            <svg
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            version="1.1"
            style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd"
            viewBox="0 0 784.11 815.53"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            >
            <defs></defs>
            <g id="Layer_x0020_1">
                <metadata id="CorelCorpID_0Corel-Layer"></metadata>
                <path
                class="fil0"
                d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                ></path>
            </g>
            </svg>
        </div>
        <div class="star-4">
            <svg
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            version="1.1"
            style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd"
            viewBox="0 0 784.11 815.53"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            >
            <defs></defs>
            <g id="Layer_x0020_1">
                <metadata id="CorelCorpID_0Corel-Layer"></metadata>
                <path
                class="fil0"
                d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                ></path>
            </g>
            </svg>
        </div>
        <div class="star-5">
            <svg
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            version="1.1"
            style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd"
            viewBox="0 0 784.11 815.53"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            >
            <defs></defs>
            <g id="Layer_x0020_1">
                <metadata id="CorelCorpID_0Corel-Layer"></metadata>
                <path
                class="fil0"
                d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                ></path>
            </g>
            </svg>
        </div>
        <div class="star-6">
            <svg
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            version="1.1"
            style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd"
            viewBox="0 0 784.11 815.53"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            >
            <defs></defs>
            <g id="Layer_x0020_1">
                <metadata id="CorelCorpID_0Corel-Layer"></metadata>
                <path
                class="fil0"
                d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                ></path>
            </g>
            </svg>
        </div>
    `;
    return newButton;
}

function showPassword() {
    letter.style.display = "none";
    document.getElementById("password-box").style.display = "block";
    document.getElementById("password-box").innerHTML = `   
        <input placeholder="Password" id="input" type="text">
        <button id="submit">Submit</button>
    `
    document.getElementById("submit").addEventListener("click", checkPassword)
}

function checkPassword() {
    let input = document.getElementById("input");
    let value = input.value
    if (value === passwords[currentLetter-1]) {
        input.value = '';
        input.placeholder = 'CORRECT';
        reward();
    } else {
        input.value = ''
        input.placeholder = 'WRONG'
    }
}

function reward() {
    document.getElementById("password-box").innerHTML = '';
    text.style.display = "none"
    if (currentLetter == 11) {
        newImg = document.createElement("img")
        newImg.src = "./images/did u miss me_.png";
        newImg.id = "music-qr"
        document.getElementById("password-box").append(newImg)
    } else if (currentLetter == 1) {
        window.location.href = "./assets/1/1.html";
    }

}

