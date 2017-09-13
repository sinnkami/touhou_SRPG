const jQuery = require("jquery");

window.onerror = function (messageOrEvent, source, lineno, colno, error) {
  if (error.name === "ReferenceError") {
    console.log("ファイル参照エラー");
    location.reload();
  }
}

jQuery(function () {
  const fs = require("fs");
  const game = fs.readdirSync("./public/js");
  const $body = jQuery("body");

  game.forEach(function (value, num) {
    if (value === "index.js") { return; }
    $body.append(`<script src="./public/js/${value}" type="text/javascript">`)
  })
})
