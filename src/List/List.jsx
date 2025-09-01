import styles from "./list.module.css";

const List = ({ list, deleteHandler }) => {
  return (
    <div className={styles.wrapper}>
      {list.length === 0 ? (
        <p className={styles.empty}>No contacts added yet.</p>
      ) : (
        <ul className={styles.list}>
          {list.map((item) => (
            <li key={item.id} className={styles.item}>
              <div className={styles.info}>
                <h3>
                  {item.firstName} {item.lastName}
                </h3>
                <p>
                  Number: {item.number} | Gender: {item.gender} | Category:{" "}
                  {item.category}
                </p>
                {item.isFavorite && (
                  <span className={styles.favorite}>★ Favorite</span>
                )}
              </div>
              <div className={styles.btnContainer}>
                <button
                  className={`${styles.btn} ${styles.deleteBtn}`}
                  onClick={() => deleteHandler(item.id)}
                >
                  Delete
                </button>
                <button className={`${styles.btn} ${styles.editBtn}`} onClick={() => {}}>
                  Edit
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default List;
