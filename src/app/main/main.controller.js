export class MainController {
  constructor (externalContacts, $uibModal, _/*$timeout, webDevTec, toastr*/) {
    'ngInject';

    // this.awesomeThings = [];
    // this.classAnimation = '';
    // this.creationDate = 1486658851080;
    // this.toastr = toastr;

    // this.activate($timeout, webDevTec);
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

  // activate($timeout, webDevTec) {
  //   this.getWebDevTec(webDevTec);
  //   $timeout(() => {
  //     this.classAnimation = 'rubberBand';
  //   }, 4000);
  // }

  // getWebDevTec(webDevTec) {
  //   this.awesomeThings = webDevTec.getTec();

  //   angular.forEach(this.awesomeThings, (awesomeThing) => {
  //     awesomeThing.rank = Math.random();
  //   });
  // }

  // showToastr() {
  //   this.toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
  //   this.classAnimation = '';
  // }
}
