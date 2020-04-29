import React from 'react';
import CSS from 'csstype';
const style = require('./home.scss');
const h1Styles: CSS.Properties = {
  backgroundColor: 'rgba(255, 255, 255, 0.85)',

  boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',

};
const cnnStyles: CSS.Properties = {
marginLeft:'20px',
boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
};
const backStyles: CSS.Properties = {
  backgroundColor: 'rgba(255, 255, 255, 0.85)',

  backgroundImage: "url('./web-background.png')"
};
function App()  {
  return (
    <div style={style}>
    <nav className="navbar" style={h1Styles}role="navigation" aria-label="main navigation">
  <div className="navbar-brand">
    <a className="navbar-item" href="https://bulma.io">
      <img src="./logo.png" width="112" height="28"/>
    </a>

    <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" className="navbar-menu">
    <div className="navbar-start">
      <a className="navbar-item">
        Home
      </a>

      <a className="navbar-item">
        Documentation
      </a>

      <div className="navbar-item has-dropdown is-hoverable">
        <a className="navbar-link">
          More
        </a>

        <div className="navbar-dropdown">
          <a className="navbar-item">
            About
          </a>
          <a className="navbar-item">
            Jobs
          </a>
          <a className="navbar-item">
            Contact
          </a>
          <hr className="navbar-divider"/>
          <a className="navbar-item">
            Report an issue
          </a>
        </div>
      </div>
    </div>

    <div className="navbar-end">
      <div className="navbar-item">
        <div className="buttons">
          <a className="button is-primary">
            <strong>Sign up</strong>
          </a>
          <a className="button is-light">
            Log in
          </a>
        </div>
      </div>
    </div>
  </div>
</nav>
<div className="tabs is-centered">
  <ul>
    <li className="is-active"><a>World</a></li>
    <li><a>US</a></li>
    <li><a>Tech</a></li>
    <li><a>Business</a></li>
  </ul>
</div>
<div className="columns">
  <div className="column is-one-third">

  <div className="card" style={cnnStyles}>
    <div className="card-image">
      <figure className="image is-4by3">
        <img src="https://bostonglobe-prod.cdn.arcpublishing.com/resizer/ObRVcnFPuT0rcuk9p5m0XQv3w_Y=/1440x0/arc-anglerfish-arc2-prod-bostonglobe.s3.amazonaws.com/public/SU5EUCOUV7RRS2HMRRTOQEMZOI.jpg" alt="Placeholder image"/>
      </figure>
    </div>
    <div className="card-content">
      <div className="media">
        <div className="media-left">
          <figure className="image is-48x48">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/CNN.svg/1280px-CNN.svg.png" alt="Placeholder image"/>
          </figure>
        </div>
        <div className="media-content">
          <p className="title is-4">Fact check: Trump falsely suggests he was right when he predicted 'close to zero' virus cases in February</p>
          <p className="subtitle is-6">@CNN</p>
        </div>
      </div>

      <div className="content">
      President Donald Trump claimed Tuesday that Dr. Anthony Fauci, a key member of the White House coronavirus task force, said in late February that the coronavirus was "no problem."

      Fauci didn't say that. <a href="https://www.cnn.com/2020/04/28/politics/fact-check-trump-remarks-april-28/index.html">@cnn</a>.
<br></br>
      <time>11:00 PM - 28 April 2020</time>
      </div>
    </div>
  </div>

  </div>
  <div className="column">



  </div>


</div>

    </div>
  );
}

export default App;
