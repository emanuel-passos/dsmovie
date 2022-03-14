import {ReactComponent as GithubIcon} from 'assets/img/github.svg';
import './style.css';

function Navbar(){
    return (
        <header>
           <nav className='container'>
             <div className='dsmovie-nav-content'>
               <h1>DSMovie</h1>
               <a href="https://github.com/emanuel-passos"></a>
                 <div className='dsmovie-contact-container'>
                   <GithubIcon />
                   <p className='dsmovie-contact-link'>/emanuel-passos</p>
                 </div>
             </div>
           </nav>
        </header>
     );
}

export default Navbar;