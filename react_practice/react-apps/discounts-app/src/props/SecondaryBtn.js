import "../css/SecondaryBtn.css";

function SecondaryBtn({ title }) {
  return (
    <div className="secondary-btn-header">
      <div className="secondary-btn-title">{title}</div>
    </div>
  );
}

export default SecondaryBtn;
