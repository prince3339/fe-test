import anagram from './1';

describe('Check if two strings are anagram', () => {
  it('True', () => {
    expect(anagram('spec', 'ceps')).toBe(true);
  }),
  it('False', () => {
    expect(anagram('spec', 'cepc')).toBe(false);
  })
});