import './style.css';
import { useEffect, useState } from 'react';
import { UserDTO } from '../../models/user';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import UserCard from '../UserCard';

type FormData ={
    username : string;
}

export default function SearchCard(){

    const params = useParams();
    const [formData, setFormData] = useState<FormData>({username: ""});
    const[user, setUser] = useState<UserDTO | null>(null);
    const[userSearch, setUserSearch] = useState<UserDTO | null>();
    const [searched, setSearched] = useState(false);

    useEffect(() => {
        
        axios.get(`https://api.github.com/users/${formData.username}`)
            .then(response => {
              setUser(response.data);
            })
            .catch(error => {
              console.error(error);
              setUser(null);
            });
        }, [searched, formData.username]);
    
    function handleImputChange(event: any){
        const value = event.target.value;
        const name = event.target.name;
        setFormData({...formData, [name]: value});
        setSearched(false);
        if(value == ""){
            setUserSearch(null);
        } 
    }

    function handleFormSubmit(event: any){
            event.preventDefault();
            setUserSearch(user);
            setSearched(true);
    }

    return(
        <>
        <div className='search-card'>
            <h2>Encontre um perfil Github</h2>

            <form onSubmit={handleFormSubmit} className='form-card'>
                <div>
                    <input 
                        name='username'
                        value={formData.username}
                        type="text" 
                        placeholder='Usuário Github'
                        onChange={handleImputChange}
                    />
                </div>
                <button type='submit' className='button'>
                Encontrar
                </button>
            </form>
           
        </div>
        <div>
            {searched && !user &&(<h1>Erro ao buscar usuário</h1>)}
            {userSearch && <UserCard user={userSearch}/>}
        </div>
        </>
    );
}