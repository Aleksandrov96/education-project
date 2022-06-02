import React from 'react';
import { Link } from 'react-router-dom';
import showcase_1 from 'images/svg/showcaseImg_1.svg';
import showcase_2 from 'images/svg/showcaseImg_2.svg';
import Header from '../../common/Header/Header';
import './main.scss';

function Main() {
  return (
    <div className="main">
      <Header />
      <div className="main__content">
        <h2 className="main__content-title">NIX Education</h2>
        <div className="main__content-showcase">
          <img src={showcase_1 as string} alt="Employee" className="employee" />
          <img src={showcase_2 as string} alt="Education" className="education" />
        </div>
        <section className="main__description">
          <h1>Привет, будущий успешный айтишник!</h1>
          <p>
            Ты попал на
            {' '}
            <b>онлайн-платформу</b>
            , где рады всем-всем, кто хочет
            {' '}
            <b>войти в IT</b>
            ,
            но не знает, какую дверь нужно толкнуть первой. Здесь все
            {' '}
            <b>совершенно бесплатно</b>
            ,
            ты можешь стартовать любого уровня знаний,
            учиться в удобное для тебя время и в достаточном для освоения материала темпе.

          </p>

          <p>
            Наши эксперты составили теоретическую часть обучения так,
            чтобы ты не тратил время зря и получал только те знания,
            которые сможешь использовать в работе над реальным проектом.
            Начиная c уровня Trainee ты будешь получать обратную связь
            от экспертов
            {' '}
            <b>NIX</b>
            {' '}
            по выполненным заданиям,
            a уже на уровне
            {' '}
            <b>Junior Dev</b>
            {' '}
            ты будешь учиться под непосредственным
            руководством личного ментора из компании.

          </p>

          <p>
            <b>Вишенка на торте</b>
            {' '}
            — приглашение на собеседование в NIX по итогам курса.
          </p>
          <Link className="main__link" to="/courses">Ну что, начнем?</Link>
        </section>
      </div>
    </div>
  );
}

export default Main;
