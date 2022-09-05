# How to create this Angular-Monorepo project

To create an Angular-Monorepo Project just type the following things.

    ng new angular-monorepo-mobile-phone-shop-example --create-application false -p mps
    
Go to the folder via terminal:

    cd angular-monorepo-mobile-phone-shop-example

I am using @angular/materials so type:

    ng add @angular/material

# Creating Angular-Application to your monorepo

Our first application will be the fontpage. This application will be the default application.

    ng g application frontpage -p frp

# How to start your monorepo

Just type:

    ng serve

It will start the default project (see angular.json). In my case is the default project "frontpage"