# CS-465 Travlr Project

## Architecture

## Compare and contrast the types of frontend development you used in your full stack project, including Express HTML, JavaScript, and the single-page application (SPA).
## Why did the backend use a NoSQL MongoDB database?
For this MEAN stack project, I used JavaScript on the front end and the back end. This allowed for ease of use, it was easier to troubleshoot, and it will be easier to modify and upgrade in the future. This could happen because I used Node.Js (the N in MEAN) to create a web server and then build the applications on it. The benefit to using Node.Js is that it comes with lots of packages which are great shortcuts that help you program even faster. A potential downside is that it is a single-threaded model which is efficient but if there are any issues in your code it could cause a delay for the next user. Express is the E in MEAN and it is what I used for the framework. While Node.Js is powerful I could not use it alone without Express. It will take queries and return the responses we want. Express alsos solves the potential issue with Node.Js being single threaded by allowing for sessions that will remember different users. The M in MEAN is Mongodb which is the database my program used. As I mentioned I used Javascript throughout the programming process which is why using MongoDB was a great fit because MongoDB stores it's documents using JSON or JavaScript Serialized Object Notation. The A in MEAN is Angular which is what I used for the interface of the website application. This is where our Single-Page Application or SPA came in. It allows for less needed resources on a server and it is great to use if you are creating a customer facing website because it allows for quick rendering.



## Functionality

## How is JSON different from Javascript and how does JSON tie together the frontend and backend development pieces?
## Provide instances in the full stack process when you refactored code to improve functionality and efficiencies and name the benefits that come from reusable user interface (UI) components.

As I mentioned above JSON is how MongoDB stores its documents. It is different from Javascript because it uses Javascript as a notation. This allows for easy data storage in our database and then an easy way for this data to be pulled when it is requested. 



## Testing

### Methods for request and retrieval necessitate various types of API testing of endpoints, in addition to the difficulties of testing with added layers of security. Explain your understanding of methods, endpoints, and security in a full stack application. 
I used the API endpoints or methods GET, POST, PUT, DELETE, and PATCH. Since these are stateless, I needed to add some security to the application so that the users could be recognized and authenticated. I used Mongoose to store and create users and I used Passport to authenticate the users. The users had to first create a new login with name, email, password and then that had to be authenticated and recognized when they logged in. Only then could the API methods be used. 


## Reflection

## How has this course helped you in reaching your professional goals? What skills have you learned, developed, or mastered in this course to help you become a more marketable candidate in your career field?

This course was extremely important in helping me reach my professional goals. It was the first time I created a web application with both front end and back-end capabilities. It was also the first time I used so many different types of software and integrated them seamlessly together. It was another great opportunity to practice coding best practices and testing because by the end of this project our overall file system was very large. If I wasn't testing as I went, finding a mistake would be nearly impossible. Although I have used MongoDB before it showed me a more practical and realistic way of utilizing it. I have learned the immense benefit to SPA and will definitely be utilizing them in the future. 

