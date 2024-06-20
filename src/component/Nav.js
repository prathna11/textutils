import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Nav(props) {
       
  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">{props.title}</Link> 
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
           aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0" >
              <li className='nav-item'>
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/about">About us</Link>

              </li>
            </ul>  
            <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
              <input className='form-check-input' onClick= {props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">enable dark mode</label>
            </div>

           {/* <div className={`form-check form-switch text-${props.mode==='pink'?'white':'dark'&& props.mode==='dark'?'white':'dark'}`}>
                  <input className="form-check-input" type="checkbox" role="switch" onClick={props.changetoColormode} id="flexSwitchCheckDefault"/>
                 <label className="form-check-label" htmlFor="flexSwitchCheckDefault">pink mode</label>
            </div> */} 



          </div>
        </div>
      </nav>
    </>
  );
}

Nav.propTypes = {
  title: PropTypes.string,
  mode: PropTypes.string
};

Nav.defaultProps = {
  title: 'TextUtils'
};
