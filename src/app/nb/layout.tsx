import 'server-only';
import messages from '@/intl/compiled/bundle_nb.compiled.json';
import {Inter} from "next/font/google";
import {RootLayout} from '@code-obos/obos-layout';
import {IntlContextProvider} from "@/context/IntlContext";
import '../global.css';

const inter = Inter({subsets: ['latin']})

interface Props {
    children: React.ReactNode;
}

export default function Layout(props: Props) {
    return (
        <RootLayout
            appId="obos_no"
            apimBaseUrl={process.env.NEXT_PUBLIC_APIM_BASE_URL!}
            apimContentHubSubscriptionKey={process.env.CONTENTHUB_SUBSCRIPTION_KEY!}
            isInternalLink={() => false}
        >
            <div className={inter.className}>
                <IntlContextProvider locale={"nb"} messages={messages}>
                    {props.children}
                </IntlContextProvider>
            </div>
        </RootLayout>
    );
}