$("#loader").css("visibility", "visible");
fetch("https://www.blueblissstudio.com/index.html")
  .then((response) => response.json())
  .then(function (response) {
    $("#loader").css("visibility", "hidden");
  })
  .catch((err) => {
    $("#loader").css("visibility", "hidden");
  });
