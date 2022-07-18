import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css');

*,
*::before,
*::after {
    margin: 0;
    padding: 0;  
    box-sizing: border-box;
    font-family: 'Pretendard', sans-serif;
}
html {
  margin: 0;
  padding: 0;
  height: 100vh;
  background: #fcfcfc;
  -webkit-text-size-adjust: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-tap-highlight-color: transparent;
  font-size: 16px;
}
body {
  margin: 0;
  height: 100vh;
  background: #fcfcfc;
  font-size: 16px;
  font-family: "Pretendard", -apple-system, BlinkMacSystemFont, "Segoe UI",
    "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
    "Helvetica Neue", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

::selection,
::-moz-selection {
  background: #39f;
  color: #fff;
  text-shadow: none;
}
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  font-weight: inherit;
}

article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}

div,
span,
article,
section,
header,
footer,
aside,
p,
ul,
li,
fieldset,
legend,
label,
a,
nav,
form {
  box-sizing: border-box;
  /* content-box */
}

ol,
ul,
li {
  list-style: none;
}
fieldset {
  min-width: 0;
  padding: 0;
  margin: 0;
  border: 0;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}

img {
  max-width: 100%;
  height: auto;
  border: 0;
}

a {
  display: inline-block;
  text-decoration: none;
  cursor: pointer;
  color: #fcfcfc;
}
a:active,
a:hover {
  outline: none;
}
canvas,
img,
video {
  max-width: 100%;
  height: auto;
  box-sizing: border-box;
}
textarea {
  overflow: auto;
  resize: vertical;
}
input,
textarea {
  font-size: 16px;
  font-family: "Pretendard";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
textarea {
  background-color: #fcfcfc;
}
input {
  border: 1px solid #F5F5F5;
}

textarea {
  border: 1px solid #F5F5F5;
  resize: none;
}
hr {
  margin: 0;
  height: 1px;
  border: 0;
}
button {
  margin: 0;
  padding: 0;
  border: 0;
  background-color: transparent;
  font-size: 16px;

  font-family: "Pretendard";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 500;
  border: none;
  cursor: pointer;
}

input {
  /* padding: 0.2rem 16px; */
  font-family: "Pretendard";
  border: 1px solid #F5F5F5;
}
`;

export default GlobalStyle;
