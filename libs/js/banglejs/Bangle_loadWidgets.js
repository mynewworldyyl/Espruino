(function() {
  global.WIDGETPOS={tl:32,tr:g.getWidth()-32,bl:32,br:g.getWidth()-32};
  global.WIDGETS={};
  require("Storage").list().filter(a=>a.endsWith('.wid.js')).forEach(widget=>eval(require("Storage").read(widget)));
})
