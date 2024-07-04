// A test component for forms
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function Multiple() {
  const [formData, setFormData] = useState(
    {title: "",
      city: "",
    });

  const [date_visited, setDateVisited] = useState(null);
  const [image, setImage] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Title: ${formData.title}, City: ${formData.city}, Date Visited: ${date_visited}`
    );
};

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title: </label>
      <input type="text" id="title" name="title" value={formData.title} onChange={handleChange}/>

      <label htmlFor="city">City: </label>
      <input type="city" id="city" name="city" value={formData.city} onChange={handleChange}/>

      <label htmlFor="date">Date visited: </label>
      <DatePicker
        showIcon
        selected={date_visited}
        onChange={(date) => setDateVisited(date)}
        dateFormat="dd/MM/yyyy"
      />

      <button type="submit">Submit</button>
    </form>
  );
}