import { useState } from "react";

const Form = () => {
  const initData = {
    firstName: "",
    lastName: "",
    age: 0,
    gender: "",
    category: "family",
    isFavorite: false,
  };

  const [form, setForm] = useState(initData);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleClick = () => {
    console.log("Submitted Contact:", form);
  };

  return (
    <div>
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

      <label>
        Is Favorite:
        <input
          type="checkbox"
          name="isFavorite"
          checked={form.isFavorite}
          onChange={handleChange}
        />
      </label>

      <label>
        Category:
        <select name="category" value={form.category} onChange={handleChange}>
          <option value="family">Family</option>
          <option value="friends">Friends</option>
          <option value="work">Work</option>
          <option value="others">Others</option>
        </select>
      </label>

      <button onClick={handleClick}>Add to Contact</button>
    </div>
  );
};

export default Form;
