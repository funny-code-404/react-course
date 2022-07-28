import { ReactNode, useRef } from 'react';
import { RefsContext } from './RefsContext';

type Props = { children: ReactNode };

const RefsContextProvider = ({ children }: Props) => {
    const toAvailableHotelsRef = useRef<HTMLDivElement>(null);

    return (
        <RefsContext.Provider value={{ toAvailableHotelsRef }}>
            {children}
        </RefsContext.Provider>
    );
};

export default RefsContextProvider;