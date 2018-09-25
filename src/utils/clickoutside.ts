const clickoutsideContext = '@@clickoutsideContext';
interface Binding{
  name: string,
  value: any,
  oldValue: any,
  expression: any,
  arg: string,
  modifiers: object
}
export default {
  /**
   * @description direction function, inital configure, just recall one time
   * @param el binding dom element
   * @param binding {Object}
   * @param vnode visual node
   */
  bind (el: any, binding: Binding, vnode: any) {
    const documentHandler = function(e: Event) {
      if(!vnode.context || el.contains(<HTMLElement>e.target) 
        || vnode.context.popperElm && (vnode.context.popperElm.contains(e.target))) {
        return false;
      }
      if (binding.expression) {
        vnode.context[el[clickoutsideContext].methodName](e)
      } else {
        el[clickoutsideContext].bindingFn(e);
      }
    }
    el[clickoutsideContext] = {
      documentHandler,
      methodName: binding.expression,
      bindingFn: binding.value
    }
    setTimeout(() => {
      document.addEventListener('mouseup', documentHandler);
    }, 0)
  },
  update (el: any, binding: Binding) {
    el[clickoutsideContext].methodName = binding.expression;
    el[clickoutsideContext].bindingFn = binding.value;
  },
  unbind(el: any) {
    document.removeEventListener('mouseup', el[clickoutsideContext].documentHandler);
  }
}
