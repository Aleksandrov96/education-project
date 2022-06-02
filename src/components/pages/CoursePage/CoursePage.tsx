import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../common/Header/Header';
import Loader from '../../common/Loader/Loader';
import useFetchCoursePage from './hook/useFetchCoursePage';
import './coursePage.scss';

function CoursePage() {
  const { courseId } = useParams();

  const { description, loading } = useFetchCoursePage(courseId);

  return (
    <div className="coursePage">
      <Header />
      {
          loading
            ? (
              <section className="coursePage__content">
                <p>
                  {description}
                </p>
              </section>
            )
            : <Loader />
      }
      <div className="coursePage__cards">
        <div className="coursePage__cards-card" />
        <div className="coursePage__cards-card" />
        <div className="coursePage__cards-card" />
      </div>
    </div>
  );
}

export default CoursePage;
