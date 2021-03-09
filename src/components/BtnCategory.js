import "./BtnCategory.css";

function BtnCategory({ name, selectedCategories, onSelectCategory }) {
  const isSelected = selectedCategories.includes(name);
  const className = (isSelected ? "isSelected" : "");
  
  const toggleCategory = () => {
    const newSelected = isSelected
      ? selectedCategories.filter((category) => category !== name)
      : [...selectedCategories, name];
    onSelectCategory(newSelected);
  };


  return (
    <div className="navBarBtn">
      <button
        className={className}
        id={name}
        key={name}
        type="button"
        onClick={toggleCategory }
      >
        {name}
      </button>
    </div>
  );
}

export default BtnCategory;
