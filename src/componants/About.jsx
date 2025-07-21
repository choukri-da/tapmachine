import React from "react";

const About = () => {
  return (
    <div
      className="flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden"
      id="About"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2">
        A propos{" "}
        <span className="underline underline-offset-4 decoration-1 under font-light">
          de nous
        </span>
      </h1>
      <p className="text-xl text-gray-500 max-w-250 text-center mb-8">
        Nous sommes Tapmachine Systems, les seuls fabricants en Afrique de
        machines de lavage de tapis. Spécialisés dans l'innovation et la
        qualité, nous concevons des équipements performants, durables et adaptés
        aux besoins des professionnels et particuliers.
      </p>
      <div className="flex flex-col md:flex-row items-center md:items-start md:gap-20">
        <div className="flex flex-col items-center md:items-start mt-10 text-gray-600">
          <div className="grid grid-cols-2 gap-6 md:gap-10 w-full 2xl prr-28">
            <div>
              <p className="text-4xl font-medium text-gray-800">10+</p>
              <p>Ans d'excellence</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-gray-800">20+</p>
              <p>Machines fabriquées</p>
            </div>
          </div>
        </div>
      </div>
      <p className="text-xl my-10 max-w-250 text-gray-500 text-center">
        Avec un service après-vente réactif et un savoir-faire unique, nous
        simplifions le nettoyage de tapis pour nos clients partout en algerie
      </p>
    </div>
  );
};

export default About;
