import './styles.css'
import Link from 'next/link'

export default function Order(props) {
  return (
    <Link href={`/admin/orders/${props.id}`}>
      <div className={props.id%2===0?'users_information_contatiner_light':'users_information_contatiner_dark'}>
      <p className='small'>{props.id}</p>
      <p>{props.fullname}</p>
      <p>{props.product}</p>
      <p>{props.date}</p>
      <p className='small'>{props.total}</p>
      <p className={props.delivery==='Delivered'?'delivery_deliverd':'delivery_pending'}>{props.delivery}</p>
    </div>
  </Link>
  )
}
