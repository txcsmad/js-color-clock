'use strict';

class Clock {
    // create a clock initialized with the current date
    constructor(node) {
        this.current = new Date();
        this.node = node;
    }

    // starts the clock and prepare
    // to update when necessary
    start() {
        setInterval(_ => { // arrow functions preserve `this`
            this.update();
        }, 100); // 100ms
    }

    // updates the clock's current time
    // and updates the view
    update() {
        this.current = new Date();
        let d = this.asDisplayString();
        
        // performance optimization
        if (this.currentStr == d) return;

        document.body.style.backgroundColor = this.asColorString();
        this.node.textContent = d;
        this.currentStr = d;
    }

    // returns an array of [hh, mm, ss]
    components() {
        let hh = this.current.getHours().toString();
        if (hh.length == 1) hh = "0"+hh;

        let mm = this.current.getMinutes().toString();
        if (mm.length == 1) mm = "0"+mm;

        let ss = this.current.getSeconds().toString();
        if (ss.length == 1) ss = "0"+ss;

        return [hh,mm,ss];
    }

    // returns hex code for current time
    asColorString() {
        let c = this.components()
        return "#"+c.join("");
    }

    // return a string of current time formatted as `hh:mm:ss`
    asDisplayString() {
        let c = this.components();
        return c.join(":"); // or use `template strings` to format
    }
}
