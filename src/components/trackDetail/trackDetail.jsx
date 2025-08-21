const TrackDetail = (props) => {
  const { selected } = props;

  if (!selected) {
    return (
      <div>
        <h1>NO DETAILS</h1>
      </div>
    );
  }

  return (
    <div>
      <h1>{selected.title}</h1>
      <h2>Artist: {selected.artist}</h2>

      <div>
        <button onClick={() => props.handleFormView(selected)}>
          Edit Track
        </button>
        <button onClick={() => props.handleDeleteTrack(selected._id)}>
          Delete Track
        </button>
      </div>
    </div>
  );
};

export default TrackDetail;

