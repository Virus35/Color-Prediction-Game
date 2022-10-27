const squares = document.querySelectorAll(".square");
const easy = document.querySelector(".easy");
const hard = document.querySelector(".hard");
const red = document.querySelector(".red");
const green = document.querySelector(".green");
const blue = document.querySelector(".blue");
const newColors = document.querySelector(".new-colors");
const reset_btn = document.querySelector(".reset");
let pickedIndex;

// const randomColorGenerator = () => {
//   red.innerHTML = Math.floor(Math.random() * 256);
//   green.innerHTML = Math.floor(Math.random() * 256);
//   blue.innerHTML = Math.floor(Math.random() * 256);
  
// };

const randomSquareColors = () => {
  for (squ of squares) {
    let random = Math.floor(Math.random() * 16777215).toString(16);
    squ.style.background = `#${random}`;
    console.log(random);
  }
};

const randomTargerColor = () => {
  pickedIndex = Math.floor(Math.random() * 6);
  pickedIndex=squares[pickedIndex].style.background;
  document.querySelector(".rgb").innerHTML=pickedIndex;
};

const reset = (ind) => {
  for (squ of squares) {
    squ.style.background = ind.style.background;
  }
  document.querySelector(".mid").style.display = "none";
  document.querySelector(".reset").style.display = "block";
  document.querySelector(".new-colors").style.display = "none";
  document.querySelector(".good-job").style.display = "block";

};

const start = () => {
  randomSquareColors();
  randomTargerColor();
};


start();

newColors.addEventListener("click", (e) => {
  start();
});
squares.forEach((cur_val, index) => {
  cur_val.addEventListener("click", (e) => {
    if (squares[index].style.background == pickedIndex) {
        // console.log(squares[index].style.background );
      document.querySelector(".mid").innerHTML = "Good Job 😍";
      document.querySelector(".item-1").style.background=pickedIndex;
      reset(squares[index]);
      swal({
        title: "Good job!",
        text: "Your Guess is Right!",
        icon: "success",
        button: "Aww yiss!",
      });
    } else {
      document.querySelector(".mid").innerHTML = "Status: Try Again 😦";
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Try Again, You can still Guess!'
      })
    }
  });
});

reset_btn.addEventListener("click", (e) => {
  document.querySelector(".new-colors").style.display = "block";
  document.querySelector(".good-job").style.display = "none";
  reset_btn.style.display = "none";
  document.querySelector(".mid").style.display = "block";
  document.querySelector(".mid").innerHTML="";
  document.querySelector(".item-1").style.background="tomato";
  document.querySelector(".mid").innerHTML="Status: Start Guessing 😦";
  start();
});
