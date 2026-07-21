"use client";

import { useState } from "react";
import SectionHeader from "./SectionHeader";

const SKILL_CATEGORIES = [
  {
    id: "languages",
    label: "Languages",
    icon: "💻",
    skills: [
      { name: "Python", level: 92, icon: "🐍", desc: "Primary language for AI/ML" },
      { name: "TypeScript", level: 85, icon: "TS", desc: "Type-safe JS development" },
      { name: "JavaScript", level: 88, icon: "JS", desc: "Web and Node.js" },
      { name: "Java", level: 78, icon: "☕", desc: "OOP and backend systems" },
      { name: "C++", level: 72, icon: "⚙️", desc: "Systems programming" },
    ],
  },
  {
    id: "frontend",
    label: "Frontend",
    icon: "⚛️",
    skills: [
      { name: "React", level: 90, icon: "⚛️", desc: "Component-based UIs" },
      { name: "Next.js", level: 82, icon: "▲", desc: "Full-stack React framework" },
      { name: "Tailwind CSS", level: 88, icon: "💨", desc: "Utility-first styling" },
      { name: "HTML", level: 95, icon: "🌐", desc: "Semantic markup" },
      { name: "CSS", level: 90, icon: "🎨", desc: "Advanced layouts & animations" },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    icon: "⚡",
    skills: [
      { name: "FastAPI", level: 85, icon: "⚡", desc: "Python REST APIs" },
      { name: "Node.js", level: 80, icon: "🟢", desc: "Server-side JavaScript" },
      { name: "Express", level: 78, icon: "🚀", desc: "Web framework for Node" },
    ],
  },
  {
    id: "ai",
    label: "AI / ML",
    icon: "🧠",
    skills: [
      { name: "TensorFlow", level: 65, icon: "🧠", desc: "Deep learning framework" },
      { name: "OpenCV", level: 70, icon: "👁️", desc: "Computer vision library" },
      { name: "YOLO", level: 70, icon: "🎯", desc: "Real-time object detection" },
    ],
  },
  {
    id: "database",
    label: "Database",
    icon: "🗄️",
    skills: [
      { name: "PostgreSQL", level: 78, icon: "🐘", desc: "Relational database" },
      { name: "MongoDB", level: 65, icon: "🍃", desc: "NoSQL document store" },
    ],
  },
  {
    id: "tools",
    label: "Tools",
    icon: "🛠️",
    skills: [
      { name: "Docker", level: 76, icon: "🐳", desc: "Containerization" },
      { name: "Git", level: 90, icon: "🌿", desc: "Version control" },
      { name: "GitHub", level: 88, icon: "🐙", desc: "Collaboration platform" },
      { name: "Linux", level: 82, icon: "🐧", desc: "OS and shell scripting" },
      { name: "VS Code", level: 95, icon: "💻", desc: "Primary IDE" },
    ],
  },
];

function getLevelLabel(level: number) {
  if (level >= 90) return "Expert";
  if (level >= 80) return "Advanced";
  if (level >= 70) return "Proficient";
  return "Learning";
}

function getLevelColor(level: number) {
  if (level >= 90) return "var(--green)";
  if (level >= 80) return "var(--primary)";
  if (level >= 70) return "var(--accent)";
  return "var(--teal)";
}

export default function Skills() {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <section id="skills" style={{ padding: "6rem 0" }}>
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 1.5rem",
        }}
      >
        <SectionHeader
          tag="skills"
          title="Technical"
          highlight="Arsenal"
          subtitle="Technologies I work with, organized by domain."
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
            gap: "1.5rem",
            marginTop: "3rem",
            alignItems: "start",
          }}
        >
          {SKILL_CATEGORIES.map((category) => (
            <div
              key={category.id}
              className="glass"
              style={{
                borderRadius: "var(--radius-lg)",
                overflow: "hidden",

                // Expanded card spans both columns
                gridColumn: expanded === category.id ? "1 / -1" : "auto",
              }}
            >
            {/* Header */}
            <div
              onClick={() =>
                setExpanded(
                  expanded === category.id ? null : category.id
                )
              }
              style={{
                padding: "1.5rem",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                  }}
                >
                  <span style={{ fontSize: "1.6rem" }}>
                    {category.icon}
                  </span>

                  <div>
                    <h3
                      style={{
                        margin: 0,
                        color: "var(--text)",
                        fontSize: "1.2rem",
                      }}
                    >
                      {category.label}
                    </h3>

                    <div
                      style={{
                        marginTop: 6,
                        color: "var(--primary)",
                        fontSize: ".8rem",
                      }}
                    >
                      {category.skills.length} Technologies
                    </div>

                    <p
                      style={{
                        margin: "8px 0 0",
                        color: "var(--text-muted)",
                        fontSize: ".85rem",
                      }}
                    >
                      {category.skills
                        .slice(0, 4)
                        .map((s) => s.name)
                        .join(" • ")}
                      {category.skills.length > 4 && " ..."}
                    </p>
                  </div>
                </div>
              </div>

              <div
                style={{
                  fontSize: "1.5rem",
                  color: "var(--primary)",
                  transition: ".3s",
                }}
              >
                {expanded === category.id ? "▲" : "▼"}
              </div>
            </div>

            {/* Expanded Skills */}
            {expanded === category.id && (
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns:
                    "repeat(auto-fit,minmax(230px,1fr))",
                  gap: "1rem",
                  padding: "0 1.5rem 1.5rem",
                }}
              >
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    style={{
                      background: "rgba(255,255,255,.03)",
                      border: "1px solid var(--border)",
                      borderRadius: 14,
                      padding: "1rem",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginBottom: ".8rem",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          gap: 10,
                          alignItems: "center",
                        }}
                      >
                        <span style={{ fontSize: "1.2rem" }}>
                          {skill.icon}
                        </span>

                        <div>
                          <div
                            style={{
                              fontWeight: 600,
                              color: "var(--text)",
                            }}
                          >
                            {skill.name}
                          </div>

                          <div
                            style={{
                              fontSize: ".75rem",
                              color: "var(--text-muted)",
                            }}
                          >
                            {skill.desc}
                          </div>
                        </div>
                      </div>

                      <span
                        style={{
                          fontSize: ".7rem",
                          color: getLevelColor(skill.level),
                        }}
                      >
                        {getLevelLabel(skill.level)}
                      </span>
                    </div>

                    <div
                      style={{
                        height: 5,
                        background: "rgba(255,255,255,.08)",
                        borderRadius: 20,
                        overflow: "hidden",
                      }}
                    >
                      <div
                        style={{
                          width: `${skill.level}%`,
                          height: "100%",
                          background: `linear-gradient(90deg,var(--primary),${getLevelColor(
                            skill.level
                          )})`,
                        }}
                      />
                    </div>

                    <div
                      style={{
                        marginTop: 8,
                        textAlign: "right",
                        fontSize: ".75rem",
                        color: "var(--text-muted)",
                      }}
                    >
                      {skill.level}%
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}