const containers = [
    {
        description: "Length (Meter/Feet)",
        data: ["meters", "feet"],
        convertor: function (value) {
            return [value * 3.281, value / 3.281];
        },
    },
    {
        description: "Volume (Liter/Gallon)",
        data: ["liters", "gallons"],
        convertor: function (value) {
            return [value * 0.264, value / 0.264];
        },
    },
    {
        description: "Weight (Kilogram/Pound)",
        data: ["kilograms", "pounds"],
        convertor: function (value) {
            return [value * 2.204, value / 2.204];
        },
    },
    {
        description: "Temperature (Celsius/Fahrenheit)",
        data: ["celsius", "fahrenheit"],
        convertor: function (value) {
            return [value * 1.8 + 32, (value - 32) / 1.8];
        },
    },
    {
        description: "Speed (Km/h - Mph)",
        data: ["km/h", "mph"],
        convertor: function (value) {
            return [value * 0.621, value / 0.621];
        },
    },
    {
        description: "Length (Kilometer/Mile)",
        data: ["kilometers", "miles"],
        convertor: function (value) {
            return [value * 0.621, value / 0.621];
        },
    },
    {
        description: "Length (Centimeter/Inch)",
        data: ["centimeters", "inches"],
        convertor: function (value) {
            return [value * 0.394, value / 0.394];
        },
    },
    {
        description: "Length (Meter/Yard)",
        data: ["meters", "yards"],
        convertor: function (value) {
            return [value * 1.094, value / 1.094];
        },
    },
];

const inputElement = document.getElementById("number-input");
const content = document.getElementById("content");
const button = document.getElementById("convert-button");

button.addEventListener("click", () => {
    content.innerHTML = "";

    containers.forEach((container) => {
        const div = document.createElement("div");
        div.classList.add("container");
        div.innerHTML = `<p class="description">${container.description}</p>`;

        const value = inputElement.value;
        const [firstValue, secondValue] = container.convertor(value);
        const [firstUnit, secondUnit] = container.data;

        const text = `${value} ${firstUnit} = ${firstValue.toFixed(
            3
        )} ${secondUnit} | ${value} ${secondUnit} = ${secondValue.toFixed(
            3
        )} ${firstUnit}`;

        div.innerHTML += `<p class="data">${text}</p>`;
        content.appendChild(div);
    });
});
