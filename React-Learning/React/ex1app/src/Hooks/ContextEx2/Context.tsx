import React, { createContext, useContext, useState } from 'react';

export type Player = {
    batsman: string;
    runs: number;
    balls: number;
};

type ScoreContextType = {
    players: Player[];
    addPlayer: (player: Player) => void;
};

const ScoreContext = createContext<ScoreContextType | undefined>(undefined);

export const useScore = () => {
    const context = useContext(ScoreContext);
    if (!context) throw new Error('useScore must be used within ScoreProvider');
    return context;
};

export function ScoreProvider({ children }: { children: React.ReactNode }) {
    const [players, setPlayers] = useState<Player[]>([]);

    const addPlayer = (player: Player) => {
        setPlayers(prev => [...prev, player]);
    };

    return (
        <ScoreContext.Provider value={{ players, addPlayer }}>
            {children}
        </ScoreContext.Provider>
    );
}
