import styles from "./styles.module.css";

export default function EditCatagoryModified(props) {
  return (
    <div
      className={`${styles.editcard} ${styles.padding10} ${styles.margion20}`}
    >
      <img className={styles.view} src={props.image} alt="" />
      <div className={styles.editcard_discriptions}>
        <h3>Name: {props.name}</h3>
        <p className={styles.disc}>
          <b>Description :</b> {props.description}
        </p>
      </div>
    </div>
  );
}
