/* global moment:false, _:false */

import { config } from './index.config';
import { runBlock } from './index.run';
import { MainController } from './main/main.controller';
import { AddContactModalController } from '../app/components/addContactModal/addContactModal.controller';
import { ExternalContactsService } from '../app/components/externalContacts/externalContacts.service';
import { ContactListDirective } from '../app/components/contactList/contactList.directive';
import { ContactFormDirective } from '../app/components/contactForm/contactForm.directive';

angular.module('testOne', ['ngAnimate', 'ngAria', 'ui.bootstrap', 'toastr', 'ngStorage', 'bc.TelephoneFilter'])
  .constant('moment', moment)
  .constant('_', _)
  .config(config)
  .run(runBlock)
  .controller('MainController', MainController)
  .controller('AddContactModalController', AddContactModalController)
  .service('externalContacts', ExternalContactsService)
  .directive('contactList', ContactListDirective)
  .directive('contactForm', ContactFormDirective);
