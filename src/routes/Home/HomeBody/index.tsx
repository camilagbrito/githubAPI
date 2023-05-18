import { Link } from 'react-router-dom';
import Button from '../../../components/Button';
import './style.css';

export default function HomeBody(){
    return(
        <main>
            <section className="container">
                <div className='m-left mt-30'>
                   <h2> Desafio Github API</h2>
                   <h3>DevSuperior - Escola de Programação</h3>
                </div>
                <nav className='dflex m-left mt-30'>
                    <Link to='/search'>
                        <Button text='Começar' />
                    </Link>
                </nav>
            </section>
        </main>

    );
}