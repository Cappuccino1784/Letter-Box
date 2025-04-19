function createTable() {
    const newTable = document.createElement("table");
    newTable.id = "table";
    document.getElementById("container").append(newTable);

    let count = 1;
    for (i = 0; i < 5; i++){
        let newRow = document.createElement("tr");
        newTable.append(newRow)
        newRow.id = `${i}`;
        for (j = 0; j < 5; j++){
            const newData = document.createElement("td");
            newRow.append(newData);

            const newButton = document.createElement("button");
            newButton.id = `button-${count}`;
            newButton.onclick = loadPage();
            newData.append(newButton);
            newButton.innerHTML = `
                ${count}
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
            count++;
        }
    }
    
}

function loadPage() {
    
}



