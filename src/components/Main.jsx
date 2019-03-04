import React from 'react';
import BlogContainer from '../containers/BlogContainer';
import { Switch, Route } from 'react-router-dom';

class Main extends React.Component{

    render(){
        return(
            <main>
                <Switch>
                    <Route exact path='/' component={BlogContainer} />
                </Switch>
            </main>
        );
    }
}

export default Main;
