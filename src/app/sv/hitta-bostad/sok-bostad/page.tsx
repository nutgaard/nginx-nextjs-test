"use client";
import {useIntl} from "@/context/IntlContext";

interface Props {

}

export default function NyBolig(props: Props) {
    const intl = useIntl();
    return (
        <>
            <h1>Bostad søk</h1>
            <p>{intl?.hello({name: 'World'})}</p>
        </>
    );
}