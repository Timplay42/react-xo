import React from 'react'
import './promo.css'

export default function Promo() {
  return (
        <section className='promo'>
            <div className='container'>
                <div className='promo__content'>
                    <div className='promo__text'>
                        <div className='promo__text_upper'>Заряжай свой потенциал с электротехникой!</div>
                        <div className='promo__text_low'>
                                Удобный сайт с полезными материалами для подготовки к экзаменам по 
                            электротехнике, электронике и схемотехнике, а также для самостоятельного изучения 
                                    ключевых концепций электротехники в удобном формате.
                        </div>
                    </div>
                    <input type="input__promo" placeholder="Найти..."/>
                </div>
            </div>
        </section>
  )
}
