const Form = () => {
  return (
    <div>
      <label htmlFor="">First Name:</label>
      <input type="name" placeholder="First Name" />
      <label htmlFor="">Last Name: </label>
      <input type="name" placeholder="Last Name" />
      <label htmlFor="">Age</label>
      <input type="number" placeholder="Age" />
      <label htmlFor="">Gender: </label>
      <label htmlFor="">Male</label>
      <input type="radio" />
      <label htmlFor="">Female</label>
      <input type="radio" />
      <label htmlFor="">Is Favorite</label>
      <input type="checkbox" />
      <label htmlFor="">Category</label>
      <select name="" id="">
        <option value="">Family</option>
        <option value="">Friends</option>
        <option value="">Work</option>
        <option value="">Others</option>
      </select>
    </div>
  );
};

export default Form;
