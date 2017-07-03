const jQuery = require("jquery");
const $ = jQuery;

$(function () {
  const fs = require("fs");
  const game = fs.readdirSync("./public/js");
  const $body = $("body");

  game.forEach(function (value, num) {
    if (value === "index.js") { return; }
    $body.append(`<script src="./public/js/${value}" type="text/javascript">`)
  })
  $body.append("<p>test</p>");
})
