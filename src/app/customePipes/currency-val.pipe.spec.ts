import { CurrencyValPipe } from './currency-val.pipe';

describe('CurrencyValPipe', () => {
  it('create an instance', () => {
    const pipe = new CurrencyValPipe();
    expect(pipe).toBeTruthy();
  });
});
