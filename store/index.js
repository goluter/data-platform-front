export const state = {
    pageTitle: ''
}

export const mutations = {
    SetPageTitle (state, title) {
        state.pageTitle = title
    }
}

export const getters = {
    getPageTitle(state) {
        return state.pageTitle
    }
}