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
    document.getElementById("isDark2").checked = true;
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
    document.getElementById("arrow").src = "assets/images/triangle-light.png";

    document
      .querySelectorAll(".dropbtn")
      .forEach((elem) => (elem.style.backgroundColor = "hsl(0, 0%, 70%)"));
    document
      .querySelectorAll(".dropbtn")
      .forEach((elem) => (elem.style.color = bg_clr));
    document
      .querySelectorAll(".dropListContent")
      .forEach((elem) => (elem.style.backgroundColor = "hsl(0, 0%, 70%)"));

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
    document.getElementById("isDark2").checked = false;
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
    document.getElementById("arrow").src = "assets/images/triangle-dark.png";

    document
      .querySelectorAll(".dropbtn")
      .forEach((elem) => (elem.style.backgroundColor = bg_clr));
    document
      .querySelectorAll(".dropbtn")
      .forEach((elem) => (elem.style.color = fg_clr));
    document
      .querySelectorAll(".dropListContent")
      .forEach((elem) => (elem.style.backgroundColor = bg_clr));

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

document.getElementById("isDark2").addEventListener("change", dark_func2);

function dark_func2() {
  var fg_clr = "hsl(0, 0%, 90%)";
  var bg_clr = "hsl(200, 100%, 5%)";
  var bg_lgt = "hsl(205, 75%, 20%)";
  var btn_clr = "hsl(205, 90%, 55%)";

  if (document.getElementById("isDark2").checked) {
    document.getElementById("isDark").checked = true;
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
    document.getElementById("arrow").src = "assets/images/triangle-light.png";

    document
      .querySelectorAll(".dropbtn")
      .forEach((elem) => (elem.style.backgroundColor = "hsl(0, 0%, 70%)"));
    document
      .querySelectorAll(".dropbtn")
      .forEach((elem) => (elem.style.color = bg_clr));
    document
      .querySelectorAll(".dropListContent")
      .forEach((elem) => (elem.style.backgroundColor = "hsl(0, 0%, 70%)"));

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
    document.getElementById("isDark").checked = false;
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
    document.getElementById("arrow").src = "assets/images/triangle-dark.png";

    document
      .querySelectorAll(".dropbtn")
      .forEach((elem) => (elem.style.backgroundColor = bg_clr));
    document
      .querySelectorAll(".dropbtn")
      .forEach((elem) => (elem.style.color = fg_clr));
    document
      .querySelectorAll(".dropListContent")
      .forEach((elem) => (elem.style.backgroundColor = bg_clr));

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

document.getElementById("isVulgar").addEventListener("change", vulgar_func1);

function vulgar_func1() {
  if (document.getElementById("isVulgar").checked) {
    document.querySelector("#pic1").src = "assets/images/vulgar/Cursing.gif";
    document.querySelector("#pic2").src = "assets/images/vulgar/Smoking.gif";
    document.querySelector("#pic3").src = "assets/images/vulgar/Drinking.gif";
    document.querySelector("#pic4").src = "assets/images/vulgar/Riding.gif";
    document.querySelector("#pic5").src = "assets/images/vulgar/Women.gif";
    document.querySelector("#pic6").src = "assets/images/vulgar/Dahmer.gif";
  } else {
    document.querySelector("#pic1").src = "assets/images/clean/Cursing.gif";
    document.querySelector("#pic2").src = "assets/images/clean/Smoking.gif";
    document.querySelector("#pic3").src = "assets/images/clean/Drinking.gif";
    document.querySelector("#pic4").src = "assets/images/clean/Riding.gif";
    document.querySelector("#pic5").src = "assets/images/clean/Women.gif";
    document.querySelector("#pic6").src = "assets/images/clean/Dahmer.gif";
  }
}

document.getElementById("isVulgar2").addEventListener("change", vulgar_func2);

function vulgar_func2() {
  if (document.getElementById("isVulgar2").checked) {
    document.querySelector("#pic1").src = "assets/images/vulgar/Cursing.gif";
    document.querySelector("#pic2").src = "assets/images/vulgar/Smoking.gif";
    document.querySelector("#pic3").src = "assets/images/vulgar/Drinking.gif";
    document.querySelector("#pic4").src = "assets/images/vulgar/Riding.gif";
    document.querySelector("#pic5").src = "assets/images/vulgar/Women.gif";
    document.querySelector("#pic6").src = "assets/images/vulgar/Dahmer.gif";
  } else {
    document.querySelector("#pic1").src = "assets/images/clean/Cursing.gif";
    document.querySelector("#pic2").src = "assets/images/clean/Smoking.gif";
    document.querySelector("#pic3").src = "assets/images/clean/Drinking.gif";
    document.querySelector("#pic4").src = "assets/images/clean/Riding.gif";
    document.querySelector("#pic5").src = "assets/images/clean/Women.gif";
    document.querySelector("#pic6").src = "assets/images/clean/Dahmer.gif";
  }
}
