"use client";
import {useIntl} from "@/context/IntlContext";

interface Props {

}

export default function HittaBostad(props: Props) {
    const intl = useIntl();
    return (
        <>
            <h1>Hitta bostad</h1>
            <p>This is some more. and another change</p>
            <p>{intl?.hello({name: 'World'})}</p>
        </>
    );
}