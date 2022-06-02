import React, { useState } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import search from 'images/svg/search.svg';
import Header from '../../common/Header/Header';
import Modal from '../../common/Modal/Modal';
import ToasterContainer from '../../common/ToasterContainer/ToasterContainer';
import setToastError from '../../../utils/setToastError';
import EditButton from '../../common/EditButton/EditButton';
import AdminControl from '../../common/AdminControl/AdminControl';
import EditCourseForm from './EditCourseForm/EditCourseForm';
import setToastSuccess from '../../../utils/setToastSuccess';
import Course from './Course';
import Paginate from '../../common/Pagination/Pagination';
import useFetchData from './hook/useFetchData';
import { ISelectedItem } from './interface';
import { ICourse } from './hook/interface';
import './courses.scss';

type Props = {
  name?: string,
  id?: string
};

function Courses() {
  const [searchValue, setSearchValue] = useState<string>('');
  const [itemOffset, setItemOffset] = useState<number>(0);
  const [modalActive, setModalActive] = useState<boolean>(false);

  const itemsPerPage = 3;
  const { courses, pageCount } = useFetchData({ itemOffset, searchValue, itemsPerPage });

  const handlePageClick = (event: ISelectedItem) => {
    const newOffset = (event.selected * itemsPerPage);
    setItemOffset(newOffset);
  };

  const [currentCourse, setCurrentCourse] = useState<string>();

  const handleClick = (id: string) => {
    setCurrentCourse(id);
    setModalActive(true);
  };

  const onCourseAdd = ({ name }: Props) => {
    axios.post('http://localhost:3000/courses', {
      name,
      id: uuidv4(),
      testsIDs: [],
    })
      .then(() => setToastSuccess('Course successfuly added!'))
      .catch((error: Error) => setToastError(error.message));
    setModalActive(false);
  };

  const onCourseEdit = ({ name }: Props) => {
    axios.patch(`http://localhost:3000/courses/${currentCourse as string}`, {
      name,
    })
      .then(() => setToastSuccess('Course successfuly edited!'))
      .catch((error: Error) => setToastError(error.message));
    setModalActive(false);
  };

  return (
    <div>
      <Header />
      <div className="courses">
        <div className="courses__search">
          <div className="search">
            <input
              className="search__input"
              type="text"
              placeholder="Search courses..."
              onChange={(e) => setSearchValue(e.target.value)}
            />
            <div className="search__icon">
              <img src={search as string} alt="search" />
            </div>
          </div>
        </div>
        <div className="courses__content">
          <div className="courses__content-list">
            {courses?.map((course: ICourse) => (
              <Course course={course} key={uuidv4()} onEdit={handleClick} />
            ))}
          </div>
          <AdminControl>
            <EditButton onClick={() => setModalActive(true)} className="courses__content-showModal" text="ADD COURSE" />
            <Modal active={modalActive} setActive={setModalActive}>
              <EditCourseForm
                setActive={setModalActive}
                onSubmit={currentCourse ? onCourseEdit : onCourseAdd}
              />
            </Modal>
          </AdminControl>
        </div>
        <Paginate pageCount={pageCount} handlePageClick={handlePageClick} />
      </div>
      <ToasterContainer />
    </div>
  );
}

export default Courses;
