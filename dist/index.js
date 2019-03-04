!function(n,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("react"),require("prop-types"),require("smooth-dnd")):"function"==typeof define&&define.amd?define(["exports","react","prop-types","smooth-dnd"],e):e((n=n||self).ReactSmoothDnD={},n.React,n.PropTypes,n.SmoothDnD)}(this,function(n,r,e,o){"use strict";var i="default"in r?r.default:r;function a(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function s(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}function p(n,e,t){return e&&s(n.prototype,e),t&&s(n,t),n}function u(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function t(){return(t=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(this,arguments)}function l(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),e&&h(n,e)}function c(n){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}function h(n,e){return(h=Object.setPrototypeOf||function(n,e){return n.__proto__=e,n})(n,e)}function d(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function f(n,e){return!e||"object"!=typeof e&&"function"!=typeof e?d(n):e}e=e&&e.hasOwnProperty("default")?e.default:e,o.smoothDnD.dropHandler=o.dropHandlers.reactDropHandler().handler,o.smoothDnD.wrapChild=function(n){return n};var g=function(n){function t(n){var e;return a(this,t),u(d(e=f(this,c(t).call(this,n))),"prevContainer",void 0),u(d(e),"container",null),u(d(e),"containerRef",i.createRef()),e.getContainerOptions=e.getContainerOptions.bind(d(e)),e.getContainer=e.getContainer.bind(d(e)),e.prevContainer=null,e}return l(t,r.Component),p(t,[{key:"componentDidMount",value:function(){this.prevContainer=this.getContainer(),this.container=o.smoothDnD(this.getContainer(),this.getContainerOptions())}},{key:"componentWillUnmount",value:function(){this.container.dispose(),this.container=null}},{key:"componentDidUpdate",value:function(){this.getContainer()&&this.prevContainer&&this.prevContainer!==this.getContainer()&&(this.container.dispose(),this.container=o.smoothDnD(this.getContainer(),this.getContainerOptions()),this.prevContainer=this.getContainer())}},{key:"render",value:function(){return this.props.render?this.props.render(this.containerRef):i.createElement("div",{style:this.props.style,ref:this.containerRef},this.props.children)}},{key:"getContainer",value:function(){return this.containerRef.current}},{key:"getContainerOptions",value:function(){var n={};return this.props.onDragStart&&(n.onDragStart=this.props.onDragStart.bind(null)),this.props.onDragEnd&&(n.onDragEnd=this.props.onDragEnd.bind(null)),this.props.onDrop&&(n.onDrop=this.props.onDrop.bind(null)),this.props.getChildPayload&&(n.getChildPayload=this.props.getChildPayload.bind(null)),this.props.shouldAnimateDrop&&(n.shouldAnimateDrop=this.props.shouldAnimateDrop.bind(null)),this.props.shouldAcceptDrop&&(n.shouldAcceptDrop=this.props.shouldAcceptDrop.bind(null)),this.props.onDragEnter&&(n.onDragEnter=this.props.onDragEnter.bind(null)),this.props.onDragLeave&&(n.onDragLeave=this.props.onDragLeave.bind(null)),this.props.render&&(n.render=this.props.render.bind(null)),this.props.onDropReady&&(n.onDropReady=this.props.onDropReady.bind(null)),this.props.getGhostParent&&(n.getGhostParent=this.props.getGhostParent.bind(null)),Object.assign({},this.props,n)}}]),t}();u(g,"propTypes",{behaviour:e.oneOf(["move","copy","drag-zone"]),groupName:e.string,orientation:e.oneOf(["horizontal","vertical"]),style:e.object,dragHandleSelector:e.string,nonDragAreaSelector:e.string,dragBeginDelay:e.number,animationDuration:e.number,autoScrollEnabled:e.string,lockAxis:e.string,dragClass:e.string,dropClass:e.string,onDragStart:e.func,onDragEnd:e.func,onDrop:e.func,getChildPayload:e.func,shouldAnimateDrop:e.func,shouldAcceptDrop:e.func,onDragEnter:e.func,onDragLeave:e.func,render:e.func,getGhostParent:e.func,removeOnDropOut:e.bool}),u(g,"defaultProps",{behaviour:"move",orientation:"vertical"});var D=o.constants.wrapperClass,y=function(n){function e(){return a(this,e),f(this,c(e).apply(this,arguments))}return l(e,r.Component),p(e,[{key:"render",value:function(){if(this.props.render)return i.cloneElement(this.props.render(),{className:D});var n="".concat(this.props.className?this.props.className+" ":"");return i.createElement("div",t({},this.props,{className:"".concat(n).concat(D)}),this.props.children)}}]),e}();u(y,"propsTypes",{render:e.func,className:e.string}),n.Container=g,n.Draggable=y,Object.defineProperty(n,"__esModule",{value:!0})});
