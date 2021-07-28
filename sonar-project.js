const sonarqubeScanner = require('sonarqube-scanner');

sonarqubeScanner({
  serverUrl: 'http://18.223.255.187:9000/',
       options : {
       'sonar.projectKey': 'node-hello',
       'sonar.projectName': 'node-hello',
       'sonar.language':'js',
       'sonar.sources':'lib',
       'sonar.sourceEncoding':'UTF-8',
       'sonar.projectVersion':'2.0',
       'sonar.tests':'lib',
       
       'sonar.sources': 'lib',
       'sonar.test.inclusions': 'lib/**/__tests__/*.spec.js',
       'sonar.coverage.exclusions': 'lib/**/__tests__/**,lib/**/__snapshots__/**',
       'sonar.javascript.jstest.reportsPath': 'site/report',

       'sonar.testExecutionReportPaths': 'reports/test-report.xml',
       'sonar.javascript.coveragePlugin': 'lcov',
       'sonar.javascript.lcov.reportPath' : './coverage/lcov.info'

       },
}, () => {});
