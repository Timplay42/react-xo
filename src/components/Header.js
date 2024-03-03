import React, {useState} from 'react'
import './header.css'
import logo from './../img/artificial_programming_developer_deep_technology_machine_learning_icon_261614 1.svg'

export default function Header() {


    return (
        <header className='header'>
            <div className='container'>
                <div className='header__row'>
                    <div className='header__logo'>
                        < img className='header__img' src={logo} alt='logo'/>
                        <span>Название</span>
                    </div>
                    <nav className='header__nav'>
                        <ul>
                                <li><a href='#!'>Темы</a></li>
                                <li><a href='#!'>Задачи</a></li>
                                <li><a href='#!'>Тесты</a></li>
                                <li><a href='#!'>Экзамен</a></li>
                                <div>
                                    <input type="text" placeholder="Найти..."/>
                                </div>
                            
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

