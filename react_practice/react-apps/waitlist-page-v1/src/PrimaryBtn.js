import "./PrimaryBtn.css";

function PrimaryButton({ title, handleSubmit }) {
  return (
    <div className="primary-btn-header" handleSubmit={handleSubmit}>
      <h5 className="primary-btn-title">{title}</h5>
    </div>
  );
}

export default PrimaryButton;
