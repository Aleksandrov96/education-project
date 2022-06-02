import { useState, useEffect } from 'react';
import axios from 'axios';
import setToastError from '../../../../utils/setToastError';
import { IUseFetchData, ICourse } from './interface';

function useFetchData({ itemOffset, searchValue, itemsPerPage }: IUseFetchData) {
  const [courses, setCourses] = useState<ICourse[]>();
  const [pageCount, setPageCount] = useState<number>(0);

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get<ICourse[]>(`http://localhost:3000/courses?q=${searchValue}`);
      const endOffset = Number(itemOffset) + Number(itemsPerPage);
      setCourses(data.slice(Number(itemOffset), endOffset));
      setPageCount(Math.ceil(data.length / Number(itemsPerPage)));
    };
    getData()
      .catch((error: Error) => setToastError(error.message));
  }, [searchValue, itemOffset, itemsPerPage]);

  return {
    courses, pageCount,
  };
}

export default useFetchData;
