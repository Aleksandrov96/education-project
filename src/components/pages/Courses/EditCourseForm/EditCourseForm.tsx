/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { useForm } from 'react-hook-form';
import './editForm.scss';

type FormValues = {
  name: string
};

function EditCourseForm({ onSubmit }: any) {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormValues>({ mode: 'onChange' });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="editForm">
      <label>
        <div className="editForm__error">
          <p className="editForm__error-text">
            {errors.name && 'Course name is required'}
          </p>
        </div>
        <input
          {...register('name', { required: true })}
          type="text"
          placeholder="Enter course name..."
          className="editForm__input"
        />
        <button
          disabled={!isValid}
          type="submit"
          className="editForm__btn"
        >
          EDIT
        </button>
      </label>
    </form>
  );
}

export default EditCourseForm;
