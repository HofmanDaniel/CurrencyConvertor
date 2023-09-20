function SelfCopy() {
    let text = document.getElementById("ris");
    navigator.clipboard.writeText(text.innerText);
}