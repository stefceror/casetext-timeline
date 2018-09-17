function findCitationDates(rawData) {
  let cases = rawData.case.rows;
  return cases.map(caseData => {
    return new Date(caseData.dates.decide);
  });
}

function createCaseData(rawData) {
  let cases = rawData.case.rows;
  return cases.map(caseData => {
    return {
      date: new Date(caseData.dates.decide),
      citationCount: caseData.citationCount,
      citationString: caseData.citationString,
      title: caseData.title,
      highlights: caseData.highlights
    };
  });
}

export default function(rawData) {
  let citationDates = findCitationDates(rawData);
  let caseData = createCaseData(rawData);
  return { citationDates, caseData };
}
