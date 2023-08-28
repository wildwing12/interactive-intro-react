import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Main from "./container/Main/index.jsx";
import ContentsOne from "./container/ContentsOne";

function App() {

    const router = createBrowserRouter([
        {
            path:"/",
            element:<Main/>,
            errorElement:<>존나뻑큐</>,
            children:[
                {
                    path:"/",
                    element:<ContentsOne />
                }
            ]

        }
    ])
  return (
    <>
        <RouterProvider router={router}/>
    </>
  )
}

export default App
