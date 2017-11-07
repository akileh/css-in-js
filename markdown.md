# CSS in JS
## with styled components
Aki Lehtinen

---
class: top
# (Some) Problems with CSS
* Global namespace
* Dead code
* Dependencies

--

```html
<button type="button" class="btn btn-primary btn-large">
```

???
* Five buttons!

--

*React: CSS in JS*

[https://speakerdeck.com/vjeux/react-css-in-js](https://speakerdeck.com/vjeux/react-css-in-js)

???
***
* Better list at link
* Speakerdeck presentation was inspiration for many libraries

---
# CSS in JS

// TODO?

* Styles as objects OR tagged template literals
* Style prop OR class with generated classes

???
***
* Composing multiple style objects.
* Style props as array.
* Css inline or separate file.
* External css or inline/head.

---
# Styled Components

*Visual primitives for the component age*

*Utilising tagged template literals (a recent addition to JavaScript) and the power of CSS, styled-components allows you to write actual CSS code to style your components.*

[https://www.styled-components.com](https://www.styled-components.com)

---
class: code
```javascript
import * as React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  padding: 1em;
  background-color: pink;
`

const Title = styled.h1`
  font-size: 2em;
  color: indigo;
`

const Subtitle = styled.h2`
  font-size: 1em;
  color: indigo;
  font-style: italic;
`

export default props => {
  return (
    <Wrapper>
      <Title>Styled Components</Title>
      <Subtitle>Visual primitives for the component age</Subtitle>
    </Wrapper>
  )
}
```

???
* Declerative jsx.
* Tagged template literals. A way to call function giving split strings and spread args as params.

---
class: code
```javascript
// styled-components
export default props => {
  return (
    <Wrapper>
      <Title>Styled Components</Title>
      <Subtitle>Visual primitives for the component age</Subtitle>
    </Wrapper>
  )
}

// css
export default props => {
  return (
    <div className="wrapper">
      <h1 className="title">Styled Components</h1>
      <h2 clasName="subtitle">Visual primitives for the component age</h2>
    </div>
  )
}

```


---
class: code
## Props
```javascript
import * as React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  border-radius: 5px;
  background-color: ${props => props.primary ? 'pink' : 'gray'};
`

export default props => {
  return (
    <Button primary={true}>
      Do something
    </Button>
  )
}
```

???
* CSS nees className combine logic before render
* Only one button!

---
class: code
## Extending
```javascript
import * as React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  border-radius: 5px;
  background-color: ${props => props.primary ? 'pink' : 'gray'};
`

const BigButton = Button.extend`
  padding: 32px;
  font-size: 2em;
`

export default props => {
  return (
    <BigButton primary={true}>
      Do something big
    </BigButton>
  )
}
```

---
class: code
## Styling components
```javascript
import * as React from 'react'
import styled from 'styled-components'

const Foo = (props) => {
  return (
    <div className={props.className}>
      Foo
    </div>
  )
}

const StyledFoo = styled(Foo)`
  color: pink;
`

export default props => {
  return (
    <Foo/>
  )
}
```

???
* requires passing classname in component
* deep styling with nesting

---
class: code
## Additional props
```javascript
import * as React from 'react'
import styled from 'styled-components'
import Button from './button'

const PasswordInput = styled.input.attrs({
  type: password
})`
  padding: 16px;
  font-size: 2em;
`

export default props => {
  return (
    <PasswordInput/>
  )
}
```

???
* declarative

---
class: code
## Theming
```javascript
import { ThemeProvider } from 'styled-components'
import App from './app'

const theme = {
  spacing: '16px',
  borderRadius: '5px',
  colors: {
    primary: 'blue',
    secondary: 'pink',
  },
  fontSize: {
    normal: '12pt',
    large: '16pt',
  },
}

export default () => {
  return (
    <ThemeProvider theme={theme}>
      <App/>
    </ThemeProvider>
  )
}
```

???
* just an object, nothing to do with css

---
class: code
## Using theme
```javascript
import * as React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  border-radius: ${({ theme }) => theme.borderRadius};
  background-color: ${({ primary, theme }) => primary
    ? theme.colors.primary
    : theme.colors.secondary
  };
`

export default props => {
  return (
    <Button primary={true}>
      Do something
    </Button>
  )
}
```

---
# Cons
* No linting in editor
* No source map
* No external css
* Extra components in chrome dev tools

???
* cli linting works
* source map

---

# Alternatives

[Aphrodite](https://github.com/Khan/aphrodite)
[Emotion](https://github.com/emotion-js/emotion)
[Fela](https://github.com/rofrischmann/fela)
[Glamor](https://github.com/threepointone/glamor)
[Glamorous](https://github.com/paypal/glamorous)

[JSS](https://github.com/cssinjs/jss)
[jsxstyle](https://github.com/smyte/jsxstyle)
[Radium](https://github.com/FormidableLabs/radium)
[Styletron](https://github.com/rtsao/styletron)

???
* Who has used some of these libraries?
* Who has used similar not in the list? 

--

CSS in JS techniques comparison and examples: [https://github.com/MicheleBertoli/css-in-js](https://github.com/MicheleBertoli/css-in-js)

???
***
  * Not a comprehensive list.


---
count: false
class: code
# Polished
[polished.js.org](https://polished.js.org)

```javascript
import * as React from 'react'
import styled from 'styled-components'
import { ellipsis } from 'polished'

const Text = styled.span`
  font-size: 1.5em;
  ${ellipsis()}
  color: pink;
`

export default props => {
  return (
    <Text>
      This text will be ellipsized
    </Text>
  )
}
```