console.log("Hello World!");

// var p = document.getElementById("hyrax-p");

// p.style.color = "#FF0000";

let button = document.getElementById("hero-button");
button.addEventListener("click", () => {
  let allp = document.getElementsByTagName("p");
  console.log(allp);
  for (let i = 0; i < allp.length; i++) {
    if (i % 2 === 0) {
      allp[i].style.color = "#aa459eff";
    } else {
      allp[i].style.color = "#0000ff";
    }
  }
}, false);
