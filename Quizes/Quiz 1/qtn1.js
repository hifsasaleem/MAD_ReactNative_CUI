var myObj = {
    foo: 'bar',
    func: function () {
        var self = this;
        console.log('outer function this.foo = ' + this.foo);
        console.log('outer function self.foo = ' + self.foo);
            (
                function () {
                    console.log('inner function this.foo = ' + this.foo)
                    console.log('inner function self.foo = ' + self.foo)
                }
                    ());
    }
}

myObj.func()

// Output:
// outer function this.foo = bar
// outer function self.foo = bar
// inner function this.foo = undefined
// inner function self.foo = bar
