'use strict';

import React, {Component} from 'react';
import Cargo from './Cargo.svg';

class Home extends Component {
    render() {
        return (
            <div className="inner cover">
                <h1 className="cover-heading">Create your application faster.</h1>
                <img src={Cargo} />
            </div>
        );
    }
}

export default Home;