import * as types from './mutation-types.js'
export default {
    [types.SET_CURRENT_VIDEO](state,payload){
        state.currentVideo = payload
    },
    [types.SET_PLAYING_STATE](state,payload){
        state.isPlaying = payload
    }
}