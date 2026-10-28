// alert("테스트");  연결확인

//  이미지 1, 2 선택
const image1 = document.querySelector(".img1");
const image2 = document.querySelector(".img2");
const result = document.querySelector("#result");
const rollButton = document.querySelector("#rollButton");
const resetButton = document.querySelector("#resetButton");

// 버튼을 누르면 주사위 굴리기
rollButton.addEventListener("click", function () {
  // 랜덤 숫자 1~6 만들기
  const random1 = Math.floor(Math.random() * 6) + 1;
  const random2 = Math.floor(Math.random() * 6) + 1;

  // 주사위 이미지 변경하기
  image1.setAttribute("src", `images/dice${random1}.png`);
  image2.setAttribute("src", `images/dice${random2}.png`);

  // 승패 확인하기
  if (random1 > random2) {
    result.textContent = "🍗 청코너 승!";
  } else if (random2 > random1) {
    result.textContent = "백코너 승! 🍗";
  } else {
    result.textContent = "준비!";
  }
});
resetButton.addEventListener("click", function () {
  // 결과 제목 초기화
  result.textContent = "준비!";

  // 주사위 이미지 없애기
  image1.setAttribute("src", "images/dice1.png");
  image2.setAttribute("src", "images/dice1.png");
});
