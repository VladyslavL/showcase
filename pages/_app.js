import { CloudCannonConnect } from "@cloudcannon/react-connector";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
	const AppComponent = CloudCannonConnect(Component);

	return <AppComponent {...pageProps} />;
}
