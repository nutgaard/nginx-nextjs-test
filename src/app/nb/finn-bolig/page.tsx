"use client";
import {useIntl} from "@/context/IntlContext";

interface Props {

}

export default function FinnBolig(props: Props) {
    const intl= useIntl();
    return (
        <>
            <h1>Finn bolig</h1>
            <p>{intl?.hello({name: 'World'})}</p>
        </>
    );
}