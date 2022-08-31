import Container from "../Container/Container";
import style from "./Footer.module.css";
import { ReactComponent as VKIcon } from "../../img/vk.svg";
import { ReactComponent as TGIcon } from "../../img/tg.svg";
import { ReactComponent as PinterestIcon } from "../../img/pinterest.svg";
import { ReactComponent as StumbleuponIcon } from "../../img/stumbleupon.svg";
const Footer = () => (
	<footer className={style.footer}>
		<Container>
			<div className={style.wrapper}>
				<div className={style.contacts}>
					<p>
						Design: <a href="/">Anastasia Ilina</a>
					</p>
					<p>
						Сoder: <a href="/">Kto to</a>
					</p>
					<p>© HBCard, 2022</p>
				</div>
				<ul className={style.social}>
					<li className={style.item}>
						<a className={style.link} href="/">
							<VKIcon />
						</a>
					</li>
					<li className={style.item}>
						<a className={style.link} href="/">
							<TGIcon />
						</a>
					</li>
					<li className={style.item}>
						<a className={style.link} href="/">
							<PinterestIcon />
						</a>
					</li>
					<li className={style.item}>
						<a className={style.link} href="/">
							<StumbleuponIcon />
						</a>
					</li>
				</ul>
			</div>
		</Container>
	</footer>
);
export default Footer;
