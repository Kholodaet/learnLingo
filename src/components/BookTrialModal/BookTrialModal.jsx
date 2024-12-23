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
  const [isSubmitting, setIsSubmitting] = useState(false); // Додаємо стан для кнопки

  const handleBookingSubmission = async (values, { resetForm }) => {
    setIsSubmitting(true); // Блокування кнопки
    try {
      // Імітація сабміту або виклик API
      await new Promise(resolve => setTimeout(resolve, 2000));
      toast.success('Successfully finished!');
      resetForm(); // Очищення форми
      handleClose(); // Закриття модального вікна
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
                  />
                  {option}
                </StyledLabel>
              ))}
              <ErrorText name="picked" component="div" />
            </RadioGroup>
            <StyledInput
              name="fullname"
              placeholder={nameInputted ? '' : 'Full Name'}
              onFocus={() => setNameInputted(true)}
              onChange={handleChange}
            />
            <ErrorText name="fullname" component="div" />
            <StyledInput
              type="email"
              name="email"
              placeholder={emailInputted ? '' : 'Email'}
              onFocus={() => setEmailInputted(true)}
              onChange={handleChange}
            />
            <ErrorText name="email" component="div" />
            <StyledInput
              type="tel"
              name="phoneNumber"
              placeholder={phoneInputted ? '' : 'Phone number'}
              onFocus={() => setPhoneInputted(true)}
              onChange={handleChange}
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
