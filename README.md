# LAB-HP
- The Official Website for Software Engineering Laboratory of University in Japan.( [That Angular SPA Lab Site](http://www.kishi.mgmt.waseda.ac.jp) )
- This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.2.

## Build and Run

### Prerequisites
- [Node.js](https://nodejs.org/en/): v6.11.4
- [npm](https://www.npmjs.com/): 5.7.1
- [Angular CLI](https://github.com/angular/angular-cli): 1.7.2
- [Angular](https://angular-ja.firebaseapp.com/): 5.2.7
- [git](https://git-scm.com/)

### Our lab development environment (for reference)
- OS: MacOS
- Node.js version manager: [nodebrew](https://github.com/hokaccha/nodebrew)
- Editor: [Visual Studio Code(VSCode)](https://code.visualstudio.com/)
- Deployment: FTP Server
- Deployment GUI Tool: [Cyberduck](https://cyberduck.io/)

##### Example of prerequisite installation
```
$ nodebrew install-binary v6.11.4
$ nodebrew use v6.11.4
$ npm install -g @angular/cli@1.7.2
```

##### Check Version
```
$ node -v
v6.11.4
$ npm -v
5.7.1
$ ng -v
...
Angular CLI: 1.7.2
...
Angular: 5.2.7
...
```

### Setting the project
```
$ git clone https://github.com/ks-laboratory/kishi-hp.git
$ cd ks-hp
$ npm i
```

### Update the project
```
$ git pull
```

### Development server
```
$ npm run start
```
Navigate to `http://localhost:4200/`.

### Production Build
```
$ ng build --prod
```
Deploy dist/ to the FTP server.
