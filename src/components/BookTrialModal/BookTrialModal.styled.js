import styled from 'styled-components';

export const ModalContainer = styled.div`
  /* Стилі для контейнера модального вікна */
  padding: 24px;
  border-radius: 12px;
  background-color: #fff;
  max-width: 540px;
  width: 100%;
`;

export const Header = styled.h2`
  font-weight: 500;
  font-size: 40px;
  line-height: 1.2;
  letter-spacing: -0.02em;
  margin-bottom: 20px;
`;

export const Paragraph = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  color: rgba(18, 20, 23, 0.8);
  margin-bottom: 20px;
`;

export const AvatarContainer = styled.div`
  display: flex;
  gap: 14px;
  align-items: center;
`;

export const AvatarImage = styled.img`
  border-radius: 50%;
  width: 44px; /* Додано ширину */
  height: 44px; /* Додано висоту */
`;

export const TeacherInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const TeacherTitle = styled.p`
  font-weight: 500;
  font-size: 12px;
  line-height: 1.33;
  color: #8a8a89;
`;

export const TeacherName = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
`;

export const QuestionTitle = styled.h3`
  font-weight: 700;
  font-size: 20px;
  line-height: 1.2;
  margin-top: 40px;
  margin-bottom: 20px;
`;

export const StyledForm = styled.form`
  // Важливо: styled.form
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

export const RadioGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 20px;
  margin-bottom: 22px;
`;

export const StyledLabel = styled.label`
  display: flex;
  gap: 8px;
  color: #000;
  font-size: 16px;
  align-items: center;
  font-weight: 400;
  cursor: pointer; /* Додано курсор */
`;

export const RadioInput = styled.input`
  // Важливо: styled.input
  position: relative;
  appearance: none;
  width: 24px;
  height: 24px;
  border: 2px solid #8a8a89;
  border-radius: 50%;
  cursor: pointer;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 12px;
    height: 12px;
    background-color: transparent;
    border-radius: 50%;
  }

  &:checked {
    border-color: ${({ theme }) => theme.primaryYellow};
    &::before {
      background-color: ${({ theme }) => theme.primaryYellow};
    }
  }
`;

export const ErrorText = styled.div`
  // Важливо: styled.div
  font-size: 14px;
  color: red;
  margin-top: -10px;
`;

export const StyledInput = styled.input`
  // Важливо: styled.input
  display: flex;
  padding: 16px 18px;
  width: 100%;
  border-radius: 12px;
  border: 1px solid rgba(18, 20, 23, 0.1);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  box-sizing: border-box; /* Важливо для коректного відображення padding */

  &::placeholder {
    color: ${({ theme }) => theme.primaryBlack};
  }

  &:hover {
    border-color: ${({ theme }) => theme.primaryYellow};
  }

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.primaryYellow};
  }
`;

export const StyledButton = styled.button`
  margin-top: 22px;
  border-radius: 12px;
  padding: 16px 24px;
  width: 100%;
  height: 60px;
  background: ${({ theme }) => theme.primaryYellow};
  font-weight: 700;
  font-size: 18px;
  line-height: 1.2;
  color: ${({ theme }) => theme.primaryBlack};
  transition: background-color 0.3s ease;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.primaryLightYellow};
  }

  &:disabled {
    opacity: 0.6;
    cursor: default;
  }
`;
