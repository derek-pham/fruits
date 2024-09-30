/* eslint-disable react/prop-types */
import React, { createContext, useContext, useState, useEffect } from 'react';

const InterfaceContext = createContext();

export const useInterfaceContext = () => useContext(InterfaceContext);

export const InterfaceContextProvider = ({ children }) => {
    const [listNumber, setListNumber] = useState(0)

    return (
        <InterfaceContext.Provider value={{
            listNumber,
            setListNumber
        }}
        >
            {children}
        </InterfaceContext.Provider>
    );
};
