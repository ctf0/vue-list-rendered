Vue.directive('listRendered', {
    bind(el, binding, vnode) {
        let [index, list, cb] = [...binding.value]

        if (index == list.length - 1) {
            vnode.context.$nextTick(() => {
                return cb(list[list.length - 1])
            })
        }
    }
})
