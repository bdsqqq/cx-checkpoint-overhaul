import "../styles/results.scss";
import { Link32, LogoLinkedin32, LogoTwitter32 } from "@carbon/icons-react";

import { Button } from "carbon-components-react";
import { GroupedBarChart } from "@carbon/charts-react";

import { useEffect } from "react";
import { useRouter } from "next/router";

const data = [
  {
    group: "Minimum",
    key: "Qty",
    value: 65000,
  },
  {
    group: "Minimum",
    key: "More",
    value: -29123,
  },
  {
    group: "Minimum",
    key: "Sold",
    value: -35213,
  },
  {
    group: "Minimum",
    key: "Restocking",
    value: 51213,
  },
  {
    group: "Minimum",
    key: "Misc",
    value: 16924,
  },
  {
    group: "You",
    key: "Qty",
    value: 24424,
  },
  {
    group: "You",
    key: "More",
    value: -21312,
  },
  {
    group: "You",
    key: "Sold",
    value: -56456,
  },
  {
    group: "You",
    key: "Restocking",
    value: -21312,
  },
  {
    group: "You",
    key: "Misc",
    value: 34234,
  },
  {
    group: "Competitors",
    key: "Qty",
    value: -12312,
  },
  {
    group: "Competitors",
    key: "More",
    value: 22424,
  },
  {
    group: "Competitors",
    key: "Sold",
    value: 34224,
  },
  {
    group: "Competitors",
    key: "Restocking",
    value: -12312,
  },
  {
    group: "Competitors",
    key: "Misc",
    value: -34234,
  },
];
const options = {
  title: "Vertical grouped bar (discrete)",
  toolbar: {
    enabled: false,
  },
  theme: "g100",
  axes: {
    left: {
      mapsTo: "value",
    },
    bottom: {
      scaleType: "labels",
      mapsTo: "key",
    },
  },
  height: "400px",
};

/**
 * Questions page
 *
 * @returns {*} JSX for Questions page
 */
const Questions = () => {
  const router = useRouter();

  const industryAndAnswers = router.query;

  useEffect(() => {
    console.table(industryAndAnswers);
  }, [industryAndAnswers]);

  return (
    <>
      <main style={{ minHeight: "100vh", paddingBottom: "64px" }}>
        <div className="bx--grid">
          <div>
            <div className="bx--row page-wrapper">
              <section className="bx--col-md-2">
                <h1 className="header bx--type-productive-heading-07">
                  Results
                </h1>
                <div className="copy-wrapper">
                  <h2 className="subhead">
                    Learn where your business is already winning on customer
                    experience (CX), and discover your biggest areas of
                    opportunity with this six question assessment.
                  </h2>

                  <h2>Share your results</h2>
                  {/* Someone with good answers might not need our help, but they will wanna brag about it. Using their shares to drive traffic to this asset we can increase our chances of finding someone who needs our products */}
                  <div className="button-group">
                    <Button
                      kind="primary"
                      hasIconOnly
                      renderIcon={LogoLinkedin32}
                      tooltipPosition="bottom"
                      tooltipAlignment="start"
                      type="button"
                      iconDescription="Share on Linkedin"
                    />

                    <Button
                      kind="primary"
                      hasIconOnly
                      renderIcon={LogoTwitter32}
                      tooltipPosition="bottom"
                      type="button"
                      iconDescription="Share on Twitter"
                    />

                    <Button
                      kind="primary"
                      hasIconOnly
                      renderIcon={Link32}
                      tooltipPosition="bottom"
                      type="button"
                      iconDescription="Copy a shareable link"
                      tooltipAlignment="end"
                    />
                  </div>
                </div>
              </section>
              <section className="bx--col-md-4">
                <GroupedBarChart data={data} options={options} />
              </section>

              <section className="bx--col-md-2">
                <h1>useful links</h1>
                {/* We can customize which links we should show someone based on their answers */}
                <ul>
                  <li>
                    <a href="#a">Link</a>
                  </li>
                  <li>
                    <a href="#a">Link</a>
                  </li>
                  <li>
                    <a href="#a">Link</a>
                  </li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Questions;
