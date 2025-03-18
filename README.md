# Build hotel inventory app by Angular 

## Study Notes
> [!NOTE]
> Learn Angular in this complete course for beginners. First you will learn the basics of Typescript and then you will learn about important Angular concepts such as binding, dependency injection, forms, routing, and more. Let's explore the youtube ✔ [Learning resources](https://www.youtube.com/watch?v=3qBXWUpoPHo&t=608s).


 ## Tutorial Content
 - Angular Installation and Basics
   - Angular Installation and Binding Syntax
   - Built-in Directives
   - Built-in Pipes
   - Adding Bootstrap CSS to App
 - Lifecycle Hook and Component Communication
   - ngOnInt and Component Communication using Input and Output
   - Change Detection and ngOnChanges
   - ngDoCheck
   - ViewChild, ViewChildren and AfterViewInit
   - Content Projection, AfterContentInit and OnDestroy

> [!TIP]
> 1. **Interface compiles: Descide whether you want to use interfaces or classes:** JS will be not finded that particular interface. At run time all the interface once compile your code, all the interfaces will be removed. Go ahead to use clasess when you build a production code, generally use backend applications, you should use classes for writing type, for example you come across nextjs or expressjs, you cannot take interfaces, because type is gone when you built. Use classes, and retain the type. Easy for varify the correct information.
> 2. **Unit test file:** angular generates automatically unit test file. In config file `tsconfig.spec.json`, there is a setting to generate unit test file.
> 3. **Proporty binding:** `[]` is used for property binding. `{{}}` is used for string interpolation in HTML.
> 4. **Event binding:** `()` is used for event binding.
> 5. **Build-in Directives:** 
> - `*ngIf` - If the condition is true, then the element will be displayed.
> - `*ngFor` - Loop through the array and display the elements.
> - `*ngSwitch` - Switch case statement, `*ngSwitchCase` and `*ngSwitchDefault` are used.
> - starts with `*` is called structural directive. Means it will modify the DOM, but this cannot add or remove the element from the DOM.
> - `ngClass` - Add class dynamically.
> - `ngStyle` - Add style dynamically.
> - `ngModel` - Two way data binding.
> 6. **Built-in Pipes:** DatePipe, UpperCasePipe, LowerCasePipe, CurrencyPipe, DecimalPipe, PercentPipe, AsyncPipe, JsonPipe, SlicePipe.
> 7. **Lifecycle Hooks:** ngOnChanges, ngOnInit, ngDoCheck, ngAfterContentInit, ngAfterContentChecked, ngAfterViewInit, ngAfterViewChecked, ngOnDestroy.<br>
> Note: "constructor shouldn't have any block code, after constructor, ngOnInit will be called."
> 8. **Component Communication:**
> - Using `@Input` decorator, parent to child communication; using `@Output` decorator, child to parent communication.
> - Using `@ViewChild` and `@ContentChild` decorators, to access the child component.
> - Using Service, to communicate between components.
