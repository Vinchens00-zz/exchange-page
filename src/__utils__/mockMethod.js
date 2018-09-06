const mockMethod = (module, method, implementation) =>
  jest.spyOn(module, method).mockImplementation(implementation);

export default mockMethod;
