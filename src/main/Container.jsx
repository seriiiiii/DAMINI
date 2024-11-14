import React, { useState, useEffect } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import Select from "../components/Select";
import { ReactComponent as Search } from "../assets/images/search.svg";
import Table from "../components/Table";
import DropdownTable from "../components/DropdownTable";
import Pagenation from "../components/Pagenation";
import {
  ContainerWrapper,
  Section01,
  Section02,
  Section02Header,
  SearchWrapper,
  Section03,
  MainTable,
} from "./Container.styles";

function Container({ isOpen }) {
  const [changeOptionEl, setChangeOptionEl] = useState("");

  const [inputValue, setInputValue] = useState();

  const handleClick = () => {};

  useEffect(() => {
    if (changeOptionEl && changeOptionEl.target);
    // console.log(changeOptionEl.target.value);
  }, [changeOptionEl]);

  const tableHeaders = [
    "Service",
    "UI Version",
    "Page",
    "Component",
    "담당자",
    "Status",
    "RequesT Type",
  ];

  const tableData = [
    {
      requestType: "Page",
      title: "서비스별 이용자 추이",
      applicationDate: "2023.07.26 09:00:01",
      processDate: "-",
      handler: "-",
      status: "신청완료",
      requestTypeDetail: "신규",
    },
    {
      requestType: "Page",
      title: "다른 서비스 이용자 추이",
      applicationDate: "2023.08.01 10:30:15",
      processDate: "-",
      handler: "-",
      status: "처리중",
      requestTypeDetail: "수정",
      dropDownData: [
        {
          requestType: "Page",
          title: "다른 서비스 이용자 추이",
          applicationDate: "2023.08.01 10:30:15",
          processDate: "-",
          handler: "-",
          status: "sdfsdfsdf",
          requestTypeDetail: "//",
        },
        {
          requestType: "Page2",
          title: "다른 서비스 이용자 추이",
          applicationDate: "2023.08.01 10:30:15",
          processDate: "-",
          handler: "-",
          status: "sdfsdfsdf",
          requestTypeDetail: "//",
        },
      ],
    },
    {
      requestType: "Page",
      title: "다른 서비스 이용자 추이",
      applicationDate: "2023.08.01 10:30:15",
      processDate: "-",
      handler: "-",
      status: "처리중",
      requestTypeDetail: "수정",
      dropDownData: [
        {
          requestType: "Page",
          title: "다른 서비스 이용자 추이",
          applicationDate: "2023.08.01 10:30:15",
          processDate: "-",
          handler: "-",
          status: "sdfsdfsdf",
          requestTypeDetail: "//",
        },
      ],
    },
    {
      requestType: "Page",
      title: "다른 서비스 이용자 추이",
      applicationDate: "2023.08.01 10:30:15",
      processDate: "-",
      handler: "-",
      status: "처리중",
      requestTypeDetail: "수정",
      dropDownData: [
        {
          requestType: "Page",
          title: "다른 서비스 이용자 추이",
          applicationDate: "2023.08.01 10:30:15",
          processDate: "-",
          handler: "-",
          status: "sdfsdfsdf",
          requestTypeDetail: "//",
        },
      ],
    },
  ];

  return (
    <ContainerWrapper>
      <Section01>
        <h2>Navilog 3.0 UI Component 등록 현황 조회</h2>
        <Button onClick={handleClick} primary size="small">
          Page 추가 신청
        </Button>
      </Section01>
      <Section02>
        <Section02Header>
          <div>
            <label>Service</label>
            <Select
              options={[
                { label: "All", value: "" },
                { label: "옵션 1", value: "option1" },
                { label: "옵션 2", value: "option2" },
              ]}
              onChange={(e) => setChangeOptionEl(e)}
            />
          </div>
          <div>
            <label>UI&nbsp;Version</label>
            <Select
              options={[
                { label: "All", value: "" },
                { label: "옵션 1", value: "option1" },
                { label: "옵션 2", value: "option2" },
              ]}
              onChange={(e) => setChangeOptionEl(e.target.value)}
            />
          </div>
          <div>
            <label>검색 조건</label>
            <Select
              options={[
                { label: "Mendentory", value: "" },
                { label: "옵션 1", value: "option1" },
                { label: "옵션 2", value: "option2" },
              ]}
              onChange={(e) => setChangeOptionEl(e)}
            />
          </div>
          <SearchWrapper>
            <Input
              placeholder="검색어를 입력하세요"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <Search />
          </SearchWrapper>
        </Section02Header>
      </Section02>
      <Section03>
        <MainTable>
          {/* <Table headers={tableHeaders} data={tableData}/> */}
          <DropdownTable headers={tableHeaders} data={tableData} />
          <Pagenation />
        </MainTable>
      </Section03>
    </ContainerWrapper>
  );
}

export default Container;
