webpackJsonp([0],{166:function(e,t,r){"use strict";e.exports=r(167)},167:function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var s=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),i=r(8),l=i.Component,c=function(e){function t(){return n(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),s(t,[{key:"render",value:function(){return this.props.component?i.createElement(this.props.component,this.props.props):i.Children.only(this.props.children)}}]),t}(l);e.exports=c},168:function(e,t,r){"use strict";var n=r(166);e.exports=function(e){throw this&&this.callback?new Error('React Hot Loader: The Webpack loader is now exported separately. If you use Babel, we recommend that you remove "react-hot-loader" from the "loaders" section of your Webpack configuration altogether, and instead add "react-hot-loader/babel" to the "plugins" section of your .babelrc file. If you prefer not to use Babel, replace "react-hot-loader" or "react-hot" with "react-hot-loader/webpack" in the "loaders" section of your Webpack configuration.'):e&&e.types&&e.types.IfStatement?new Error('React Hot Loader: The Babel plugin is exported separately. Replace "react-hot-loader" with "react-hot-loader/babel" in the "plugins" section of your .babelrc file. While we recommend the above, if you prefer not to use Babel, you may remove "react-hot-loader" from the "plugins" section of your .babelrc file altogether, and instead add "react-hot-loader/webpack" to the "loaders" section of your Webpack configuration.'):new Error('React Hot Loader does not have a default export. If you use the import statement, make sure to include the curly braces: import { AppContainer } from "react-hot-loader". If you use CommonJS, make sure to read the named export: require("react-hot-loader").AppContainer.')},e.exports.AppContainer=n},180:function(e,t,r){var n=r(181),o=r(80),a=o;a.v1=n,a.v4=o,e.exports=a},181:function(e,t,r){function n(e,t,r){var n=t&&r||0,o=t||[];e=e||{};var s=void 0!==e.clockseq?e.clockseq:l,_=void 0!==e.msecs?e.msecs:(new Date).getTime(),p=void 0!==e.nsecs?e.nsecs:u+1,d=_-c+(p-u)/1e4;if(d<0&&void 0===e.clockseq&&(s=s+1&16383),(d<0||_>c)&&void 0===e.nsecs&&(p=0),p>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");c=_,u=p,l=s,_+=122192928e5;var f=(1e4*(268435455&_)+p)%4294967296;o[n++]=f>>>24&255,o[n++]=f>>>16&255,o[n++]=f>>>8&255,o[n++]=255&f;var m=_/4294967296*1e4&268435455;o[n++]=m>>>8&255,o[n++]=255&m,o[n++]=m>>>24&15|16,o[n++]=m>>>16&255,o[n++]=s>>>8|128,o[n++]=255&s;for(var h=e.node||i,E=0;E<6;++E)o[n+E]=h[E];return t?t:a(o)}var o=r(79),a=r(78),s=o(),i=[1|s[0],s[1],s[2],s[3],s[4],s[5]],l=16383&(s[6]<<8|s[7]),c=0,u=0;e.exports=n},182:function(e,t){var r;r=function(){return this}();try{r=r||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(r=window)}e.exports=r},183:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(83),o=(r.n(n),r(8)),a=r.n(o),s=r(29),i=r.n(s),l=r(81),c=r(82),u=(r.n(c),document.getElementById("root")),_=function(){i.a.render(a.a.createElement(n.AppContainer,null,a.a.createElement(l.a,null)),u)};_();(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(u,"rootEl","/Users/AlexanderTorn/Sites/morphobox/app/index.js"),__REACT_HOT_LOADER__.register(_,"render","/Users/AlexanderTorn/Sites/morphobox/app/index.js"))})()},78:function(e,t){function r(e,t){var r=t||0,o=n;return o[e[r++]]+o[e[r++]]+o[e[r++]]+o[e[r++]]+"-"+o[e[r++]]+o[e[r++]]+"-"+o[e[r++]]+o[e[r++]]+"-"+o[e[r++]]+o[e[r++]]+"-"+o[e[r++]]+o[e[r++]]+o[e[r++]]+o[e[r++]]+o[e[r++]]+o[e[r++]]}for(var n=[],o=0;o<256;++o)n[o]=(o+256).toString(16).substr(1);e.exports=r},79:function(e,t,r){(function(t){var r,n=t.crypto||t.msCrypto;if(n&&n.getRandomValues){var o=new Uint8Array(16);r=function(){return n.getRandomValues(o),o}}if(!r){var a=new Array(16);r=function(){for(var e,t=0;t<16;t++)0===(3&t)&&(e=4294967296*Math.random()),a[t]=e>>>((3&t)<<3)&255;return a}}e.exports=r}).call(t,r(182))},80:function(e,t,r){function n(e,t,r){var n=t&&r||0;"string"==typeof e&&(t="binary"==e?new Array(16):null,e=null),e=e||{};var s=e.random||(e.rng||o)();if(s[6]=15&s[6]|64,s[8]=63&s[8]|128,t)for(var i=0;i<16;++i)t[n+i]=s[i];return t||a(s)}var o=r(79),a=r(78);e.exports=n},81:function(e,t,r){"use strict";var n=r(8),o=r.n(n),a=r(87),s=function(e){return o.a.createElement("div",{className:"client_container"},o.a.createElement("div",{className:"page_wrap"},o.a.createElement("div",{className:"toppanel"},o.a.createElement("h1",null,"Morphobox")),o.a.createElement("div",{className:"page_content"},o.a.createElement("div",{className:"p_content"},o.a.createElement(a.a,null)))))},i=s;t.a=i;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(s,"App","/Users/AlexanderTorn/Sites/morphobox/app/components/App.js"),__REACT_HOT_LOADER__.register(i,"default","/Users/AlexanderTorn/Sites/morphobox/app/components/App.js"))})()},82:function(e,t){},83:function(e,t,r){e.exports=r(168)},84:function(e,t,r){"use strict";var n=r(8),o=r.n(n),a=r(85),s=r(88),i=r(86),l=function(e){var t=e.rows,r=e.title,n=function(t){e.handleDel(e.id)};return o.a.createElement("div",{className:"grid_col"},o.a.createElement("button",{className:"btn_del",onClick:n},"-"),o.a.createElement(a.a,{title:r}),t.map(function(e){return o.a.createElement(s.a,{key:e.id,className:"grid_row",text:e.text})}),o.a.createElement(i.a,e))};l.propTypes={rows:n.PropTypes.array.isRequired,title:n.PropTypes.string.isRequired};var c=l;t.a=c;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(l,"Col","/Users/AlexanderTorn/Sites/morphobox/app/components/Col.js"),__REACT_HOT_LOADER__.register(c,"default","/Users/AlexanderTorn/Sites/morphobox/app/components/Col.js"))})()},85:function(e,t,r){"use strict";var n=r(8),o=r.n(n),a=function(e){var t=e.title;return o.a.createElement("div",{className:"grid_row grid_head"},t)};a.propTypes={title:n.PropTypes.string.isRequired};var s=a;t.a=s;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(a,"ColTitle","/Users/AlexanderTorn/Sites/morphobox/app/components/ColTitle.js"),__REACT_HOT_LOADER__.register(s,"default","/Users/AlexanderTorn/Sites/morphobox/app/components/ColTitle.js"))})()},86:function(e,t,r){"use strict";var n=r(8),o=r.n(n),a=function(e){var t=e.addRow,r=e.id,n=void 0;return o.a.createElement("div",{className:"grid_row"},o.a.createElement("button",{className:"btn btn_sml",onClick:function(){t(n.value,r),n.value=""}},"+"),o.a.createElement("input",{className:"input_text",ref:function(e){n=e}}))};a.propTypes={addRow:n.PropTypes.any.isRequired,id:n.PropTypes.any.isRequired};var s=a;t.a=s;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(a,"Input","/Users/AlexanderTorn/Sites/morphobox/app/components/Input.js"),__REACT_HOT_LOADER__.register(s,"default","/Users/AlexanderTorn/Sites/morphobox/app/components/Input.js"))})()},87:function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var s=r(8),i=r.n(s),l=r(80),c=r.n(l),u=r(84),_=r(89),p=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),d=function(e){function t(){var e,r,a,s;n(this,t);for(var i=arguments.length,l=Array(i),c=0;c<i;c++)l[c]=arguments[c];return r=a=o(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(l))),a.state={cols:[],colNumber:"",rand:[]},a.getRandomRow=function(){var e;return(e=a).__getRandomRow__REACT_HOT_LOADER__.apply(e,arguments)},a.handleGen=function(){var e;return(e=a).__handleGen__REACT_HOT_LOADER__.apply(e,arguments)},a.handleAdd=function(){var e;return(e=a).__handleAdd__REACT_HOT_LOADER__.apply(e,arguments)},a.handleDel=function(){var e;return(e=a).__handleDel__REACT_HOT_LOADER__.apply(e,arguments)},a.addRow=function(){var e;return(e=a).__addRow__REACT_HOT_LOADER__.apply(e,arguments)},s=r,o(a,s)}return a(t,e),p(t,[{key:"componentWillMount",value:function(){this.setState({cols:_.a,colNumber:_.a.length})}},{key:"__getRandomRow__REACT_HOT_LOADER__",value:function(e){var t=e[Math.floor(Math.random()*e.length)];return t.text}},{key:"__handleGen__REACT_HOT_LOADER__",value:function(){var e=this,t=[],r=this.state.cols.filter(function(e){return 0!==e.rows.length});r.length&&r.map(function(r){return t.push(e.getRandomRow(r.rows))}),this.setState({rand:t.join(" ")})}},{key:"__handleAdd__REACT_HOT_LOADER__",value:function(){var e={id:c()(),title:"Column "+(this.state.colNumber+1),rows:[]};this.state.cols.push(e),this.setState({cols:this.state.cols,colNumber:this.state.cols.length})}},{key:"__handleDel__REACT_HOT_LOADER__",value:function(e){var t=this.state.cols.filter(function(t){return e!==t.id});this.setState({cols:t,colNumber:t.length})}},{key:"__addRow__REACT_HOT_LOADER__",value:function(e,t){var r=this;e&&!function(){var n={id:c()(),text:e},o=r.state.cols.filter(function(e){return t===e.id&&e.rows.push(n),e});r.setState({cols:o})}()}},{key:"render",value:function(){var e=this;return i.a.createElement("div",null,i.a.createElement("div",{className:"grid"},this.state.cols.map(function(t){return i.a.createElement(u.a,{key:t.id,title:t.title,rows:t.rows,id:t.id,handleDel:e.handleDel,addRow:e.addRow})}),i.a.createElement("div",{className:"plus"},i.a.createElement("button",{className:"btn_plus",onClick:this.handleAdd},"+"))),i.a.createElement("div",{className:"grid_btn"},i.a.createElement("button",{className:"btn",onClick:this.handleGen},"Generate")),i.a.createElement("div",{className:"grid_result"},"Result: ",this.state.rand))}}]),t}(i.a.Component),f=d;t.a=f;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(d,"MorphoBox","/Users/AlexanderTorn/Sites/morphobox/app/components/MorphoBox.js"),__REACT_HOT_LOADER__.register(f,"default","/Users/AlexanderTorn/Sites/morphobox/app/components/MorphoBox.js"))})()},88:function(e,t,r){"use strict";function n(e){var t=e.text;return a.a.createElement("div",{className:"grid_row"},t)}var o=r(8),a=r.n(o);n.propTypes={text:o.PropTypes.string.isRequired};var s=n;t.a=s;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(n,"Row","/Users/AlexanderTorn/Sites/morphobox/app/components/Row.js"),__REACT_HOT_LOADER__.register(s,"default","/Users/AlexanderTorn/Sites/morphobox/app/components/Row.js"))})()},89:function(e,t,r){"use strict";var n=r(180),o=r.n(n),a=[{id:o()(),title:"Column 1",rows:[]},{id:o()(),title:"Column 2",rows:[]},{id:o()(),title:"Column 3",rows:[]}],s=a;t.a=s;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(a,"data","/Users/AlexanderTorn/Sites/morphobox/app/data.js"),__REACT_HOT_LOADER__.register(s,"default","/Users/AlexanderTorn/Sites/morphobox/app/data.js"))})()}},[183]);