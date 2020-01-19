import React from "react";

const CurrencyListContext = React.createContext([]);

export const CurrencyListProvider = CurrencyListContext.Provider;
export const CurrencyListConsumer = CurrencyListContext.Consumer;
export default CurrencyListContext;

/* export const CurrencyListProvider = ({ children }) => {
         const [name, setName] = useState("William");
         const [location, setLocation] = useState("Mars");

         return (
           <UserContext.Provider
             value={{
               name,
               location,
               setName,
               setLocation
             }}
           >
             {children}
           </UserContext.Provider>
         );
       }; */
