import { emptySet, normalize, toArray } from './normalization.utils';

describe('Normalization utils', () => {
  const TEST_COLLECTION = [
    { id: '1' },
    { id: '2' },
    { id: '3' },
    { id: '4' },
    { id: '5' },
  ];

  const NORMALIZED_TEST_COLLECTION = {
    byId: {
      '1': TEST_COLLECTION[0],
      '2': TEST_COLLECTION[1],
      '3': TEST_COLLECTION[2],
      '4': TEST_COLLECTION[3],
      '5': TEST_COLLECTION[4],
    },
    allIds: ['1', '2', '3', '4', '5'],
  };

  describe('normalize', () => {
    it('should normalize a collection based on id', () => {
      expect(normalize(TEST_COLLECTION)).toEqual(NORMALIZED_TEST_COLLECTION);
    });
  });

  describe('toArray', () => {
    it('should create a collection from a normalized collection', () => {
      expect(toArray(NORMALIZED_TEST_COLLECTION)).toEqual(TEST_COLLECTION);
    });
  });

  describe('emptySet', () => {
    it('should return an empty normalized collection', () => {
      expect(emptySet()).toEqual({
        byId: {},
        allIds: [],
      });
    });
  });
});
