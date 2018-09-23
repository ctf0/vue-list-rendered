Vue.directive('listRendered', {
    bind(el, binding, vnode) {
        let [index, list, cb] = [...binding.value]
        let debug = binding.arg

        if (debug) {
            console.log({
                index: index,
                list: list,
                isLast: index == list.length - 1
            });
        }

        if (index == list.length - 1) {
            vnode.context.$nextTick(() => {
                return cb(list[list.length - 1])
            })
        }
    }
})
