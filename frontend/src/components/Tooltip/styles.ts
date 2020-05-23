import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  span {
    position: absolute;
    bottom: calc(100% + 12px);
    width: 160px;
    background: #ff9000;
    /* To centralize, use this 2 hacks */
    left: 50%;
    transform: translateX(-50%);

    padding: 8px;
    border-radius: 4px;
    font-size: 14px;
    font-weight: 500;
    color: #312e38;
    visibility: hidden;
    opacity: 0;
    transition: opacity 0.4s;

    &::before {
      content: '';
      border-style: solid;
      border-color: #ff9900 transparent;
      border-width: 6px 6px 0 6px;
      top: 100%;
      left: 50%;
      transform: translateX(-50%);
      position: absolute;
    }
  }

  &:hover span {
    opacity: 1;
    visibility: visible;
  }
`;
