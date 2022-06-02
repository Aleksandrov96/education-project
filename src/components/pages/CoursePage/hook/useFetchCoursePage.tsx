import { useState, useEffect } from 'react';
import axios from 'axios';
import setToastError from '../../../../utils/setToastError';
import { ICourse } from '../../Courses/hook/interface';

function useFetchCoursePage(courseId?: string) {
  const [description, setDescription] = useState<string>();
  const [loading, setLoading] = useState<boolean>();

  useEffect(() => {
    const getCourse = async () => {
      const result = await axios.get<ICourse>(`http://localhost:3000/courses/${courseId || ''}`);
      setDescription(result.data.description);
      setLoading(true);
    };
    getCourse()
      .catch((error: Error) => setToastError(error.message));
  }, [courseId]);

  return { description, loading };
}

export default useFetchCoursePage;
