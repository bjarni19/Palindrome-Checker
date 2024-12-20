const checkButton = document.getElementById('check-btn');
const textInput = document.getElementById('text-input');
const resultDiv = document.getElementById('result');

const checkPalindrome = () => {
    const string = document.getElementById("text-input").value
    console.log(string)
    const cleanedString = cleanString(string)
    if (string === "") {
        alert('Please input a value')
    }
    console.log(cleanedString);
    const stringArray = Array.from(cleanedString);
    const stringArrayReversed = Array.from(cleanedString);
    stringArrayReversed.reverse()
    if (JSON.stringify(stringArray) === JSON.stringify(stringArrayReversed)) {
        console.log("Palindrome")
        const HTMLString1 = `<p>${string} is a palindrome</p>`;
        resultDiv.innerHTML = HTMLString1
    } else {
        console.log("Not a Palindrome");
        const HTMLString2 = `<p>${string} is not a palindrome</p>`;
        resultDiv.innerHTML = HTMLString2
    }
}

const cleanString = (string) => {
    return string.toLowerCase().replace(/[^a-z0-9]/g, '');
}

checkButton.addEventListener("click", checkPalindrome);