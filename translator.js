

function processCommands(inputs) {
    const regex = /^!([A-Z][a-z]{2,})!:\[([A-Za-z ]{8,})\]$/;
    for (let i = 1; i < inputs.length; i++) {
        const match = inputs[i].match(regex);
        if (match) {
            const command = match[1];
            const message = match[2];
            const asciiValues = message.split('').map(char => char.charCodeAt(0)).join(' ');
            console.log(`${command}: ${asciiValues}`);
        } else {
            console.log("The message is invalid");
        }
    }
}

processCommands(["2",
    "!Send!:[IvanisHere]",
    "*Time@:[Itis5amAlready"]);