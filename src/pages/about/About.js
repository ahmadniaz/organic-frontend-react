import React from "react";
import OrganicSnacks from "../../components/CallToAction/OrganicSnacks";
import OrganicMeals from "../../components/CallToAction/OrganicMeals";
import OrganicDrinks from "../../components/CallToAction/OrganicDrinks";
import GreenTea from "../../components/CallToAction/GreenTea";
import IconGrid from "../../components/items/IconGrid";
import ControlledTestimonials from "../../components/carasoul/testimonials/ControlledTestimonials";
import NewsLetter from "../../components/newsletter/NewsLetter";

import useStyles from "./aboutStyling";

const About = () => {
  
  const classes = useStyles();
  return (
    <div
      style={{
        width: "95%",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: "10%",
      }}
    >
      <h3 className={classes.heading}>The Organic</h3>
      <p className={classes.paragraph}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut,
        repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit
        eaque? Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt
        nobis suscipit eaque?Lorem, ipsum dolor sit amet consectetur adipisicing
        elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati
        deserunt nobis suscipit eaque? Lorem, ipsum dolor sit amet consectetur
        adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta
        obcaecati deserunt nobis suscipit eaque?
      </p>

      <OrganicSnacks />
      <OrganicMeals />
      <OrganicDrinks />

      <div style={{ marginTop: "10%" }}>
        <h3 className={classes.heading}>Benefits Of Using The Organic</h3>
        <p className={classes.paragraph}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias
          aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis
          suscipit eaque? Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati
          deserunt nobis suscipit eaque?Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta
          obcaecati deserunt nobis suscipit eaque? Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Molestias aut, repellat ipsum facere
          voluptate dicta obcaecati deserunt nobis suscipit eaque?Lorem, ipsum
          dolor sit amet consectetur adipisicing elit. Molestias aut, repellat
          ipsum facere voluptate dicta obcaecati deserunt nobis suscipit
          eaque?Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Molestias aut, repellat ipsum facere voluptate dicta obcaecati
          deserunt nobis suscipit eaque? Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta
          obcaecati deserunt nobis suscipit eaque?
        </p>
      </div>
      <GreenTea />
      <ControlledTestimonials />
      <IconGrid />
      <NewsLetter />
    </div>
  );
};

export default About;
