import "../styles/landing.scss";
import {} from "@carbon/ibmdotcom-react";
import { Dropdown, Button } from "carbon-components-react";
import { ArrowRight24 } from "@carbon/icons-react";

import { useRouter } from "next/router";
import { useState } from "react";

const items = [
  {
    id: "option-1",
    label: "Option 1",
  },
  {
    id: "option-2",
    label: "Option 2",
  },
];

/**
 * Homepage
 *
 * @returns {*} JSX for Homepage
 */
const Home = () => {
  const [currentIndustry, setCurrentIndustry] = useState(undefined);
  const router = useRouter();

  return (
    <>
      <main style={{ minHeight: "100vh" }}>
        <div className="bx--grid">
          <div>
            <div className="bx--row page-wrapper">
              <section className="bx--col-md-4">
                <h1 className="header bx--type-productive-heading-07">
                  Customers are won and lost based on
                  <strong> experience.</strong>
                </h1>
                <div className="copy-wrapper">
                  <h2 className="subhead">
                    Learn where your business is already winning on customer
                    experience (CX), and discover your biggest areas of
                    opportunity with this six question assessment.
                  </h2>

                  {/* Dropdown and button are the only ones that consume currentIndustry, we can abstract them to a component later to reduce complexity */}
                  <Dropdown
                    onChange={(e) => setCurrentIndustry(e.selectedItem)}
                    items={items}
                    label="Dropdown menu options"
                  />
                  <Button
                    //Button will be disabled while currentIndustry isn't chosen.
                    disabled={typeof currentIndustry == "undefined"}
                    renderIcon={ArrowRight24}
                    onClick={(e) => {
                      e.preventDefault();
                      // We might want to push this to a global state or something like that besides storing it in the URL. keeping this in the URL is usefull because it allows the user to refresh the page and send it to someone.
                      router.push(`questions?${currentIndustry.id}`);
                    }}
                  >
                    Start your CX checkpoint
                  </Button>
                </div>
              </section>
              <div className="bx--col-md-1" />

              <section className="bx--col-md-2">
                <p>
                  <span className="hero-text">90%</span>
                  of outperforming organizations align brand vision with their
                  customer experience strategy
                </p>
              </section>
              <div className="bx--col-md-1" />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
