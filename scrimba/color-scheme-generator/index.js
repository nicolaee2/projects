const form = document.getElementById("form");
const color1 = document.getElementById("color-1");
const color2 = document.getElementById("color-2");
const color3 = document.getElementById("color-3");
const color4 = document.getElementById("color-4");
const color5 = document.getElementById("color-5");

const colorText1 = document.getElementById("color-1-hex");
const colorText2 = document.getElementById("color-2-hex");
const colorText3 = document.getElementById("color-3-hex");
const colorText4 = document.getElementById("color-4-hex");
const colorText5 = document.getElementById("color-5-hex");

function addToClipboard(hex) {
    navigator.clipboard.writeText(hex).then(
        () => {
            console.log("Copied to clipboard");
        },
        (err) => {
            console.error("Failed to copy: ", err);
        }
    );
}

colorText1.addEventListener("click", () =>
    addToClipboard(colorText1.textContent)
);
colorText2.addEventListener("click", () =>
    addToClipboard(colorText2.textContent)
);
colorText3.addEventListener("click", () =>
    addToClipboard(colorText3.textContent)
);
colorText4.addEventListener("click", () =>
    addToClipboard(colorText4.textContent)
);
colorText5.addEventListener("click", () =>
    addToClipboard(colorText5.textContent)
);

function fetchData(color, mode) {
    fetch(`https://www.thecolorapi.com/scheme?hex=${color}&mode=${mode}`, {
        method: "GET",
    })
        .then((response) => response.json())
        .then((data) => {
            color1.style.backgroundColor = data.colors[0].hex.value;
            color2.style.backgroundColor = data.colors[1].hex.value;
            color3.style.backgroundColor = data.colors[2].hex.value;
            color4.style.backgroundColor = data.colors[3].hex.value;
            color5.style.backgroundColor = data.colors[4].hex.value;

            colorText1.textContent = data.colors[0].hex.value;
            colorText2.textContent = data.colors[1].hex.value;
            colorText3.textContent = data.colors[2].hex.value;
            colorText4.textContent = data.colors[3].hex.value;
            colorText5.textContent = data.colors[4].hex.value;
        });
}

fetchData("F55A5A", "monochrome");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(form);

    const color = formData.get("color").toUpperCase().slice(1);
    const mode = formData.get("mode");

    fetchData(color, mode);
});
