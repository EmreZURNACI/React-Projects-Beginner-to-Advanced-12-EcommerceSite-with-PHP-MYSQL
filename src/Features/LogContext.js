import { createContext, useContext, useState } from "react";
const Loged = createContext();
const LogedProvider = ({ children }) => {
    const [isLog, setIsLog] = useState(false);
    const datas = {
        isLog, setIsLog
    }
    return (
        <Loged.Provider value={datas}>
            {children}
        </Loged.Provider>
    )
}
export const UseLogContext = () => useContext(Loged)
export default LogedProvider