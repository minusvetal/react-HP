import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Card from "./components/Card/Card";
import { TextContextProvider } from "./context/textContext";
import { ImgContextProvider } from "./context/imgContext";
import { HolidaisContextProvider } from "./context/holidayContext";

const wrapper = {
	display: "flex",
	flexDirection: "column",
	height: "100vh",
	background: "#d2e9e2",
};

const App = () => {
	return (
		<div style={wrapper}>
			<HolidaisContextProvider>
				<ImgContextProvider>
					<TextContextProvider>
						<Header />
						<Card />
						<Footer />
					</TextContextProvider>
				</ImgContextProvider>
			</HolidaisContextProvider>
		</div>
	);
};

export default App;
