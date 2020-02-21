import React from 'react';
import ReactDOM from 'react-dom';

class TesteApp extends React.Component {
    render() {
        return (
            <div>
                <h1>Teste App 2</h1>
                <p>It's not easy, but neither is impossible...</p>
                <Crazyness/>
            </div>
        );
    }
}

const Crazyness = props => (
    <div>
        <p>I have no clue of what just happened...</p>
    </div>
);

ReactDOM.render(<TesteApp/>, document.getElementById('app'));