import styles from "./style.module.css";

export default function User(props) {
  return (
    <div
      className={
        props.id % 2 === 0
          ? `${styles.users_information_contatiner_light}`
          : `${styles.users_information_contatiner_dark}`
      }
    >
      <p className="small">{props.id}</p>
      
      <p>{props.fullname}</p>
      <p>{props.email}</p>
      <p>{props.phone}</p>
      
      
    </div>
  );
}
