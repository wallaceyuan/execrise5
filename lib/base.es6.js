class Base {
    constructor(){
        this.events = {}
    }
    on(event, fn){
        (this.events[event] = this.events[event] || [])
            .push(fn)
    }
    trigger(event, value){
        var self = this;
        (this.events[event] || []).forEach(function (fn) {
            fn.call(self,value)
        })
    }
}


module.exports = Base