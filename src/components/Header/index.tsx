import { Link} from 'react-router-dom';
import './style.css'

export default function Header(){
    return(
        <header>
            <div className='container m-left'>
                <div className='tittle'>
                    <Link to='/home'>
                        Github API
                    </Link>
                </div>
            </div>
        </header>
    );
}