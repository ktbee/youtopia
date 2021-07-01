import { configureStore } from '@reduxjs/toolkit';

import videoReducer from './components/Video/slice';

export default configureStore({
    reducer: {
        video: videoReducer
    }
});
