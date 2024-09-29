/* eslint-disable react/prop-types */
import React, { createContext, useContext, useState, useEffect } from 'react';

const InterfaceContext = createContext();

export const useInterfaceContext = () => useContext(InterfaceContext);

export const InterfaceContextProvider = ({ children }) => {

    return (
        <InterfaceContext.Provider value={{
        }}
        >
            {children}
        </InterfaceContext.Provider>
    );
};
