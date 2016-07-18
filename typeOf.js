function typeOf(o) {
    //获取对象的toString()方法的引用
    var _toString = Object.prototype.toString;
    //列举基本数据类型和内置对象类型，可以进一步补充钙数组的检测数据类型范围
    var _type = {
        "undefined": "undefined",
        "number": "number",
        "boolean": "boolean",
        "string": "string",
        "[object Function]": "function",
        "[object RegExp]": "regexp",
        "[object Array]": "array",
        "[object Date]": "date",
        "[object Error]": "error"
    };
    return _type[typeof o] || _type[_toString.call(0)] || (o ? "object" : "null");
}