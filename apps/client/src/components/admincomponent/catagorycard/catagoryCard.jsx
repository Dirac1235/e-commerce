import './catagory.css'
import Link from 'next/link'


export default function CatagoryCard(props) {
  return (
    <div className='catagory_editcard'> 
      {/* <img src={props.image} alt="" /> */}
      <div className='editcard_discriptions'>  
        <h3>Catagory: {props.name}</h3>
    </div>
      <div className='editcard-btn-container'>
       <Link href={`/admin/catagory/${props.id}`}> <button className='edit-btn'>EDIT </button></Link>
        <button className='delete-btn'>DELETE</button>
      </div>

  </div>
  )
}
