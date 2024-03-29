/**
 * bling.js
 * https://gist.github.com/paulirish/12fb951a8b893a454b32
 */

window.$$ = document.querySelectorAll.bind(document);
window.$ = document.querySelector.bind(document);

Node.prototype.on = window.on = function (name, fn, ...options) {
  if (options.length > 0) {
    this.addEventListener(name, fn, ...options);
  } else {
    this.addEventListener(name, fn);
  }
};

NodeList.prototype.__proto__ = Array.prototype;

NodeList.prototype.on = NodeList.prototype.addEventListener = function (
  name,
  fn,
  ...options
) {
  if (options.length > 0) {
    this.forEach(function (elem, i) {
      elem.on(name, fn, ...options);
    });
  } else {
    this.forEach(function (elem, i) {
      elem.on(name, fn);
    });
  }
};
