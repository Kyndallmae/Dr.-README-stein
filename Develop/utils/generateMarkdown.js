// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const yourLicense = ' '
  const licenseBadges = {
    'MIT': '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
    'ISC': '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)',
    'IBM': '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)' 
  }
  if (licenseBadges === 'MIT') {
    yourLicense = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]'
  } else if (licenseBadges === 'ISC') {
    yourLicense = '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)]'
  } else if (licenseBadges === 'IBM') {
    yourLicense = '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)]' 
  } else if (licenseBadges === ' ') {
    yourLicense = ' '
  }
  return yourLicense;
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const yourLink = ' '
  const licenseLink = {
    'MIT': '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
    'ISC': '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)',
    'IBM': '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)' 
  }
  if (licenseLink === 'MIT') {
    yourLink = '[![License: MIT](https://opensource.org/licenses/MIT)]'
  } else if (icenseLink  === 'ISC') {
    yourLink = '[![License: ISC](https://opensource.org/licenses/ISC)]'
  } else if (icenseLink  === 'IBM') {
    yourLink = '[![License: IPL 1.0](https://opensource.org/licenses/IPL-1.0)]' 
  } else if (icenseLink  === ' ') {
    yourLink = ' '
  }
  return yourLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${title}

  ## ${licenseBadge}
  
  ## Description
    ${description}
  
  ## Table of Contents
    1. ${toc1}
    2. ${toc2}
    3. ${toc3}
    4. ${toc4}
    5. ${toc5}
    6. ${toc6}
    7. ${toc7}
    8. ${toc8}
    9. ${toc9}

  
  ## Instillation
      ${instillation}
  
  ## Usage
      ${usage}
  
  ## License
      ${license}
  
  ## Contributtion
      ${contribution}
  
  ## Tests
      ${tests}
  
  ## Questions
      ${questions}
      ${email}

`;
}

module.exports = generateMarkdown;
module.exports = renderLicenseBadge;
module.exports = renderLicenseLink;

