const bordersElementPath = "#app > div._1ADa8._3Nsgw.app-wrapper-web.font-fix > div._1XkO3.two";

const removeBorders = () => {
  const wrapper = document.querySelector(bordersElementPath);

  wrapper.style.top = "inherit";
  wrapper.style.width = "inherit";
  wrapper.style.height = "inherit";
}

setInterval(removeBorders, 2000);
