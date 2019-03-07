// Scroll down to project section

const viewWorkButton = document.getElementById("view-work");
const viewWorkArrow = document.getElementById("view-work-arrow");
const projectPage = document.getElementById('project-page');

scrollToProjects = e => {
  const distanceToTop = el => Math.floor(el.getBoundingClientRect().top);

  e.preventDefault();
  window.scrollBy({ top: distanceToTop(projectPage), left: 0, behavior: 'smooth' });
}

viewWorkButton.addEventListener('click', scrollToProjects);
viewWorkArrow.addEventListener('click', scrollToProjects);


// Have a short summary and link to more info pop up when you click on thumbnails
showInfo = e => {
  e.preventDefault();
  const targetInfo = e.target.attributes.info.value;

  const infoElement = document.getElementById(targetInfo);

  infoElement.classList.remove('hidden');
}

hideInfo = e => {
  e.preventDefault();
  const targetInfo = e.target.attributes.info.value;

  const infoElement = document.getElementById(targetInfo);

  infoElement.classList.add('hidden');
}

let thumbnails = document.querySelectorAll('.thumbnail');
let moreInfo = document.querySelectorAll('.more-info');

thumbnails.forEach(element => {
  element.addEventListener('focusin', showInfo);
  element.addEventListener('click', showInfo);
  element.addEventListener('focusout', hideInfo);
});

moreInfo.forEach(element => {
  element.addEventListener('focusin', showInfo);
  element.addEventListener('focusout', hideInfo);
});
