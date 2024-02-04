import "./ShowCount.css";

const ShowCount = ({ clicks }) => {
  return (
    <div className="show-count">
      <p>
        You clicked here {clicks} time{clicks !== 1 ? "s" : ""}
      </p>
    </div>
  );
};

export default ShowCount;
