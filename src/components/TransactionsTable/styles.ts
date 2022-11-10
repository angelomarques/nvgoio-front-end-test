import styled from "styled-components";

export const Container = styled.section`
  padding: 40px 0px;
  
  @media only screen and (min-width: 1100px) {
    padding: 20px 0px 0px;
  }
`;

export const Title = styled.h2`
  margin: 0px 0px 20px;
  font-size: 18px;
  text-align: center;
`;

export const TableHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px 0px 8px;
  border-bottom: 1px solid ${(props) => props.theme.palette.gray.main};

  & > p {
    font-size: 14px;
    margin: 0;
  }
`;

export const TransactionType = styled.p`
  flex: 0.5;
  text-align: center;
`;

export const ProductNameHeader = styled.p`
  flex: 2;
  font-weight: 700;
`;

export const ProductValueHeader = styled.p`
  flex: 1;
  font-size: 14px;
  font-weight: 700;
  text-align: center;
`;

export const Item = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  border-bottom: 1px solid ${(props) => props.theme.palette.gray.main};
  padding: 8px 0px;

  & > p {
    font-size: 14px;
    margin: 0;
  }
`;

export const ProductName = styled.p`
  flex: 2;
`;

export const ProductValue = styled.p`
  text-align: right;
  flex: 1;
  padding-right: 10px;
`;

export const TotalContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12px 10px 12px 0px;
  border-top: 1px solid ${(props) => props.theme.palette.gray.main};
  margin: 4px 0px 0px;

  & > div {
    display: flex;
    align-content: center;
    justify-content: space-between;
    font-size: 14px;
    font-weight: 700;
  }

  & p {
    margin: 0;
  }
`;

export const Status = styled.p`
  font-size: 10px;
  text-align: right;
`;
