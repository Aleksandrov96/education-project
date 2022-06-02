import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import AdminControl from '../../common/AdminControl/AdminControl';
import { ITest } from './interfaces';
import './testPage.scss';

type Props = {
  test: ITest,
};

function Test({ test }: Props) {
  return (
    <div className="test">
      <AdminControl>
        <div className="test__edit">
          <div
            className="test__edit-icon"
            aria-hidden="true"
          >
            <FontAwesomeIcon icon={faEdit} />
          </div>
        </div>
      </AdminControl>
      <p className="test__name">{test.name}</p>
    </div>
  );
}

export default Test;
