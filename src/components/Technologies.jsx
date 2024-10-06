import { FaCss3, FaHtml5, FaLaravel, FaReact } from "react-icons/fa";
import { SiBootstrap, SiGit, SiMysql, SiTailwindcss } from "react-icons/si";

const Technologies = () => {
  return (
    <div className="pb-24">
      <h2 className="my-20 text-center text-4xl">Technologies</h2>
      <div className="flex flex-wrap items-center justify-center gap-10">
        <div>
          <FaReact className="text-7xl text-cyan-400" />
        </div>
        <div>
          <FaLaravel className="text-7xl text-red-500" />
        </div>
        <div>
          <SiMysql className="text-7xl text-stone-400" />
        </div>
        <div>
          <SiTailwindcss className="text-7xl text-cyan-400" />
        </div>
        <div>
          <SiBootstrap className="text-7xl text-purple-500" />
        </div>
        <div>
          <SiGit className="text-7xl text-orange-600" />
        </div>
      </div>
    </div>
  );
};

export default Technologies;
