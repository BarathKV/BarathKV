import ProjectCardDetail from "../components/ProjectCardDetail";

import BookswapImg from "../assets/projects/bookswap.jpg";
import BlogImg from "../assets/projects/blog.jpg";
import IOTImg from "../assets/projects/iot.jpg";
import ChurnImg from "../assets/projects/churn.jpg";
import NLPImg from "../assets/projects/nlp.jpg";
import AudioImg from "../assets/projects/audio.jpg";

// ===== ProjectsPage Component =====
function ProjectsPage() {
  const projects = [
    {
      title: "BookSwap",
      description: "A full-stack Second Hand Book Listing platform with user authentication, book listings, and seller review system",
      image: BookswapImg,
      link: "https://github.com/BarathKV/BookSwap",
      frameworks: ["React", "RsPack", "Spring Boot", "MariaDB", "JWT"]
    },
    {
      title: "Customer Churn Prediction",
      description: "An ML project which predicts customer churn using historical data using various classification models,feature engineering, encoding, sampling, tuning hyperparameters and ensembling.",
      image: ChurnImg,
      link: "https://github.com/BarathKV/Customer-Churn-Prediction",
      frameworks: ["Python", "ML", "scikit-learn", "pandas", "NumPy"]
    },
    {
      title: "Movie Recommendation System",
      description: "A NLP based movie recommendation system which uses the keywords, genres and anoverview para. It uses various vetorization techniques like TF-IDF, Hashing Vectorizer and Word2Vec to recommend similar movies based on list of one/more interested movies.",
      image: NLPImg,
      link: "https://github.com/BarathKV/MovieRecommendationNLP",
      frameworks: ["Python", "NLP", "gensim", "pandas", "scipy"]
    },
    {
      title: "Worscraft - Blog Platform",
      description: "A simple blogging application where users can search, read and write blogs. It has a user authentication system.",
      image: BlogImg,
      link: "https://github.com/BarathKV/Wordscraft",
      frameworks: ["Java", "JDBC", "Java AWT", "Java Swing"]
    },
    {
      title: "Audio Recorder and player Application",
      description: "A simple audio recorder and player application built with python which can record audio, play it and save it in a file.",
      image: AudioImg,
      link: "https://github.com/BarathKV/AudioRecorder",
      frameworks: ["Python", "sounddevice", "soundfile", "tkinter","pygame"]
    },
    {
      title: "Smart Climate Control System",
      description: "A smart climate control IoT system that uses Arduino UNO R3, DHT11, and ESP8266 - 01 to monitor and log temperature and humidity in real-time. It features a web server and interface for remote monitoring and analysis.",
      image: IOTImg,
      link: "https://github.com/BarathKV/SmartClimateControlSystem",
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