let number_picture = 0;
function changepicture(value) {
  // img

  let picture = document.getElementById("picture");
  number_picture += value;
  if (number_picture < 0) {
    number_picture = 4;
  }
  number_picture = number_picture % 5;
  picture.src = `../image/bg${number_picture}.png`;
  picture.classList.add("fade");
  setTimeout(() => {
    picture.classList.remove("fade");
  }, 500);

  // dot

  let alldot = document.querySelectorAll(".dot");
  alldot.forEach((e, index) => {
    if (index == number_picture) {
      e.style.backgroundColor = "red";
      e.classList.add("fade");
      setTimeout(() => {
        e.classList.remove("fade");
      }, 500);
    } else {
      e.style.backgroundColor = "white";
    }
  });
}

function dotchange(index) {
  // dotimg

  let picture = document.getElementById("picture");
  number_picture = index;
  picture.src = `../image/bg${number_picture}.png`;
  picture.classList.add("fade");
  setTimeout(() => {
    picture.classList.remove("fade");
  }, 500);

  //   selectdot

  let alldot = document.querySelectorAll(".dot");
  alldot.forEach((e, index) => {
    if (index == number_picture) {
      e.style.backgroundColor = "red";
      e.classList.add("fade");
      setTimeout(() => {
        e.classList.remove("fade");
      }, 500);
    } else {
      e.style.backgroundColor = "white";
    }
  });
}
