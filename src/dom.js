window.dom = {
    find(string) {
        return document.querySelectorAll(string)
    },
    style(node, name, sheet) {

        return node.style[name] = sheet

    },
    each(node, fn) {
        for (let n = 0; n < node.length; n++) {
            fn.call(null, node[n])
        }
    },
}