/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react';
import { useFieldArray } from 'react-hook-form';
import EditButton from '../../../../common/EditButton/EditButton';
import '../addTestForm.scss';

type QuestionsForm = {
  nestIndex: number,
  control: any,
  register: any,
  errors: any
};

function AddQuestionsForm({
  nestIndex, control, register, errors,
}: QuestionsForm) {
  const { fields: optionsFields, append: appendOption, remove: removeOption } = useFieldArray({
    name: `options${nestIndex}`,
    control,
  });

  return (
    <label>
      <div className="form__error">
        <p className="form__error-text">
          {errors.questions?.[nestIndex].description && 'Question is required'}
        </p>
      </div>
      <div className="form__questionField">
        <textarea
          {...register(`questions.${nestIndex}.description`, { required: true })}
          placeholder="Enter question..."
          className="form__questionField-textarea"
        />
      </div>
      <div className="form__error">
        <p className="form__error-text">
          {optionsFields.length === 0 ? 'Options is required' : ''}
        </p>
      </div>
      {optionsFields.map((field, optionIndex) => (
        <div key={field.id}>
          <div className="form__optionsField">
            <label className="form__optionsField-checkbox">
              <input
                {...register(`questions.${nestIndex}.options.${optionIndex}.isCorrect` as const, {
                  required: false,
                })}
                type="checkbox"
              />
            </label>
            <input
              {...register(`questions.${nestIndex}.options.${optionIndex}.description` as const, {
                required: false,
              })}
              type="text"
              placeholder="Enter option..."
              className="form__optionsField-input"
            />
            <EditButton
              className="form__optionsField-delete"
              text="&#10005;"
              onClick={() => removeOption(optionIndex)}
            />
          </div>
        </div>
      ))}
      <EditButton
        className="form__addOption"
        onClick={() => appendOption({ description: '', isCorrect: false })}
        text="ADD OPTION"
      />
    </label>
  );
}

export default AddQuestionsForm;
