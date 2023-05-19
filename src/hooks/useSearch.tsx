import { useMemo } from 'react';
import { CharacterProps } from '../types';

export function useSearch<T extends Partial<CharacterProps>>(
  list: T[],
  searchQuery: string
): T[] {
  const filteredList = useMemo(() => {
    return list.filter((item) => {
      if (item.name) {
        return item.name.toLowerCase().includes(searchQuery.toLowerCase());
      }
    });
  }, [list, searchQuery]);

  return filteredList;
}
