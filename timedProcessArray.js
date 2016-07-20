function timedProcessArray(items, process, callback) {
    var todo = items.concat();
    setTimeout(function(){
        var start = +new Date();
        do{
            process(todo.shift());
        }while(todo.length>0 && (+new Date() - start < 50));
        if(todo.length >0){
            setTimeout(arguments.callee, 25);
        } else {
            callback(items);
        }
    }, 25);
}