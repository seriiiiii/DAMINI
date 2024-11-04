import styled from "styled-components";

<<<<<<< HEAD
const ContainerWrapper = styled.div`
  margin-left: ${({ isOpen }) => (isOpen ? "0px" : "0px")};
      width: 100%;
    flex-grow: 1;
    background: #F9F8FF;
    display: flex;
    flex-direction: column;
    min-width: 0;
    overflow: hidden;
    transition: margin-left 0.35s ease-in-out, left 0.35s ease-in-out, margin-right 0.35s ease-in-out, right 0.35s ease-in-out;
    padding: 20px;
}
`;

const Section01 = styled.div`
    width: 100%;
    border-bottom: 1px solid #CDCBD7;
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0px 0px 16px 0px;
    margin-bottom: 20px;
    h2{
        font-size:24px;
    }
`;

const Section02 = styled.div`
width:100%;
`
const Section02Header = styled.div`
 display: flex;
    gap: 16px;
    align-items: center;

    label{
     margin-right: 8px;
    }
`;

const SearchWrapper = styled.div`
 align-items: center;
    display: flex;
    gap: 11.38px;
`;

const Section03 = styled.div`
 
`;

const MainTable = styled.div`
  width: 100%;
    overflow: auto;
    margin-top: 12px;
    background-color: #fff;
    border-radius: 10px;
`;

export { ContainerWrapper, Section01, Section02, Section02Header, SearchWrapper, Section03, MainTable };
=======
export const NaviLogContainer = styled.div`
  width: 100%;
  flex-grow: 1;
  background: #f9f8ff;
  display: flex;
  flex-direction: column;
  min-width: 0;
  overflow: hidden;
  transition:
    margin-left 0.35s ease-in-out,
    left 0.35s ease-in-out,
    margin-right 0.35s ease-in-out,
    right 0.35s ease-in-out;
  padding: 20px;
`;
>>>>>>> 839baac6355aeffd545a020164c6e831c6fc3367
