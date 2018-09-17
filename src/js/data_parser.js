function findCitationDates(rawData) {
  let cases = rawData.case.rows;
  return cases.map(caseData => {
    return new Date(caseData.dates.decide);
  });
}

function findDateRange(citationDates) {
  let earliestDate = citationDates.reduce((date, caseDate) => {
    if (caseDate < date) {
      return caseDate;
    } else {
      return date;
    }
  }, Infinity);
  let latestDate = citationDates.reduce((date, caseDate) => {
    if (caseDate > date) {
      return caseDate;
    } else {
      return date;
    }
  }, 0);
  return [earliestDate, latestDate];
}

export default function(rawData) {
  let citationDates = findCitationDates(rawData);
  let dateRange = findDateRange(citationDates);
  return { citationDates, dateRange };
}
