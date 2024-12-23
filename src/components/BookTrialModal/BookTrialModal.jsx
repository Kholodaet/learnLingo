import { Formik, Form, Field, ErrorMessage } from 'formik';
import React, { useState } from 'react';
import toast from 'react-hot-toast';

import { BookingLessonSchema } from 'yupSchemas/BookingLessonSchema'; // Шлях до вашої схеми валідації

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
} from './BookTrialModal.styled'; // Шлях до файлу стилів

const BookTrialModal = ({ teacher, handleClose }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleBookingSubmission = async (values, { resetForm }) => {
    setIsSubmitting(true);

    try {
      console.log('Booking details:', values); // Тут буде ваш код для відправки даних

      // Приклад збереження в localStorage (для демонстрації, в реальному додатку використовуйте бекенд)
      const storedBookings = JSON.parse(localStorage.getItem('bookings')) || [];
      storedBookings.push(values);
      localStorage.setItem('bookings', JSON.stringify(storedBookings));

      toast.success('Booking successful!');
      resetForm();
      handleClose();
    } catch (error) {
      console.error('Booking error:', error);
      toast.error('Failed to submit the booking. Please try again.');
    } finally {
      setIsSubmitting(false);
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
          alt="Teacher Avatar"
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
        {(
          { isSubmitting } // Додано isSubmitting сюди для доступу всередині Form
        ) => (
          <Form>
            <RadioGroup role="group" aria-labelledby="my-radio-group">
              {[
                'Career and business',
                'Lesson for kids',
                'Living abroad',
                'Exams and coursework',
                'Culture, travel or hobby',
              ].map(option => (
                <StyledLabel key={option}>
                  <Field type="radio" name="picked" value={option} />
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
          </Form>
        )}
      </Formik>
    </ModalContainer>
  );
};

export default BookTrialModal;
