import linkedin from "../assets/linkedin.svg";
import github from "../assets/github.svg";
import resume from "../assets/resume.png";

const SocialMediaIcons = () => {
  return (
    <div className=" flex justify-center md:justify-start my-10 gap-7">
      <a
        className="hover:opacity-50 transition duration-500 w-[45px]"
        href="https://www.linkedin.com/in/brenda-avila-escamilla/"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="linkedin-link" src={linkedin} />
      </a>
      <a
        className="hover:opacity-50 transition duration-500 w-[45px]"
        href="https://github.com/bavila19"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="github-link" src={github} />
      </a>
      <a
        className="hover:opacity-50 transition duration-500 w-[45px]"
        href="https://docs.google.com/document/d/10Ubaq7ymVVBcmHPaUXubjpwJb3_hh8Xm3YRkfpNaXTM/edit?usp=sharing"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="resume-link" src={resume} />
      </a>
    </div>
  );
};
export default SocialMediaIcons;
