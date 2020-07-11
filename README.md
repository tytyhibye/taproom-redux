# Tap Room - Redux Refactor

#### By Tyler Bates
<hr/>

## Description

A React Web application for a virtual TapRoom. <br>
The user to create, update, delete and view the details of added kegs of beer. This repository is a refactor of the [Taproom](https://github.com/tytyhibye/taproom) application and implements Redux for all local and shared state.
<hr />

## Component Diagrams

### Entry & Edit Form:
<img src='public\FormDiagram.drawio.png'>

### Beer List:
<img src='public\ListDiagram.drawio.png'>

### Beer Details:
<img src='public\DetailsDiagram.drawio.png'>
<hr/>

## Logistics

|||
|-----|-----|
| :ballot_box_with_check: |User can view list of available kegs displaying name of beer, brewery, and time since tapped|
| :ballot_box_with_check: |User can submit a form to add a new keg to the list|
| :ballot_box_with_check: |User can view submitted details of each Beer in List by clicking on name|
| :ballot_box_with_check: |Details card will include pints left in keg and option to sell a pint (decrement by 1) or tap a new keg (reset to 124). Pints left should not go below 0|
| :ballot_box_with_check: |User can update beer details by submitting edit form|
| :ballot_box_with_check: |User can delete beer from list|

<hr />


## Setup/Installation Requirements

1. Clone this projects repository into your local directory following [these](https://www.linode.com/docs/development/version-control/how-to-install-git-and-clone-a-github-repository/) instructions.

2. Open the now local project folder with [VSC](https://code.visualstudio.com/Download) or an equivalent

3. Navigate to the project directory from your terminal by entering the following:

```
$ cd ~/taproom-refactor
```
4. Within the projects directory install all required dependencies with
```
$ npm install
```
5. Run the application to view in your browser with
```
$ npm run start
```

>If the browser does not automatically launch, view the project [here](https://localhost:3000)

<hr/>

## Known Bugs

### Threading incrementation
The threading aspect is still in progress and if the page is open for more than an hour a TypeError will occur.

<hr/>

## Technologies Used

- JavaScript
- React
- Redux
- Material UI
- HTML
- CSS
- Git

## Legal

#### Apache License V2.0

Copyright 2020 Tyler Bates @ Epicodus

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.