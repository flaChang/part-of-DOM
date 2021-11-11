window.dom = {
    find(string) {
        return document.querySelectorAll(string)
    },
    style(node, name, sheet) {

        if (arguments.length === 3) {
            node.style[name] = sheet
        } else if (arguments.length === 2) {
            if (typeof name === 'string') {
                return node.style[name];
            } else if (name instanceof Object) {
                const object = name;
                for (let key in object) { //for in对象时，key表示键，for in数组时，key表示下标
                    node.style[key] = object[key];
                }
            }


        }
    },
    each(node, fn) {
        for (let n = 0; n < node.length; n++) {
            fn.call(null, node[n])
        }
    },
}