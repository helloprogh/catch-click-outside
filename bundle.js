import 'core-js/modules/es.symbol';
import 'core-js/modules/es.symbol.description';
import 'core-js/modules/es.object.to-string';
import 'core-js/modules/es.reflect.delete-property';

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
