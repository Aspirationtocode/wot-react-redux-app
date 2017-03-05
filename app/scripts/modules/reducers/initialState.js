import DATABASE from '../database'

export const initialState = [
	{
		nick: "leshagumash",
		photoURL: "https://pp.userapi.com/c837526/v837526827/2ab3/1ywdOa5dBjw.jpg",
		favouriteTank: "E 100",
		wn8: "2813",
	},
	{
		nick: "jekan1602",
		photoURL: "https://pp.userapi.com/c836225/v836225398/16c8e/WKB63VM79-I.jpg",
		favouriteTank: "TVP T 50/51",
		wn8: "2244",
	},
	{
		nick: "Wanek97",
		photoURL: "https://pp.userapi.com/c409824/v409824568/1a53/LjkSUZIm4MA.jpg",
		favouriteTank: "AMX 50B",
		wn8: "1814",
	},
	{
		nick: "danila319",
		photoURL: "https://pp.userapi.com/c403424/v403424833/7e19/PoWVki5xVuk.jpg",
		favouriteTank: "Grille 15",
		wn8: "2000",
	}
]


export default function () {
	return initialState;
}
