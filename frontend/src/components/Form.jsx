// A test component for forms
import { useState, Component } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';

export default function Multiple() {
  const endpoint = `${import.meta.env.VITE_API_URL}pois/`

  const [textData, setTextData] = useState(
    {title: "",
      city: "",
    });

  // const [date_visited, setDateVisited] = useState(null);
  const [image, setImage] = useState();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setTextData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = async(event) => {
    const uploadData = new FormData();
    uploadData.append('title', textData.title);
    uploadData.append('city', textData.city);
    // uploadData.append('date_visited', date_visited);
    uploadData.append('image', image)

    console.log('everything appended');
    fetch(endpoint, {
      method: 'POST',
      body: uploadData,
    })
    .then( res => console.log(res))
    .catch(error => console.log(error))

    // event.preventDefault();
    // post data 
    alert(`Title: ${textData.title}, City: ${textData.city}, Image: ${image}`);
    // const newData = await postData()


};

  return (
    
    <form onSubmit={handleSubmit}>
      {/* 
      Note to self:
      'id' in input must match 'htmlFor' in label.
      'name' is required so input is displayed live
      */}
      <div>
        <label htmlFor="title">
          Title: 
          <input type="text" name="title" value={textData.title} onChange={handleChange}/>
        </label>
        <br/>
        <label htmlFor="city">
          City: 
          <input type="text" name="city" value={textData.city} onChange={handleChange}/>
        </label>
        <br/>
        {/* <label htmlFor="date">
          Date visited: 
          <DatePicker
            showIcon
            selected={date_visited}
            onChange={(date) => setDateVisited(date)}
            dateFormat="dd/MM/yyyy"
          />
        </label>
        <br/> */}
        <label htmlFor="image">
          Image: 
          <input type="file" onChange={(evt) => setImage(evt.target.files[0])} />
        </label>
        <br/>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}