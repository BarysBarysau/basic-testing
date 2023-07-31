// Uncomment the code below and write your tests
import { getBankAccount } from './index';
import {
  BankAccount,
  InsufficientFundsError,
  TransferFailedError,
  SynchronizationFailedError,
} from './index';

describe('BankAccount', () => {
  test('should create account with initial balance', () => {
    const number = 12345;
    const account = getBankAccount(number);
    expect(account.getBalance()).toEqual(number);
  });

  test('should throw InsufficientFundsError error when withdrawing more than balance', () => {
    const amount = 12346;
    const balance = 12345;
    const account = new BankAccount(balance);
    expect(account.withdraw(amount)).toThrow(
      new InsufficientFundsError(balance),
    );
  });

  test('should throw error when transferring more than balance', () => {
    const amount = 12346;
    const balance = 12345;
    const anotherBalance = 13000;
    const account = new BankAccount(balance);
    const anotherAccount = new BankAccount(anotherBalance);
    expect(() => account.transfer(amount, anotherAccount)).toThrow(
      new InsufficientFundsError(balance),
    );
  });

  test('should throw error when transferring to the same account', () => {
    // Write your test here
  });

  test('should deposit money', () => {
    // Write your test here
  });

  test('should withdraw money', () => {
    // Write your test here
  });

  test('should transfer money', () => {
    // Write your test here
  });

  test('fetchBalance should return number in case if request did not failed', async () => {
    // Write your tests here
  });

  test('should set new balance if fetchBalance returned number', async () => {
    // Write your tests here
  });

  test('should throw SynchronizationFailedError if fetchBalance returned null', async () => {
    // Write your tests here
  });
});
