export const removeCharactersFromString = (
  stringToRemoveCharacters: string
) => {
  return stringToRemoveCharacters.replace(/[^0-9]/g, "");
};
