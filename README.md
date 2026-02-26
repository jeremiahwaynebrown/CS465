# CS465
CS465 - Full Stack Development with MEAN

<h1>Architecture</h1>

<h3>Compare and contrast the types of frontend development you used in your full stack project, including Express HTML, JavaScript, and the single-page application (SPA).</h3>
<li>In this project, I worked with two very different frontend approaches. With Express and Handlebars, the server builds the HTML pages and sends fully rendered views to the browser. Every time the user navigates to a new page, the browser reloads and requests a new rendered page from the server. In contrast, the Angular SPA runs almost entirely in the browser. It loads once and then dynamically updates the content without refreshing the whole page. Instead of relying on the server to build views, Angular uses reusable components and client-side routing to create a smoother, more responsive experience. Seeing both approaches helped me understand the difference between traditional server-rendered apps and modern client-driven applications.</li>

<h3>Why did the backend use a NoSQL MongoDB database?</h3>
<li>MongoDB made sense for this stack because it works naturally with JavaScript and stores data in a JSON-like format. Since the frontend and backend communicate using JSON, MongoDB fits in seamlessly. Its flexible schema also made development easier because I did not have to strictly define tables ahead of time. That flexibility was helpful when adjusting the trip or user data structure during development.</li>

<h1>Functionality</h1>

<h3>How is JSON different from JavaScript and how does JSON tie together the frontend and backend development pieces?</h3>
<li>JSON is simply a format for organizing and transferring data, while JavaScript is the programming language that actually runs logic and controls behavior. JSON cannot execute code. It just holds structured data. In this project, JSON was the common language between the frontend and backend. The Angular app sent JSON in requests to create or update trips, and the Express API responded with JSON data pulled from MongoDB. That shared format allowed everything to connect smoothly.</li>

<h3>Provide instances in the full stack process when you refactored code to improve functionality and efficiencies, and name the benefits that come from reusable user interface (UI) components.</h3>
<li>Throughout the project, I had to refactor code several times to clean things up and improve structure. For example, I separated database logic into controllers instead of keeping it mixed in with routes. On the Angular side, I moved repeated API calls into services rather than duplicating code inside components. I also reused components for listing and editing trips instead of rewriting similar layouts. Reusable components made the code easier to manage, reduced repetition, and allowed me to fix or improve something in one place without having to update it everywhere else.</li>

<h1>Testing</h1>

<h3>Explain your understanding of methods, endpoints, and security in a full stack application.</h3>
<li>In a full stack app, methods like GET, POST, and PUT define what kind of action is being performed on the data. Endpoints are the specific URLs that respond to those methods. I first tested the API endpoints using Postman to make sure the database operations worked independently of the frontend. Once I confirmed the backend was working, I tested through the Angular SPA while watching the browser’s Network tab to verify that requests were being sent correctly and that responses were handled properly. Security added another layer to testing because protected routes required JWT authentication. If a token was missing or invalid, the API would return a 401 error. Working through those issues helped me better understand how middleware and authentication protect data in real-world applications.</li>

<h1>Reflection</h1>

<h3>How has this course helped you in reaching your professional goals? What skills have you learned, developed, or mastered in this course to help you become a more marketable candidate in your career field?</h3>
<li>This course gave me a much clearer understanding of how a full stack application actually works from end to end. Instead of just focusing on frontend or backend separately, I learned how everything connects, from the database to the API to the user interface. I strengthened my skills in RESTful API design, authentication, routing, debugging, and working with a NoSQL database. More importantly, I gained confidence in troubleshooting real development issues, whether that was version conflicts, routing errors, or authentication failures. Being able to build and debug a complete web application makes me more confident and better prepared for a professional development role.</li>
