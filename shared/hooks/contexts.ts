import React from 'react';
import { IDemoUser } from '../types/demo/IDemoUser';
import { IPlayer } from '../types/IPlayer';

export const AuthContext = React.createContext({
	authUser: null,
	setAuthUser: (auth) => {
	},
	loading: false,
	setLoading: (loading) => {
	}
});

interface UserContextInterface {
	demoUser: IDemoUser;
	balance: number;
	setExpirationTimeOnUser: (Date) => void,
	setIsRunningOnUser: (boolean) => void,
	setBalance: (number) => void
}

export const DemoUserContext = React.createContext<UserContextInterface>({
  demoUser: null,
	balance: null,
	setExpirationTimeOnUser: () => {},
	setIsRunningOnUser: () => {},
	setBalance: () => {}
});

interface PlayerBidsContextInterface {
	playerBids: IPlayer[];
	searchQuery: string;
	setRefreshInterval: Function;
	addPlayer: Function;
	clearPlayers: Function;
	manuallyRefreshBids: Function;
	setSearchQuery: Function;
	recentlyAddedPlayer: IPlayer;
	setRecentlyAddedPlayer: Function;
}

export const PlayerBidsContext = React.createContext<PlayerBidsContextInterface>({
	playerBids: [],
	searchQuery: '',
	setRefreshInterval: (_) => {},
	addPlayer: (_) => {},
	clearPlayers: () => {},
	manuallyRefreshBids: () => {},
	setSearchQuery: (_) => {},
	recentlyAddedPlayer: null,
	setRecentlyAddedPlayer: (_) => {}
});
