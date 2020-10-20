describe('Our hello world', () => {
  const spiedLog = jest.spyOn(console, 'log').mockImplementation();
  it('calls the console with the expected message', () => {
    require('../index');
    expect(spiedLog).toHaveBeenCalledWith('Hello World');
  });
});
