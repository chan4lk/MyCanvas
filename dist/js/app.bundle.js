webpackJsonp([0],[function(t,e,i){"use strict";var n=i(1),o=i(5),s=i(4),c=document.getElementById("drawing_area"),r=new n["default"](c);r.Draw(),document.getElementById("add-header").addEventListener("click",function(t){var e=new o["default"]("Header","20px Georgia","#eee",s.Position.TOP_LEFT);r.AddHeader(e)})},function(t,e,i){"use strict";var n=i(2),o=i(3),s=function(){function t(t){this.defaultWidth=100,this.defaultHeight=200,t?this.context=t.getContext("2d"):(t=document.createElement("Canvas"),t.clientWidth=this.defaultWidth,t.clientHeight=this.defaultHeight,document.appendChild(t),this.context=t.getContext("2d"));var e=t.width,i=t.height;this.container=new n["default"],this.container.Height=i,this.container.Width=e}return t.prototype.Draw=function(){},t.prototype.AddHeader=function(t){var e=o["default"].getX(t.position,this.container),i=o["default"].getY(t.position,this.container);this.context.font=t.font,this.context.fillText(t.value,e,i)},t.prototype.toString=function(){return"The canvas width :"+this.container.Width+", The canvas height :"+this.container.Height},t}();Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=s},function(t,e){"use strict";var i=function(){function t(){}return Object.defineProperty(t.prototype,"Width",{get:function(){return this.width},set:function(t){window.innerWidth>=t&&(this.width=t)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"Height",{get:function(){return this.height},set:function(t){window.innerHeight>=t&&(this.height=t)},enumerable:!0,configurable:!0}),t}();Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=i},function(t,e,i){"use strict";var n=i(4),o=function(){function t(){}return t.getX=function(t,e){switch(t){case n.Position.TOP_LEFT:case n.Position.MIDDLE_LEFT:case n.Position.BOTTOM_LEFT:return 10;case n.Position.TOP_CENTER:case n.Position.MIDDLE_CENTER:case n.Position.BOTTOM_CENTER:return e.Width/2;case n.Position.TOP_RIGHT:case n.Position.MIDDLE_RIGHT:case n.Position.BOTTOM_RIGHT:return e.Width}},t.getY=function(t,e){switch(t){case n.Position.TOP_LEFT:case n.Position.MIDDLE_LEFT:case n.Position.BOTTOM_LEFT:return 50;case n.Position.TOP_CENTER:case n.Position.MIDDLE_CENTER:case n.Position.BOTTOM_CENTER:return e.Height/2;case n.Position.TOP_RIGHT:case n.Position.MIDDLE_RIGHT:case n.Position.BOTTOM_RIGHT:return e.Height}},t}();Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=o},function(t,e){"use strict";!function(t){t[t.TOP_LEFT=0]="TOP_LEFT",t[t.TOP_CENTER=1]="TOP_CENTER",t[t.TOP_RIGHT=2]="TOP_RIGHT",t[t.MIDDLE_LEFT=3]="MIDDLE_LEFT",t[t.MIDDLE_CENTER=4]="MIDDLE_CENTER",t[t.MIDDLE_RIGHT=5]="MIDDLE_RIGHT",t[t.BOTTOM_LEFT=6]="BOTTOM_LEFT",t[t.BOTTOM_CENTER=7]="BOTTOM_CENTER",t[t.BOTTOM_RIGHT=8]="BOTTOM_RIGHT"}(e.Position||(e.Position={}));e.Position},function(t,e){"use strict";var i=function(){function t(t,e,i,n){this.value=t,this.font=e,this.color=i,this.position=n}return t}();Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=i}]);
//# sourceMappingURL=app.js.map