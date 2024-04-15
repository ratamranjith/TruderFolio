import React from "react";
import SectionTitle from "../../components/SectionTitle";
import { useSelector } from "react-redux";

function Contact() {
  // const user = {
  //   name: "Intruder",
  //   age: "Askkubuskku",
  //   gender: "Male",
  //   email: "ratamranjith@gmail.com",
  //   alt_email: "ratamranjith@outlook.com",
  //   mobile: "56465456456",
  //   country: "INDIA",
  // };

  const { portfolioData } = useSelector((state) => state.root);
  const { contact } = portfolioData;

  return (
    <div>
      <SectionTitle title="Let's connect" />
      <div className="flex ">
        <div className="flex flex-col">
          <h1 className="text-white">{"{"}</h1>
          {/* {Object.keys(contact).map((key) => (
            if (key === '_id') return null; 
            <h1 className="text-white ml-5" key={key}>
              <span>{key}</span>
              {" : "}
              <span>{contact[key]}</span>
            </h1>
          ))} */}
          {Object.keys(contact).map((key) => {
            if (key === "_id") return null; // Skip rendering if the key is '_id'
            return (
              <h1 className="text-white ml-5" key={key}>
                <span>{key}</span>
                {" : "}
                <span>{contact[key]}</span>
              </h1>
            );
          })}

          <h1 className="text-white">{"}"}</h1>
        </div>
        <div className="h-[250px] flex-col gap-x-16">
          <lottie-player
            src="https://lottie.host/159c5670-3475-4f2e-93ff-137a1577095e/Xad2HjhNiy.json"
            background="##FFFFFF"
            speed="1"
            loop
            autoplay
            direction="1"
            mode="normal"
          ></lottie-player>
        </div>
        <div>Contact</div>
      </div>
    </div>
  );
}

export default Contact;
