import messages from '@/intl/compiled/bundle_sv.compiled.json';
import {Inter} from "next/font/google";
import {IntlContextProvider} from "@/context/IntlContext";

const inter = Inter({subsets: ['latin']})

interface Props {
    children: React.ReactNode;
}

export default function Layout(props: Props) {
    console.log('messages', messages);
    return (
        <html lang="sv">
        <body className={inter.className}>
        <IntlContextProvider locale={"sv"} messages={messages}>
            {props.children}
        </IntlContextProvider>
        </body>
        </html>
    );
}