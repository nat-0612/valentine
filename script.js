const yesBtn = document.getElementById("yesb");
const noBtn = document.getElementById("nob");

const screenQuestion = document.getElementById("screen-question");
const screenYay = document.getElementById("screen-yay");

let noClicks = 0;

yesBtn.addEventListener("click", () => {
  screenQuestion.style.display = "none";
  screenYay.style.display = "block";
});



function launchConfetti() {
  for (let i = 0; i < 100; i++) {
    const confetti = document.createElement("div");
    confetti.classList.add("confetti");

  
    confetti.style.left = Math.random() * 100 + "vw";

   
    const colors = ["#f55b78", "#e26363", "#f8bfbf", "#8a2e3f", "#ffffff"];
    confetti.style.backgroundColor =
      colors[Math.floor(Math.random() * colors.length)];

  
    confetti.style.animationDuration =
      Math.random() * 2 + 2 + "s";

    document.body.appendChild(confetti);

    
    setTimeout(() => {
      confetti.remove();
    }, 4000);
  }
}

yesBtn.addEventListener("click", () => {
  launchConfetti();
});

const noTexts = [
    "no",
    "are you sure?",
    "why not????",
    "do you hate me?",
    "think about it",
    "come onnnn",
    "pleaseee",
    ":("
    ];

    let yesSize = 1;
    let noSize = 1;



    noBtn.addEventListener("click", () => {
  noClicks++;
  if (noClicks < noTexts.length) {
  noBtn.textContent = noTexts[noClicks];
    }
    noSize -= 0.1;
     noBtn.style.transform = `scale(${noSize})`;

yesSize += 0.2;
yesBtn.style.transform = `scale(${yesSize})`;
});