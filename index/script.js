let container = document.getElementById("container");

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
    "1",
    "2",
    "1",
    "2",
    "1",
    "2",
    "1",
    "2",
    "1",
    "2",
    "1",
    "2",
    "1",
    "2",
    "1",
    "2",
    "1",
    "2",
    "1",
    "2",
    "1",
    "2",
    "1",
    "2",
    "1"
]

function createTable() {
    container.innerHTML = `
        <h1 id="title">Letter Box</h1>
        <p id="text"></p>
        <div id="letter-content"></div>
    `;

    let title = document.getElementById("title");
    let text = document.getElementById("text");
    let content = document.getElementById("letter-content");

    title.innerText = "Letter Box";
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
    let exitButton = createButton("exit")
    exitButton.id = "exit";
    exitButton.addEventListener("click", createTable)
    container.append(exitButton);

    const id = this.id;
    table.innerHTML = ''
    title.innerHTML = `Letter ${id}`
    text.innerText = letters[id-1].instruction;



}

function createButton(id) {
    const newButton = document.createElement("button");
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


