"use client";

import React from "react";

const skillsData = [
    { skill: "Responsive Web Design", certifications: "—", projects: "7 projects", experience: "1 to 3 years" },
    { skill: "PHP", certifications: "—", projects: "6 projects", experience: "1 to 3 years" },
    { skill: "JavaScript", certifications: "—", projects: "5 projects", experience: "1 to 3 years" },
    { skill: "HTML", certifications: "—", projects: "5 projects", experience: "1 to 3 years" },
    { skill: "WordPress", certifications: "—", projects: "4 projects", experience: "1 to 3 years" },
    { skill: "CSS", certifications: "—", projects: "3 projects", experience: "1 to 3 years" },
    { skill: "API", certifications: "—", projects: "3 projects", experience: "1 to 3 years" },
];

export default function Skills() {
    return (
        <section className="mb-8 max-w-5xl mx-auto">
            <div className="overflow-hidden rounded-lg border">
                <div className="grid grid-cols-4 bg-purple-50 dark:bg-gray-700 p-4 text-sm font-semibold text-gray-800 dark:text-white">
                    <div>Skills</div>
                    <div>Certifications</div>
                    <div>Projects worked</div>
                    <div>Experience years</div>
                </div>

                <div role="list" className="divide-y">
                    {skillsData.map((row, idx) => (
                        <div
                            key={row.skill}
                            role="listitem"
                            className={`grid grid-cols-4 items-center p-4 text-sm ${idx % 2 === 0 ? 'bg-white dark:bg-gray-800' : 'bg-amber-50 dark:bg-gray-900'}`}
                        >
                            <div className="flex items-center gap-4">
                                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/60 text-gray-700"> </span>
                                <span className="text-gray-800 dark:text-white">{row.skill}</span>
                            </div>
                            <div className="text-gray-600 dark:text-gray-300">{row.certifications}</div>
                            <div className="text-gray-800 dark:text-white">{row.projects}</div>
                            <div className="text-gray-600 dark:text-gray-300">{row.experience}</div>
                        </div>
                    ))}
                </div>

                <div className="p-4 text-center bg-white dark:bg-gray-800">
                    <a href="#" className="text-sm text-indigo-600 hover:underline">View more skills</a>
                </div>
            </div>
        </section>
    );
}