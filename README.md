# Frontend Mentor - Intro component with sign up form solution

This is a solution to the [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)



## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say *"[Field Name] cannot be empty"*
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say *"Looks like this is not an email"*

### Screenshot

![](./images/intro-sign-up-form.png)


### Links

- Solution URL: [https://www.frontendmentor.io/solutions/intro-sign-up-form-using-html-css-scss-js-jquery-8ZyPnJAFvZ](https://www.frontendmentor.io/solutions/intro-sign-up-form-using-html-css-scss-js-jquery-8ZyPnJAFvZ)
- Live Site URL: [https://intro-sign-up-form.vercel.app/](https://intro-sign-up-form.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- jQuery


### What I learned

I continued experimenting with SCSS and began using jQuery. I became a little more familair with form validation.


```js
if (!input.val()) {
  $("input:invalid").css({"border-color":"red", 
  "background":"url(../images/icon-error.svg)",
  "background-repeat":"no-repeat",
  "background-position":"95% 50%"});
}
```

The code above would add the css properties to the input fields whever the user tried to submit.

### Continued development

I want to become more familiar with form validation. I also want to learn how to effectively use ":after" in JS as I was unable to utilize it in order to match the solution.


## Author

- LinkedIn - [Adrian Guerra](https://www.linkedin.com/in/adrian-guerra-a210a4196/)
- Frontend Mentor - [@adie9](https://www.frontendmentor.io/profile/adie9)



