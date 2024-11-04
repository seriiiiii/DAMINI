import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as ChevronLeft } from "../assets/images/chevron-left.svg";
import { ReactComponent as ChevronRight } from "../assets/images/chevron-right.svg";
import { ReactComponent as ArrowDownpagenation } from "../assets/images/arrow-down_pagenation.svg";

function Pagenation() {
  return (
    <ul className="pagenation">
      <li>총 20건</li>
      <li className="page_input_area">
        <span>Rows per page:</span>
        <select className="page_select" data-trigger="">
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
        </select>
        <span className="total_page">1-5 of 13</span>
      </li>
      <li className="page_item">
        <Link className="page_link disabled" to="">
          <ChevronLeft />
        </Link>
      </li>
      <li class="page_item">
        <Link className="page_link" to="">
          <ChevronRight />
        </Link>
      </li>
    </ul>
  );
}

export default Pagenation;
