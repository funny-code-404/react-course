import { useState } from "react";
import { TStorage } from "../types/types";

export const useStorage = (key: string, initialValue: TStorage, storage = localStorage) => {
    const [value, setValue] = useState(() => {
        try {
            const value = storage.getItem(key) as string;
            return JSON.parse(value);
        } catch (error) {
            return initialValue;
        };
    });

    function setItem(item: TStorage) {
        try {
            const valueStorage = JSON.stringify(item);
            setValue(item);
            storage.setItem(key, valueStorage);
        } catch (error) {
            setValue(initialValue);
        }
    };

    function removeItem() {
        try {
            storage.removeItem(key);
        } catch (error) {
            setValue('');
        }
    };

    return { value, setItem, removeItem };
};