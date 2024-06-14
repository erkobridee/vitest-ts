import { greetings } from '~/index';

describe('Lexer', () => {
  it('greetings', () => {
    expect(greetings).toBe('Hello vitest-ts!');
  });
});
