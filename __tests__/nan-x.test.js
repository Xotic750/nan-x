import NAN from 'src/nan-x';

const mathematicalNaN = 0 / 0;

describe('nAN', function() {
  it('is a number', function() {
    expect.assertions(1);
    expect(typeof NAN).toBe('number');
  });

  it('should not equal itself', function() {
    expect.assertions(2);
    /* eslint-disable-next-line no-self-compare */
    expect(NAN === NAN).toBe(false);
    /* eslint-disable-next-line no-self-compare */
    expect(NAN !== NAN).toBe(true);
  });

  it('should not equal NaN', function() {
    expect.assertions(2);
    expect(NAN === mathematicalNaN).toBe(false);
    expect(NAN !== mathematicalNaN).toBe(true);
  });
});
