import React from "react";
import PropTypes from "prop-types";
import styles from "./Filter.module.css";

const FilterName = function ({ filterRender, filter }) {
  return (
    <div>
      <label htmlFor="name" className={styles.contactFormLabel}>
        Find contacts by name
      </label>
      <input
        type="text"
        value={filter}
        onChange={(e) => filterRender(e.target.value)}
      />
    </div>
  );
};

FilterName.propTypes = {
  filterRender: PropTypes.func.isRequired,
  filter: PropTypes.string,
};

export default FilterName;
