import React, {Component, PropTypes} from 'react';

class ContactsApp extends Component {
	constructor() {
		super();
		this.state = {
			filterText: ''
		};
	}

	render() {
		return (
			<div>
				<SearchBar filterText={this.state.filterText} />
				<ContactList contacts={this.props.contacts}
							filterText={this.state.filterText} />
			</div>
		);
	}
}
ContactsApp.propTypes = {
	contacts: PropTypes.arrayOf(PropTypes.object)
};

class SearchBar extends Component {
	render() {
		return <input type="search" placeholder="search"
					value={this.props.filterText} />
	}
}
SearchBar.propTypes = {
	filterText: PropTypes.string.isRequired
};

class ContactList extends Component {
	render() {
		let filteredContacts = this.props.contacts.filter(
									(contact) => contact.name.indexOf(this.props.filterText) !== -1);
		return (
			<ul>
				{this.props.contacts.map(
					(contact) => <ContactItem key={contact.email}
											name={contact.name}
											email={contact.email} />
				)}
			</ul>
		);
	}
}
ContactList.propTypes = {
	contacts: PropTypes.arrayOf(PropTypes.object)
};

class ContactItem extends Component {
	render() {
		return <li>{this.props.name} - {this.props.email}</li>;
	}
}

export default ContactsApp;