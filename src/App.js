import {Switch, Route, useHistory} from 'react-router-dom';
import Home from "./pages/home";
import User from "./pages/user";
import EditProfile from "./pages/edit-profile";
import NotFound from "./pages/404";
import {useEffect} from "react";
import {useSelector} from "react-redux";



const App = () => {
    const state = useSelector(({auth}) => auth);
    const history = useHistory();
    useEffect(() => {
        console.log(state)
        if(state.isAuth){
            history.push('/edit-profile');
        }
    }, [state.isAuth]);
    return (
    	<Switch>
    		<Route path="/" exact>
    			<Home />
    		</Route>
            <Route path="/user/:id" exact>
                <User />
            </Route>
            <Route path="/edit-profile" exact>
                <EditProfile />
            </Route>
    		<Route>
    			<NotFound />
    		</Route>
        </Switch>
    )
}



export default App;