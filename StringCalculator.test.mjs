import { expect } from 'chai';
import StringCalculator from './StringCalculator.mjs';

describe('StringCalculator', () => {
  let calculator;

  beforeEach(() => {
    calculator = new StringCalculator();
  });

  it('should return 0 for an empty string', () => {
    expect(calculator.add("")).to.equal(0);
  });

  it('should return the number itself for a single number', () => {
    expect(calculator.add("1")).to.equal(1);
  });

  it('should return the sum for two numbers', () => {
    expect(calculator.add("1,2")).to.equal(3);
  });

  it('should return the sum for multiple numbers', () => {
    expect(calculator.add("1,2,3")).to.equal(6);
  });

  it('should handle new lines between numbers', () => {
    expect(calculator.add("1\n2,3")).to.equal(6);
  });
});