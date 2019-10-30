
function bind(el, binding) {
    function documentHandler (e) {
        if (el.contains(e.target)) {
            return false;
        }
        if (binding.expression) {
            binding.value(e);
        }
    }
    el.__VueClickOutside__ = documentHandler;
    document.addEventListener('click', documentHandler, true);
}

function unbind(el) {
    document.removeEventListener('click', el.__VueClickOutside__, true);
    delete el.__VueClickOutside__
}

export default {
    bind,
    unbind
}