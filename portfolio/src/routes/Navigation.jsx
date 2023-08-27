import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import { AboutMe, Contact, Ethics, Layout, Projects, TechPool, Services } from "../pages";


export const Navigation = () => {


    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<Layout />} >
                <Route path="techpool" element={<TechPool />} />
                <Route path="ethics" element={<Ethics />} />
                <Route path="projects" element={<Projects />} />
                <Route path="contact" element={<Contact />} />
                <Route path="services" element={<Services />} />
                <Route path="/" element={<AboutMe />} />
            </Route>
        )
    )

    // const router = createBrowserRouter([
    //     {
    //         path: "/",
    //         element: (<Layout/>),
    //         children: [
    //             {
    //                 path: "/",
    //                 element: <AboutMe/>
    //             },
    //             {
    //                 path: "techpool",
    //                 element: <TechPool/>
    //             },
    //             {
    //                 path: "ethics",
    //                 element: <Ethics/>
    //             },
    //             {
    //                 path: "projects",
    //                 element: <Projects/>
    //             },
    //             {
    //                 path: "contact",
    //                 element: <Contact/>
    //             },
    //             {
    //                 path: "services",
    //                 element: <Services/>
    //             }
    //         ]
    //     }
    // ])



    return (
        <RouterProvider router={router} />
    )
}
