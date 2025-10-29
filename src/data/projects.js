const projectsData = [
	{
		id: 1,
		projectName: "University site",
		githubLink: "https://github.com/lostmart/university-front-react",
		tags: ["web app", "frontend", "react", "javascript", "vite"],
		description:
			"This project contains the frontend code for a university management system built using React. The application provides features for managing students, courses, and other university-related data.",
		deploy: "https://melodic-mermaid-fce48d.netlify.app/",
		details: [
			{
				imgName: "university-react.jpg",
				legend:
					"Mongoose schema in order to define de structure document of each collection in Mongoose",
			},
			{
				imgName: "university-react-01.jpg",
				legend:
					"User creation based off the request boady with a hashed password using bycript",
			},
			{
				imgName: "university-react-02.jpg",
				legend: "Atomic Design Pattern",
			},
			{
				imgName: "nodejs-04.jpg",
				legend:
					"Then the user can login using heir credentials and the API will send a token back (JWT)",
			},
		],
	},
	{
		id: 2,
		projectName: "Teachers Group Site",
		githubLink: "https://github.com/lostmart/university-front-react",
		tags: ["web app", "frontend", "vue", "javascript", "vite", "wordpress"],
		description:
			"This web app is created using Vue 3 and Vite. It's multi-language support site for teachers who belong to the ISL Network. The project aims to make the application accessible to users from different linguistic backgrounds by providing a seamless language-switching experience and a newletter powered by Wordpres' API",
		deploy: "https://islmultilang.netlify.app/blog",
		details: [
			{
				imgName: "islnetwok-mutli-00.jpg",
				legend: "Simple site using Bootstrap 5.3",
			},
			{
				imgName: "islnetwok-mutli-01.jpg",
				legend:
					"This site detects your broswsr's language in order to switch language and save it in the store of the app",
			},
			{
				imgName: "islnetwok-mutli-02.jpg",
				legend:
					"When tested in Postman, the API sends a 201 status code, if everything went well",
			},
			{
				imgName: "islnetwok-mutli-03.jpg",
				legend:
					"Then the user can login using heir credentials and the API will send a token back (JWT)",
			},
			{
				imgName: "islnetwok-mutli-04.jpg",
				legend:
					"The site feeds from a wordpress backoffice that allows admins to write blogs and newsletters",
			},
			{
				imgName: "islnetwok-mutli-05.jpg",
				legend:
					"The site will show the data for the blog ready and in accordance to the looks of the site",
			},
		],
	},
	{
		id: 3,
		projectName: "REST API with Node.js",
		githubLink: "https://github.com/lostmart/rest-api-Node-js",
		tags: ["rest API", "backend", "nodeJs", "javascript", "mongoDB"],
		description:
			"This project includes a Node.js application that implements a REST API using Express.js. It allows you to perform various CRUD (Create, Read, Update, Delete) operations on resources via HTTP requests. The application also uses the Axios library to interact with external APIs.",
		deploy: "https://main--zesty-moonbeam-928dd0.netlify.app/",
		details: [
			{
				imgName: "nodejs-00.jpg",
				legend: "Restfull API with Node Js and Express",
			},
			{
				imgName: "nodejs-01.jpg",
				legend:
					"Mongoose schema in order to define de structure document of each collection in Mongoose",
			},
			{
				imgName: "nodejs-02.jpg",
				legend:
					"User creation based off the request boady with a hashed password using bycript",
			},
			{
				imgName: "nodejs-03.jpg",
				legend:
					"When tested in Postman, the API sends a 201 status code, if everything went well",
			},
			{
				imgName: "nodejs-04.jpg",
				legend:
					"Then the user can login using heir credentials and the API will send a token back (JWT)",
			},
		],
	},
	{
		id: 4,
		projectName: "REST API with Flask-RESTful",
		githubLink: "https://github.com/lostmart/restfulAPI-python",
		tags: ["rest API", "backend", "python", "flask", "Swagger UI", "sqlite3"],
		description:
			"This project contains a Python application that implements a REST API using Flask and Flask-RESTful. It allows you to perform various CRUD (Create, Read, Update, Delete) operations on resources using HTTP requests. The application also uses the requests library to interact with external APIs.",
		deploy: "https://main--zesty-moonbeam-928dd0.netlify.app/",
		details: [
			{
				imgName: "rest-flask-00.jpg",
				legend: "Restfull API with Python and Flask",
			},
			{
				imgName: "rest-flask-01.jpg",
				legend:
					"This defines a class called NewUser and includes an __init__ method to initialize objects of this class",
			},
			{
				imgName: "rest-flask-02.jpg",
				legend:
					"The reqparse module from flask_restful is used to parse and validate incoming request data in a Flask RESTful API",
			},
			{
				imgName: "rest-flask-03.jpg",
				legend:
					"This connects to a SQLite database, creatating a cursor object, and uses that cursor to execute a SQL command to create a new table called products. ",
			},
			{
				imgName: "rest-flask-04.jpg",
				legend:
					"This code snippet defines a User class inheriting from Resource. It's to handle HTTP requests. The post method of this class handles the creation of a new user (sign-up process)",
			},
		],
	},
]

export default projectsData
