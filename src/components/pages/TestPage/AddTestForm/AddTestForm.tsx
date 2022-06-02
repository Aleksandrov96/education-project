/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import { v4 as uuidv } from 'uuid';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import useFetchTests from '../hook/useFetchTests';
import setToastError from '../../../../utils/setToastError';
import setToastSuccess from '../../../../utils/setToastSuccess';
import EditButton from '../../../common/EditButton/EditButton';
import AddQuestionsForm from './AddQuestionsForm/AddQuestionsForm';
import './addTestForm.scss';

type TestFormValues = {
  name: string,
  description: string,
  id: string,
  testsIDs: Array<string>
  questions: {
    description: string,
    options: {
      description: string,
      isCorrect: boolean,
    }[]
  }[]
};

type Props = {
  courseId: string,
};

function AddTestForm({ courseId }: Props) {
  const { testsIDs } = useFetchTests(courseId);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors, isValid },
  } = useForm<TestFormValues>({ mode: 'onChange' });

  const {
    fields: questionsFields, append, remove,
  } = useFieldArray({
    control,
    name: 'questions',
  });

  const onSubmit = (data: TestFormValues) => {
    const testId: string = uuidv();
    const IDs: string[] = [testId];
    axios.post('http://localhost:3000/tests', {
      name: data.name,
      description: data.description,
      id: testId,
      courseId,
      questions: data.questions,
    })
      .then(() => axios.patch(`http://localhost:3000/courses/${courseId}`, {
        testsIDs: testsIDs?.concat(IDs),
      }))
      .then(() => setToastSuccess('Test successfuly added!'))
      .catch((error: Error) => setToastError(error.message));
    reset();
    navigate(`/courses/${courseId}/tests`);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form">
      <label>
        <h2 className="form__title">ADD TEST</h2>
        <div className="form__error">
          <p className="form__error-text">
            {errors.name && 'Test name is required'}
          </p>
        </div>
        <input
          {...register('name', { required: true })}
          type="text"
          placeholder="Enter test name..."
          className="form__input"
        />
        <div className="form__error">
          <p className="form__error-text">
            {errors.description && 'Test description is required'}
          </p>
        </div>
        <textarea
          {...register('description', { required: true })}
          placeholder="Enter test description..."
          className="form__textarea"
        />
        {questionsFields.map((field, i) => (
          <div className="form__questions" key={field.id}>
            <EditButton
              className="form__questions-remove"
              text="&#10005;"
              onClick={() => remove(i)}
            />
            <AddQuestionsForm nestIndex={i} {...{ control, register, errors }} />
          </div>
        ))}
        <EditButton
          onClick={() => append({})}
          text="ADD QUESTION"
          className="form__addOption"
        />
        <button
          disabled={!isValid}
          type="submit"
          className="form__btn"
        >
          ADD TEST
        </button>
      </label>
    </form>
  );
}

export default AddTestForm;
