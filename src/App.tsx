import React from "react";
import { Accordion } from "./components/Accordion";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col justify-center">
      <div className="mx-auto w-96 max-w-full">
        <Accordion multiple>
          <Accordion.Item id="1">
            {({ id, isActive }) => (
              <>
                <Accordion.Toggle>
                  Section {id} {isActive ? "(active)" : null}
                </Accordion.Toggle>
                <Accordion.Panel>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Magnam, voluptatum.
                  </p>
                </Accordion.Panel>
              </>
            )}
          </Accordion.Item>
          <Accordion.Item id="2">
            <Accordion.Toggle>Section 2</Accordion.Toggle>
            <Accordion.Panel>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
                voluptatum.
              </p>
            </Accordion.Panel>
          </Accordion.Item>
          <Accordion.Item id="3">
            <Accordion.Toggle>Section 3</Accordion.Toggle>
            <Accordion.Panel>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
                voluptatum.
              </p>
            </Accordion.Panel>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
}

export default App;
