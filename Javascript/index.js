const viewWorkButton = document.getElementById("view-work");
const viewWorkArrow = document.getElementById("view-work-arrow");
const projectPage = document.getElementById('project-page');

viewWorkButton.addEventListener('click', scrollToProjects);
viewWorkArrow.addEventListener('click', scrollToProjects);

function scrollToProjects(e) {
  const distanceToTop = el => Math.floor(el.getBoundingClientRect().top);

  e.preventDefault();
  window.scrollBy({ top: distanceToTop(projectPage), left: 0, behavior: 'smooth' });
}