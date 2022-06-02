import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../../common/Header/Header';
import AddTestForm from '../AddTestForm/AddTestForm';
import './testEdit.scss';

function TestEdit() {
  const { courseId } = useParams();

  return (
    <div className="testEdit">
      <Header />
      <div className="testEdit__content">
        <div className="container">
          <AddTestForm courseId={courseId as string} />
        </div>
      </div>
    </div>
  );
}

export default TestEdit;
