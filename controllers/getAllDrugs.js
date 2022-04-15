const dataSet = require("../dataset.json");
const moment = require("moment");

async function getDrugsList(req, res, next) {
  let pageSize = Number(req.query.size) || 20;
  let page = Number(req.query.page) || 0;
  let totalListSize = dataSet.drugs.length;
  let totalPages = Math.floor(totalListSize / pageSize);
  let nextPage = returnNextPage(page, totalPages);
  let pageData = filteredList(pageSize, page);
  modifyDate(pageData);
  let responseObj = {
    totalCount: totalListSize,
    next: nextPage,
    pageData: pageData,
  };
  res.send(responseObj);
}

function filteredList(pageSize, page) {
  /** get drug list specific to the given size and page */
  let start = page * pageSize;
  let end = (page + 1) * pageSize;

  return dataSet.drugs.slice(start, end);
}

function returnNextPage(page, totalPages) {
  return page < totalPages ? page + 1 : undefined;
}

function modifyDate(drugList) {
  /** modifying date from 'YYYY-MM-DD' to 'DD/MM/YYY'  */
  for (const drug of drugList) {
    let rawDate = moment(drug.released);
    var month = rawDate.format("M");
    var day = rawDate.format("D");
    var year = rawDate.format("YYYY");

    let newDate = `${day}/${month}/${year}`;
    drug.released = newDate;
  }
}

module.exports = {
  getDrugsList,
};
