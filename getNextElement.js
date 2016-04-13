function styleHeaderSiblings () {
    if(!document,getElementsByTagName) return false;
    var headers = document.getElementsByTagName("h1");
    var elem;
}

function getNextElement (node) {
    if(node.nodeType == 1) {
        return node;
    }
    if (node.nextSibling) {
        return getNextElement(node.nextSibling);
    }
    return null;
}