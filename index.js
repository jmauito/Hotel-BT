const routes = {
  "home" : "home.html",
  "about": "about.html",
  "contact": "contact.html"
}

const refreshMenu = (path) => {
  const menus = [ ...document.querySelectorAll('a.menu-item')];
  menus.map(menu => {
    console.log(menu.id);
    const valueClass = menu.id == `menu-${path}` ? 'menu-item current' : 'menu-item';
    menu.setAttribute('class', valueClass);
  });
  

}

const route = async() => {
  let path = window.location.hash.replace("#","");
  if(path == '') path = 'home';
  const response = await fetch(routes[path]);
  const content = await response.text();
  const main = document.getElementById('main');
  main.innerHTML = content;
  refreshMenu(path);
}

window.addEventListener('hashchange', route);
window.addEventListener('load', route);