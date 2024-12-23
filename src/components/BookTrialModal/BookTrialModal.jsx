import { Formik, Form, Field, ErrorMessage } from 'formik';
import React from 'react';
import toast from 'react-hot-toast';

import { BookingLessonSchema } from 'yupSchemas/BookingLessonSchema';

import {
  AvatarContainer,
  AvatarImage,
  ErrorText,
  Header,
  ModalContainer,
  Paragraph,
  QuestionTitle,
  RadioGroup,
  RadioInput,
  StyledButton,
  StyledForm,
  StyledInput,
  StyledLabel,
  TeacherInfoContainer,
  TeacherName,
  TeacherTitle,
} from './BookTrialModal.styled'; // Перевірте шлях!

const BookTrialModal = ({ teacher, handleClose }) => {
  const handleBookingSubmission = async (
    values,
    { resetForm, setSubmitting }
  ) => {
    try {
      // Імітація успішної відправки (замініть на реальну логіку)
      console.log('Form submitted:', values);
      toast.success('Successfully finished!');
      resetForm();
      handleClose();

      // Реальна відправка на сервер (приклад):
      /*
      const response = await fetch('/api/booking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log('Success:', data);
      toast.success('Booking successful!');
      resetForm();
      handleClose();
      */
    } catch (error) {
      console.error('Booking error:', error);
      toast.error('Failed to submit the booking. Please try again.');
    } finally {
      setSubmitting(false); // Важливо для розблокування кнопки
    }
  };

  return (
    <ModalContainer>
      <Header>Book trial lesson</Header>
      <Paragraph>
        Our experienced tutor will assess your current language level, discuss
        your learning goals, and tailor the lesson to your specific needs.
      </Paragraph>
      <AvatarContainer>
        <AvatarImage
          src={teacher.avatar_url}
          loading="lazy"
          alt="avatar"
          width="44"
          height="44"
        />
        <TeacherInfoContainer>
          <TeacherTitle>Your teacher</TeacherTitle>
          <TeacherName>
            {teacher.name} {teacher.surname}
          </TeacherName>
        </TeacherInfoContainer>
      </AvatarContainer>
      <QuestionTitle>
        What is your main reason for learning English?
      </QuestionTitle>

      <Formik
        initialValues={{
          picked: '',
          fullname: '',
          email: '',
          phoneNumber: '',
        }}
        validationSchema={BookingLessonSchema}
        onSubmit={handleBookingSubmission}
      >
        {({ isSubmitting, handleSubmit }) => (
          <StyledForm onSubmit={handleSubmit}>
            {' '}
            {/* onSubmit тут! */}
            <RadioGroup role="group" aria-labelledby="my-radio-group">
              {[
                'Career and business',
                'Lesson for kids',
                'Living abroad',
                'Exams and coursework',
                'Culture, travel or hobby',
              ].map(option => (
                <StyledLabel key={option}>
                  <Field
                    type="radio"
                    name="picked"
                    value={option}
                    as={RadioInput}
                  />
                  {option}
                </StyledLabel>
              ))}
              <ErrorMessage name="picked" component={ErrorText} />
            </RadioGroup>
            <Field name="fullname" placeholder="Full Name" as={StyledInput} />
            <ErrorMessage name="fullname" component={ErrorText} />
            <Field
              type="email"
              name="email"
              placeholder="Email"
              as={StyledInput}
            />
            <ErrorMessage name="email" component={ErrorText} />
            <Field
              type="tel"
              name="phoneNumber"
              placeholder="Phone number"
              as={StyledInput}
            />
            <ErrorMessage name="phoneNumber" component={ErrorText} />
            <StyledButton type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Booking...' : 'Book'}
            </StyledButton>
          </StyledForm>
        )}
      </Formik>
    </ModalContainer>
  );
};

export default BookTrialModal;
