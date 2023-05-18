import { UserDTO } from '../../models/user';
import './style.css';

type Props = {
   user: UserDTO; 
}

export default function UserCard({user}: Props){
    return(
        <div className='user-card container'>
            <div className='content-card dflex'>
                <div className='photo-card'>
                    <img src={user.avatar_url} />
                </div>
                <div className='intern-card'>
                    <h2>Informações</h2>
                    <div className='form-card'>
                        <div className='data-card'>
                           <b>Perfil:</b> {user.url}
                        </div>
                        <div className='data-card'>
                            <b>Seguidores:</b> {user.followers}
                        </div>
                        <div className='data-card'>
                            <b>Localidade:</b> {user.location} 
                        </div>
                        <div className='data-card'>
                            <b>Nome:</b> {user.name}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}