import React from 'react';
import Blog from './Blog';
import { Switch, Route } from 'react-router-dom';

class Main extends React.Component{

    render(){
        return(
            <main>
                <Switch>
                    <Route exact path='/' component={Blog} />
                </Switch>
            </main>
        );
    }
}

export default Main;
