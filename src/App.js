import {Routes , Route} from "react-router-dom";
import routes from "./Routes";

const App = () => {

    return (
        <>
        <Routes>
            {
                routes.map(r => {
                    return <Route path={r.path} element={r.element}/>
                })
            }
        </Routes>
        </>
    );
}
 
export default App;