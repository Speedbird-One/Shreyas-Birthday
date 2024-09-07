document.addEventListener("click", musicPlay);

function musicPlay() {
  document.getElementById("song").play();

  const duration = 3 * 1000,
    animationEnd = Date.now() + duration,
    defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

  function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }

  const interval = setInterval(function () {
    const timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      return clearInterval(interval);
    }

    const particleCount = 100 * (timeLeft / duration);

    // since particles fall down, start a bit higher than random
    confetti(
      Object.assign({}, defaults, {
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      })
    );
    confetti(
      Object.assign({}, defaults, {
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      })
    );
  }, 250);

  setTimeout(pageEdit, 200);
}

function pageEdit() {
  document.getElementById("landing").remove();
  document.removeEventListener("click", musicPlay);
}

document.getElementById("isDark").addEventListener("change", dark_func1);

function dark_func1() {
  var fg_clr = "hsl(0, 0%, 90%)";
  var bg_clr = "hsl(200, 100%, 5%)";
  var bg_lgt = "hsl(205, 75%, 20%)";
  var btn_clr = "hsl(205, 90%, 55%)";

  if (document.getElementById("isDark").checked) {
    document.querySelector("body").style.backgroundColor = "hsl(0, 0%, 70%)";
    document.querySelector(".switchDiv").style.backgroundColor =
      "hsl(0, 0%, 70%)";
    document
      .querySelectorAll("h1")
      .forEach((elem) => (elem.style.color = bg_clr));
    document
      .querySelectorAll("h3")
      .forEach((elem) => (elem.style.color = bg_clr));
    document
      .querySelectorAll("label")
      .forEach((elem) => (elem.style.color = bg_clr));

    document
      .querySelectorAll(".card")
      .forEach((elem) => (elem.style.backgroundColor = fg_clr));

    document
      .querySelectorAll("h2")
      .forEach((elem) => (elem.style.color = bg_clr));
    document
      .querySelectorAll("p")
      .forEach((elem) => (elem.style.color = "black"));
  } else {
    document.querySelector("body").style.backgroundColor = bg_clr;
    document.querySelector(".switchDiv").style.backgroundColor = bg_clr;

    document
      .querySelectorAll("h1")
      .forEach((elem) => (elem.style.color = fg_clr));
    document
      .querySelectorAll("h3")
      .forEach((elem) => (elem.style.color = fg_clr));
    document
      .querySelectorAll("label")
      .forEach((elem) => (elem.style.color = fg_clr));

    document
      .querySelectorAll(".card")
      .forEach((elem) => (elem.style.backgroundColor = bg_lgt));

    document
      .querySelectorAll("h2")
      .forEach((elem) => (elem.style.color = fg_clr));
    document
      .querySelectorAll("p")
      .forEach((elem) => (elem.style.color = fg_clr));
  }
}
