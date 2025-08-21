import { useState } from 'react';

const TrackForm = (props) => {
  // formData state to control the form.
const initialState = {
    artist: "",
    title: "",
  }
  // If track data has been passed as props, we set formData as that track object.
  // Otherwise, we can assume this is a new track form and use the empty
  // initialState object.
  const [formData, setFormData] = useState(
    props.selected ? props.selected : initialState
  )

  // handleChange function to update formData state.
  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
  };

  const handleSubmit = (evt) => {
  evt.preventDefault();
  if (props.selected && props.selected._id) {
    props.handleUpdateTrack(formData, props.selected._id);
  } else {
    props.handleAddTrack(formData);
  }
};

  // And finally, the form itself.
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="artist"> Artist </label>
        <input
          id="artist"
          name="artist"
          value={formData.artist}
          onChange={handleChange}
          required
        />
        <label htmlFor="title"> Title </label>
        <input
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />
        <button type="submit">
          {props.selected ? 'Update Track' : 'Add New Track'}
        </button>
      </form>
    </div>
  );
};

export default TrackForm;