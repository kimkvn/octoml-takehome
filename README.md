# OctoML Frontend Take Home project

### To run project locally:

1) Clone repo 
2) Run `npm start` in terminal
3) Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

-----

## The Hardware Targets Panel

- Setting Hardware Target configurations will reflect in the Total Runs panel
- You can `Add` a Hardware Target config, but it won't manifest in Total Runs until you set some more options
- Adjusting the `Provider` for a Hardware Target will reset that Target, and pull it from the Total Runs panel
- Deleting a Hardware Target will reflect in Total Runs
- No duplicates are allowed
- There is a max Limit of Hardware Targets (8, given the sample data)

https://user-images.githubusercontent.com/8834946/133663188-55c18af8-568d-40b9-8fea-3485fb3abca1.mov

## The Benchmark Accordion

- Opening the Benchmark accordion reveals some options the user can enter if they desire to benchmark the performance of the Octomizer against a standard model + engine
- Hardware Targets dropdown: in the assigned README detailing the body of the POST /benchmark request, it seemed to imply you could only select 1 hardware target to benchmark. Whether this 1 selection is pulled from currently assigned hardware targets, or from all available targets in the sample data, was unclear.
- The inputs for `Number of Trials` and `Runs per Trial` will validate for positive, whole integers only
- Checking the box in this Accordion signals that the POST /benchmark request should be made when the user clicks "Octomize" - I wanted a way to convey this request clearer by adding a line of text in the Total Runs panel


https://user-images.githubusercontent.com/8834946/133664145-7a80d983-9833-49b2-a613-fbb4c6cd1744.mov



This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
