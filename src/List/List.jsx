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
                  Age: {item.age} | Gender: {item.gender} | Category:{" "}
                  {item.category}
                </p>
                {item.isFavorite && (
                  <span className={styles.favorite}>★ Favorite</span>
                )}
              </div>
              <button
                className={styles.deleteBtn}
                onClick={() => deleteHandler(item.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default List;
