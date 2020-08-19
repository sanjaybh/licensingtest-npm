##npm - licensingtest-npm

Please verify this on windows.
- remove package-lock.json file
- set the registry to #1
- run "npm install" and ensure that FusionCharts version is 3.15.9
- install parcel #2
- run "parcel index.html" to check
- change snippet from fusioncharts.com/dev to both CJS and ES6 with license key to verify



#1.
npm login --registry http://1.1.1.1/

> npm config set registry http://1.1.1.1/

#2. If parcel-bundler is not available
npm install -g parcel-bundler

> parcel index.html


Verdaccio [change as per the IP set for verdaccio link]
http://verdaccio.com/-/web/detail/fusioncharts/
 
Username: <>
Password: <>
Email: sb@domain.com
