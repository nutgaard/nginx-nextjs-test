"use client";
import {useIntl} from "@/context/IntlContext";

interface Props {

}

export default function NyBolig(props: Props) {
    const intl = useIntl();
    return (
        <>
            <h1>Ny bolig</h1>
            <p>{intl?.hello({name: 'World'})}</p>
        </>
    );
}