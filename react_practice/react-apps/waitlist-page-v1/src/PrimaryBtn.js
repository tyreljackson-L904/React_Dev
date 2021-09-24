import "./PrimaryBtn.css";
import cx from "classnames";

function PrimaryButton({ className, title, handleSubmit }) {
  return (
    <button
      className={cx("primary-btn", className)}
      handleSubmit={handleSubmit}
    >
      {title}
    </button>
  );
}

export default PrimaryButton;
