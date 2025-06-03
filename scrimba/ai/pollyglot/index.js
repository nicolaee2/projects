import OpenAI from "openai";

const translateButton = document.getElementById("translate-button");
const startOverButton = document.getElementById("start-over-button");
const translate = document.getElementById("translate");
const startOver = document.getElementById("start-over");
const translateText = document.getElementById("translate-text");
const startOverOriginalText = document.getElementById(
    "start-over-original-text"
);
const startOverTranslatedText = document.getElementById(
    "start-over-translated-text"
);
let openai = null;

try {
    openai = new OpenAI({
        apiKey: import.meta.env.VITE_OPENAI_API_KEY,
        dangerouslyAllowBrowser: true,
    });
} catch (error) {
    console.error(error);
}

translateText.oninput = () => {
    if (translateText.value) {
        translateButton.disabled = false;
    } else {
        translateButton.disabled = true;
    }
};

translateButton.addEventListener("click", async () => {
    translateButton.disabled = true;

    const tranlateTextValue = translateText.value;

    const language = document.querySelector(
        'input[name="language"]:checked'
    ).value;

    startOverOriginalText.value = tranlateTextValue;
    startOverTranslatedText.value = await translateTextToLanguage(
        tranlateTextValue,
        language
    );

    translateButton.disabled = false;
    translate.hidden = true;
    startOver.hidden = false;
});

startOverButton.addEventListener("click", () => {
    translate.hidden = false;
    startOver.hidden = true;
});

async function translateTextToLanguage(text, language) {
    const messages = [
        {
            role: "system",
            content:
                "You are a translator. The user input will be in the format: 'language text' (e.g., 'french Hello'). Respond only with the translated text, and nothing else.",
        },
        {
            role: "user",
            content: `${language} ${text}`,
        },
    ];

    const response = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: messages,
        response_format: {
            type: "text",
        },
        temperature: 0,
        max_completion_tokens: 200,
        frequency_penalty: 0,
        presence_penalty: 0,
    });

    return response.choices[0].message.content;
}
