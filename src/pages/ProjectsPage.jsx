import ProjectCardDetail from "../components/ProjectCardDetail";

// ===== ProjectsPage Component =====
function ProjectsPage() {
  const projects = [
    {
      title: "BookSwap",
      description: "A full-stack Second Hand Book Listing platform with user authentication, book listings, and seller review system",
      image: " https://picsum.photos/600/400?random=1",
      link: "#",
      frameworks: ["React", "RsPack", "Spring Boot", "MariaDB", "JWT"]
    },
    {
      title: "Customer Churn Prediction",
      description: "An ML project which predicts customer churn using historical data using various classification models,feature engineering, encoding, sampling, tuning hyperparameters and ensembling.",
      image: " https://picsum.photos/600/400?random=2",
      link: "#",
      frameworks: ["Python", "ML", "scikit-learn", "pandas", "NumPy"]
    },
    {
      title: "Movie Recommendation System",
      description: "A NLP based movie recommendation system which uses the keywords, genres and anoverview para. It uses various vetorization techniques like TF-IDF, Hashing Vectorizer and Word2Vec to recommend similar movies based on list of one/more interested movies.",
      image: " https://picsum.photos/600/400?random=3",
      link: "#",
      frameworks: ["Python", "NLP", "gensim", "pandas", "scipy"]
    },
    {
      title: "Worscraft - Blog Platform",
      description: "A simple blogging application where users can search, read and write blogs. It has a user authentication system.",
      image: " https://picsum.photos/600/400?random=3",
      link: "#",
      frameworks: ["Java", "JDBC", "Java AWT", "Java Swing"]
    },
    {
      title: "Audio Recorder and player Application",
      description: "A simple audio recorder and player application built with python which can record audio, play it and save it in a file.",
      image: " https://picsum.photos/600/400?random=3",
      link: "#",
      frameworks: ["Python", "sounddevice", "soundfile", "tkinter","pygame"]
    },
    {
      title: "Smart Climate Control System",
      description: "A smart climate control IoT system that uses Arduino UNO R3, DHT11, and ESP8266 - 01 to monitor and log temperature and humidity in real-time. It features a web server and interface for remote monitoring and analysis.",
      image: " https://picsum.photos/600/400?random=3",
      link: "#",
      frameworks: ["ino (Arduino)", "PHP"]
    },
  ];

  return (
    <section className="space-y-12">
      <h2 className="text-3xl font-bold mb-8">My Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <ProjectCardDetail key={index} project={project} />
        ))}
      </div>
    </section>
  );
}

export default ProjectsPage;