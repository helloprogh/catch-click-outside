import 'core-js/modules/es6.reflect.delete-property';
import 'core-js/modules/es7.symbol.async-iterator';
import 'core-js/modules/es6.symbol';

var eventsMap = {};

function bind(el, binding) {
  function documentHandler(e) {
    if (el.contains(e.target)) {
      return false;
    }

    if (binding.expression) {
      binding.value(e);
    }
  }

  var fnKey = Symbol.for(el);
  eventsMap[fnKey] = documentHandler;
  document.addEventListener('click', documentHandler, true);
}

function unbind(el) {
  var fnKey = Symbol.for(el);
  document.removeEventListener('click', eventsMap[fnKey], true);
  Reflect.deleteProperty(eventsMap, fnKey);
}

var directive = {
  bind: bind,
  unbind: unbind
};

var plugin = {
  install: function install(Vue) {
    Vue.directive('click-outside', directive);
  },
  directive: directive
};

export default plugin;
