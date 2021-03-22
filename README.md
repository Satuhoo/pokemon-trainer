# Pokemon trainer

The application provides the catalogue of pokemons and chance to collect them. Used Pokemon API for this project (https://pokeapi.co/).

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.3.

## Pages

The application uses local storage to save username and catched pokemons. It redirects user to login page if there is not saved username in the storage. Log out button clears all information from the storage and also redirects back to the login page.

### Login Page

The login page is shown for all the users who are not logged in. The application requires the valid username to navigate to the other pages. In this case valid username means something else than empty value. After logging in the application navigates to the catalogue and shows the log out button in the header.

### Pokemon catalogue

Pokemon catalogue is the collection of pokemon cards. Collection is paginated and it shows 12 pokemon cards on the each pages. User can open pokemon detail page by clicking any pokemon card.

### Trainer page

Collected pokemon cards are saved in the local storage and they are shown in the Trainer page. User can see pokemon details by clicking any pokemon card in the list.

### Pokemon details

The pokemon details page contains pokemon image, name and lot of another data of the each pokemon. Data is fetched from the pokemon API. Page contains also the 'catch' button, which provides an opportunity to user to collect the pokemon card. If pokemon card is already collected, the page shows text 'catched' instead of the button.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
