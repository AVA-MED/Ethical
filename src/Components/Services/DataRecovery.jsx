import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom"; 

const DataRecovery = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const sections = [
    {
      title: "Data Recovery Services :",
      image:  "/src/assets/21.png",
      points: [
        " Hard Disk Recovery",
        "  Windows Data Recovery Services",
        " Linux Data Recovery Services",
        " Macintosh Data Recovery Services",
        "CD-DVD Data Recovery Services",
        "Digital Media Recovery Services",
        " Tally Data Recovery Services",
        " File Repair Services",
       
       
      ],
      description:"",
    },
    {
        title: "Email Recovery Services:",
        image:  "/src/assets/23.png",
        points: [
          "Header corruption of DBX, MBX and PST file Recovery.",
          "Outlook Services",
          "MS Access databases (.mdb)",
          " MS SQL database",
          "MS Visual FoxPro databases",
          " MS Works database ",
          " Paradox databases ",
          " Dbase and FoxBASE databases",
          " Oracle databases and backups from Oracle 8i",
          " Palm PDB databases",
         
  
        ],
        description:"",
      },
      {
        title: "Password Recovery ",
        image:  "/src/assets/24.png",
        points: [
          "Usually, Exchange servers, Lotus notes, databases (Access, VBA, SQL) are password protected by the companies for secured access. Facing any situation:",
          " Windows Recovery",
          "  Forgot/lost your password",
          "  Password changed and you are not able to remember the new password",
          "Password not working",
          "Someone else has blocked your files without giving you the new password",
        ],
        description:"",
      },
      {
        title: "Server Recovery Services:",
        image: "/src/assets/25.png",
        points: [
          "Primary hard disk failure",
          "RAID device is not available to perform",
          "The drive reports bad sectors",
          "Formatted or partially re-loaded hard disk drives",
          "NTLDR is missing",
          " Corrupted parity/data drive",
          " Accidental/Intentional deleted partition",
          " RAID Controller failure",
        ],
        description:"",
      },
  ]
  return (
    <div className="bg-black text-white">
      {/* Banner Section */}
      <div className="relative h-[300px] md:h-[500px] w-full">
        <video className="w-full h-full object-cover" autoPlay loop muted>
          <source src="/src/assets/22.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-opacity-50 flex flex-col justify-center items-center text-white text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">
          Data Recovery & Storage Management
          </h1>
        </div>
      </div>



      {/* Section Mapping */}
      {sections.map((section, idx) => (
        <div
          key={idx}
          className={`flex flex-col md:flex-row ${
            idx % 2 !== 0 ? "md:flex-row-reverse" : ""
          } items-center justify-center py-12 border-b border-gray-700 px-6 md:px-16`}
        >
          <img
            src={section.image}
            alt={section.title}
            className="w-full md:w-1/2 h-auto object-cover rounded-md shadow-md"
            data-aos={idx % 2 === 0 ? "fade-right" : "fade-left"}
          />
          <div
            className="md:w-1/2 mt-6 md:mt-0 md:px-12"
            data-aos={idx % 2 === 0 ? "fade-left" : "fade-right"}
          >
            <h2 className="text-2xl font-semibold mb-2 text-center md:text-left">
              {section.title}
            </h2>
            <p className="mt-4 pb-4 text-xl">{section.description}</p>
            {section.points.length > 0 && (
              <ul className="list-disc pl-6 space-y-2">
                {section.points.map((point, i) => (
                  <li key={i} className="text-xl">
                    {point}
                  </li>
                ))}
              </ul>
            )}
            <div className="mt-6">
                        <Link to="/Enquiry">
                <button className="bg-white text-black px-6 py-2 rounded font-semibold hover:bg-gray-200 transition">
                  Enquire Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DataRecovery;