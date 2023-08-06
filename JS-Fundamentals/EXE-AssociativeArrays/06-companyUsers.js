function companyUsers(input) {
    const companies = {};

    for (const entry of input) {
      const [company, employeeId] = entry.split(" -> ");
      if (!companies.hasOwnProperty(company)) {
        companies[company] = new Set();
      }
      companies[company].add(employeeId);
    }
  
    const sortedCompanies = Object.entries(companies).sort((a, b) => a[0].localeCompare(b[0]));
  
    for (const [company, employees] of sortedCompanies) {
      console.log(company);
      for (const employee of [...employees].sort()) {
        console.log("--", employee);
      }
    }
}
companyUsers([
    'SoftUni -> AA12345', 'SoftUni -> BB12345', 'Microsoft -> CC12345', 'HP -> BB12345']);