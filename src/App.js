import React from "react";
import {BrowserRouter} from "react-router-dom";
import {Route} from 'react-router';
import {Wrap, MyFloat} from "./Styles";
import Main from "./Main";
import Write from "./Write";
import './font.css';

function App() {
    return (
        <Wrap is_root="is_root">
            <BrowserRouter>
                <Route path="/" exact="exact" component={Main}/>
                <Route path="/write" exact="exact" component={Write}/>
            </BrowserRouter>
        </Wrap>
    );
}

export default App;