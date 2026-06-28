const { MongoClient } = require('mongodb');

// MongoDB Connection URI from env file
const uri = "mongodb+srv://Monir:pdLXe8dN9DMWGRCB@ecotrack-server.pnvhcn2.mongodb.net/portfolioDB?retryWrites=true&w=majority&appName=Ecotrack-server";
const client = new MongoClient(uri);

async function seed() {
  try {
    console.log("Connecting to MongoDB Atlas...");
    await client.connect();
    console.log("Connected to MongoDB!");
    
    const db = client.db("portfolioDB");
    
    // 1. Setup Projects collection
    const projectsCollection = db.collection("projects");
    const countProjects = await projectsCollection.countDocuments();
    if (countProjects === 0) {
      console.log("Seeding projects collection...");
      await projectsCollection.insertOne({
        title: "Ecotrack Application",
        description: "An environmental tracking application that helps users monitor their carbon footprint and live a sustainable life.",
        image: "https://i.ibb.co.com/main-project-image.png",
        images: [
          "https://i.ibb.co.com/sub-image1.png",
          "https://i.ibb.co.com/sub-image2.png"
        ],
        clientSourceCode: "https://github.com/mdmonirhossion/client-repo",
        serverSourceCode: "https://github.com/mdmonirhossion/server-repo",
        liveLink: "https://your-live-website.com",
        liveVideoUrl: "https://youtube.com/your-video-link",
        isFeatured: true,
        tags: ["React", "TailwindCSS", "NodeJS", "MongoDB"],
        createdAt: new Date(),
        updatedAt: new Date()
      });
      console.log("Sample project inserted successfully!");
    } else {
      console.log("Projects collection already contains data.");
    }

    // 2. Setup Coursework collection
    const courseworkCollection = db.collection("coursework");
    const countCoursework = await courseworkCollection.countDocuments();
    if (countCoursework === 0) {
      console.log("Seeding coursework collection...");
      await courseworkCollection.insertOne({
        title: "CSE 302: Database Management System",
        status: "Completed",
        createdAt: new Date(),
        updatedAt: new Date()
      });
      console.log("Sample coursework inserted successfully!");
    } else {
      console.log("Coursework collection already contains data.");
    }

    // 3. Setup Resume collection
    const resumeCollection = db.collection("resume");
    const countResume = await resumeCollection.countDocuments();
    if (countResume === 0) {
      console.log("Seeding resume collection...");
      await resumeCollection.insertOne({
        link: "https://drive.google.com/file/d/1TBjpcLGfXLtLv01L69-DeYr-mXZ_w3LN/view",
        updatedAt: new Date()
      });
      console.log("Resume link inserted successfully!");
    } else {
      console.log("Resume collection already contains data.");
    }

    console.log("Database seed process completed successfully!");

  } catch (error) {
    console.error("Error during seeding database:", error);
  } finally {
    await client.close();
    console.log("Database connection closed.");
  }
}

seed();
