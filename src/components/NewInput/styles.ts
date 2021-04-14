import styled, { css } from 'styled-components';

export const Container = styled.div<{ isError?: boolean }>`
  position: relative;
  ${({ isError }) =>
    isError &&
    css`
      > input {
        border: #d43f3a solid 1px !important;
        background-color: #ebcccc !important;
        color: #d43f3a;
        > option {
          background-color: #fff;
          color: #666;
        }
      }
    `}
  > label {
    margin-top: 5px;
    color: #d43f3a !important;
  }
`;

export const ContainerSearch = styled.div<{ active: boolean }>`
  display: none;
  ${({ active }) =>
    active &&
    css`
      display: block;
    `}
  z-index: 999;
  top: 105%;

  background-color: #fff;
  border: 1px solid #c2cad8;
  width: 100%;
  max-height: 200px;
  overflow-y: scroll;
  position: absolute;
  > ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    li {
      border-top: 1px solid #c2cad8;
      border-bottom: 1px solid #c2cad8;
      padding: 6px 12px;
      cursor: pointer;
      :hover {
        background-color: #f6f6f6;
      }
    }
    li:last-child {
      margin-bottom: 0;
    }
  }
`;
