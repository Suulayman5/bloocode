// components/FeaturedEpisodes.tsx
interface Episode {
  title: string;
  date: string;
  duration: string;
}

export default function FeaturedEpisodes() {
  const episodes: Episode[] = [
    {
      title: "The Future of Work: Embracing Remote and Hybrid Workforces",
      date: "Sept 7, 2023",
      duration: "35 mins"
    },
    // Add more episodes
  ];

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-2xl font-bold mb-8">EDITOR’S PICKS</h3>
        <div className="grid md:grid-cols-2 gap-8">
          {episodes.map((episode, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="font-bold mb-2">{episode.title}</h4>
              <p className="text-gray-600">{episode.date} | {episode.duration}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}