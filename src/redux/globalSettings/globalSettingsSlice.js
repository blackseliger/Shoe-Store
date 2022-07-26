import { createSlice } from "@reduxjs/toolkit";

const globalSettingsSlice = createSlice({
    name: 'globalSettings',
    initialState: {
        headerLinks: [
            { name: 'Главная', route: '/' },
            { name: 'Каталог', route: 'catalog' },
            { name: 'О магазине', route: 'about' },
            { name: 'Контакты', route: 'contacts' },
        ],
        footerLinks: [
            { name: 'О магазине', route: 'about' },
            { name: 'Каталог', route: 'catalog' },
            { name: 'Контакты', route: 'contacts' },
        ],
        banner: {
            name: 'К весне готовы!',
            src: '/img/banner.jpg',
        },
        searchString: '',
    },
    reducers: {
        changeGS(state, action) {
            return { ...state, ...action.payload };
        }
    }
})

const { actions, reducer } = globalSettingsSlice;
export const { changeGS } = actions;
export default reducer; 