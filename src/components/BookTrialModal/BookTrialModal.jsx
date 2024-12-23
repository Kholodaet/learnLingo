import { Formik } from 'formik';
import React, { useState } from 'react';
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
} from './BookTrialModal.styled';

const BookTrialModal = ({ teacher, handleClose }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleBookingSubmission = async (values, { resetForm }) => {
    console.log('Form submitted with values:', values); // Лог для перевірки значень форми
    setIsSubmitting(true); // Блокуємо кнопку під час сабміту
    try {
      // Імітація сабміту або виклик API
      await new Promise(resolve => setTimeout(resolve, 2000)); // Затримка для імітації API запиту
      console.log('Booking success');
      toast.success('Successfully finished!'); // Повідомлення про успіх
      resetForm(); // Очищаємо форму після успішного відправлення
      handleClose(); // Закриваємо модальне вікно
    } catch (error) {
      console.error('Error during booking submission:', error); // Лог помилки
      toast.error('Failed to submit the booking. Please try again.');
    } finally {
      setIsSubmitting(false); // Розблоковуємо кнопку
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
        onSubmit={handleBookingSubmission}
        validationSchema={BookingLessonSchema}
      >
        {({ values, errors, touched, handleChange, handleBlur }) => (
          <StyledForm>
            <RadioGroup role="group" aria-labelledby="my-radio-group">
              {[
                'Career and business',
                'Lesson for kids',
                'Living abroad',
                'Exams and coursework',
                'Culture, travel or hobby',
              ].map(option => (
                <StyledLabel key={option}>
                  <RadioInput
                    type="radio"
                    name="picked"
                    value={option}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {option}
                </StyledLabel>
              ))}
              {errors.picked && touched.picked && (
                <ErrorText>{errors.picked}</ErrorText>
              )}
            </RadioGroup>
            <StyledInput
              name="fullname"
              placeholder="Full Name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.fullname}
            />
            {errors.fullname && touched.fullname && (
              <ErrorText>{errors.fullname}</ErrorText>
            )}
            <StyledInput
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            {errors.email && touched.email && (
              <ErrorText>{errors.email}</ErrorText>
            )}
            <StyledInput
              type="tel"
              name="phoneNumber"
              placeholder="Phone number"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.phoneNumber}
            />
            {errors.phoneNumber && touched.phoneNumber && (
              <ErrorText>{errors.phoneNumber}</ErrorText>
            )}
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
