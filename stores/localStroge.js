// localStorage.js
"use client";

export const saveStateToLocalStorage = (state) => {
  if (typeof window !== "undefined") {
    // Tarayıcı ortamında çalışıp çalışmadığını kontrol et
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem("reduxState1", serializedState);
    } catch (err) {
      console.error("LocalStorage kaydetme hatası:", err);
    }
  }
};

export const loadStateFromLocalStorage = () => {
  if (typeof window !== "undefined") {
    // Tarayıcı ortamında çalışıp çalışmadığını kontrol et
    try {
      const serializedState = localStorage.getItem("reduxState2");
      if (serializedState === null) {
        return undefined;
      }
      return JSON.parse(serializedState);
    } catch (err) {
      console.error("LocalStorage okuma hatası:", err);
      return undefined;
    }
  }
};
