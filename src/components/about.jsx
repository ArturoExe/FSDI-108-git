import "./about.css";

export const About = () => {
  const exercise = () => {
    console.log("Hello");

    const ages = [13, 45, 74, 12, 78, 23, 56, 33, 72, 62, 46, 18, 3, 93, 10];

    let sum = 0;

    //Sum of all ages
    for (let i = 0; i < ages.length; i++) {
      sum = ages[i] + sum;
    }

    //Find the oldest
    let oldest = 0;
    for (let i = 0; i < ages.length; i++) {
      if (oldest < ages[i]) {
        oldest = ages[i];
      }
    }

    //Find the youngest
    let youngest = ages[0];
    for (let i = 0; i < ages.length; i++) {
      if (youngest > ages[i]) {
        youngest = ages[i];
      }
    }

    //Print seccion
    console.log(youngest);
    console.log(oldest);
    console.log(sum);
  };

  return (
    <div className="about">
      <h1>ABOUT US</h1>

      <button onClick={exercise}>Do the magic!</button>
    </div>
  );
};

export default About;
