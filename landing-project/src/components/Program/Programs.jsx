//import React from 'react';

const programs = [
  {
    title: 'EDUCATION',
    description: 'Education, nutrition and holistic development of children',
    icon: 'https://via.placeholder.com/50', // Replace with the actual icon URL
    color: 'text-yellow-500',
  },
  {
    title: 'HEALTHCARE',
    description: 'Taking healthcare services to doorsteps of hard to reach communities',
    icon: 'https://via.placeholder.com/50', // Replace with the actual icon URL
    color: 'text-purple-500',
  },
  {
    title: 'WOMEN EMPOWERMENT',
    description: 'Empowering adolescent girls & women through community engagement',
    icon: 'https://via.placeholder.com/50', // Replace with the actual icon URL
    color: 'text-teal-500',
  },
  {
    title: 'LIVELIHOOD',
    description: 'Skill training and placement support for underprivileged youth',
    icon: 'https://via.placeholder.com/50', // Replace with the actual icon URL
    color: 'text-orange-500',
  },
];

const Programs = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-center text-green-400">OUR PROGRAMMES</h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          {programs.map((program, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <img src={program.icon} alt={program.title} className="h-16 w-16 mb-4" />
              <h3 className={`text-xl font-bold ${program.color}`}>{program.title}</h3>
              <p className="mt-2 text-gray-600">{program.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Programs;
