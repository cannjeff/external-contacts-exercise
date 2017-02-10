export class MainController {
  constructor (externalContacts, $uibModal, _) {
    'ngInject';

    this.$uibModal = $uibModal;
    this._ = _;
    this.contacts = externalContacts.getExternalContacts();
    this.expanded = true;
  }

  addContact() {
    this.$uibModal.open({
      templateUrl: 'app/components/addContactModal/addContactModal.html',
      controller: 'AddContactModalController',
      controllerAs: '$ctrl'
    });
  }

  shouldShowRemove() {
    return this._.any(this.contacts, { selected: true });
  }

  removeSelectedContacts() {
    var self = this;
    var selectedContacts = self._.where(self.contacts, { selected: true });
    selectedContacts.forEach(function (contact) {
      var idx = self._.findIndex(self.contacts, { id: contact.id });
      if (idx !== -1) {
        self.contacts.splice(idx, 1);
      }
    });
  }
}
