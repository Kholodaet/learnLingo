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
  const [nameInputted, setNameInputted] = useState(false);
  const [emailInputted, setEmailInputted] = useState(false);
  const [phoneInputted, setPhoneInputted] = useState(false);

  const handleBookingSubmission = (values, { resetForm }) => {
    const existingBookings = JSON.parse(localStorage.getItem('bookings')) || [];
    const updatedBookings = [...existingBookings, values];
    localStorage.setItem('bookings', JSON.stringify(updatedBookings));

    toast.success('Lesson booked successfully and saved locally!');
    resetForm();
    handleClose();
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
                    checked={values.picked === option}
                  />
                  {option}
                </StyledLabel>
              ))}
              {touched.picked && errors.picked && (
                <ErrorText>{errors.picked}</ErrorText>
              )}
            </RadioGroup>
            <StyledInput
              name="fullname"
              placeholder={nameInputted ? '' : 'Full Name'}
              onFocus={() => setNameInputted(true)}
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.fullname}
            />
            {touched.fullname && errors.fullname && (
              <ErrorText>{errors.fullname}</ErrorText>
            )}
            <StyledInput
              type="email"
              name="email"
              placeholder={emailInputted ? '' : 'Email'}
              onFocus={() => setEmailInputted(true)}
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.email}
            />
            {touched.email && errors.email && (
              <ErrorText>{errors.email}</ErrorText>
            )}
            <StyledInput
              type="tel"
              name="phoneNumber"
              placeholder={phoneInputted ? '' : 'Phone number'}
              onFocus={() => setPhoneInputted(true)}
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.phoneNumber}
            />
            {touched.phoneNumber && errors.phoneNumber && (
              <ErrorText>{errors.phoneNumber}</ErrorText>
            )}
            <StyledButton type="submit">Book</StyledButton>
          </StyledForm>
        )}
      </Formik>
    </ModalContainer>
  );
};

export default BookTrialModal;
