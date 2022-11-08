About Project:-

This app is about Issue tracker in this app we can keep the record of all the projects.We are working on as well as all the projects which were done in past. It keep the records of all the problem which we faced and whats the solution of it.

To run this project:-

1. Create ".env" file in issueTracker folder.
2. Write "URI: 'DataBase api'
3. Write "npm i" in terminal
4. Write "npm start" in terminal
5. Goto browser open "http://127.0.0.1:8000/"

Features:-

1. Home Page
    1.1 Show a list of projects.
    1.2 Give a button to create a new Project (On creating a new project it should appear in the list)
2. Create Project Page
    2.1. Accept the following fields to create a project
        2.1.1. Name
        2.1.2. Description
        2.1.3. Author
3. Project Detail Page
    3.1. When the user clicks on a project (in home page) redirect the user to this page which will show bugs related to this project
    3.2. User should be able to perform following actions on this page
        3.2.1. Filter by multiple labels i.e. I should be able to filter by 2 or more labels at the same time
        3.2.2. Filter by author
        3.2.3. Search by title and description
    4.3. A button to create an issue
4. Create issue page
    4.1. User should be able to create an issue for a project
    4.2. Accept the following fields
        4.2.1. Title
        4.2.2. Description
        4.2.3. Labels (multiple labels can be added to a project, IF a project has a label already show it (in dropdown) as the user types the label in)
        4.2.4. Author
