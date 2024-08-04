import "./index.css";
import { ReactLenis, useLenis } from "lenis/react";
import Color from "./components/Color";

function App() {
  return (
    <ReactLenis root>
      <div className="App">
        <header>
          <h3>SM</h3>
        </header>
        <div className="mainContainer">
          <Color color="#D9D9D9" text="1" />
          <Color color="#FFABDD" text="2" direction="row-reverse" />
          <Color color="#1CE59D" text="3" />
          <Color color="#FFC700" text="4" direction="row-reverse" />
          <Color color="#D76B1E" text="5" />
          <Color color="#3BB848" text="6" direction="row-reverse" />
          <Color color="#0047FF" text="7" />
          <Color color="#EA4916" text="8" direction="row-reverse" />

          <Color color="#D9D9D9" text="1" />
          <Color color="#FFABDD" text="2" direction="row-reverse" />
          <Color color="#1CE59D" text="3" />
          <Color color="#FFC700" text="4" direction="row-reverse" />
          <Color color="#D76B1E" text="5" />
          <Color color="#3BB848" text="6" direction="row-reverse" />
          <Color color="#0047FF" text="7" />
          <Color color="#EA4916" text="8" direction="row-reverse" />

          <Color color="#D9D9D9" text="1" />
          <Color color="#FFABDD" text="2" direction="row-reverse" />
          <Color color="#1CE59D" text="3" />
          <Color color="#FFC700" text="4" direction="row-reverse" />
          <Color color="#D76B1E" text="5" />
          <Color color="#3BB848" text="6" direction="row-reverse" />
          <Color color="#0047FF" text="7" />
          <Color color="#EA4916" text="8" direction="row-reverse" />

          <div className="secondContainer">
            <Color color="#D9D9D9" text="1" />
            <Color color="#FFABDD" text="2" direction="row-reverse" />
            <Color color="#1CE59D" text="3" />
            <Color color="#FFC700" text="4" direction="row-reverse" />
            <Color color="#D76B1E" text="5" />
            <Color color="#3BB848" text="6" direction="row-reverse" />
            <Color color="#0047FF" text="7" />
            <Color color="#EA4916" text="8" direction="row-reverse" />

            <Color color="#D9D9D9" text="1" />
            <Color color="#FFABDD" text="2" direction="row-reverse" />
            <Color color="#1CE59D" text="3" />
            <Color color="#FFC700" text="4" direction="row-reverse" />
            <Color color="#D76B1E" text="5" />
            <Color color="#3BB848" text="6" direction="row-reverse" />
            <Color color="#0047FF" text="7" />
            <Color color="#EA4916" text="8" direction="row-reverse" />
          </div>
        </div>

        <div className="space"></div>
      </div>
    </ReactLenis>
  );
}

export default App;
