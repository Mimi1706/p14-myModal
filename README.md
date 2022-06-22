
# p14-mymodal
Simple Modal created for HRnet.

## Intallation
To install, you can either use [npm](https://npmjs.org/) or [yarn](https://yarnpkg.com):

```
npm install p14-mymodal
```

```
yarn add p14-mymodal
```

## How to use
After installing this library, you'll need to use the useState() hook from react:
```
import React from 'react';
import { useState } from "react";

const [modalDisplay, setModalDisplay] = useState(false);
```
By default, the modal will be hidden as represented by the **false** boolean set in `useState(false)`, to show it, you'll have to set `modalDisplay` to **true** with `setModalDisplay(true)`.

### Example

```
import React from 'react';
import { useState } from "react";
import { render } from "react-dom";
import Modal from "./lib";

const App = () => {
  const [modalDisplay, setModalDisplay] = useState(false);

  return <div style={{ width: "100%", display:"flex", justifyContent:"center"}}>
    <button onClick={() => setModalDisplay(true)}>Open Modal</button>
    <Modal action={() => setModalDisplay(false)} display={modalDisplay} message={"Employee successfully created."}/>
  </div>
};

render(<App />, document.getElementById("root"));
```

