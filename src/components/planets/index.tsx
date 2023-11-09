import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface PersonalInfo {
  name: string;
  email: string;
}

const getPersonalInfo = (): PersonalInfo[] => {
  const data = localStorage.getItem("data");
  const personalInfo: PersonalInfo[] = JSON.parse(data!)?.personalInfo;
  return personalInfo;
};

const Planet = () => {
  const navigate = useNavigate();
  const [personalInfo] = useState<PersonalInfo[]>(getPersonalInfo());

  return (
    <div className="planet_box w-full h-screen flex justify-center items-center mx-auto">
      {!personalInfo?.length && (
        <div>
          No data?
          <button
            onClick={() => {
              navigate("/personal-info");
            }}
          >
            Add Here
          </button>
        </div>
      )}

      {personalInfo?.length && (
        <div className="planet_box_container">
          <div className="sun bg-gradient-to-r from-red-600 to-red-800 shadow-lg w-16 h-16 rounded-full absolute left-0 right-0 top-0 bottom-0 m-auto"></div>

          {personalInfo.map((d: { name: any }, index: number) => (
            <div
              key={`${index}_${d.name}`}
              className="orbit absolute left-0 right-0 border border-solid border-black shadow-red rounded-full top-0 bottom-0 m-auto"
              style={{
                width: 100 + index * 50 + "px",
                height: 100 + index * 50 + "px",
                animation: `gravity ${5 + index * 3}s linear infinite`,
              }}
            >
              <div className="circle cursor-pointer bg-gradient-to-r from-umber-600 to-umber-800 shadow-inner w-5 h-5 rounded-full absolute left-1/2 transform -translate-x-1/2 top-0"></div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Planet;
