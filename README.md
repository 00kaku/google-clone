# A google-clone using NextJs and Google search API

This is a google clone using the NextJs framework and google search api. User can search for anything using the google search engine. It is fully responsive and mobile first using the Tailwind CSS.By default the search engine will show dummy data in **Response.js** but it can be changed.

###### NextJs is used to create structure and pages for the website usign server side rendering
###### Tailwind CSS is used for the styling of the website
###### Google search Api is usedd for the results fetching

#### Screenshots
![Screenshot from 2021-04-13 16-23-19](https://user-images.githubusercontent.com/22026768/114546766-2e804200-9c7b-11eb-9502-ab1fc5bcf362.png)
![Screenshot from 2021-04-13 16-23-40](https://user-images.githubusercontent.com/22026768/114546776-2fb16f00-9c7b-11eb-9ea2-b74e69a35868.png)


#### How to use

1. Download the github repository.
2. Inside the folder run **npm install** to install the dependencies.
3. Use **npm run dev** to run the project on **localhost:3000**
4. To use real time searching and not dummy data go to google dashboard and create a key for search api and put it in variable **API_KEY** in **next.config.js**.
5. Create a context key using the link **https://cse.google.com/cse/all** and put it in the variable **CONTEXT_KEY** in **next.config.js**.
6. In **/pages/Search.js** set the **useDuummydata= false**, Now you can use real time google search functionality 
