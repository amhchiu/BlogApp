import React from 'react';
import BlogContainer from '../containers/BlogContainer';
import BlogPostContainer from '../containers/BlogPostContainer';
import CreateContainer from '../containers/CreateContainer';
import AboutContainer from '../containers/AboutContainer';

import { Switch, Route } from 'react-router-dom';

class Main extends React.Component{

    render(){
        return(
            <main>
                <Switch>
                    <Route exact path='/' component={BlogContainer} />
                    <Route path='/:uid/:title' component={BlogPostContainer} />
                    <Route path='/create' component={CreateContainer} />
                    <Route path='/about' component={AboutContainer} />
                </Switch>
            </main>
        );
    }
}

export default Main;
