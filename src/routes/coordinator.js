export const goToHomePage = (navigate) => {
    navigate("/");
  };
  
  export const goToDetailsPage = (navigate, name) => {
    navigate(`/details/${encodeURIComponent(name)}`);
  };
  