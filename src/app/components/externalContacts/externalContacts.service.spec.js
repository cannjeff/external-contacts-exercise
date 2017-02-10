describe('service externalContacts', () => {
  beforeEach(angular.mock.module('testOne'));

  it('should be registered', inject(externalContacts => {
    expect(externalContacts).not.toEqual(null);
  }));

  describe('getExternalContacts function', () => {
    it('should exist', inject(externalContacts => {
      expect(externalContacts.getExternalContacts).not.toBeNull();
    }));

    it('should return array of object', inject(externalContacts => {
      const data = externalContacts.getExternalContacts();
      expect(data).toEqual(jasmine.any(Array));
      expect(data[0]).toEqual(jasmine.any(Object));
      expect(data.length > 5).toBeTruthy();
    }));
  });
});
