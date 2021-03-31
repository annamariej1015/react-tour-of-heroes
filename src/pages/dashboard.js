import { useState, useEffect } from 'react';
import  { heroData } from '../data/heroes';
import HeroCard  from '../components/HeroCard';
import '../App.css';

const DashboardPage = () => {
    const [heroes, setHeroes] = useState([]);
    const [alert, setAlert] = useState(false);
    //using alerts to trigger successful messages
    //console.log(heroData);
    
    useEffect(()=> {
        let featured = heroData.filter(hero => hero.featured);
        //console.log(featured);
        setHeroes(featured);
    },[alert]);
//empty array bracket takes values it should look for in our component, if it changes then it changes in the useEffect hook
    const updateFeatured = heroId => {
        //find the hero from heroData by heroId
        let foundHero = heroData.find(hero => hero.id === +heroId);
        //update foundHero.featured to be opposite (which is !) of its current value
        foundHero.featured = !foundHero.featured;
        showAlert();
        //console.log(foundHero);
    };

    const showAlert = () => {
        setAlert(true);
        setTimeout(() => {
            setAlert(false); 
        }, 2000);
    };
    
    return(
        <div id= 'dashboard-page'>
            <div className='row text-center mt-3'>
                <div className='col'>
                    <h2>Welcome to the tour of Heroes!</h2>
                    <h4 className='text-secondary'>Featured Heroes</h4>
                </div>
            </div>
            <div className='row'>
                {heroes.map((hero, index) => {
                    return(
                        <div 
                            className='col-sm-12 col-md-3'     
                            key ={hero.id}>
                            <HeroCard hero={hero} updateFeatured={updateFeatured} />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default DashboardPage;