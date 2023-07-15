import 'server-only';
import messages from '@/intl/compiled/bundle_nb.compiled.json';
import {Inter} from "next/font/google";
import { IntlContextProvider } from "@/context/IntlContext";

const inter = Inter({subsets: ['latin']})

interface Props {
    children: React.ReactNode;
}

export default function Layout(props: Props) {
    return (
        <html lang="nb">
        <body className={inter.className}>
        <IntlContextProvider locale={"nb"} messages={messages}>
            {props.children}
        </IntlContextProvider>
        </body>
        </html>
    );
}