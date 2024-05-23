import React, { useEffect, useState } from "react";
import { Button, Spin } from "antd";
import { useParams } from "react-router-dom";

const NumerologyReport = () => {
  const [numerlogyData, setNumerologyData] = useState(null);
  const [loading, setLoading] = useState(false);
  const id = parseInt(useParams().id);
  console.log(id);
  const fullName = "John Doe";
  const firstName = "John";
  const lastName = "Doe";
  const dob = "1990-01-01";
  const initiator = "7";
  const sustainer = "9";
  const connector = "1";
  const cosmicNumber = "17";
  const startingLetter = "J";
  const number = "7";
  const metal = "Gold";
  const color = "Yellow";
  const day = "Thursday";
  const gem = "Citrine";
  const characteristics = {
    initiator: "Introspective, Analytical, Spiritual",
    sustainer: "Ambitious, Disciplined, Practical",
    connector: "Adaptable, Communicative, Sociable",
    name: "Creative, Expressive, Charismatic",
    profession: "Researcher, Philosopher, Teacher",
  };
  const vastuSuggestions = {
    north: {
      fire: "Fire and Air attributes",
    },
    west: {
      air: "Air attribute",
    },
    east: {
      air: "Air and Sustainer attributes",
    },
    south: {
      water: "Water, Rajas, Satav, and Tamas attributes",
    },
  };

  useEffect(() => {
    console.log("numerlogyData", numerlogyData);
  }, [numerlogyData]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://script.google.com/macros/s/AKfycbyXBwzXdVwpm3jeyIT9TFnynOILyS-wn9EWyzMCiIYVIhM1ZI2Ttl9tVY_4SIbwUNShmw/exec`,
          {
            redirect: "follow",
            method: "GET",
          }
        );
        const jsonData = await response.json();
        const data = jsonData.data;
        console.log("id", id);
        const reportData = data.find((item) => item.phoneNumber === id);
        console.log("reportData", reportData);
        setNumerologyData(reportData);
        console.log(jsonData.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  console.log("numerlogyData", numerlogyData);

  if (loading && numerlogyData === null) {
    return (
      <div className="flex justify-center items-center h-64">
        <Spin />
        <br />
        <h1>Your report is being generated</h1>
      </div>
    );
  }

  return (
    <main className="flex flex-col items-center justify-center min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl w-full space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900">
            NUMEROLOGY REPORT
          </h1>
        </div>

        <div className="bg-white  shadow-lg rounded-lg p-8 space-y-6">
          <h2 className="text-2xl font-bold text-gray-900">
            Your Numerology Report
          </h2>
          {numerlogyData && (
            <>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 ">
                    Full Name
                  </h3>

                  <div className="mt-4 bg-gray-100 rounded-lg p-4">
                    <h4 className="text-lg font-bold text-gray-900">
                      {numerlogyData.name}
                    </h4>
                  </div>
                </div>
                {/* <div>
              <h3 className="text-lg font-bold text-gray-900 ">
                First Name and Last Name with Initiator Number
              </h3>
              <p className="mt-2 text-gray-600 ">
                Your first name and last name with initiator number represent
                your natural talents, abilities, and the way you express
                yourself to the world. It can shed light on your unique gifts
                and how you can best utilize them.
              </p>
              <div className="mt-4 bg-gray-100  rounded-lg p-4">
                <h4 className="text-lg font-bold text-gray-900 ">
                  Your First Name and Last Name with Initiator Number:{" "}
                  {firstName} ({initiator}) {lastName} ({initiator})
                </h4>
              </div>
            </div> */}

                <div>
                  <h3 className="text-lg font-bold text-gray-900 ">
                    Date of Birth
                  </h3>

                  <div className="mt-4 bg-gray-100  rounded-lg p-4">
                    <h4 className="text-lg font-bold text-gray-900 ">
                      {new Date(numerlogyData.dob).toISOString().split("T")[0]}
                    </h4>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 ">Numbers</h3>

                  <div className="mt-4 bg-gray-100  rounded-lg p-4">
                    <p className="mt-2 text-md text-gray-600 ">
                      <span className="font-bold">
                        Initiator/Psychic Number:
                      </span>
                      {numerlogyData.initiator}
                      <br />
                      <span className="font-bold">
                        Sustainer/Destiny Number:
                      </span>
                      {numerlogyData.sustainer}
                      <br />
                      <span className="font-bold">Connector Number:</span>
                      {numerlogyData.connector}
                      <br />
                      <span className="font-bold"> Cosmic Number: </span>
                      {numerlogyData.cosmicNumber}
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 ">
                    Characteristics
                  </h3>
                  <p className="mt-2 text-gray-600 ">
                    Your numerology report includes detailed descriptions of
                    your Initiator, Sustainer, Connector, Name, and Profession
                    characteristics. These provide insights into your
                    personality, strengths, and challenges.
                  </p>
                  <div className="mt-4 bg-gray-100  rounded-lg p-4">
                    <p className="mt-2 text-gray-600 ">
                      <span className="font-bold">Initiator:</span>
                      {numerlogyData.characteristicsAsInitiator}
                      <br />
                      <span className="font-bold">Profession :</span>
                      {numerlogyData.characteristicsAsProfession}
                    </p>
                  </div>
                </div>
                {/* <div>
  <h3 className="text-lg font-bold text-gray-900 ">
    Prakriti of {firstName}
  </h3>
  <p className="mt-2 text-gray-600 ">
    Your Prakriti, or your fundamental nature, is an important
    aspect of your numerology report. It provides insights into your
    personality, tendencies, and the best ways for you to live a
    balanced and fulfilling life.
  </p>
  <div className="mt-4 bg-gray-100  rounded-lg p-4">
    <h4 className="text-lg font-bold text-gray-900 ">
      Prakriti of {firstName}
    </h4>
    <p className="mt-2 text-gray-600 ">
      {firstName} has a balanced Prakriti, with a harmonious
      combination of Vata, Pitta, and Kapha. This suggests that{" "}
      {firstName} is adaptable, creative, and has a strong
      intuition. To maintain this balance, {firstName} should focus
      on practices that nourish all three Doshas, such as
      meditation, yoga, and a balanced diet.
    </p>
  </div>
</div> */}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 ">
                    Good Luck Attributes
                  </h3>
                  <p className="mt-2 text-gray-600 ">
                    Your numerology report includes your good luck attributes,
                    such as your lucky number, metal, color, day, and gem. These
                    can help you align with the positive energies in your life.
                  </p>
                  <div className="mt-4 bg-gray-100  rounded-lg p-4">
                    <p className="mt-2 text-gray-600 ">
                      <span className="font-bold mr-2">Lucky Number:</span>
                      {numerlogyData.goodLucksNumber}
                      <br />
                      <span className="font-bold mr-2">Lucky Metal:</span>
                      {numerlogyData.goodLucksMetal}
                      <br />
                      <span className="font-bold mr-2">Lucky Color:</span>
                      {numerlogyData.goodLucksColor}
                      <br />
                      <span className="font-bold mr-2">Lucky Day:</span>
                      {numerlogyData.goodLucksDay}
                      <br />
                      <span className="font-bold mr-2">Lucky Gem:</span>
                      {numerlogyData.goodLucksGem}
                    </p>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 ">
                    VASTU Suggestions
                  </h3>
                  <p className="mt-2 text-gray-600 ">
                    Your numerology report includes VASTU suggestions for
                    different areas of your home or workspace. These
                    recommendations can help you create a harmonious and
                    supportive environment.
                  </p>
                  <div className="mt-4 bg-gray-100  rounded-lg p-4">
                    <p className="mt-2 text-gray-600 ">
                      North: {vastuSuggestions.north.fire}
                      <br />
                      West: {vastuSuggestions.west.air}
                      <br />
                      East: {vastuSuggestions.east.air}
                      <br />
                      South: {vastuSuggestions.south.water}
                    </p>
                  </div>
                </div>
              </div>
            </>
          )}

          <div className="mt-6 flex justify-end">
            <p className="text-sm text-gray-600 ">
              Consultant: Er. Santos Pudasaini, Vastu Consultant
            </p>
          </div>
          <div className="mt-6 flex justify-center">
            <Button className="w-full md:w-auto" variant="primary">
              Download Report
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default NumerologyReport;
