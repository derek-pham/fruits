/* eslint-disable react/prop-types */
import React, { createContext, useContext, useState, useEffect } from 'react';

const InterfaceContext = createContext();

export const useInterfaceContext = () => useContext(InterfaceContext);

export const InterfaceContextProvider = ({ children }) => {
    const [triggerNoteFor, setTriggerNoteFor] = useState('null')
    const [cancelHighlights, setCancelHighlights] = useState(false)
    const [buttonMenu, setButtonMenu] = useState([])
    const [loadingStatus, setLoadingStatus] = useState(0)
    const [viewedCards, setViewedCards] = useState({
        photo: false,
        globe: false,
        flask: false,
        coffee: false
    })

    const addToButtonMenu = (newItem) => {
        if (!buttonMenu.includes(newItem)) {
            setButtonMenu((prevItems) => [...prevItems, newItem]);
        }
    }

    const renderButton = (name) => {
        if (buttonMenu.includes(name)) {
            return true
        }
        else return false
    }

    return (
        <InterfaceContext.Provider value={{
            triggerNoteFor,
            setTriggerNoteFor,
            cancelHighlights,
            setCancelHighlights,
            buttonMenu,
            setButtonMenu,
            addToButtonMenu,
            renderButton,
            loadingStatus,
            setLoadingStatus,
            viewedCards,
            setViewedCards
        }}
        >
            {children}
        </InterfaceContext.Provider>
    );
};
