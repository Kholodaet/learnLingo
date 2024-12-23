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
  const [isSubmitting, setIsSubmitting] = useState(false); // Додаємо стан для кнопки

  const handleBookingSubmission = async (values, { resetForm }) => {
    setIsSubmitting(true); // Блокування кнопки

    try {
      // Зберігаємо форму в localStorage
      const storedBookings = JSON.parse(localStorage.getItem('bookings')) || [];
      storedBookings.push(values);
      localStorage.setItem('bookings', JSON.stringify(storedBookings));

      // Показуємо повідомлення про успішне бронювання
      toast.success('Booking successful!');

      // Очищаємо форму
      resetForm();

      // Закриваємо модальне вікно
      handleClose();
    } catch (error) {
      toast.error('Failed to submit the booking. Please try again.');
    } finally {
      setIsSubmitting(false); // Розблокування кнопки
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
        onSubmit={handleBookingSubmission} // Формуємо правильний сабміт
        validationSchema={BookingLessonSchema}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <StyledForm onSubmit={handleSubmit}>
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
                  />
                  {option}
                </StyledLabel>
              ))}
              <ErrorText name="picked" component="div" />
            </RadioGroup>
            <StyledInput
              name="fullname"
              placeholder="Full Name"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <ErrorText name="fullname" component="div" />
            <StyledInput
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <ErrorText name="email" component="div" />
            <StyledInput
              type="tel"
              name="phoneNumber"
              placeholder="Phone number"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <ErrorText name="phoneNumber" component="div" />
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
