import React from "react";
import PropTypes from "prop-types";
import styles from "./ContactList.module.css";

const ContactList = function ({ list, deleteList }) {
  return (
    <ul className={styles.TaskList}>
      {list.map((e) => {
        return (
          <li key={e.id} className={styles.contactListItem}>
            {e.name} : {e.number}
            <button
              type="button"
              onClick={() => deleteList(e.id)}
              className={styles.contactListBtn}
            >
              Удалить
            </button>
          </li>
        );
      })}
    </ul>
  );
};

ContactList.propTypes = {
  deleteList: PropTypes.func.isRequired,
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

export default ContactList;
