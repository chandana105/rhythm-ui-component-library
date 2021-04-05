const showModal = document.getElementById("modal-show-btn");
const backDrop = document.getElementById("modal-backDrop");
const modalHide = document.getElementById("modal-hide");
const modal = document.getElementById("modal");
const modalHideIcon = document.getElementById("modal-hide-icon");

if (showModal) {
  showModal.addEventListener("click", () => {
    console.log("clciked");
    backDrop.classList.add("modal-backdrop");
    modal.classList.remove("modal-hide");
    modal.classList.add("modal");
    modal.classList.add("modal-display");
  });
}

const closeModal = () => {
  backDrop.classList.remove("modal-backdrop");
  modal.classList.remove("modal");
  modal.classList.remove("modal-display");
  modal.classList.add("modal-hide");
};

if (modalHide) {
  modalHide.addEventListener("click", closeModal);
}

if (modalHideIcon) {
  modalHideIcon.addEventListener("click", closeModal);
}

// if (backDrop) {
//   backDrop.addEventListener('click', closeModal)

// }

// SNACKBAR

const snackbar = document.getElementById("snackbar-contents");

const showSnackbar = document.getElementById("show-Snackbar");

const snackbarClose = document.getElementById("snackbar-close");

if (showSnackbar) {
  showSnackbar.addEventListener("click", () => {
    snackbar.style.display = "block";
    if ((snackbar.style.display = "block")) {
      setTimeout(() => {
        snackbar.style.display = "none";
      }, 5000);
    }
  });
}

if (snackbarClose) {
  snackbarClose.addEventListener("click", () => {
    snackbar.style.display = "none";
  });
}



// floating action button

const floatingButton = document.getElementById('floating-btn')
console.log(floatingButton)

window.onscroll = function() {scrollFunction()};


console.log(document.body.scrollTop)

function scrollFunction() {
  console.log('running')
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10   ) {
    floatingButton.style.display = "block";
  } else {
    floatingButton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// const floatingButton = document.getElementById('floating-btn')

// const scrollableHeight =
//   document.documentElement.scrollHeight - document.documentElement.clientHeight;

//   console.log(scrollableHeight);

//   console.log(document.documentElement.scrollTop)

//   const GOLDEN_RATIO = 0.5;

//   document.addEventListener("scroll", () => {
//     if (document.documentElement.scrollTop / scrollableHeight > GOLDEN_RATIO) {
//       floatingButton.style.display = "block";
//     } else {
//       floatingButton.style.display = "none";
//     }
//   });

//   floatingButton.addEventListener("click", () => {
//     console.log('cf')
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//   });
