import './style.css';

type Props ={
    text: string;
}

export default function Button({text} : Props){
    return(
        <button type='submit' className='button'>
                {text}
        </button>
    
    );
}