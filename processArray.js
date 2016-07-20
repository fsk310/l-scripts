function processArray(items, process, callback) {
    var todo = items.concat();
    setTimeout(function{
        process(todo.shife());
        if(todo.length>0){
            setTimeout(argument.callee, 25);
        }else{
            callback(items);
        }
    },25);
}