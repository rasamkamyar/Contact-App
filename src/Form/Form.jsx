import { useEffect, useState } from "react";
import styles from "./form.module.css";
import List from "../List/List";
import { v4 } from "uuid";

const initData = {
  id: "",
  firstName: "",
  lastName: "",
  age: 0,
  gender: "male",
  category: "family",
  isFavorite: false,
};

const Form = () => {
  const [form, setForm] = useState(initData);
  const [list, setList] = useState([]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const addHandler = () => {
    const contact = { ...form, id: v4() };
    setList((prev) => [...prev, contact]);
    setForm(initData);
  };

  const deleteHandler = (id) => {
   const filteredList = list.filter((li) => li.id !== id);
    setList(filteredList);
  };

  return (
    <div className={styles.container}>
      <label htmlFor="firstName">First Name:</label>
      <input
        type="text"
        name="firstName"
        value={form.firstName}
        onChange={handleChange}
        placeholder="First Name"
      />

      <label htmlFor="lastName">Last Name:</label>
      <input
        type="text"
        name="lastName"
        value={form.lastName}
        onChange={handleChange}
        placeholder="Last Name"
      />

      <label htmlFor="age">Age:</label>
      <input
        type="number"
        name="age"
        value={form.age}
        onChange={handleChange}
        placeholder="Age"
      />

      <div className={styles.radioGroup}>
        <label>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={form.gender === "male"}
            onChange={handleChange}
          />
          Male
        </label>

        <label>
          <input
            type="radio"
            name="gender"
            value="female"
            checked={form.gender === "female"}
            onChange={handleChange}
          />
          Female
        </label>
      </div>

      <div className={styles.checkboxGroup}>
        <label>
          Is Favorite:
          <input
            type="checkbox"
            name="isFavorite"
            checked={form.isFavorite}
            onChange={handleChange}
          />
        </label>
      </div>

      <div className={styles.selectGroup}>
        <label>
          Category:
          <select name="category" value={form.category} onChange={handleChange}>
            <option value="family">Family</option>
            <option value="friends">Friends</option>
            <option value="work">Work</option>
            <option value="others">Others</option>
          </select>
        </label>
      </div>

      <button onClick={addHandler}>Add to Contact</button>

      <List list={list} deleteHandler={deleteHandler} />
    </div>
  );
};

export default Form;
