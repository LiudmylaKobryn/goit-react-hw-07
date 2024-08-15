import { useDispatch, useSelector } from "react-redux";
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice";
import s from "./SearchBox.module.css";

const SearchBox = () => {
  const dispatch = useDispatch();
  const value = useSelector(selectNameFilter);

  const handleChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <label className={s.label}>
      <span>Find contacts by name</span>
      <input
        className={s.input}
        onChange={handleChange}
        type="text"
        value={value}
      />
    </label>
  );
};

export default SearchBox;
