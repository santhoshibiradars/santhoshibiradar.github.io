document.addEventListener("DOMContentLoaded", function () {
  const phrases = ["Project Manager", "Business Analyst", "Data Enthusiast"];
  let i = 0, j = 0, currentPhrase = [], isDeleting = false;
  const typingElement = document.getElementById("typing");

  function loop() {
    typingElement.innerHTML = currentPhrase.join("");

    if (!isDeleting && j <= phrases[i].length) {
      currentPhrase.push(phrases[i][j]);
      j++;
    }

    if (isDeleting && j > 0) {
      currentPhrase.pop();
      j--;
    }

    if (j === phrases[i].length) isDeleting = true;
    if (j === 0 && isDeleting) {
      isDeleting = false;
      i = (i + 1) % phrases.length;
    }

    setTimeout(loop, isDeleting ? 50 : 100);
  }

  loop();
});
