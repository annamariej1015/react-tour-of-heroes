import {Route, Switch} from 'react-router-dom';
import DashboardPage from '../pages/dashboard';
import HeroesPage from '../pages/heroes';
import HeroPage from '../pages/hero.js';
import Navbar from '../components/Navbar';

const AppRouter = () =>{
    return(
        <div>
            <Navbar />
            <div className='container'>
                <Switch>
                    <Route path='/' exact component={DashboardPage}/>
                    <Route path='/heroes' exact component={HeroesPage}/>
                    <Route path='/heroes/:heroId' component={HeroPage}/>
                </Switch>
            </div>
        </div>
    );
};

export default AppRouter;