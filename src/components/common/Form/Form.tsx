import React, { useEffect, useRef } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { InputFormProps, MovieItemProps } from '../../../utils/interfaces';
import { LabelWrapper } from '../LabelWrapper';
import { Button } from '../Button/Button';
import { Input } from '../Input';
import { DateInput } from '../DateInput';
import { addMovie, updateMovie } from '../../../store/ajaxActions';

import './Form.less';
import { Dropdown } from '../Dropdown/Dropdown';
import { AppDispatch, RootState } from '../../../store/store';
import { mockMoview } from '../../../utils/utils';
import { useSelector } from 'react-redux';

const CLASSES = {
  NETFLIX_APP_MODAL_WINDOW_FORM: 'netflix-app__modal-window-form',
  NETFLIX_APP_MODAL_WINDOW_FORM_INPUT_SECTION:
    'netflix-app__modal-window-form-input-section',
  NETFLIX_APP_MODAL_WINDOW_FORM_INPUT_BLOCK:
    'netflix-app__modal-window-form-input-block',
  NETFLIX_APP__INPUT_BLOCK: 'netflix-app__input-block',
  NETFLIX_APP_MODAL_WINDOW_FORM_BUTTONS_SECTION:
    'netflix-app__modal-window-form-buttons-section',
};

interface FormProps {
  (props: { editForm?: boolean }): JSX.Element;
}

export const Form: FormProps = ({ editForm }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setValue,
  } = useForm<InputFormProps>();
  const dispatch = AppDispatch();
  const state = useSelector((state: RootState) => {
    return {
      editMoview: state.mainStore.editMovie || null,
    };
  });

  const onSubmit: SubmitHandler<InputFormProps> = async (data) => {
    if (editForm) {
      dispatch(updateMovie(Object.assign({}, state.editMoview, data)));
    } else {
      dispatch(addMovie(Object.assign(mockMoview, data)));
    }
  };

  useEffect(() => {
    if (editForm) {
      const {
        title,
        overview,
        runtime,
        vote_average,
        poster_path,
        release_date,
        genres,
      } = state.editMoview;
      setValue('title', title);
      setValue('overview', overview);
      setValue('runtime', runtime);
      setValue('vote_average', vote_average.toString());
      setValue('poster_path', poster_path);
      setValue('release_date', release_date);
      setValue('genres', genres);
    }
  }, []);

  return (
    <form
      className={CLASSES.NETFLIX_APP_MODAL_WINDOW_FORM}
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className={CLASSES.NETFLIX_APP_MODAL_WINDOW_FORM_INPUT_SECTION}>
        <LabelWrapper classes={CLASSES.NETFLIX_APP__INPUT_BLOCK} labelText={'title'}>
          <Input
            placeHolder={'Title'}
            register={register}
            label={'title'}
            options={{
              required: `this is field is required`,
            }}
            errors={errors && errors.title?.message}
          />
        </LabelWrapper>
        <LabelWrapper
          classes={CLASSES.NETFLIX_APP__INPUT_BLOCK}
          labelText={'movie url'}
        >
          <Input
            placeHolder={'movie url'}
            register={register}
            label={'poster_path'}
            options={{
              required: 'this is filed is required',
            }}
            errors={errors && errors.poster_path?.message}
          />
        </LabelWrapper>
        <LabelWrapper classes={CLASSES.NETFLIX_APP__INPUT_BLOCK} labelText={'genre'}>
          <Dropdown
            options={['comedy', 'horor', 'crime']}
            dropdownType={'multiline'}
            label={'genres'}
            register={register}
            setValue={setValue}
            errors={errors && '1'}
            validationOptions={{
              required: 'this is filed is reuqired',
              setValueAs: (value: string) => {
                if (Array.isArray(value)) {
                  return value;
                }
                return value.split(',');
              },
              validate: (v) => {
                let [a] = v as Array<string>;
                if (a === 'select option') {
                  return false;
                }
              },
            }}
          />
        </LabelWrapper>

        <LabelWrapper
          classes={CLASSES.NETFLIX_APP__INPUT_BLOCK}
          labelText={'release_date'}
        >
          <DateInput
            label={'release_date'}
            register={register}
            options={{
              required: 'Please fill data field',
            }}
            errors={errors && errors.release_date?.message}
          />
        </LabelWrapper>

        <LabelWrapper
          classes={CLASSES.NETFLIX_APP__INPUT_BLOCK}
          labelText={'rating'}
        >
          <Input
            placeHolder={'Rating'}
            register={register}
            label={'vote_average'}
            options={{
              required: `this is field is required`,
              valueAsNumber: true,
            }}
            errors={errors && errors.vote_average?.message}
          />
        </LabelWrapper>

        <LabelWrapper
          classes={CLASSES.NETFLIX_APP__INPUT_BLOCK}
          labelText={'runtime'}
        >
          <Input
            placeHolder={'runtime'}
            register={register}
            label={'runtime'}
            options={{
              valueAsNumber: true,
              validate: (value) => {
                return 300 >= value || 'max value <= 300';
              },
            }}
            errors={errors && errors.runtime?.message}
          />
        </LabelWrapper>

        <LabelWrapper
          classes={CLASSES.NETFLIX_APP__INPUT_BLOCK}
          labelText={'Movie description'}
        >
          <textarea
            name=""
            id=""
            cols={30}
            rows={10}
            placeholder={'Movie description'}
            {...register('overview', {
              required: `this field is required`,
            })}
          />
        </LabelWrapper>
      </div>
      <div className={CLASSES.NETFLIX_APP_MODAL_WINDOW_FORM_BUTTONS_SECTION}>
        <Button text={'reset'} />
        <Button text={'submit'} submit />
      </div>
    </form>
  );
};
