// スポットライト効果
const spotlightImage = document.querySelector(".js-spotlight");

if (spotlightImage) {
  // マウスが要素上を移動したときの処理
  spotlightImage.addEventListener("mousemove", (e) => {
    const rect = spotlightImage.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    spotlightImage.style.setProperty("--mouse-x", `${x}px`);
    spotlightImage.style.setProperty("--mouse-y", `${y}px`);
  });

  // マウスが要素から離れたときの処理
  spotlightImage.addEventListener("mouseleave", () => {
    // スポットライトを中央にリセット
    spotlightImage.style.setProperty("--mouse-x", `50%`);
    spotlightImage.style.setProperty("--mouse-y", `50%`);
  });
}
