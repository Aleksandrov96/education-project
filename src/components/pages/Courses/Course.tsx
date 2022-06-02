import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faListCheck } from '@fortawesome/free-solid-svg-icons';
import AdminControl from '../../common/AdminControl/AdminControl';
import './courses.scss';

type Props = {
  course: {
    id: string,
    name: string
  }
  onEdit: (value: string) => void;
};

function Course({ course, onEdit }: Props) {
  const { id, name } = course;

  const navigate = useNavigate();

  const navigateTo = (courseId: string) => {
    navigate(`/courses/${courseId}/tests`);
  };

  return (
    <div className="course">
      <div className="course__edit">

        <AdminControl>
          <div
            className="course__edit-icon"
            onClick={() => onEdit(id)}
            aria-hidden="true"
          >
            <FontAwesomeIcon icon={faEdit} />
          </div>
        </AdminControl>
        <div
          className="course__edit-icon"
          onClick={() => navigateTo(id)}
          aria-hidden="true"
        >
          <FontAwesomeIcon icon={faListCheck} />
        </div>
      </div>
      <Link to={`/courses/${id}`} className="course__name">{name}</Link>
    </div>
  );
}

export default Course;
