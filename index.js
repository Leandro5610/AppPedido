/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import React, { useEffect, useState } from 'react';
import CartProvider from './app/ui/provider/CartProvider';
import ProductProvider from './app/ui/provider/ProductProvider';


const tema = {
    ...DefaultTheme,
    dark: true,
    colors: {
        ...DefaultTheme.colors,
        primary: 'black'
    }
}



export default function Main() {


    return (
        <PaperProvider theme={tema }>
            <ProductProvider>
                <CartProvider>
                    <App />
                </CartProvider>
            </ProductProvider>
        </PaperProvider>

    )
}

AppRegistry.registerComponent(appName, () => Main);
