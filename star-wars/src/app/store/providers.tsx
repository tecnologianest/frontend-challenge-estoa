'use client'
import {Provider} from 'react-redux';
import {store} from './index'
import { PersistGate } from 'redux-persist/integration/react';
import persistStore from 'redux-persist/es/persistStore';

export function Providers({children}: any) {
    let persistor = persistStore(store)

    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                {children}
            </PersistGate>
        </Provider>
        
    )
    
}