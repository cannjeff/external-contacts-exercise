export class ExternalContactsService {
  constructor ($localStorage) {
    'ngInject';

    this.data = $localStorage.$default({
      contacts: [
        { id: this.generateID(), selected: false, type: 'Executive', name: 'Ann Brown', title: 'CEO', phone: '5124565555', ext: '', fax: '5124565555', email: 'Executive' },
        { id: this.generateID(), selected: false, type: 'Inmar AR', name: 'Mary Smith', title: 'Lorem Ipsum', phone: '5124565555', ext: '', fax: '5124565555', email: 'Inmar AR' },
        { id: this.generateID(), selected: false, type: 'Executive', name: 'John Doe', title: 'Dolor Sit', phone: '5124565555', ext: '', fax: '5124565555', email: 'Executive' },
        { id: this.generateID(), selected: false, type: 'Daily', name: 'John Doe', title: 'Dolor sit amet', phone: '5124565555', ext: '', fax: '5124565555', email: 'Daily' },
        { id: this.generateID(), selected: false, type: 'Other', name: 'John Doe', title: 'Lorem Ipsum', phone: '5124565555', ext: '', fax: '5124565555', email: 'Other' }
      ]
    });
  }

  getExternalContacts() {
    return this.data.contacts;
  }

  addExternalContact(contact) {
    contact.id = this.generateID();
    this.data.contacts.push(contact);
    return this.data.contacts;
  }

  /* Credit - https://gist.github.com/gordonbrander/2230317 */
  generateID() {
    return '_' + Math.random().toString(36).substr(2,9);
  }
}
