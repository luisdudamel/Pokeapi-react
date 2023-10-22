import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ListPage from "./pages/ListPage/ListPage";
import PokemonPage from "./pages/PokemonPage/PokemonPage";

const App = (): JSX.Element => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <ListPage />,
        },
        {
            path: "pokemon/:pokemonId",
            element: <PokemonPage />,
        },
    ]);

    return (
        <>
            <RouterProvider router={router} />
        </>
    );
};

export default App;
