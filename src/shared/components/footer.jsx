import React from "react";
import FacebookSvg from "../../img/facebook"
import TelegramSvg from "../../img/telegramm"
import VkSvg from "../../img/vk"
import InstagramSvg from "../../img/instagram"

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__socialNetwork">
                <VkSvg />
                <FacebookSvg />
                <InstagramSvg />
                <TelegramSvg />
            </div>
            <div className="footer__list">
                <ul>
                    <li>О нас </li>
                    <li>Стать партнёром</li>
                    <li>Контакты</li>
                    <li>F&A</li>
                </ul>
            </div>
        </div>
    )
}

export default Footer;