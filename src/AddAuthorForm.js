import React  from 'react';
import './AddAuthorForm.css'

function AddAuthorForm({match}){
  return(
    <div className="AddAuthorForm">
      <h1> Add author</h1> 
      <form>
        <div className="AddAuthorForm__input">
          <label htmlFor="name">Name</label>
          <input type="text" name="name"/>
        </div>
        <div className="AddAuthorForm__input">
          <label htmlFor="name">Url</label>
          <input type="text" name="url"/>
        </div>
      </form>
    </div>
    );
}

export default AddAuthorForm;