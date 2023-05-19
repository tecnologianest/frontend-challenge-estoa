import { renderHook } from '@testing-library/react-hooks';
import { useSearch } from './useSearch';

interface TestCharacterProps {
  name: string;
}

const characters: TestCharacterProps[] = [
  { name: 'Luke Skywalker' },
  { name: 'Darth Vader' },
  { name: 'Leia Organa' },
];

describe('useSearch', () => {
  test('returns filtered list based on search query', () => {
    const searchQuery = 'luke';
    const { result } = renderHook(() => useSearch(characters, searchQuery));

    expect(result.current).toEqual([{ name: 'Luke Skywalker' }]);
  });

  test('returns empty array when search query does not match any items', () => {
    const searchQuery = 'bob';
    const { result } = renderHook(() => useSearch(characters, searchQuery));

    expect(result.current).toEqual([]);
  });

  test('returns the whole list when search query is empty', () => {
    const searchQuery = '';
    const { result } = renderHook(() => useSearch(characters, searchQuery));

    expect(result.current).toEqual(characters);
  });
});
