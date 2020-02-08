import React from 'react'
import { DefaultLayout } from './src/components/layout/default'
import { LayoutContextProvider } from './src/contexts'

export const wrapPageElement = ({ element, props }) => {
    // props provide same data to Layout as Page element will get
    // including location, data, etc - you don't need to pass it
    return (
        <LayoutContextProvider>
            <DefaultLayout>
                { element }
            </DefaultLayout>
        </LayoutContextProvider>
    )
}