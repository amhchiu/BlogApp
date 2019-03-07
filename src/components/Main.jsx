import React from 'react';
import BlogContainer from '../containers/BlogContainer';
import BlogPostContainer from '../containers/BlogPostContainer';
import { Switch, Route } from 'react-router-dom';

class Main extends React.Component{

    render(){
        return(
            <main>
                <Switch>
                    <Route exact path='/' component={BlogContainer} />
                    <Route path='/entry/:title' component={BlogPostContainer} />
                </Switch>
            </main>
        );
    }
}

export default Main;
