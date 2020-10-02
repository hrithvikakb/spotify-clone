export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
 //   token: "BQB12u8l08pcOXIoQYl94f9RVLwykB5r8oJL8xY3THJCodf71G…cQftAhS_Y8QrZcfg_xkYvLI8Ue44G6HQyrBbRqZ8U9NGN1ceS",
}

const reducer = (state, action) => {
    console.log(action);

    switch(action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user,
            }
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token,
            }
        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists,
            }
        case 'SET_DISCOVER_WEEKLY':
            return {
                ...state,
                discover_weekly: action.discover_weekly,
            }
        default: 
            return state;
    }
}

export default reducer;