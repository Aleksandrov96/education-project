import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import Header from '../../common/Header/Header';
import ToasterContainer from '../../common/ToasterContainer/ToasterContainer';
import EditButton from '../../common/EditButton/EditButton';
import useFetchTests from './hook/useFetchTests';
import AdminControl from '../../common/AdminControl/AdminControl';
import Test from './Test';
import { ITest } from './interfaces';
import './testPage.scss';

function TestPage() {
  const navigate = useNavigate();
  const { courseId } = useParams<'courseId' | 'tab'>();

  const { tests, testsIDs } = useFetchTests(courseId);

  const filteredTests = tests?.filter((test) => testsIDs?.includes(test.id));

  return (
    <div className="addTest">
      <Header />
      <div className="addTest__content">
        <div className="addTest__content-tests">
          {filteredTests?.map((test: ITest) => <Test test={test} key={uuidv4()} />)}
        </div>
        <AdminControl>
          <EditButton onClick={() => navigate(`/courses/${courseId || ''}/tests/edit`)} className="addTest__content-showModal" text="ADD TEST" />
        </AdminControl>
      </div>
      <ToasterContainer />
    </div>
  );
}

export default TestPage;
