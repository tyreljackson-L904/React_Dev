import Dropdown from "./components/Dropdown";
import "./FilterResults.css";

function FilterResults() {
  return (
    <div className="filter-content">
      <Dropdown
        header="Creator"
        data={["Promo Code", "Discount %", "Brand", "Category"]}
      />
    </div>
  );
}

export default FilterResults;
