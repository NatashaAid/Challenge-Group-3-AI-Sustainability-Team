// App context created by Jordan Onwodi
import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

interface SupplyChainJourneyDataType {
  material: string;
  supplier: string;
  manufacturer: string;
}

interface AppContextType {
  supplyChain: SupplyChainJourneyDataType;
  setSupplyChain: Dispatch<SetStateAction<SupplyChainJourneyDataType>>;
}

export const AppContext = createContext<AppContextType>({
  supplyChain: {
    material: "",
    supplier: "",
    manufacturer: "",
  },
  setSupplyChain: () => {},
});

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppContext must be used within a DccJourneyProvider");
  }
  return context;
};

interface AppProviderProps {
  children: ReactNode;
}

const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [supplyChain, setSupplyChain] = useState({
    material: "",
    supplier: "",
    manufacturer: "",
  });
  return (
    <AppContext.Provider
      value={{
        supplyChain,
        setSupplyChain,
      }}>
      {children}
    </AppContext.Provider>
  );
};
export default AppProvider;
