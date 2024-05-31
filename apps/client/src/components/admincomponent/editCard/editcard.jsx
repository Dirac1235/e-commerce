import './styles.css'
import Link from 'next/link'

export default function Editcard(props) {
  return (
    <div className='editcard'> 
         <img src={props.image} alt="" />
         <div className='editcard_discriptions'>  
            <h3>Name: {props.name}</h3>
            <p><span>Price : </span>{props.price}$</p>
        </div>
         <div className='editcard-btn-container'>
         <Link href={`/products/${props.id}`}><button className='edit-btn'>EDIT</button></Link> 
            <button className='delete-btn'>DELETE</button>
         </div>

    </div>
  )
}
