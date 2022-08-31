import { useState } from "react";
import style from "./Choices.module.css";

const holidays = {
	newyer: "Новый год",
	birthdayWoman: "День рождения  Ж",
	birthdayMan: "День рождения  М",
	womanDay: "8 марта",
	knowledgeday: "День знаний",
};

const Choices = () => {
	const [isOpenChoices, setIsOpenChoices] = useState(false);
	const [holiday, setHoliday] = useState("Выбрать праздник");

	const toggleChoices = () => {
		setIsOpenChoices(!isOpenChoices);
	};
	const changeHoliday = (title) => {
		setHoliday(title);
		toggleChoices();
	};

	return (
		<div className={style.wrapper}>
			<button className={style.button} onClick={toggleChoices}>
				{holiday}
			</button>
			{isOpenChoices && (
				<ul className={style.list}>
					{Object.entries(holidays).map((item) => (
						<li
							className={style.item}
							key={item[0]}
							onClick={() => {
								changeHoliday(item[1]);
							}}
						>
							<p className={style.text}>{item[1]}</p>
						</li>
					))}
				</ul>
			)}
		</div>
	);
};
export default Choices;
