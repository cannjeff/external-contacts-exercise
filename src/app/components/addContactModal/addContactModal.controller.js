export class AddContactModalController {
  constructor (externalContacts, $uibModalInstance) {
    'ngInject';

    this.contact = {};
    this.externalContacts = externalContacts;
    this.$uibModalInstance = $uibModalInstance;
  }

  addContact() {
    this.externalContacts.addExternalContact(this.contact);
    this.$uibModalInstance.close(this.contact);
  }

  cancel() {
    this.$uibModalInstance.dismiss('cancel');
  }
}
