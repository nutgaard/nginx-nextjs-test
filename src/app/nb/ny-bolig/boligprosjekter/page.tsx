"use client";
import {useIntl} from "@/context/IntlContext";

interface Props {

}

export default function NyBolig(props: Props) {
    const intl = useIntl();
    return (
        <>
            <h1>Boligsøk</h1>
            <p>Another page...</p>
            <p>{intl?.hello({name: 'World'})}</p>
        </>
    );
}