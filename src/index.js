import React from 'react';
import { render } from 'react-dom';
import ContactsApp from './components/ContactsApp';

let contacts = [
	{ name: "Casio Zen", email: "cassiozen@gmail.com" },
	{ name: "Dan Abramov", email: "gaearon@somwhere.com" },
	{ name: "Pete Hunt", email: "floydophone@somewhere.com" },
	{ name: "Paul 0'Shannessy", email: "zpao@somewhere.com" },
	{ name: "Ryan Florence", email: "rpflorence@somewhere.com" },
	{ name: "Sebastin Markbage", email: "sebmarkbage@here.com" }
];
const rootElement = document.getElementById('root');
render(<ContactsApp contacts={contacts}/>, rootElement);