import React from 'react';

import { List, ListItame, BtnDelete } from './ContactList.styled';
import PropTypes from 'prop-types';

const ContactList = ({ filter, onDeleteContact }) => {
  return (
    <List>
      {filter.map(({ id, name, number }) => (
        <ListItame key={id}>
          <p>
            {name}:{number}
          </p>
          <BtnDelete type="button" onClick={() => onDeleteContact(id)}>
            Delete
          </BtnDelete>
        </ListItame>
      ))}
    </List>
  );
};

ContactList.prototype = {
  filter: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.number.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
