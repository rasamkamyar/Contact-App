import styles from "./List.module.css";

const List = ({ list, deleteHandler }) => {
  return (
    <div className={styles.listContainer}>
      <ul>
        {list.map((item) => (
          <li key={item.id}>
            {item.firstName} {item.lastName} — Age: {item.age}, Gender:{" "}
            {item.gender}, Category: {item.category}
            {item.isFavorite && <p>Favorited</p>}
            <button onClick={() => deleteHandler(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
