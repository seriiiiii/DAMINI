import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { StyledLink } from './common.styles'; 
import { ReactComponent as ChevronLeft } from "../assets/images/chevron-left.svg";
import { ReactComponent as ChevronRight } from "../assets/images/chevron-right.svg";
import { ReactComponent as ArrowDownpagenation } from "../assets/images/arrow-down_pagenation.svg";
import {
 PagenationWrapper,
 PageInputArea,
 CustomSelect,
} from "./common.styles";

function Pagenation() {
  return (
    <PagenationWrapper>
        <li>
            총 20건
        </li>
      <PageInputArea>
        <span>Rows per page:</span>
        <CustomSelect data-trigger="">
          <option value="1" selected>
            5
          </option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
          <ArrowDownpagenation />
        </CustomSelect>
        <span>1-5 of 13</span>
      </PageInputArea>
      <li>
        <styledLink disabled to="">
          <ChevronLeft />
        </styledLink>
      </li>
      <li>
        <styledLink to="">
          <ChevronRight />
        </styledLink>
      </li>
    </PagenationWrapper>
  );
}

export default Pagenation;
