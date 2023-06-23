import PropTypes from 'prop-types';
import { ContactItem, ButtonDelete } from './ContactListItem.styled';

const ContactListItem = ({ name, number, id, onDeleteContact }) => {
  return (
    <>
      <ContactItem key={id}>
        {name}: {number}
        <ButtonDelete onClick={() => onDeleteContact(id)}>Delete</ButtonDelete>
      </ContactItem>
    </>
  );
};

export default ContactListItem;

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
