import React, {Component} from 'react'
import {
    Route,
    Link,
    jsHistory
} from './mini-react-router-dom'

const App = () => (
    <div>
        <ul className="nav">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/topics">Topics</Link></li>
        </ul>

        <BtnHome/>
        <BtnAbout/>
        <BtnTopics/>
        <hr/>

        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/topics" component={Topics}/>
    </div>
);

const Home = () => (
    <div>
        <h2>Home</h2>
    </div>
);

const About = () => (
    <div>
        <h2>About</h2>
    </div>
);

const Topics = ({match}) => (
    <div>
        <h2>Topics</h2>
    </div>
);

class BtnHome extends Component {
    render() {
        return (
            <button onClick={jsHistory.pushState.bind(this, '/')}>Home</button>
        )
    }
}

class BtnAbout extends Component {
    render() {
        return (
            <button onClick={jsHistory.pushState.bind(this, '/about')}>About</button>
        )
    }
}

class BtnTopics extends Component {
    render() {
        return (
            <button onClick={jsHistory.pushState.bind(this, '/topics')}>Topics</button>
        )
    }
}

export default App