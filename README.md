# Readme

## Follow-up notes

### TypeScript with React

* https://www.digitalocean.com/community/tutorials/react-typescript-with-react
* https://www.carlrippon.com/React-event-handlers-with-typescript/
* https://www.sitepoint.com/react-with-typescript-best-practices/

### Using TypeScript with Babel

* https://kangax.github.io/compat-table/es6/
* https://iamturns.com/typescript-babel/

### Advanced types for type-guarding, using unions, etc

* https://www.typescriptlang.org/docs/handbook/advanced-types.html

<details>
	<summary>Rough speaker notes</summary>

* Ensure everyone has nodejs 12 (old LTS) or 14 (new LTS)
	https://nodejs.org/en/
	https://github.com/coreybutler/nvm-windows (powershell to install)
	https://github.com/nvm-sh/nvm (terminal to install)
* Ensure everyone makes a new folder
* take people through yarn init
	* npm install -g yarn
	* yarn init
* take people through adding typescript
	* yarn add --dev typescript
* help people setup TypeScript
	* yarn tsc --init
	* setup tconfig.json
	* hello world
* help people get started with TypeScript testing using jest
	* yarn add --dev jest
	* yarn add --dev @types/jest
	* setup jest as yarn test runner
	* write test to ensure hello world run
	* build
	* jest test
	* iterate on test to make it pass
		* cover error
		* yarn test (to watch it fail)
		* build
		* yarn test (watch it pass)
* explain the complexities of typescript->js->jest
	* show an edit to the test which should stop things passing
	* install ts-jest
        * yarn jest --init
	* note not needing to build before testing
        * also note less tests being run (1 rather than 2)
* import express with TypeScript
	* yarn add express
	* yarn add --dev @types/express
	* yarn add --dev supertest
	* yarn add --dev @types/supertest
* setup yargs with typescript
	* yarn add --dev @types/yargs
	* yarn add yargs
	* move express over to yargs
	* show green case test for yargs
	* show red-case test for yargs
	* note process exit nonsense from yargs
* Show the type of compile time check that can be done with TypeScript
* cover that runtime checks should be done without TypeScript
	* yarn add joi
	* yarn add --dev @types/joi
	* yarn add joi-validation-middleware
	
</details>

## Missing parts of the talk

* Ensuring strongly typed static data files using TypeScript & JSON
	* For small number of records gives attribution
	* Compile-time guarantees
	* Memory issues when compiling (2GB+) and runtime (15MB file takes ~15MB RAM)
* Covering Internal domain -> JS surprises
	* Omit helper
	* Using spread to guarantee runtime behaviour
