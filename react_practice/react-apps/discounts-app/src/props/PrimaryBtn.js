import "../css/PrimaryBtn.css";

function PrimaryButton({ title }) {
  return (
    <div className="primary-btn-header">
      <h5 className="primary-btn-title">{title}</h5>
    </div>
  );
}

export default PrimaryButton;
