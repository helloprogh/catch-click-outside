let eventsMap = {}

function bind(el, binding) {
    function documentHandler (e) {
        if (el.contains(e.target)) {
            return false;
        }
        if (binding.expression) {
            binding.value(e);
        }
    }
    const fnKey = Symbol.for(el);
    eventsMap[fnKey] = documentHandler;
    document.addEventListener('click', documentHandler, true);
}

function unbind(el) {
    const fnKey = Symbol.for(el);
    document.removeEventListener('click', eventsMap[fnKey], true);
    Reflect.deleteProperty(eventsMap, fnKey);
}

export default {
    bind,
    unbind
}