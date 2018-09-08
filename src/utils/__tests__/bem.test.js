import cn, { objectToArray, parse } from '../bem';

describe('bem utils', () => {
  describe('objectToArray', () => {
    it('should convert object to array of object keys applying kebab-case to values', () => {
      expect(objectToArray({ mod3: true, mod4: false })).toEqual(['mod-3']);
      expect(objectToArray({ isLoading: true })).toEqual(['is-loading']);
    });
  });

  describe('parse', () => {
    it('should parse modifiers', () => {
      expect(parse('mod')).toEqual(['mod']);
      expect(parse(1)).toEqual([1]);
      expect(parse({ mod1: true })).toEqual(['mod-1']);
    });
  });

  describe('classnames', () => {
    const b = cn('Aston');
    it('should correctly handle block names', () => {
      expect(b()).toBe('Aston');
    });

    it('should correctly handle element names', () => {
      expect(b('title')).toBe('Aston__title');
      expect(b(null)).toBe('Aston');
    });

    it('should correcly handle modifiers', () => {
      expect(b('title', 'mod1')).toBe('Aston__title Aston__title--mod1');
      expect(b('title', ['mod1', 'mod2'])).toBe(
        'Aston__title Aston__title--mod1 Aston__title--mod2'
      );
      expect(b('title', { hide: true })).toBe(
        'Aston__title Aston__title--hide'
      );
      expect(b('title', ['mod1', 'mod2', { mod3: true, mod4: false }])).toBe(
        'Aston__title Aston__title--mod1 Aston__title--mod2 Aston__title--mod-3'
      );
    });

    it('should correctly handle class names', () => {
      expect(b('title', null, 'foo')).toBe('Aston__title foo');
      expect(b('title', null, { foo: true })).toBe('Aston__title foo');
      expect(b('title', null, ['foo', 'bar', { baz: true, qux: false }])).toBe(
        'Aston__title foo bar baz'
      );
    });
  });
});
