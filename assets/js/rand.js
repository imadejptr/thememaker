fetch("https://imadejptr.github.io/thememaker/assets/json/gs.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    pp(data);
  })
  .catch(function (err) {
    console.log("error: " + err);
  });

function pp(data) {
  var mainContainer = document.querySelector('#gr');
  var ix, ixLen, rand;
  for (ix = 576, ixLen = 605; ix < ixLen; ix++) {
    rand = Math.ceil(Math.random() * ixLen) - 1;
    var div = document.createElement("li");
    div.innerHTML =
      "<a href=/go.html?id=" +
      data[rand].id +
      ' class="box"><img src="https://storage.googleapis.com/imadejptr-v2/thumb/' +
      data[rand].id +
      '.' +
      data[rand].img +
      '" data-loaded="true"><div class="badge">' +
      data[rand].badge +
      '</div><span class="box-title">' +
      data[rand].name +
      "</span></a>";
    mainContainer.appendChild(div);
    data.splice(rand, 1);
    ixLen--;
  }
}

