describe('directive contactList', function() {
  let vm;
  let element;
  let contacts;

  beforeEach(angular.mock.module('testOne'));

  beforeEach(inject(($compile, $rootScope) => {
    contacts = [];
    element = angular.element(`
      <contact-list contacts="${contacts}"></contact-list>
    `);

    $compile(element)($rootScope.$new());
    $rootScope.$digest();
    vm = element.isolateScope().vm;
  }));

  it('should be compiled', () => {
    expect(element.html()).not.toEqual(null);
  });

  it('should have isolate scope object with instanciate members', () => {
    expect(vm).toEqual(jasmine.any(Object));
  });
});
