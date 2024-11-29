import { TeamCard } from "./TeamMember";

function About() {
  const nikith = {
    name: "Nikith Pinni",
    designation: "Full Stack Developer / Data Scientist",
    image:
      "https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png",
  };

  return (
    <>
      <h1 className="font-bold text-white text-center text-5xl">
        Meet Me!
      </h1>
      <div className="py-20 sm:py-25 flex gap-10 flex-wrap justify-center align-center">
        <TeamCard member={nikith} />
      </div>
    </>
  );
}

export { About };
