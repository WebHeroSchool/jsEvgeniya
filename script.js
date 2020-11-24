const body = document.body;
const url = window.location.toString();
const el = url.split("=");
let userName = el[1];
if (userName == undefined) {
	  userName = "Evgeshka1412";
}

fetch(`https://api.github.com/users/${userName}`)
  .then((res) => res.json())
  .then((json) => {

  	const avatar = new Image();
  	avatar.src = json.avatar_url;
  	avatar.className = "avatar";
  	body.append(avatar);

  	const name = document.createElement("p");
    if (json.name != null) {
      name.innerText = json.name;
    } else {
      name.innerText = "Информация о пользователе не доступна";
      name.classList.add("er");
    }
    body.append(name);
    name.addEventListener("click", () => (window.location = json.html_url));
    const bio = document.createElement("p");
    if (json.bio != null) {
      bio.innerText = json.bio;
    } else {
      bio.innerText = "Информация о пользователе не доступна";
      bio.classList.add("er");
    }
    body.append(bio);

  });