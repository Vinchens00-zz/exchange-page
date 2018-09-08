const cleanMock = mocks => () => mocks.forEach(mock => mock.mockRestore());

export default cleanMock;
