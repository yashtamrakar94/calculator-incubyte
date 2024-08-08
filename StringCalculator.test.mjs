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
    expect(calculator.add("1,2")).to.equal(1);
  });

  it('should return the sum for multiple numbers', () => {
    expect(calculator.add("1,2,3")).to.equal(4);
  });

  it('should handle new lines between numbers', () => {
    expect(calculator.add("1\n2,3")).to.equal(4);
  });

  it('should support different delimiters', () => {
    expect(calculator.add("//;\n1;2")).to.equal(1);
  });

  it('should throw an error for negative numbers', () => {
    expect(() => calculator.add("1,-2,3")).to.throw('negative numbers not allowed: -2');
  });
  
  it('should list all negative numbers in the error message', () => {
    expect(() => calculator.add("1,-2,-3")).to.throw('negative numbers not allowed: -2, -3');
  });

  it('should ignore alternate numbers', () => {
    expect(calculator.add("2,4,6")).to.equal(8)
    expect(calculator.add("1,2,3,4")).to.equal(4)
  })
});