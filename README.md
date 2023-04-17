# **Personal Portfolio created with React

## **Project Description**

This is my personal portfolio web application created with React, a front-end JavaScript library that is well-known for efficient rendering and reusable components. This web app will be updated regularly, showcasing my latest and most presentable projects that I have completed.

The web app is divided into 3 main components:
- Header / navigation bar (i.e. Navbar)
- Main section which can be subdivided into About, Portfolio, Contact, and Resume
- Footer which displays GitHub, LinkedIn, StackOverflow, and Twitter icons which will redirect you to my personal accounts on these platforms

---
## **URLs**
- [Deployed Application](https://jouriena11.github.io/personal-portfolio-spa)
- [GitHub Repository URL](https://github.com/jouriena11/personal-portfolio-spa)

---
## **Table of Contents**
- [Installation](#installation)
- [Technologies Used](#technologies-used)
- [Usage](#usage--expected-behavior)
- [Future Developments](#future-development)
- [Contact]()

---
## **Installation**
To run this web application in a local server, the following libraries must be installed:
- react v18.2.0
- react-dom v.18.2.0
- react-scripts v5.0.1
- testing-library/jest-dom v5.14.1
- testing-library/react v13.0.0
- testing-library/user-event v13.2.1
- bootstrap v5.3.0-alpha3
- react-scripts v5.0.1
- react-router-dom v6.10.0

The installations can be done conveniently by the running the following command line at the root directory: 
```
npx create-react-app <your-app>
```

and

```
npm i react-router-dom bootstrap
```

which must be installed separately

---
## **Technologies Used**
- HTML
- Bootstrap / CSS
- JavaScript
- Node.js
- React

---
## **Usage / Expected Behavior**

As this is my personal portfolio web app, it's unlikely that you would be running it in your local server, so I'll focus mainly on how the web app is expected to behave.

As you visit my portolio web app for the first time, the `'About Me'` section will be the first page you see.
`(image)`

As you hover your mouse over a navigation menu, the font color of that menu would change. 

As you click on one of the navigation menu, the section content would change to a different content that corresponds to the selected menu. At the same time, the menu would change its color and accompanied by an underline of the same color, confirming that this is indeed the selected menu. The color would revert to black and the underline would disappear as you select another navigation menu.
`(image)`

When you click on `Portfolio` menu, you'll see snapshot images of my other projects. As you hover your mouse over each of these images, it will flip to the back, showing you a list of technologies used in that particular project as well as button links to corresponding GitHub repository and deployed application. 
`(image)`

When you click on `Contact` menu, you'll be presented with a contact form with built-in auto-validation. The built-in validation would prevent you from submitting a blank form or entering an invalid email. An error message would appear below the `Send` button if any invalid input is present.
`(image)`

When you click on `Resume`, you'll be presented with my resume page on the web app. If you click on `'Download'` button on the top right of the section, you'll be redirected to a browser-rendered PDF page from where you can print my resume.
`(image)`

In the footer, GitHub, LinkedIn, StackOverflow, and Twitter icons will each redirect you to my personal accounts on  that respective platform.
`(image)`

---
## **Future Development**
- To display `Home` menu in the navigation bar
- To use Banner page for homepage rendering instead of About page
- To convert some components, including About, Contact, Portfolio, and Resume into pages
- To improve UX/UI
- To use nodemailer to send an email to personal gmail account when a contact form is submitted
- To display my name initials instead of full name

---
## **Contact**

Please feel free to contact me through any of the following channels
- Email: p.teeraprasert@gmail.com 
- LinkedIn: https://www.linkedin.com/in/piyawit-teeraprasert/