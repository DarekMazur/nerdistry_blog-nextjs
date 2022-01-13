<p align="center">
    <img alt="Nerdistry logo" src="assets/images/svg/Logo_sqr.svg" width="150" />
</p>

<h1 align="center">
  Nerdistry blog
</h1>

## Version: 0.1 (beta)

Live demo: [app]

## :black_nib: About app

lorem ipsum

## 🚀 Quick start

1.  **Requirement**

    - npm (v7.16.0)

2.  **Installation**

    To install application navigate to app's directory and use npm command

    ```shell
    cd app-main-dir/
    npm install
    npm run build
    ```

3.  **Developer mode**

    You can run app in developer mode by using command

    ```shell
    npm run dev
    ```

    Application will run on port 3000 (localhost:3000)

## :computer: Frontend

   This application is created using [NextJS framework] and CSSinJS (styled-components).
    
   Other libraries:
    
   * fortawesome
   * sendgrid
   * axios
   * formik
   * gsap
   * nodemailer
   * react infinite scroll component
   * simple react lightbox
   * yup
   * react markdown
   * slugify

## :wrench: Backend
    
   App is designed to work with [Strapi.io] (used v3). You can also use this tool, choose other API provider (Wordpress, DatoCMS etc) or design your API server.

API schema:

    .
    ├── Posts
    |  ├────── Title (text)
    |  ├────── Content (rich text)
    |  ├────── Tags (text)
    |  ├────── User (relation)
    |  ├────── Description (text)
    |  ├────── CoverImage (media)
    |  └────── categoties (relation)
    ├── Categories
    ├────── Title (text)
    |  ├────── Name (text)
    |  ├────── Description (text)
    |  └────── posts (relation)
    └── Users
       ├────── username (text)
       ├────── email (email)
       ├────── provider (text)
       ├────── password (password)
       ├────── resetPasswordToken (text)
       ├────── confirmationToken (text)
       ├────── confirmed (boolean)
       ├────── blocked (boolean)
       ├────── role (relation)
       ├────── posts (relation)
       ├────── Avatar (media)
       └────── Bio (rich text)

You can recreate this schema in your Strapi application or create own API based on it. If you want redesign API you'll need to change it also on frontend side.

## Changelog

**0.1**

- deploy app - beta version

## ToDo

- fix mobile view
- tests
- and most probably much, much more ;)

[app]: https://nerdistry.pl/
[NextJS framework]: https://nextjs.org/docs
[Strapi.io]: https://strapi.io/