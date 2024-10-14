/* eslint-disable react/prop-types */
import React, { createContext, useContext, useState, useEffect } from 'react';

const InterfaceContext = createContext();

export const useInterfaceContext = () => useContext(InterfaceContext);

export const InterfaceContextProvider = ({ children }) => {
    const [listNumber, setListNumber] = useState(0)
    const [crossSectionView, setCrossSectionView] = useState(false)

    return (
        <InterfaceContext.Provider value={{
            listNumber,
            setListNumber,
            crossSectionView,
            setCrossSectionView
        }}
        >
            {children}
        </InterfaceContext.Provider>
    );
};
