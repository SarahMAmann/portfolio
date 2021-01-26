import styled from 'styled-components';

export const Error = styled.span`
  color: #ff4136;
`;

export const Center = styled.div`
  text-align: left;

  h4 {
    font-weight: normal;
  }
`;

export const InputField = styled.div`
  position: relative;
  margin-bottom: 1rem;

  textarea {
    width: 100%;
    min-height: 200px;
    box-sizing: border-box;
    border: 2px solid #6c63ff;
    padding: 0.8rem 1rem;
    border-radius: 7px;
    margin-bottom: 0.5rem;
    transition: 0.3s;

  &::placeholder {
    color: #a7a7a7;
  }
  }
`;
