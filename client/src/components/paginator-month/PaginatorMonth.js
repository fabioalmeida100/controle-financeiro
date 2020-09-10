import React from 'react'
import css from './paginator.month.css'

export default function PaginatorMonth({handleOnChageYearMonth, yearMonthList}) {
  return (
    <div className="center">
          <select className="browser-default" onChange={handleOnChageYearMonth}>
            <option value="2019-01">2019-01</option>
            <option value="2019-02">2019-02</option>
            <option value="2019-03">2019-03</option>
            <option value="2019-04">2019-04</option>
            <option value="2019-05">2019-05</option>
            <option value="2019-06">2019-06</option>
            <option value="2019-07">2019-07</option>
            <option value="2019-08">2019-08</option>
            <option value="2019-09">2019-09</option>
            <option value="2019-10">2019-10</option>
            <option value="2019-11">2019-11</option>
            <option value="2019-12">2019-12</option>
            <option value="2020-01">2020-01</option>
            <option value="2020-02">2020-02</option>
            <option value="2020-03">2020-03</option>
            <option value="2020-04">2020-04</option>
            <option value="2020-05">2020-05</option>
            <option value="2020-06">2020-06</option>
            <option value="2020-07">2020-07</option>
            <option value="2020-08">2020-08</option>
            <option value="2020-09">2020-09</option>
            <option value="2020-10">2020-10</option>
            <option value="2020-11">2020-11</option>
            <option value="2020-12">2020-12</option>
            <option value="2021-01">2021-01</option>
            <option value="2021-02">2021-02</option>
            <option value="2021-03">2021-03</option>
            <option value="2021-04">2021-04</option>
            <option value="2021-05">2021-05</option>
            <option value="2021-06">2021-06</option>
            <option value="2021-07">2021-07</option>
            <option value="2021-08">2021-08</option>
            <option value="2021-09">2021-09</option>
            <option value="2021-10">2021-10</option>
            <option value="2021-11">2021-11</option>
            <option value="2021-12">2021-12</option>
          </select>
    </div>
  )
}
