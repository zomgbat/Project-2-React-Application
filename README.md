# Meal Tracker App

This application is the Web Dev Jan-Mar 2024's react project. It is an app used to track meals over several days. The user can add meals from a database, add one-off meal information with a form, or add meals they eat frequently to the database directly, for ease of use.

Our plan is to build the most basic form of the app, then expand on it if we have time


 Project Structure
===================

| Pages | Route | Description | Links |
| --- | --- | --- | --- |
| Dashboard Page | / | App home page. Contains:
|   |   | Day cards, organized into a calendar month pattern. Clicking on a Day Card takes the user to that day's DayCardPage | DayCardPage
| DayCardPage | /day/:date | Daily meal tracking page. Contains:
|   |   | Daily Meal Card List - Meal cards, in column order. Each meal card consists of: delete button, image, meal name, meal calories | |
|   |   | 'Add meal' section: contains: |   |
|   |   | Scrollable single row of meal cards. These can be clicked to add them to the Daily Meal Card List |   |
|   |   | Search bar to filter meal cards. While empty, no meal cards are displayed |   |
|   |   | 'Add one-off meal' button: displays a form to enter a custom meal, with name and calorie fields, and Add button. This will add a one-off entry to the Daily Meal Card List |   |
|   |   |   |   |
| AboutPage | /about | Contains info about the team |   |
| CustomMealPage | /custom-meal | allows the user to add, edit, and delete custom meals in the app's database. Displays meal cards for all custom meals. Contains a search bar to filter custom meals |   |
| UserPage | /user | user profile page. Contains hard-coded data by default, but the user can edit it |   |

| Components | Where | Links |
| --- | --- | --- |
| Header | All pages | User button, Page Header (dynamic), App Logo button | UserPage, AboutPage |
| Footer | All pages | HomePage, CustomMealPage, Github |

| Arrays |
| --- |
| days = [(array of day objects)] |
| meals = [(array of default meal objects)] |
| customMeals = [(array of custom meals added by the user)]

| Objects |
| --- |
| User = {name, age, gender, height, weight, daily calorie target} |
| Day = {date, [array of meal objects eaten that day]} |
| Meal = {name, calories, image} |

Wireframes
==========

<img src="./src/assets/readMeAssets/IHP2-MT-WF-DashBoard.jpg" alt="Dashboard wireframe" width="200px">
<img src="src\assets\readMeAssets\IHP2-MT-WF-UserProfile.jpg" alt="User page wireframe" width="200px">
<img src="src\assets\readMeAssets\IHP2-MT-WF-About.jpg" alt="About page wireframe" width="200px">
<img src="src\assets\readMeAssets\IHP2-MT-WF-CustomMeal.jpg" alt="Add custom meal wireframe" width="200px">
<img src="src\assets\readMeAssets\IHP2-MT-WF-AddMeals-00.jpg" alt="Add meal wireframe 1" width="200px">
<img src="src\assets\readMeAssets\IHP2-MT-WF-AddMeals-01.jpg" alt="Add meal wireframe 2" width="200px">


Presentation Link
=================


Web Deploy Link
===============