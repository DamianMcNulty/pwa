exports.ids=[0],exports.modules={"/1+u":function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n("Jmof"),c=n.n(i),s=n("T9WB"),l=(n.n(s),n("JgyH")),u=n.n(l),f=n("9BV8"),m=n("yREc"),p=n("ZgUD"),b=(n.n(p),function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}()),d=function(e){function t(){var e,n,o,i;r(this,t);for(var c=arguments.length,s=Array(c),l=0;l<c;l++)s[l]=arguments[l];return n=o=a(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(s))),o.state={active:1},o.showTestimonial=function(e){return function(){o.setState({active:e})}},i=n,a(o,i)}return o(t,e),b(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.testimonials,r=t.loadTime,a=this.state.active;return n.length?c.a.createElement("section",{className:"testimonials"},r?c.a.createElement("small",null,"Took: ",r):null,c.a.createElement(f.b,{className:"testimonials__list",between:!0},n.map(function(t,n){var r=t.name,o=t.picture;return c.a.createElement(f.a,{key:r.first},c.a.createElement("img",{className:u()("testimonials__img",{"testimonials__img--active":a===n}),src:o.medium,alt:r.first,onClick:e.showTestimonial(n)}),c.a.createElement("div",{className:u()("testimonials__name",{"testimonials__name--visible":a===n})},r.first))})),c.a.createElement("p",null,n[a].location.street)):null}}]),t}(i.Component);t.a=Object(m.a)("testimonials")(d)},"9BV8":function(e,t,n){"use strict";var r=n("i+mO"),a=(n.n(r),n("Zpxd"),n("neGU"));n.d(t,"b",function(){return a.a});var o=n("NTaD");n.d(t,"a",function(){return o.a})},MjXK:function(e,t){},NTaD:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}var o=n("Jmof"),i=n.n(o),c=n("T9WB"),s=(n.n(c),n("JgyH")),l=n.n(s),u=function(e){var t,n=e.className,o=e.tag,c=e.children,s=a(e,["className","tag","children"]);return i.a.createElement(o,{className:l()("col",(t={},r(t,"col--"+s.size,s.size),r(t,"col--offset-"+s.offset,s.offset),r(t,"col--first",s.first),r(t,"col--last",s.last),r(t,"col--reverse",s.reverse),t),n)},c)};u.defaultProps={tag:"div"},t.a=u},ZgUD:function(e,t){},Zpxd:function(e,t,n){"use strict";function r(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}var a=n("Jmof"),o=n.n(a),i=n("T9WB"),c=(n.n(i),n("JgyH")),s=n.n(c),l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u=function(e){var t=e.className,n=e.tag,a=e.fluid,i=e.children,c=r(e,["className","tag","fluid","children"]);return o.a.createElement(n,l({className:s()({container:!a,"container-fluid":a},t)},c),i)};u.defaultProps={tag:"div",fluid:!1}},cPAX:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("Jmof"),a=n.n(r),o=n("T9WB"),i=(n.n(o),n("qr+a")),c=(n.n(i),n("4X7x")),s=n.n(c),l=n("xJOU"),u=n("/1+u"),f=n("MjXK"),m=(n.n(f),function(e){var t=e.content.testimonials;return a.a.createElement("div",{className:"landing-page"},a.a.createElement("h1",null,"PWA"),a.a.createElement("p",null,"An opinionated progressive web app boilerplate"),a.a.createElement(u.a,{testimonials:t}))}),p=[{promise:function(e){var t=e.store,n=t.dispatch,r=t.getState;return s()(r().content.testimonials)?n(l.b(3)):null}}],b=function(e){return{content:e.content}};t.default=Object(i.asyncConnect)(p,b)(m)},g531:function(e,t){},"i+mO":function(e,t){},neGU:function(e,t,n){"use strict";function r(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}var a=n("Jmof"),o=n.n(a),i=n("T9WB"),c=(n.n(i),n("JgyH")),s=n.n(c),l=function(e){var t=e.className,n=e.tag,a=e.children,i=r(e,["className","tag","children"]);return o.a.createElement(n,{className:s()("row",{"row--start":i.start,"row--center":i.center,"row--end":i.end,"row--top":i.top,"row--middle":i.middle,"row--bottom":i.bottom,"row--around":i.around,"row--between":i.between,"row--reverse":i.reverse},t)},a)};l.defaultProps={tag:"div"},t.a=l},yREc:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n("Jmof"),c=n.n(i),s=n("4X7x"),l=n.n(s),u=n("Zz1P"),f=n.n(u),m=n("g531"),p=(n.n(m),Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}),b=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),d=function(e){return function(t){return function(n){function i(){return r(this,i),a(this,(i.__proto__||Object.getPrototypeOf(i)).apply(this,arguments))}return o(i,n),b(i,[{key:"componentDidMount",value:function(){this.startTime=f()()}},{key:"componentWillUpdate",value:function(){this.endTime=f()()}},{key:"render",value:function(){var n={loadTime:this.endTime?this.endTime.diff(this.startTime,"ms")+"ms":null};return l()(this.props[e])?c.a.createElement("div",{className:"sk-cube-grid"},c.a.createElement("div",{className:"sk-cube sk-cube1"}),c.a.createElement("div",{className:"sk-cube sk-cube2"}),c.a.createElement("div",{className:"sk-cube sk-cube3"}),c.a.createElement("div",{className:"sk-cube sk-cube4"}),c.a.createElement("div",{className:"sk-cube sk-cube5"}),c.a.createElement("div",{className:"sk-cube sk-cube6"}),c.a.createElement("div",{className:"sk-cube sk-cube7"}),c.a.createElement("div",{className:"sk-cube sk-cube8"}),c.a.createElement("div",{className:"sk-cube sk-cube9"})):c.a.createElement(t,p({},this.props,n))}}]),i}(i.Component)}};t.a=d}};
//# sourceMappingURL=landing.js.map