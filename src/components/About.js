import React from 'react';

const About = () => {
  return (
    <div className="container">
      <h1>Recipe Application using Edamam API</h1>
      <h3>Created by<br></br> <strong>DANIEL SEONG</strong></h3>
      <ul className="app-detail-list">
        <li>Recipe Application</li>
        <li>Used React Router to organized pages</li>
        <li>Navigation Bar for easy page navigation</li>
        <li>Clean, simple UI for easy use</li>
        <li>REST food API from Edamam.com</li>
      </ul>
      <h5 className="contact-me">
        Please visit <a href="http://danielcseong.com">danielcseong.com</a> or reach out to me directly via <a href="mailto:dseongdev@gmail.com">dseongdev@gmail.com</a> or <a href="https://www.linkedin.com/in/dseongdev/">linkedin.com/in/dseongdev/</a>
      </h5>
    </div>
  )
}

export default About;