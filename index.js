const routes = {
  "home" : "home.html",
  "about": "about.html",
  "contact": "contact.html"
}

const route = async() => {
  let path = window.location.hash.replace("#","");
  console.log('path', path);
  if(path == '') path = 'home';
  const response = await fetch(routes[path]);
  const content = await response.text();
  const main = document.getElementById('main');
  main.innerHTML = content;
}

window.addEventListener('hashchange', route);
window.addEventListener('load', route);