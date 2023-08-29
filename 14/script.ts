class Logger {
    constructor(private wrappedClass: any) {}
  
    private logMethod(methodName: string) {
      const originalMethod = this.wrappedClass[methodName];
  
      this.wrappedClass[methodName] = function (...args: any[]) {
        console.log(`Calling ${methodName} with args: ${JSON.stringify(args)}`);
        const result = originalMethod.apply(this, args);
        console.log(`${methodName} returned: ${JSON.stringify(result)}`);
        return result;
      };
    }
  
    decorateMethods() {
      const methods = Object.getOwnPropertyNames(this.wrappedClass.prototype);
  
      methods.forEach((method) => {
        if (typeof this.wrappedClass.prototype[method] === 'function') {
          this.logMethod(method);
        }
      });
    }
  }
  class ExampleClass {
    method1(x: number, y: number) {
      return x + y;
    }
    method2(text: string) {
      return text.toUpperCase();
    }
  }
  const logger = new Logger(ExampleClass);
  logger.decorateMethods();
  const exampleInstance = new ExampleClass();
  const result1 = exampleInstance.method1(3, 5);
  const result2 = exampleInstance.method2("hello");
  
  console.log("Final results:", result1, result2);
  