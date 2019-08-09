# InputAndOutput

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.1.4.


## App-Setup

bootstrap Login: https://bootsnipp.com/snippets/GaZG0
ng new <AppName> --style=scss --routing

## Ng-Bootstrap Verstion List
https://www.npmjs.com/package/@ng-bootstrap/ng-bootstrap

## Install BootStrap / Ng-BootStrap
Step1: ng new [AppName] --style=scss --routing --prefix myprefix
Step2: npm install --save @ng-bootstrap/ng-bootstrap@4.2.1 [specific version for Angular 7]

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  ...
  imports: [NgbModule, ...],
  ...
})
export class YourAppModule {
}

Step1: npm install bootstrap --save
Step2: Open angular.json
"styles": [
  "src/styles.scss",
  "node_modules/bootstrap/dist/css/bootstrap.min.css"
],

---------------- [or] ---------------------

Step3: npm install bootstrap --save Step4: Open angular.json "styles": [ "src/styles.scss", "node_modules/bootstrap/dist/css/bootstrap.min.css" ], ----- [or] -------

There are many ways to do that. The simpest method is by using the [src/styles.css]file and adding the following code: URL: https://www.techiediaries.com/angular-bootstrap-ui/ @import "~bootstrap/dist/css/bootstrap.css";


## @input

![001-input-output](https://user-images.githubusercontent.com/30646609/62789135-f27bfd80-bae5-11e9-9f2e-0eac76e453f9.JPG)
![002-input-output](https://user-images.githubusercontent.com/30646609/62789136-f27bfd80-bae5-11e9-934b-011388cb97fb.JPG)