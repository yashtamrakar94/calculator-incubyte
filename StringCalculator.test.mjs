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
});