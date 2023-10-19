function navHandler(params) {
  if (
    document.querySelector(".phone-nav").style.transform == "translateY(-800px)"
  ) {
    document.querySelector(".phone-nav").style.transform = "translateY(0px)";
  } else {
    document.querySelector(".phone-nav").style.transform = "translateY(-800px)";
  }
}
