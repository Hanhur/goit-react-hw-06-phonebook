import React from 'react';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { List } from './ContactList.styled';
import { getContacts, getFilter } from 'redux/selectors';
import { useSelector } from 'react-redux/es/exports';

export const ContactList = () => {
    const contacts = useSelector(getContacts);
    console.log(contacts);
    const filter = useSelector(getFilter);
    console.log(filter);

    const getFilteredContacts = () => {
        if (!filter) 
        {
            console.log(contacts);
            return contacts;
        }

        return contacts.filter(contact => {
            console.log(contact);
            return contact.name.toLowerCase().includes(filter.toLowerCase());
        });
    };

    const visibleContacts = getFilteredContacts();

    return (
        <div>
            {contacts.length > 0 && (
                <List>
                    {
                        visibleContacts.map(contact => (<ContactItem key={contact.id} contact={contact} />))
                    }
                </List>
            )}
        </div>
    );
}
