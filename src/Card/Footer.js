import styled from 'styled-components';

const Footer = styled.div`
  border-top: 1px solid #ddd;
  padding: 14px 16px;
  overflow-x: auto;
  white-space: nowrap;

  > span {
    line-height: 2;
    padding: 4px 7px;
    margin: 0 1px;
    border-radius: 4px;
    background: rgb(66, 165, 245);
    color: #fff;

    :last-child {
      margin-right: 16px;
    }
  }
`;

export default Footer;
