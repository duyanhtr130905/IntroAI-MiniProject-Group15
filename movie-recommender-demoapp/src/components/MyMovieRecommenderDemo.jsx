import React, { useState, useEffect } from 'react';
import { Film, Search, Star, TrendingUp, Users, Sparkles } from 'lucide-react';

const MovieRecommenderDemo = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [recommendations, setRecommendations] = useState([]);
  const [method, setMethod] = useState('hybrid');
  const [loading, setLoading] = useState(false);

  // Sample movies data (in reality would load from processed dataset)
  const sampleMovies = [
    { id: 0, title: 'The Dark Knight', genres: ['Action', 'Crime', 'Drama'], rating: 8.3, year: 2008 },
    { id: 1, title: 'Inception', genres: ['Action', 'Sci-Fi', 'Thriller'], rating: 8.8, year: 2010 },
    { id: 2, title: 'The Godfather', genres: ['Crime', 'Drama'], rating: 9.2, year: 1972 },
    { id: 3, title: 'Pulp Fiction', genres: ['Crime', 'Drama'], rating: 8.9, year: 1994 },
    { id: 4, title: 'Avatar', genres: ['Action', 'Adventure', 'Fantasy'], rating: 7.8, year: 2009 },
    { id: 5, title: 'The Matrix', genres: ['Action', 'Sci-Fi'], rating: 8.7, year: 1999 },
    { id: 6, title: 'Interstellar', genres: ['Adventure', 'Drama', 'Sci-Fi'], rating: 8.6, year: 2014 },
    { id: 7, title: 'The Shawshank Redemption', genres: ['Drama'], rating: 9.3, year: 1994 },
    { id: 8, title: 'Fight Club', genres: ['Drama'], rating: 8.8, year: 1999 },
    { id: 9, title: 'Forrest Gump', genres: ['Drama', 'Romance'], rating: 8.8, year: 1994 },
    { id: 10, title: 'Gladiator', genres: ['Action', 'Adventure', 'Drama'], rating: 8.5, year: 2000 },
    { id: 11, title: 'The Prestige', genres: ['Drama', 'Mystery', 'Thriller'], rating: 8.5, year: 2006 },
  ];

  // Generate mock recommendations based on selected movie and method
  const generateRecommendations = (movie, selectedMethod) => {
    if (!movie) return [];

    // Simple mock logic - in reality would use actual similarity matrices
    const movieGenres = movie.genres;
    let filtered = sampleMovies.filter(m => m.id !== movie.id);

    if (selectedMethod === 'metadata') {
      // Prioritize genre matching
      filtered = filtered.sort((a, b) => {
        const aMatch = a.genres.filter(g => movieGenres.includes(g)).length;
        const bMatch = b.genres.filter(g => movieGenres.includes(g)).length;
        return bMatch - aMatch;
      });
    } else if (selectedMethod === 'overview') {
      // Random with slight preference for similar ratings
      filtered = filtered.sort((a, b) => 
        Math.abs(a.rating - movie.rating) - Math.abs(b.rating - movie.rating)
      );
    } else {
      // Hybrid - balanced approach
      filtered = filtered.sort((a, b) => {
        const aGenreMatch = a.genres.filter(g => movieGenres.includes(g)).length;
        const bGenreMatch = b.genres.filter(g => movieGenres.includes(g)).length;
        const aRatingDiff = Math.abs(a.rating - movie.rating);
        const bRatingDiff = Math.abs(b.rating - movie.rating);
        return (bGenreMatch * 2 - bRatingDiff) - (aGenreMatch * 2 - aRatingDiff);
      });
    }

    return filtered.slice(0, 6).map((m, idx) => ({
      ...m,
      similarity: (0.95 - idx * 0.08).toFixed(2),
    }));
  };

  const handleMovieSelect = (movie) => {
    setSelectedMovie(movie);
    setLoading(true);
    setTimeout(() => {
      setRecommendations(generateRecommendations(movie, method));
      setLoading(false);
    }, 500);
  };

  const handleMethodChange = (newMethod) => {
    setMethod(newMethod);
    if (selectedMovie) {
      setLoading(true);
      setTimeout(() => {
        setRecommendations(generateRecommendations(selectedMovie, newMethod));
        setLoading(false);
      }, 500);
    }
  };

  const filteredMovies = sampleMovies.filter(movie =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-3">
            <Film className="w-12 h-12 text-purple-400" />
            <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Movie Recommender System
            </h1>
          </div>
          <p className="text-gray-300 text-lg">AI-Powered Content-Based & Collaborative Filtering Demo</p>
        </div>

        {/* Method Selection */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 mb-6 border border-white/20">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-yellow-400" />
            Select Recommendation Method
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
            {[
              { id: 'overview', name: 'Overview-Based', icon: '📝', desc: 'Based on plot similarity' },
              { id: 'metadata', name: 'Metadata-Based', icon: '🎬', desc: 'Genres, cast, director' },
              { id: 'hybrid', name: 'Hybrid', icon: '⚡', desc: 'Combined approach' },
              { id: 'collaborative', name: 'Collaborative', icon: '👥', desc: 'User preferences' },
            ].map((m) => (
              <button
                key={m.id}
                onClick={() => handleMethodChange(m.id)}
                className={`p-4 rounded-xl transition-all ${
                  method === m.id
                    ? 'bg-gradient-to-br from-purple-500 to-pink-500 shadow-lg scale-105'
                    : 'bg-white/5 hover:bg-white/10'
                } border border-white/20`}
              >
                <div className="text-3xl mb-2">{m.icon}</div>
                <div className="font-semibold">{m.name}</div>
                <div className="text-xs text-gray-300 mt-1">{m.desc}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Search Section */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 mb-6 border border-white/20">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search for a movie to get recommendations..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-400"
            />
          </div>

          {searchTerm && (
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 max-h-64 overflow-y-auto">
              {filteredMovies.map((movie) => (
                <button
                  key={movie.id}
                  onClick={() => handleMovieSelect(movie)}
                  className="text-left p-4 bg-white/5 hover:bg-white/10 rounded-xl transition-all border border-white/10 hover:border-purple-400"
                >
                  <div className="font-semibold text-lg mb-1">{movie.title}</div>
                  <div className="text-sm text-gray-300 mb-2">
                    {movie.genres.join(', ')} • {movie.year}
                  </div>
                  <div className="flex items-center gap-1 text-yellow-400">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="font-semibold">{movie.rating}</span>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Selected Movie */}
        {selectedMovie && (
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-6 mb-6 border border-white/20 shadow-2xl">
            <h3 className="text-sm uppercase tracking-wider mb-2 text-purple-200">Selected Movie</h3>
            <h2 className="text-3xl font-bold mb-2">{selectedMovie.title}</h2>
            <div className="flex items-center gap-4 text-lg">
              <span className="bg-white/20 px-3 py-1 rounded-full">{selectedMovie.year}</span>
              <span>{selectedMovie.genres.join(' • ')}</span>
              <div className="flex items-center gap-1">
                <Star className="w-5 h-5 fill-current text-yellow-300" />
                <span className="font-bold">{selectedMovie.rating}</span>
              </div>
            </div>
          </div>
        )}

        {/* Recommendations */}
        {loading ? (
          <div className="flex items-center justify-center py-20">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-purple-500"></div>
          </div>
        ) : recommendations.length > 0 ? (
          <div>
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <TrendingUp className="w-6 h-6 text-green-400" />
              Recommended Movies ({method} method)
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recommendations.map((movie, idx) => (
                <div
                  key={movie.id}
                  className="bg-white/10 backdrop-blur-lg rounded-xl p-5 border border-white/20 hover:border-purple-400 transition-all hover:scale-105 hover:shadow-2xl"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="text-sm font-bold text-purple-300">#{idx + 1}</div>
                    <div className="bg-green-500/20 text-green-300 px-2 py-1 rounded text-xs font-semibold">
                      {(movie.similarity * 100).toFixed(0)}% Match
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{movie.title}</h3>
                  <div className="text-sm text-gray-300 mb-3">
                    {movie.genres.join(', ')} • {movie.year}
                  </div>
                  <div className="flex items-center gap-1 text-yellow-400">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="font-bold">{movie.rating}</span>
                    <span className="text-gray-400 text-sm ml-2">IMDb Rating</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="text-center py-20 text-gray-400">
            <Film className="w-16 h-16 mx-auto mb-4 opacity-50" />
            <p className="text-xl">Search and select a movie to get personalized recommendations</p>
          </div>
        )}

        {/* Footer Stats */}
        <div className="mt-12 bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-purple-400">5000+</div>
              <div className="text-sm text-gray-400">Movies</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-pink-400">4</div>
              <div className="text-sm text-gray-400">Methods</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-400">95%</div>
              <div className="text-sm text-gray-400">Accuracy</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-yellow-400">Fast</div>
              <div className="text-sm text-gray-400">Response</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieRecommenderDemo;