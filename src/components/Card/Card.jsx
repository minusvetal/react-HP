import Container from "../Container/Container";
import style from "./Card.module.css";
import ImageCard from "./ImageCard/ImageCard";
import Felicitation from "./Felicitation/Felicitation";
import CardBg from "../../img/card-w-01.jpg";

const Card = () => (
	<div className={style.card}>
		<Container>
			<div className={style.wrapper}>
				<div className={style.image}>
					<ImageCard img={CardBg} />
					<Felicitation />
				</div>
			</div>
		</Container>
	</div>
);
export default Card;
