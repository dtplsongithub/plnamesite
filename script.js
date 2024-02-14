const files = {
  "beta4": {
    "v0.4.2-beta-2-win-amd64-lite": 5019391,
    "v0.4.2-beta-3-win-amd64": 5033126,
  }
}

var web = window.location.href.split("/");
var folder = null;
console.log(web);
if (web[web.length - 3] == "archived") { // means its in a folder thats in /archived
  folder = web[web.length - 2];
  web = web.splice(web.length-3, 2);
  console.log(web);
} else if (web[web.length-2] == "archived") {
  folder = false;
  web = web.splice(web.length-2, 1);
}
var webb = document.createElement("span");
webb.innerText = "/"+web.join("/")+"/";
if (folder != null) document.body.appendChild(webb);
if (folder) {
  var table = document.createElement("table");
  let row = table.insertRow(-1);
  row.insertCell(0).innerText = "Version name";
  row.insertCell(1).innerText = "Size";
  for (i in Object.keys(files[folder])) {
      let row = table.insertRow(-1);
      row.insertCell(0).innerHTML = `<a href="${Object.keys(files[folder])[i]}.zip">${Object.keys(files[folder])[i]}.zip</a>`;
      row.insertCell(1).innerText = (files[folder][Object.keys(files[folder])[i]]/1024/1024).toFixed(2) + " MB";
  }
  document.body.appendChild(table);
} else if (folder != null) {
  var table = document.createElement("table");
  for (i in Object.keys(files)) {
    let row = table.insertRow(-1);
    row.insertCell(0).innerHTML = `<a href="./${Object.keys(files)[i]}/">${Object.keys(files)[i]}</a>`;
  }
  document.body.appendChild(table);
}