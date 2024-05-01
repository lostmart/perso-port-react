import React from "react"
import ReactDOM from "react-dom/client"
import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from "react-router-dom"

import Root from "./layouts/default"

// pages
import ErrorPage from "./layouts/ErrorPage"
import Technos from "./pages/Technos"
import Home from "./pages/Home"

import "./sass/main.scss"

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<Root />}>
			<Route index element={<Home />} />
			<Route path="technos" element={<Technos />} />
			<Route path="*" element={<ErrorPage />} />
		</Route>
	)
	// [
	// {
	// 	path: "/",
	// 	element: <Root />,
	// 	errorElement: <ErrorPage />,
	// },
	// {
	// 	path: "/about",
	// 	element: <About />,
	// 	errorElement: <ErrorPage />,
	// },
	// {
	// 	path: "*",
	// 	element: <ErrorPage />,
	// 	errorElement: <ErrorPage />,
	// },
	// ]
)

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
)
