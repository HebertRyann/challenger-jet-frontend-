import styled, { css } from 'styled-components';

export const Container = styled.div`
  margin-top: 30px;
  label {
    font-weight: bold;
  }

  .text-area {
    margin-top: 20px;
  }

  hr {
    margin: 40px 0;
  }
  .item {
    display: flex;
    flex-direction: column;
    width: 100%;
    > textarea {
      padding: 5px;
      height: 70px;
      cursor: not-allowed;
    }
  }
`;
