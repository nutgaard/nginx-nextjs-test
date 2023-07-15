"use client";
import React, {useContext} from 'react';
import messages from '@/intl/compiled/bundle_sv.compiled.json';
import {createIntlLUT} from "@/intl/compiled/lut";
import {createIntl} from "@formatjs/intl";

interface Config {
    locale: string;
    messages: typeof messages;
}

export function setupIntl({ locale, messages }: Config) {
    const intl = createIntl<React.ReactNode>({
        locale: locale,
        defaultLocale: 'nb',
        messages: messages
    });
    return createIntlLUT(intl);
}
const IntlContext = React.createContext<ReturnType<typeof setupIntl> | undefined>(undefined);

export function useIntl(): ReturnType<typeof setupIntl>  {
    return useContext(IntlContext)!;
}

export function IntlContextProvider(props: Config & { children: React.ReactNode }) {
    const value = setupIntl({
        locale: props.locale,
        messages: props.messages
    });

    return (
        <IntlContext.Provider value={value}>
            {props.children}
        </IntlContext.Provider>
    );
}