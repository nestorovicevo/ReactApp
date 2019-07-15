import React from 'react' //ovo ce biti stateless komponenta, pa ne mora da se importuje {Component}
import'./Header.css'

const Header = () => {
    return (
        // React.createElement('div', {className: 'react_div'}, 'This is a test')   ///ovo je komplikovaniji nacin, ali moze i ovako
        <div className="rmdb-header">
            <div className="rmdb-header-content">
                <img className="rmdb-logo" src="./images/reactMovie_logo.png" alt="rmdb-logo"/>
                <img className="rmdb-tmdb-logo" src="./images/tmdb_logo.png" alt="tmdb-logo"/>
            </div>
        </div>
    )
}

export default Header;