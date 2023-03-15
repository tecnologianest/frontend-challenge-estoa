export const getUrlId = (url) => {
   if (url) {
      const splitUrl = url?.split("/");
      const urlId = splitUrl[splitUrl?.length - 2];
      return urlId;
   } else return "";
};
