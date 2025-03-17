# MyAngularApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.13.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

> [!NOTE]
> You will notice there are many failing tests. We encourage developers to adopt a TDD approach to development. You should implement the features to get these tests to pass.

> [!TIP]
> 1. **Interface compiles: Descide whether you want to use interfaces or classes:** JS will be not finded that particular interface. At run time all the interface once compile your code, all the interfaces will be removed. Go ahead to use clasess when you build a production code, generally use backend applications, you should use classes for writing type, for example you come across nextjs or expressjs, you cannot take interfaces, because type is gone when you built. Use classes, and retain the type. Easy for varify the correct information.
> 2. **Unit test file:** angular generates automatically unit test file. In config file `tsconfig.spec.json`, there is a setting to generate unit test file.
> 3. **Proporty binding:** `[]` is used for property binding. `{{}}` is used for string interpolation in HTML.
> 4. **Event binding:** `()` is used for event binding.
> 5. **Two way binding:** `[(ngModel)]` is used for two way binding.