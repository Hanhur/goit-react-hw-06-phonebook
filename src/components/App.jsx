import React from 'react';
import { GlobalStyle } from 'components/Globalstyle';
import { Layout, Header, MainHeader } from './Layout';
import { ContactsForm } from 'components/ContactsForm/ContactsForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from './ContactList/ContactList';

const App = () => {
    return (
        <Layout>
            <GlobalStyle />
            <MainHeader>Phonebook</MainHeader>
            <ContactsForm />
            <Header>Contacts</Header>
            <Filter />
            <ContactList />
        </Layout>
    );
}

export default App;
