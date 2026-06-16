import React from "react";
import { LinkedinIcon, FacebookIcon } from "lucide-react";
interface MemberCard {
  id: string;
  name: string;
  position: string;
  image: string;
  bio: string;
  linkedin?: string;
  facebook?: string;
}
const ExCo: React.FC = () => {
  // Academic members
  const academicMembers: MemberCard[] = [
    {
      id: "a1",
      name: "Ms D.M.L.M.Dissanayake",
      position: "Senior Treasurer",
      image:
        "/images/Committee/Senior Treasurer.jpeg",
      bio:"",
      linkedin:
        "https://www.linkedin.com/in/maheshika-dissanayake-97359ab9?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    },
  ];
  // Top board members
  const boardMembers: MemberCard[] = [
    {
      id: "b1",
      name: "Thinura Disanayake",
      position: "President",
      image: "/images/Committee/president.jpg",
      bio: "",
      linkedin:
        "https://www.linkedin.com/in/thinura-dissanayake-492944215?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    },
    {
      id: "b2",
      name: "Sanduni Ramanayaka", 
      position: "Vice President",
      image: "/images/Committee/Vice President.jpg",
      bio: "",
      linkedin:"https://www.linkedin.com/in/sanduni-ramanayaka-644023371?utm_source=share_via&utm_content=profile&utm_medium=member_android",


    },
    {
      id: "b3",
      name: "Madhushika Lakmali",
      position: "secretary",
      image: "/images/Committee/Secretary.jpg",
      bio: "",
      linkedin: "https://www.linkedin.com/in/madhushika-lakmali-7084782aa/en",
    },
    {
      id: "b4",
      name: "Navodya Nandasiri",
      position: "Vice Secretary",
      image: "/images/Committee/Vice Secretary.jpg",
      bio: "",
      linkedin: "",
    },
    {
      id: "b5",
      name: "Kirulu Chathumal",
      position: " Junior Treasurer",
      image: "/images/Committee/Treasurer.jpg",
      bio: "",
      linkedin:"https://www.linkedin.com/in/kirulu-chathumal-nethmina-31755434b?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    },
  ];
  // Committee members
  const committeeMembers: MemberCard[] = [
    {
      id: "c1",
      name: "Ruchika Koojana",
      position: "Editor",
      image: "/images/Committee/Editor.jpg",
      bio: "",
      linkedin: "https://www.linkedin.com/in/ruchika-koojana?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    },
    {
      id: "c2",
      name: "Natheesha Vithanawasam",
      position: "Assistant Editor",
      image: "/images/Committee/Assistant Editor.jpg",
      bio: "",
      linkedin: "",
    },
    {
      id: "c3",
      name: "Ridma Siriwardhna",
      position: "Web Master",
      image: "/images/Committee/web master.jpeg",
      bio: "",
      linkedin: "https://www.linkedin.com/in/ridma-siriwardana-859277411?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    },
    {
      id: "c4",
      name: "Jalani Abeynayaka",
      position: " Assistant Web Master",
      image: "/images/Committee/Assistant Web Master.jpg",
      bio: "",
      linkedin: "https://www.linkedin.com/in/jalani-abenayaka-8b3506360?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    },
    {
      id: "c5",
      name: "Disara Ransini",
      position: "4th Year Representative",
      image: "/images/Committee/4th.jpg",
      bio: "",
      linkedin:
        "https://www.linkedin.com/in/disara-ransini?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    },
    {
      id: "c6",
      name: "Thejan Pulditha",
      position: "3rd Year Representative",
      image: "/images/Committee/3rd 2.jpg",
      bio: "",
      linkedin: "https://www.linkedin.com/in/thejan-puldith-020521316",
    },
    {
      id: "c7",
      name: "Dilshani Balasooriya",
      position: "3rd Year Representative",
      image: "/images/Committee/3rd.jpg",
      bio: "",
      linkedin: "https://www.linkedin.com/in/dilshani-balasuriya-76674a360?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    },
    {
      id: "c8",
      name: "Ruhini Tharumila",
      position: "2nd Year Representative",
      image: "/images/Committee/2nd 1.jpg",
      bio: "",
      linkedin:
        "",
    },
    {
      id: "c8",
      name: "Adithya Fernando",
      position: "2nd Year Representative",
      image: "/images/Committee/2nd 2.jpg",
      bio: "",
      linkedin: "https://www.linkedin.com/in/adhithya-fernando-4455113b1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    },
    {
      id: "c8",
      name: "Ishan Sandeepa",
      position: "2nd Year Representative",
      image: "/images/Committee/2nd 3.jpg",
      bio: "",
      linkedin: "https://www.linkedin.com/in/ishan-sandeepa-b54913371?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    },
    {
      id: "c8",
      name: "Ayodya Wass",
      position: "2nd Year Representative",
      image: "/images/Committee/2nd 4.jpeg",
      bio: "",
      linkedin: "https://www.linkedin.com/in/ayodya-wass-b928a7366?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    },
    {
      id: "c8",
      name: "Ravindu Nawod",
      position: "2nd Year Representative",
      image: "/images/Committee/2nd 5.jpeg",
      bio: "",
      linkedin: "",
    },
    {
      id: "c9",
      name: "Sadaruwan Kothalawala",
      position: "2nd Year Representative",
      image: "/images/Committee/2nd 6.jpeg",
      bio: "",
      linkedin: "https://www.linkedin.com/in/sandaruwan-kothalawala-1754ba2ab?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
    },
    {
      id: "c9",
      name: "Sanitha Nandila",
      position: "1st Year Representative",
      image: "/images/Committee/1st 1.jpg",
      bio: "",
      linkedin: "",
    },
    {
      id: "c9",
      name: "Dilmi Nimsara",
      position: "1st Year Representative",
      image: "/images/Committee/1st 2.jpg",
      bio: "",
      linkedin: "https://www.linkedin.com/in/dilmi-nimsara-217b9b39b",
    },
  ];
  const MemberCard: React.FC<{
    member: MemberCard;
  }> = ({ member }) => {
    return (
      <div className="bg-white rounded-lg shadow-md overflow-hidden group">
        <div className="relative overflow-hidden">
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
            <p className="text-white text-sm mb-4">{member.bio}</p>
            <div className="flex space-x-2">
              {member.linkedin && (
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors"
                  aria-label={`${member.name}'s LinkedIn profile`}
                >
                  <LinkedinIcon size={16} />
                </a>
              )}
              {member.facebook && (
                <a
                  href={member.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors"
                  aria-label={`${member.name}'s Facebook profile`}
                >
                  <FacebookIcon size={16} />
                </a>
              )}
              {/* <button className="bg-green-600 text-white px-3 py-1 rounded-full text-sm hover:bg-green-700 transition-colors ml-auto">
                Follow
              </button> */}
            </div>
          </div>
        </div>
        <div className="p-4">
          <h3 className="font-bold text-lg text-gray-800">{member.name}</h3>
          <p className="text-blue-600">{member.position}</p>
        </div>
      </div>
    );
  };
  return (
    <div className="bg-gray-50 min-h-screen w-full">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Executive Committee 2025
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get to Know Our Exceptional Executive Committee Members
          </p>
        </div>
        {/* Academic Members */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">
            Executive Academic Members
          </h2>
          <div className="flex justify-center items-center min-h-[300px]">
            {academicMembers.map((member) => (
              <div className="w-full max-w-md">
                <MemberCard key={member.id} member={member} />
              </div>
            ))}
          </div>
        </section>
        {/* Top Board Members */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">
            Top Board Members
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {boardMembers.map((member) => (
              <MemberCard key={member.id} member={member} />
            ))}
          </div>
        </section>
        {/* Committee Members */}
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">
            Committee Members
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {committeeMembers.map((member) => (
              <MemberCard key={member.id} member={member} />
            ))}
          </div>
        </section>
        {/* Join the Committee CTA */}
        <div className="mt-16 bg-blue-700 rounded-lg shadow-md p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">
            Interested in Joining the Committee?
          </h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Elections for the next executive committee will be held during the
            Annual General Meeting. Stay tuned for announcements!
          </p>
          <button className="inline-block bg-white text-blue-700 hover:bg-gray-100 px-8 py-3 rounded-md font-medium text-lg transition-colors">
            Learn About the Election Process
          </button>
        </div>
      </div>
    </div>
  );
};
export default ExCo;
