# packageminder
PackageMinder is a service which helps nodejs/npm projects keep dependencies in order for production solutions that *must* 

PackageMinder provides badges indicating up-to-dateness of dependencies in svg format using and conforming to shields.io:

[![dependencies 100% up-to-date][2]][1]
[![dependencies 90% up-to-date][3]][1]
[![dependencies 80% up-to-date][4]][1]
[![dependencies 70% up-to-date][5]][1]
[![dependencies 60% up-to-date][6]][1]
[![dependencies 50% up-to-date][7]][1]
[![dependencies 40% up-to-date][8]][1]
[![dependencies 30% up-to-date][9]][1]
[![dependencies 20% up-to-date][10]][1]
[![dependencies 10% up-to-date][11]][1]
[![dependencies 0% up-to-date][12]][1]
[![dependencies has canary release][13]][1]
[![dependencies has unsupported release][14]][1]
[![dependencies has incompatible license][15]][1]
[![dependencies has broken/missing][16]][1]
[![dependencies missing][17]][1]


PackageMinder provides an online interface to generate a report (and badge code) using an open-source repository link to a project (branch or tag) with a properly constructed package.json [ example see https://packageminder.com/report/github.com/expressjs/express/tree/4.15.2 ]

The same is provided in JSON format using the API at:

https://packageminder.com/api/report/{host/path+to+project} 

PackageMinder peruses links to dependencies on npmjs.com (using https://registry.npmjs.org/express) while first checking for local dependencies first before looking for the package on npm. It uses caching (etag if-not-modified-since) to avoid unnecessary hits requests to npm. 

If you signup to PackageMinder, you may also enter multiple repositories to track and receive alerts when dependencies are out-of-date or experiencing problems that should be resolved in production.

























[1]: http://packageminder.com/sample_report
[2]: https://img.shields.io/badge/dependencies-100%25-44CC11.svg (dependencies 100% up-to-date)
[3]: https://img.shields.io/badge/dependencies-90%25-65CC12.svg (dependencies 90% up-to-date)
[4]: https://img.shields.io/badge/dependencies-80%25-84CC12.svg (dependencies 80% up-to-date)
[5]: https://img.shields.io/badge/dependencies-70%25-A3CC12.svg (dependencies 70% up-to-date)
[6]: https://img.shields.io/badge/dependencies-60%25-C2CC12.svg (dependencies 60% up-to-date)
[7]: https://img.shields.io/badge/dependencies-50%25-CCB612.svg (dependencies 50% up-to-date)
[8]: https://img.shields.io/badge/dependencies-40%25-CC9712.svg (dependencies 40% up-to-date)
[9]: https://img.shields.io/badge/dependencies-30%25-CC7812.svg (dependencies 30% up-to-date)
[10]: https://img.shields.io/badge/dependencies-20%25-CC5912.svg (dependencies 20% up-to-date)
[11]: https://img.shields.io/badge/dependencies-10%25-CC3A12.svg (dependencies 10% up-to-date)
[12]: https://img.shields.io/badge/dependencies-0%25-CC1B12.svg (dependencies 0% up-to-date)
[13]: https://img.shields.io/badge/dependencies-canary-CC1B12.svg (dependencies has canary release)
[14]: https://img.shields.io/badge/dependencies-unsupported-CC1B12.svg (dependencies has unsupported release)
[15]: https://img.shields.io/badge/dependencies-incompatible--license-CC1B12.svg (dependencies has incompatible license)
[16]: https://img.shields.io/badge/dependencies-broken--missing-CC1B12.svg (dependencies has broken/missing)
[17]: https://img.shields.io/badge/dependencies-missing-CC1B12.svg (dependencies is missing)
