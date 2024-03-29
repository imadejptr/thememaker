const data = fetch("https://imadejptr.github.io/thememaker/assets/json/gs.json")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        search(data);
    })
    .catch(function (err) {
        console.log("error: " + err);
    });

function search(data) {
    data.sort(function (a, b) {
        a = a.name.toLowerCase();
        b = b.name.toLowerCase();

        return a < b ? -1 : a > b ? 1 : 0;
    });
    $(document).ready(function () {
        $.ajaxSetup({
            cache: false
        });
        $('#search').keyup(function () {
            $('#gs').html('');
            $('#name').val('');
            var searchField = $('#search').val();
            var expression = new RegExp(searchField, "i");
            $.each(data, function (key, valu) {
                if (valu.name.search(expression) != -1) {
                    $('#gs').append("<li><a href=/go.html?id=" +
                        valu.id +
                        ' class="box"><img src="https://cdn.glitch.global/9c8c96bb-a059-45d7-8b2b-d37ee6083aa6/' +
                        valu.id +
                        '.' +
                        valu.img +
                        '" data-loaded="true"><div class="badge">' +
                        valu.badge +
                        '</div><span class="box-title">' +
                        valu.name +
                        "</span></a></li>");
                }
            });
        });
    });
    var mainContainer = document.getElementById("gs");
    for (var i = 0; i <= data.length; i++) {
        var div = document.createElement("li");
        div.innerHTML =
            "<a href=/go.html?id=" +
            data[i].id +
            ' class="box"><img src="https://cdn.glitch.global/9c8c96bb-a059-45d7-8b2b-d37ee6083aa6/' +
            data[i].id +
            '.' +
            data[i].img +
            '".jpg" data-loaded="true"><div class="badge">' +
            data[i].badge +
            '</div><span class="box-title">' +
            data[i].name +
            "</span></a>";
        mainContainer.appendChild(div);
        count();
    }
    function count() {
        document.getElementById("libtot").innerHTML = "There are " + data.length + " games to choose from!";
    }
}

function sug(val) {
    document.getElementById("search").value = val;
}