# Frontend Mentor - Blogr Responsive Grid Header

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

### Screenshot

![Responsive Grid Header](./design/desktop-preview.jpg)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [Sass](https://sass-lang.com/) - Preprocessor scripting language
- [JS](https://developer.mozilla.org/en-US/docs/Web/JavaScript) - Javascript

### What I learned

Ici, je récapitulais certains de mes principaux apprentissages tout en travaillant sur ce projet.

```css
/*Grid*/
.blogr__home {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  grid-auto-columns: 1fr;
  grid-auto-rows: auto;
  grid-auto-rows: 1fr;
  gap: 0px 0px;
  grid-auto-flow: row;
  grid-template-areas: "header";
}
```

```SCSS
sassworkshop/dart-sass/sass sassWorkShop/sass/style.scss style.css --watch

// _mixins.css
@mixin respond($breakpoint) {
  @if $breakpoint == smallphone {
    @media only screen and (max-width: $breakpoint-tiny-screens) {
      @content;
    }
  }

  @if $breakpoint == phone {
    @media only screen and (max-width: $breakpoint-small-screens) {
      @content;
    }
  }

  @if $breakpoint == tablet {
    @media only screen and (max-width: $breakpoint-tablet-screens) {
      @content;
    }
  }

  @if $breakpoint == desktop-md {
    @media only screen and (max-width: $breakpoint-desktop-md-screens) {
      @content;
    }
  }
}

```

```js
// mediaQueryListe Object
let mqList = window.matchMedia("(max-width: 600px)");

// Si l'écran est plus petit que 600 pixels alors c'est True
if (mqList.matches) {
}

mqList.addEventListener("change", displayNavbar); // Mettre en écoute mediaQueryListe sur le changement d'état
```

## Author

- Website - [Firas BEDOUI](https://www.dinya.fr)
- LinkedIn - [@Firas BEDOUI](https://www.linkedin.com/in/bedouif/)
- Twitter - [@Fi-Deep-Ras](https://twitter.com/Dinya_Of_Dev)
