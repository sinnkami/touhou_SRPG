const jQuery = require("jquery");

window.onerror = function (messageOrEvent, source, lineno, colno, error) {
  if (error.name === "ReferenceError") {
    console.log("ファイル参照エラー");
    location.reload();
  }
}

jQuery(function () {
  const fs = require("fs");
  const ratio = require('aspect-ratio');

  const game = fs.readdirSync("./public/js");
  const $body = jQuery("body");

  const width = window.screen.width;
  const height = window.screen.height;

  const aspect = ratio(width, height).split(":");
  // const padding = Number(aspect[1])/Number(aspect[0])*100 + "%";
  // jQuery('#gameCanvas').css('padding-top', padding);
  jQuery('#map').attr('width', Number(aspect[0])*84);
  jQuery('#map').attr('height', Number(aspect[1])*96);
  jQuery('#player').attr('width', Number(aspect[0])*84);
  jQuery('#player').attr('height', Number(aspect[1])*96);
  jQuery('#window').attr('width', Number(aspect[0])*84);
  jQuery('#window').attr('height', Number(aspect[1])*96);
  jQuery('#anime').attr('width', Number(aspect[0])*84);
  jQuery('#anime').attr('height', Number(aspect[1])*96);
  jQuery('#move').attr('width', Number(aspect[0])*84);
  jQuery('#move').attr('height', Number(aspect[1])*96);
  game.forEach(function (value, num) {
    if (value === "index.js") { return; }
    $body.append(`<script src="./public/js/${value}" type="text/javascript">`)
  })
})
