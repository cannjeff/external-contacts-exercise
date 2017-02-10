export function ContactListDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/contactList/contactList.html',
    scope: {
      contacts: '='
    },
    controller: ContactListController,
    controllerAs: 'vm',
    bindToController: true
  };

  return directive;
}

class ContactListController {
  constructor () {
    'ngInject';

  }
}
