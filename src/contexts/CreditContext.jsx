import { createContext, useState, useContext } from 'react';

const CreditContext = createContext();

export const CreditProvider = ({ children }) => {
  const [credits, setCredits] = useState(
    parseInt(localStorage.getItem('credits')) || 0
  );

  const updateCredits = (newCredits) => {
    setCredits(newCredits);
    localStorage.setItem('credits', newCredits.toString());
  };

  const deductCredits = (amount) => {
    if (credits >= amount) {
      const newCredits = credits - amount;
      setCredits(newCredits);
      localStorage.setItem('credits', newCredits.toString());
      return true;
    }
    return false;
  };

  return (
    <CreditContext.Provider value={{ credits, updateCredits, deductCredits }}>
      {children}
    </CreditContext.Provider>
  );
};

export const useCredit = () => useContext(CreditContext);

export { CreditContext };
