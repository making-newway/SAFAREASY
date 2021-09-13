import React from 'react'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

function Footer() {
    return (
        <div className="footer">
            <h4>Developed and Designed by <span>Sayan Dey</span></h4>
            <div className="row m-y-20 m-x-0">
                <div className="col col-md-6 col-sm-12">
                    <h4>Contact me :-</h4>
                    <p>Phone: +919064526453</p>
                    <p>Email: sayandey15102001@gmail.com</p>
                </div>

                <div className="col col-md-6 col-sm-12">
                    <h4>Follow me :-</h4>
                    <a href="http://www.linkedin.com/in/sayan-dey-950a131a5">
                        <LinkedInIcon style={{ fontSize: 40, color: 'white', marginRight: '5px' }} />
                        <h6>Sayan Dey</h6>
                    </a>
                    <a href="https://github.com/making-newway">
                        <GitHubIcon style={{ fontSize: 40, color: 'white', marginRight: '5px' }} />
                        <h6>making-newway</h6>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer
