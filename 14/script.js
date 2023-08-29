var Logger = /** @class */ (function () {
    function Logger(wrappedClass) {
        this.wrappedClass = wrappedClass;
    }
    Logger.prototype.logMethod = function (methodName) {
        var originalMethod = this.wrappedClass[methodName];
        this.wrappedClass[methodName] = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            console.log("Calling ".concat(methodName, " with args: ").concat(JSON.stringify(args)));
            var result = originalMethod.apply(this, args);
            console.log("".concat(methodName, " returned: ").concat(JSON.stringify(result)));
            return result;
        };
    };
    Logger.prototype.decorateMethods = function () {
        var _this = this;
        var methods = Object.getOwnPropertyNames(this.wrappedClass.prototype);
        methods.forEach(function (method) {
            if (typeof _this.wrappedClass.prototype[method] === 'function') {
                _this.logMethod(method);
            }
        });
    };
    return Logger;
}());
var ExampleClass = /** @class */ (function () {
    function ExampleClass() {
    }
    ExampleClass.prototype.method1 = function (x, y) {
        return x + y;
    };
    ExampleClass.prototype.method2 = function (text) {
        return text.toUpperCase();
    };
    return ExampleClass;
}());
var logger = new Logger(ExampleClass);
logger.decorateMethods();
var exampleInstance = new ExampleClass();
var result1 = exampleInstance.method1(3, 5);
var result2 = exampleInstance.method2("hello");
console.log("Final results:", result1, result2);
