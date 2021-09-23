import Dropdown from "./components/Dropdown";

function FilterResults() {
  return (
    <div className="search-content">
      <div className="filter-category">
        <Dropdown
          header="Category"
          data={[
            "Category 1",
            "Category 2",
            "Category 3",
            "Category 4",
            "Category 5",
            "Category 6",
            "Category 7",
          ]}
        />
      </div>
      <div className="filter-results">
        <Dropdown
          header="Filter"
          data={[
            "Filter 1",
            "Filter 2",
            "Filter 3",
            "Filter 4",
            "Filter 5",
            "Filter 6",
            "Filter 7",
          ]}
        />
      </div>
    </div>
  );
}

export default FilterResults;
