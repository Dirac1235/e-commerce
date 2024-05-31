
import './styles.css'
export default function EditcardModifiedUser(props) {
    return (
      <div className='user_card_modified padding10'> 
           <div className='img_view'><img className="view" src={props.image} alt="" /></div>
           <div className='data'>
                <p><b>Full Name: </b> {props.fullname}</p>
                <p><b>Email: </b> {props.email}</p>
                <p><b>Username: </b> {props.username}</p>
                <p><b>phone: </b>{props.phone}</p>
           </div>
      </div>
    )
  }
