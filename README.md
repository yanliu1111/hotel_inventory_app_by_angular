# Build hotel inventory app by Angular 
### version status:
Angular 17 (standalone false)
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
 - Dependency Injection
   - Resolution Modifiers
   - Value Providers
 - RxJs observables
 - Http Put and Delete
 - Augular router and default route
   - ActivatedRoute Service
   - Advanced Routing
     - Feature and Module Routing
     - Nested and Child Routes
     - Lazy Loading
     - Configure Lazy Loading using Angular CLI
     - Using ProvidedIn Any
     - Router Events
     - Listening to Router Events
 - Adding Angular Material
 - Template Driven Forms
   - Validation
   - Pristine, Dirty State and Reset Form
   - Custom Directives and Custom Validation
 - Lazy Loading
 - Route guards
 - Reactive Forms
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
  > - **Note:**
  >   - **constructor** shouldn't have any block code, after constructor, ngOnInit will be called. <br>
  >   - **ngDoCheck** - It will be called whenever the change detection runs. You should not implement ngOnchanges and DoCheck together on same component<br>
  >   - We have communicating with a component which has input property and then then child component can send some data back using input/output decorator. But there is other way, you have a component but you don't make it reusable, no input/output, they are individual components. Probably assign some property or call function of this particular component, you can use** ViewChild and ContentChild** decorator.<br>
  >   - **ng-content** is used for content projection
> 
> 8. **Component Communication:**
> - Using `@Input` decorator, parent to child communication; using `@Output` decorator, child to parent communication.
> - Using `@ViewChild` and `@ContentChild` decorators, to access the child component.
> - Using Service, to communicate between components.
> 
> 9. **observables and observer :**
> how observables work, we can create an observable stream that emits values and then subscribe to it to listen to those values.
> ```ts
>  stream = new Observable<string>((observer) => {
>    observer.next('user1');
>    observer.next('user2');
>    observer.next('user3');
>    observer.complete();
>  });
>```
> 10. **Built-in Pipes:**
> - DatePipe, UpperCasePipe, LowerCasePipe, CurrencyPipe, DecimalPipe, PercentPipe, AsyncPipe, JsonPipe, SlicePipe.
> 11. **HeaderModule:** We have created two feature mondules, one to show the scenario where we will not have any routing module we will have a component which is reusable and can accessed outside of its own mpdule, it is not going to be used inside its own module. Another example, we move all rooms related components inside its own rooms.module.ts. <br>
> **So** header has own header.module.ts, and rooms has own rooms.module.ts.
> 12. **Lazy Loading:** Lazy loading is for the modules really big, users wont be used frequently, not developers. Ask the business what is the frequency how many users expecting views. As you know the user behavior, you can implement lazy loading. Other views like user profile page, user dashboard, user settings, user account <br>
> > 13. **Route Guards:** canActivate, canDeactivate, resolve (most deprecated).