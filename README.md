![cf](https://i.imgur.com/7v5ASc8.png) lab-03-fs-async
======

## To Submit this Assignment
  * fork this repository
  * write all of your code in a directory named `lab-` + `<your name>` **e.g.** `lab-tyler-morgan`
  * push to your repository
  * submit a pull request to this repository
  * submit a link to your PR in canvas
  * write a question and observation on canvas

## Description:
* Create these directorys to organize your code
 * lib
 * test
* create a **readFiles**  module that will read a array of filepaths in parallel, and return an array of the file contents
* create a CLI that uses your file reading module to print the contents of a list of files provided on `process.argv`
* also, you must guarantee that three files are read and console logged in the order they were passed in on `process.argv`
* you can use any method of handling async except nested callback. aka. dont use nested calls to `fs.readFile` with anonymous function callbacks
 
## Test:
* write a test that guarantees your readFiles module will read all of the files passed in
* write a test that guarantees your CLI prints the files in the order that the filepath arguments were provided

##Rubric:
  * Async Handling
  * Use of fs
  * Testing 
