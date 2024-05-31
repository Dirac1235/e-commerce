import styles from './order.module.css';

export default function OrderRecent(props) {
   const className = (props.order_id%2) ? 'black' : 'white';
    const stausifo=props.status
  return (
    <div className={`${styles.recent_order} ${styles[className]}`}>
      <div>{props.order_id}</div>
      <div className={styles.name}><img src="admin_profile.png" alt="" />{props.customer_name}</div>
      <div>{props.email}</div>
      <div>{props.order_date}</div>
      <div>
        <div className={styles[stausifo]}>
            {props.status}
        </div>
      </div>
      <div className={styles.green}>{props.total_amount} $</div>
    </div>
  );
}