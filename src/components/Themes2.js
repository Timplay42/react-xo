import React from 'react';
import './themes2.css';
import Buttons from './Buttons';

function YourComponent() {
    return (
        <div className="container2">
            <div className='themes'>
                <div className="left-column">
                    <div className="item"><div className='themes_text_1'>
                                Основы электростатики
                            </div>
                            <Buttons/></div>
                    <div className="item"><div className='themes_text_1'>
                                Электромагнетизм и электромагнитная индукция
                            </div>
                            <Buttons/></div>
                    <div className="item"><div className='themes_text_1'>
                                Трансформаторы
                            </div>
                            <Buttons/></div>
                    <div className="item"><div className='themes_text_1'>
                                Распределение электрической энергии
                            </div>
                            <Buttons/></div>
                </div>
                <div className="right-column">
                    <div className="item"><div className='themes_text_1'>
                                Электрические цепи постоянного тока
                            </div>
                            <Buttons/></div>
                    <div className="item"><div className='themes_text_1'>
                                Электрические цепи переменного тока
                            </div>
                            <Buttons/></div>
                    <div className="item"><div className='themes_text_1'>
                                Эликтрические машины
                            </div>
                            <Buttons/></div>
                    <div className="item"><div className='themes_text_1'>
                                Че то умное тут будет
                            </div>
                            <Buttons/></div>
                </div>
            </div>
        </div>
    );
}

export default YourComponent;