import "../styles/landing.scss";
import {} from "@carbon/ibmdotcom-react";
import { Button, RadioButton, RadioButtonGroup } from "carbon-components-react";
import { useCallback, useEffect, useState } from "react";
import { ArrowRight24 } from "@carbon/icons-react";
import { useRouter } from "next/router";

/**
 * Questions page
 *
 * @returns {*} JSX for Questions page
 */
const Questions = () => {
  const router = useRouter();

  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [currentAnswer, setCurrentAnswer] = useState(undefined);
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    console.log("answers are: ", answers);
  }, [answers]);

  const handleNextPage = useCallback(
    (answers) => {
      router.push(`results?ind=${router.query.id}&ans=${answers.join("-")}`);
    },
    [router]
  );

  const handleNextQuestion = useCallback(
    async (currentQuestion, answer) => {
      setAnswers((prevAnswers) => [...prevAnswers, answer]);
      setCurrentAnswer(undefined);

      if (currentQuestion < 6) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        handleNextPage(answers);
      }
    },
    [answers, handleNextPage]
  );

  const handleSelect = useCallback((newValue) => {
    setCurrentAnswer(newValue);
  }, []);

  return (
    <>
      <main style={{ minHeight: "100vh", paddingBottom: "64px" }}>
        <div className="bx--grid">
          <div>
            <div className="bx--row page-wrapper">
              <section className="bx--col-md-4">
                <h1 className="header bx--type-productive-heading-07">
                  Question {currentQuestion}
                </h1>
                <div className="copy-wrapper">
                  <h2 className="subhead">
                    Learn where your business is already winning on customer
                    experience (CX), and discover your biggest areas of
                    opportunity with this six question assessment.
                  </h2>

                  <RadioButtonGroup
                    name="answers"
                    orientation="vertical"
                    onChange={(e) => handleSelect(e)}
                    valueSelected={currentAnswer}
                  >
                    <RadioButton
                      id="radio-1"
                      labelText="Radio button label 1"
                      value="1"
                    />

                    <RadioButton
                      id="radio-2"
                      labelText="Radio button label 2"
                      value="2"
                    />

                    <RadioButton
                      id="radio-3"
                      labelText="Radio button label 3"
                      value="3"
                    />

                    <RadioButton
                      id="radio-4"
                      labelText="Radio button label 4"
                      value="4"
                    />

                    <RadioButton
                      id="radio-5"
                      labelText="Radio button label 5"
                      value="5"
                    />
                  </RadioButtonGroup>

                  <Button
                    //Button will be disabled while currentIndustry isn't chosen.
                    disabled={typeof currentAnswer == "undefined"}
                    renderIcon={ArrowRight24}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNextQuestion(currentQuestion, currentAnswer);
                    }}
                  >
                    Next Question
                  </Button>
                </div>
              </section>
              <div className="bx--col-md-1" />

              <section className="bx--col-md-2"></section>
              <div className="bx--col-md-1" />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Questions;
