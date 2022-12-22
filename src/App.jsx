import { Component } from 'react';
import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';
//model.id = nanoid() //=> "V1StGXR8_Z5jdHi6B-myT"

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleAddContact = newContact => {
    if (this.state.contacts.some(contact => contact.name === newContact.name)) {
      return alert(`${newContact.name} is already in contacts.`);
    }

    this.setState(prevState => {
      return { contacts: [...prevState.contacts, newContact] };
    });
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  filterContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().trim().includes(filter.toLowerCase().trim())
    );
  };

  onSearch = e => {
    this.setState({
      filter: e.target.value,
    });
  };

  render() {
    const contactToRender = this.filterContacts();
    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm
          handleAddContact={this.handleAddContact}
          handleSubmit={this.handleSubmit}
          reset={this.reset}
        />
        <h2>Contacts</h2>
        <Filter onChange={this.onSearch} />
        <ContactList
          deleteContact={this.deleteContact}
          contactToRender={contactToRender}
        />
      </>
    );
  }
}
