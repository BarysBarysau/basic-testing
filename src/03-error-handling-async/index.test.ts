import {
  throwError,
  throwCustomError,
  resolveValue,
  MyAwesomeError,
  rejectCustomError,
} from './index';

describe('resolveValue', () => {
  test('should resolve provided value', async () => {
    const str = 'some weird value';
    await expect(resolveValue(str)).resolves.toEqual(str);
  });
});

describe('throwError', () => {
  test('should throw error with provided message', () => {
    const message = 'any message';
    expect(() => throwError(message)).toThrow(message);
  });

  test('should throw error with default message if message is not provided', () => {
    expect(() => throwError()).toThrow('Oops!');
  });
});

describe('throwCustomError', () => {
  test('should throw custom error', () => {
    const myerror = new MyAwesomeError();
    expect(() => {
      throwCustomError();
    }).toThrow(myerror);
  });
});

describe('rejectCustomError', () => {
  test('should reject custom error', async () => {
    const myerror = new MyAwesomeError();
    await expect(rejectCustomError()).rejects.toEqual(myerror);
  });
});
