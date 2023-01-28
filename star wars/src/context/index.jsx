import { createContext } from "react";

export const AllContext = createContext({});



export const AllProvider = ({ children }) => {

  

  const value = {

  }

  return <AllProvider value={value}>{children}</AllProvider>

}

