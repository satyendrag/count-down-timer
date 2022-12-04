const ShowCounter = ({ days, hours, minutes, seconds }) => {
  return (
    <div>
      <h1>
        <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:
        <span>{seconds}</span>
      </h1>
    </div>
  );
};
export default ShowCounter;
