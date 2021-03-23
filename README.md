# Parking Lot Implemenation
A typescript implementation for Node.js

### Setup and execution guide
Assuming you already have [`Node.js`](https://nodejs.org/), [`Ruby`](https://www.ruby-lang.org/en/) and [`Bundler`](https://bundler.io/) installed,


1. Install Node dependencies, run [`jest`](https://jestjs.io/) test suites and transpile TS to `/dist`
```sh
$  bin/setup
```

2. Run functional test suites [(ruby based)](https://www.ruby-lang.org/en/)
```sh
$  bin/run_functional_tests
```

3. Run program passing the input file at `/file_inputs.txt`
```sh
$  bin/parking_lot file_inputs.txt
```
