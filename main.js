const btn_start = document.querySelector(".btn_start");
const gameResponseElem = document.querySelector(".gameResponseElem");
const hands = document.querySelectorAll(".hand");
const scissors = document.querySelector("#scissors");
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
//select html element

hands.forEach((hand) => {
  hand.addEventListener("click", (e) => {
    let isActive = Array.from(hands).some((hand) => {
      return hand.className.includes("active");
    });

    if (!isActive) {
      e.target.setAttribute("class", "hand active");
    } else {
      hands.forEach((hand) => (hand.className = "hand"));
      e.target.setAttribute("class", "hand active");
    }
  });
});

btn_start.addEventListener("click", () => {
  const handSelected = Array.from(hands).filter((hand) => {
    return hand.className == "hand active";
  });

  if (handSelected.length != 0) {
    let userResponse = handSelected[0].innerText;
    let computerList = ["✌️", "✊", "🖐️"];
    let computerIndex = Math.floor(Math.random() * computerList.length);
    let computerResponse = computerList[computerIndex];
    function gameResponse() {
      if (userResponse == computerResponse) {
        return `${userResponse} it's a draw!`;
      }
      let winConditions = {
        "✌️": "🖐️",
        "✊": "✌️",
        "🖐️": "✊",
      };
      return winConditions[userResponse] == computerResponse
        ? `${computerResponse} You win!`
        : `${computerResponse} You lose!`;
    }

    gameResponseElem.innerText = gameResponse();
  }
});
