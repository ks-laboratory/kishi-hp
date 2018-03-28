# LAB-HP
- The Official Website for Software Engineering Laboratory of University in Japan.( [That Angular SPA Lab Site](http://www.kishi.mgmt.waseda.ac.jp) )
- This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.2.

## Build and Run

### Prerequisites
- [Node.js](https://nodejs.org/en/): v6.13.1
- [npm](https://www.npmjs.com/): 5.8.0
- [Angular CLI](https://github.com/angular/angular-cli): 1.7.2
- [Angular](https://angular-ja.firebaseapp.com/): 5.2.9
- [git](https://git-scm.com/)

### Our lab development environment (for reference)
- OS: MacOS
- Node.js version manager: [nodebrew](https://github.com/hokaccha/nodebrew) (Windows -> [nodist](https://github.com/marcelklehr/nodist))
- Editor: [Visual Studio Code(VSCode)](https://code.visualstudio.com/)
- Deployment: FTP Server
- Deployment GUI Tool: [Cyberduck](https://cyberduck.io/)

##### Example of prerequisite installation
```
$ nodebrew install-binary v6.13.1
$ nodebrew use v6.13.1
$ npm install -g npm@5.8.0
$ npm install -g @angular/cli@1.7.2
```

##### Check Version
```
$ node -v
v6.13.1
$ npm -v
5.8.0
$ ng -v
...
Angular CLI: 1.7.2
...
Angular: 5.2.9
...
```

### Setting the project
```
$ git clone https://github.com/ks-laboratory/kishi-hp.git
$ cd kishi-hp
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
