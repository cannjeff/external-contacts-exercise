describe('controllers', () => {
  let vm;

  beforeEach(angular.mock.module('testOne'));

  beforeEach(inject(($controller, externalContacts) => {
    spyOn(externalContacts, 'getExternalContacts').and.returnValue([{}, {}, {}, {}, {}]);

    vm = $controller('MainController');
  }));

  it('should contain 5 external contacts', () => {
    expect(angular.isArray(vm.contacts)).toBeTruthy();
    expect(vm.contacts.length === 5).toBeTruthy();
  });
});
