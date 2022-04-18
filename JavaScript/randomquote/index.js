const quoteText = document.querySelector('.quote'),
    authorName = document.querySelector('.author'),
    quoteBtn = document.querySelector('button'),
    speechBtn = document.querySelector(".speech"),
    copyBtn = document.querySelector('.copy'),
    twitterBtn = document.querySelector('.twitter'),
    synth = window.speechSynthesis;
function randomQuote(){
// http://api.quotable.io/random
    quoteBtn.classList.add("loading");
    quoteBtn.innerText = "Loading Quote...";
    fetch("http://api.quotable.io/random")
    .then(res => res.json())
    .then(result => {
        quoteText.innerText = result.content;
        authorName.innerText = result.author;
        quoteBtn.classList.remove("loading"); // if를 사용하지 않고 클릭했을 때랑 안했을 때 구분
        quoteBtn.innerText = "New Quote";
    })
}

speechBtn.addEventListener("click", ()=>{
    // Web Speech API SpeechSynthesisUtterance
    utterance = new SpeechSynthesisUtterance("Read this string.");
    if(!quoteBtn.classList.contains("loading")) { // loading이 아닐때만
        let utterance = new SpeechSynthesisUtterance(`${quoteText.innerText} by ${authorName.innerText}`);
        synth.speak(utterance);
        setInterval(() => {
            synth.speaking ? speechBtn.classList.add("active") : speechBtn.classList.remove("active");
        }, 10);
    }

    //synth.speaking 이 참인동안 sppechBtn.classList.add("active")

})

copyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(quoteText.innerText);
})
//navigator.clipboard.writeText()


twitterBtn.addEventListener("click", () => {
    let tweetUrl = `https://twitter.com/intent/tweet?url=${quoteText.innerText}`;
    window.open(tweetUrl, "_blank");
})

quoteBtn.addEventListener("click", randomQuote);