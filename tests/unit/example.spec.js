describe('Example Component', () => {
  test('Debe de ser mayor que 10',  () => {
    // AAA -> Arrange
    let value = 10;

    // AAA -> Act
    value = value + 2;

    // AAA -> Assert
    expect(value).toBeGreaterThan(10);
  })
})