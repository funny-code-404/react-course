import { TableContext } from '../context';

export const TableContextProvider = ({ children }) => {
  return <TableContext.Provider value={{}}>{children}</TableContext.Provider>;
};
