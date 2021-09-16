# OctoML Frontend Take Home project

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app)
And [Material UI](https://mui.com/getting-started/usage/)

-----------

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

**Notes & Thoughts**
- Getting this List interactivity right was definitely the trickiest part of the assignment, and I can see why it was given highest priority in evaluation importance
- The recurring challenge I faced was figuring out how to best read and store the Hardware data in a way that the components could easily read and render it
- I may have been able to cut down on time and effort if I hard-coded the (2) available Providers into the Select Provider dropdown, but say the API were updated to add or remove providers, I wanted to make sure this list could dynamically respond to such a change. 
- A common hiccup for a dyanmic 'ToDo' List in React is tracking each list item by id and ensuring we set a unique `key` prop on each list item when rendering. It's ill advised to key off of a list item `index` as that will cause errors when removing items from the middle of a list. For a unique `id`, I used `instance` in the sample data as I noticed that was the unique identifier for each target. However, in the event that instances may not be unique in a future update, this would be a convo to have with Backend Engineers to figure out a solution to provide a unique identifier for each provider x instance. 
- I think utilizing a Flux/Redux Store to manage Hardware Target List state would be a better choice. For this project, I used hooks and prop functions to handle state management, which I think is fine for a self container dynamic list. But since the Total Runs panel (and potentially the accordions) are also interested in the Hardware Targets list, a centralized Store would be the direction to go in for refactoring.
- Speaking of refactoring, I'd try and reconsider and redo how I initially read and set the data from the GET request. I determined that I wanted to be able to read the hardware targets data like so:
```
{
 "AWS": {
  "instances": {
    "m4.large": {
      cpu: 2, 
      memory: 8, 
      name: "m4.large"
    },
    ...
  }
 },
 "GCP": {
   "instances": {
     "n2-standard-2":{
       cpu: 2, 
       memory: 8, 
       name: "n2-standard-2"
     },
     ...
   }
 }
}
```
and to achieve this, I did some data structure reading -> manipulation -> assembly to form it (see `Home.js` where I make the GET request and the consequential assembly). While this worked for me to build the Hardware Targets list and handle the reading and interactivity I needed, I ended up setting the raw GET request data as is for the accordions (more on the Accordions sections). To avoid setting 1 set of data in 2 different State structures, I'd rethink how I wanted to store the sample data and probably organize it differently than what I did here.

## The Benchmark Accordion

- Opening the Benchmark accordion reveals some options the user can enter if they desire to benchmark the performance of the Octomizer against a standard model + engine
- Hardware Targets dropdown: in the assigned README detailing the body of the POST /benchmark request, it seemed to imply you could only select 1 hardware target to benchmark. Whether this 1 selection is pulled from currently assigned hardware targets, or from all available targets in the sample data, was unclear.
- The inputs for `Number of Trials` and `Runs per Trial` will validate for positive, whole integers only
- Checking the box in this Accordion signals that the POST /benchmark request should be made when the user clicks "Octomize" - I wanted a way to convey this request clearer by adding a line of text in the Total Runs panel

https://user-images.githubusercontent.com/8834946/133664145-7a80d983-9833-49b2-a613-fbb4c6cd1744.mov

**Notes & Thoughts**
- I addressed the Accordions after I had the functionality of the Hardware Targets list, and Total Runs panel reading from it, down. 
- The assigned README which detailed sample POST requests to the /benchmark endpoint implied a user could select a Hardware Target to benchmark - but the process of *how* a user picked a target elluded me. Would this UI reflect the currently config'd Targets from below? Or would a user be able to pick from *any* of the available hardware configurations in the GET request? 
- Then I realized, when clicking Octomize `should submit the corresponding API requests to the hosted server`, I took that to mean:
1) if `Benchmark` is selected, POST /benchmark
2) if `Accelerate` is selected, POST /accelerate
- but what of the list of Hardware Targets down below? This to me implied a user could submit *multiple* hardware targets to these POST requests, but I wasn't sure from a UI standpoint how the accordion is connected to the Hardware Targets list to convey this functionality. 
- As it stands, `Home.js` will capture/assemble the body for the /benchmark request and attempt to POST it (unsuccessfully)

## The Accelerate Accordion
- Opening the Accelerate accordion reveals some options the user can enter if they desire to request a certain target be accelerated during "Octomization"
- Hardware Targets dropdown: in the assigned README detailing the body of the POST /benchmark request, it seemed to imply you could only select 1 hardware target to benchmark. Whether this 1 selection is pulled from currently assigned hardware targets, or from all available targets in the sample data, was unclear.
- `Kernel Trials` is an input only applicable if the TVM engine is selected, and thus will only render and be available if TVM is selected
- `Kernel Trials` input will validate for whole, positive integers only
- Checking the box in this Accordion signals that the POST /accelerate request should be made when the user clicks "Octomize" - I wanted a way to convey this request clearer by adding a line of text in the Total Runs panel

https://user-images.githubusercontent.com/8834946/133665020-a8ca982f-3447-4598-b714-46f2a8a6c69e.mov

**Notes & Thoughts**
- The difference between the ONYX and TVM engine-setting was an interesting hiccup to overcome
- For the hardware targets dropdown: same conundrum as the Benchmark accordion. 
- Got it to a point where `Home.js` will capture/assemble the body for the /accelerate request, but doesn't actually submit it when the user clicks "Octomize"

## Total Runs Panel
- Reflects what Hardware Targets that have been selected for Octomization, represented by `instance` and `cpu`
- Unsure if or how the `run count` for each instance could be modified - so the `Total Runs` header reflects the number of hardware targets appropriately configured
- Clicking Octomize attempts a POST request, but I was unable to get this working / felt like the work I've achieved to this point is adequate for this assessment (and that the Octomize POSTing functionality was last on the list of evaluation importance)
- I noticed the assignment README mentions what a valid POST body looks like for /benchmark and /accelerate, and gave some examples of why a request would error/fail given user input - but I think instead of "wasting" a request only for it to fail, we could apply some form validation to the Benchmark and Accelerate accordions that will calculate the (number of trials x runs per trial), and check that (kernel trials < max) and encourage the user to adjust their inputs. I believe this makes for a smoother user experience, and we can reserve propagating UI request Error states for more potentially cryptic request failures than a validation that can be handled client side. 
