import React, { useState } from 'react';
import '../Styles/footer.css';

function Footer() {
    const [usefulLinks, setUsefulLinks] = useState([
        'University of Delhi',
        'Ministry of Education',
        'Project Samarth',
        'National Portal of India',
        'Internship @ IIC'
    ]);
    const [resourceLinks, setResourcesLinks]  = useState([
        'CPS Framework – Volume 1',
        'CPS Framework – Volume 2',
        'Resources for AI'
    ]);
    return (
        <div className='footer'>
            <div className="links">
                <div className="foot-col-1">
                    <p className='logo-container'>
                    <img className='logo' src='http://cps.iic.ac.in/wp-content/uploads/2024/05/logo_cypsi_white-.png' />
                    </p>
                    <p>Institute of Informatics & Communication</p>
                    <p>University of Delhi South Campus</p>
                    <p>Delhi – 110021</p>
                    <a href="mailto:cps@south.du.ac.in">cps@south.du.ac.in</a>
                </div>
                <div className="foot-col-2">
                    <p className="list-heading">Useful Links</p>
                    <ul className='list'>
                        {usefulLinks.map(link => <li className='link'>{link}</li>)}
                    </ul>
                </div>
                <div className="foot-col-3">
                    <p className="list-heading">External Resources</p>
                    <ul className="list">
                        {resourceLinks.map(link => <li className='link'>{link}</li>)}
                    </ul>
                </div>
            </div>
            <div className="copyright">
                <p>© CyPSi Laboratory, IIC - All Rights Reserved</p>
            </div>
        </div>
    )
}

export default Footer