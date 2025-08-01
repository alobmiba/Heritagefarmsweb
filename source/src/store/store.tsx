import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice"; // Import the cart reducer

// Load state from localStorage
const loadFromLocalStorage = () => {
    try {
        const stateStr = localStorage.getItem("cartState");
        return stateStr ? JSON.parse(stateStr) : undefined;
    } catch (err) {
        console.error("Could not load state", err);
        return undefined;
    }
};

// Save state to localStorage
const saveToLocalStorage = (state: any) => {
    try {
        const stateStr = JSON.stringify(state);
        localStorage.setItem("cartState", stateStr);
    } catch (err) {
        console.error("Could not save state", err);
    }
};

// Throttle function to limit how often we write to localStorage
const throttle = (func: (...args: any[]) => void, limit: number) => {
    let inThrottle = false;
    return (...args: any[]) => {
        if (!inThrottle) {
            func(...args);
            inThrottle = true;
            setTimeout(() => {
                inThrottle = false;
            }, limit);
        }
    };
};

const saveToLocalStorageThrottled = throttle(saveToLocalStorage, 1000);

const store = configureStore({
    reducer: {
        cart: cartReducer,
    },
    preloadedState: {
        cart: loadFromLocalStorage(), // Load cart from localStorage
    },
});

store.subscribe(() => {
    saveToLocalStorageThrottled(store.getState().cart); // Save only cart state
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
