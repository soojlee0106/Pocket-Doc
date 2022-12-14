import React, { Component } from 'react';

class Splash extends Component {
    constructor(props) {
        super(props)
        this.state = {};
    }

    componentDidMount() {
        const splash = document.querySelector('.splash');
        setTimeout(() => {
            splash.classList.add('display-none');
        }, 3000);
    }

    render() {
        return (
            < div class="splash" >
                <h1 class="fade-in">Welcome to Pocket Doc.</h1>
            </div >
        )
    }
}

export default Splash;