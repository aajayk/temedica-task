# temedica-task
<h3>Run Code on local setup</h3>
<li> npm install</li>
<li> npm run start</li>
  This will start the node.js server on port 3001.
<li> Open the attached postman collection or open below endpoint in browser :</li>
  http://localhost:3001/api/v1/drugList <br>
  This will get the list of drugs from the dataset.json. <br>
  Pagination is implemented in the API. By Default, number of drugs item returned in 1 request is 20 . <br>
  To cunfigure the size and page number, use below parameters. <br>
     <li> size</li>
     <li> page </li>
  example : http://localhost:3001/api/v1/drugList?size=3&page=65
  
  <h3>To Run the tests : </h3>
  Use command : npm run test
  <h3> Test with coverage :</h3>
  Use command : npm run testCoverage
