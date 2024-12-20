import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../reducers/count'
import counterSlice from '../reducers/count-slice'

const store = configureStore({
    reducer: counterSlice
})

export default store