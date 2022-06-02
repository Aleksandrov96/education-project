import { useState, useEffect } from 'react';
import axios from 'axios';
import setToastError from '../../../../utils/setToastError';
import { ITest } from '../interfaces';
import { ICourse } from '../../Courses/hook/interface';

const useFetchTests = (courseId?: string) => {
  const [testsIDs, setTestsIDs] = useState<Array<string>>();
  const [tests, setTests] = useState<ITest[]>();
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get<ICourse>(`http://localhost:3000/courses/${courseId || ''}`);
      setTestsIDs(data.testsIDs);
    };
    getData()
      .catch((error: Error) => setToastError(error.message));

    const getTest = async () => {
      const { data } = await axios.get<ITest[]>('http://localhost:3000/tests');
      setTests(data);
    };
    getTest()
      .catch((error: Error) => setToastError(error.message));
  }, [courseId]);

  return {
    tests,
    testsIDs,
  };
};

export default useFetchTests;
