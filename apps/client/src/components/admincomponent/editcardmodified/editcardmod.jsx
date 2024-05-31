import styles from "./styles.module.css";

export default function EditcardModified(props) {
  return (
    <div className={`${styles.editcard} ${styles.padding10}`}>
      <img className={styles.view} src={props.image} alt="" />
      <div className={styles.editcard_discriptions}>
        <h3>Name: {props.name}</h3>
        <p>
          <span>Price : </span>
          {props.price} $
        </p>
        <p className={styles.disc}>
          <b>Description :</b> {props.description}
        </p>
      </div>
    </div>
  );
}
