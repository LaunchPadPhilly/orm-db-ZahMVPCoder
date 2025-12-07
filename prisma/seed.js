const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  console.log('Start seeding...');

  // Seed test data for DB tests
  await prisma.project.createMany({
    data: [
      {
        title: "Test DB Query Project 1",
        description: "First test project for database queries",
        technologies: ["React", "Node.js"]
      },
      {
        title: "Test DB Query Project 2",
        description: "Second test project for database queries",
        technologies: ["Next.js", "Prisma"]
      },
      {
        title: "Test DB Query Project 3",
        description: "Third test project for database queries",
        technologies: ["TypeScript", "PostgreSQL"]
      },
      {
        title: "Portfolio Website",
        description: "A personal portfolio website built with Next.js and Tailwind CSS.",
        imageUrl: "/project1.jpg",
        projectUrl: "https://your-portfolio.vercel.app",
        githubUrl: "https://github.com/yourusername/portfolio",
        technologies: ["Next.js", "Tailwind CSS", "React", "Prisma"]
      },
      {
        title: "Task Manager App",
        description: "A full-stack task management application with user authentication.",
        imageUrl: "/project2.jpg",
        projectUrl: "https://task-manager.vercel.app",
        githubUrl: "https://github.com/yourusername/task-manager",
        technologies: ["React", "Node.js", "PostgreSQL", "Prisma"]
      },
      {
        title: "Weather Dashboard",
        description: "A responsive weather dashboard using external APIs.",
        imageUrl: "/project3.jpg",
        projectUrl: "https://weather-dash.vercel.app",
        githubUrl: "https://github.com/yourusername/weather-dashboard",
        technologies: ["JavaScript", "CSS", "Weather API", "Chart.js"]
      }
    ]
  });

  console.log('Seeding finished.');
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });