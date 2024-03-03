import React from 'react'
import './infocards.css'
import logo from './../img/knowledge_online_courses_education_elearning_elearning_icon_261545 1 (1).png'
import logo2 from './../img/management_organization_staff_workforce_human_resources_outsource_outsourcing_icon_261561 1 (1).png'
import logo3 from './../img/image 2.png'

export default function Infocard() {
  return (
    <div className='infocards'>
        <div className="container3">
            <div className="rectangle">
                <div className="info-card info-card-left">
                    < img className='infocard__left__img' src={logo} alt='logo'/>
                    <h2 className='upper_text'>Подготовка к парам и экзаменам</h2>
                    <p className='low_text'>Наш сайт предлагает широкий выбор материалов для подготовки к экзаменам по таким предметам, как электротехника, электроника и схемотехника. Здесь вы найдете теорию по ключевым разделам, разборы типовых задач, тесты, которые помогут вам эффективно подготовиться к занятиям.</p>
                </div>
                <div className="info-card info-card-right">
                    < img className='infocard__left__img' src={logo2} alt='logo'/>
                    <h2 className='upper_text'>Самостоятельное обучение</h2>
                    <p className='low_text'>Мы предлагаем доступ к разнообразным ресурсам, включая статьи, практические задания и тесты для проверки знаний. Наш ресурс разработан так, чтобы вы могли легко освоить ключевые концепции и принципы электротехники в своем темпе, независимо от вашего уровня подготовки.</p>
                </div>
            </div>
            <div className="rectangle2">
                <div className="text-info">
                    <h3 className='upper_text_bot'>У нас есть телеграм-бот!</h3>
                    <p className='low_text_bot'>Добавляй бота в беседу с одногруппниками или обращайся к нему для личного пользования. Бот быстро найдет ответ на интересующий тебя вопрос!</p>
                    <button className='button_bot'>Перейти к телеграм боту</button>
                </div>
                <div className='image-container'>
                    <img className='img_bot' src={logo3} alt="telegram_logo"/>
                </div>
            </div>
        </div>
    </div>
  )
}
