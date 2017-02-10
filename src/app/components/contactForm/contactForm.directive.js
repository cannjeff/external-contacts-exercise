export function ContactFormDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/contactForm/contactForm.html',
    scope: {
      contact: '='
    },
    controller: ContactFormController,
    controllerAs: '$ctrl',
    bindToController: true
  };

  return directive;
}

class ContactFormController {
  constructor () {
    'ngInject';

  }
}
