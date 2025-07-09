import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, ExternalLink, Calendar, User } from "lucide-react";

interface MediumArticle {
  title: string;
  link: string;
  pubDate: string;
  description: string;
  author: string;
  categories: string[];
}

export default function MediumSection() {
  const [articles, setArticles] = useState<MediumArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMediumArticles = async () => {
      try {
        setLoading(true);
        // Using RSS2JSON service to fetch Medium RSS feed
        const response = await fetch(
          `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@hettt`
        );
        
        if (!response.ok) {
          throw new Error('Failed to fetch articles');
        }
        
        const data = await response.json();
        
        if (data.status === 'ok') {
          const formattedArticles = data.items.slice(0, 3).map((item: any) => ({
            title: item.title,
            link: item.link,
            pubDate: item.pubDate,
            description: item.description.replace(/<[^>]*>/g, '').substring(0, 150) + '...',
            author: item.author,
            categories: item.categories || []
          }));
          setArticles(formattedArticles);
        } else {
          throw new Error('Invalid RSS response');
        }
      } catch (err) {
        setError('Failed to load articles');
        console.error('Error fetching Medium articles:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchMediumArticles();
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <section id="medium" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-green-500 font-mono">&gt;</span>
            <span className="text-white"> Medium Articles</span>
          </h2>
          <div className="w-24 h-1 bg-green-500 mx-auto mb-6"></div>
          <p className="text-gray-300 text-lg">
            Latest insights on cybersecurity, VAPT, and tech trends
          </p>
        </motion.div>

        {loading && (
          <div className="text-center py-12">
            <div className="text-green-500 font-mono text-lg">
              $ loading articles...
            </div>
            <div className="mt-4 flex justify-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-500"></div>
            </div>
          </div>
        )}

        {error && (
          <div className="text-center py-12">
            <div className="text-red-500 font-mono text-lg mb-4">
              $ error: {error}
            </div>
            <Button
              onClick={() => window.open("https://hettt.medium.com/", "_blank")}
              className="bg-green-500/20 border border-green-500 text-green-500 px-6 py-3 rounded font-mono hover:bg-green-500 hover:text-black transition-all duration-300"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Visit Medium Profile
            </Button>
          </div>
        )}

        {!loading && !error && articles.length > 0 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="bg-slate-800/80 border-green-500/20 hover:border-green-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/10 h-full">
                  <CardContent className="p-6">
                    <div className="mb-4">
                      <div className="w-full h-48 bg-gradient-to-br from-green-900/30 to-green-700/30 rounded-lg border border-green-500/30 flex items-center justify-center">
                        <div className="text-center">
                          <BookOpen className="w-16 h-16 text-green-500 mx-auto mb-2" />
                          <div className="text-white font-mono text-sm">Medium Article</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-green-500 font-mono text-sm mb-2">$ cat article_{index + 1}.md</div>
                    <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">
                      {article.title}
                    </h3>
                    
                    <div className="flex items-center space-x-4 text-gray-400 text-sm mb-3">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {formatDate(article.pubDate)}
                      </div>
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        Het Patel
                      </div>
                    </div>
                    
                    <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                      {article.description}
                    </p>
                    
                    {article.categories.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {article.categories.slice(0, 3).map((category, catIndex) => (
                          <span
                            key={catIndex}
                            className="bg-green-500/20 text-green-500 px-2 py-1 rounded-full text-xs font-mono"
                          >
                            {category}
                          </span>
                        ))}
                      </div>
                    )}
                    
                    <div className="flex space-x-4">
                      <Button
                        onClick={() => window.open(article.link, "_blank")}
                        className="bg-green-500/20 border border-green-500 text-green-500 px-4 py-2 rounded font-mono text-sm hover:bg-green-500 hover:text-black transition-all duration-300 flex-1"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Read Article
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        )}

        {!loading && !error && articles.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 font-mono text-lg mb-4">
              $ no articles found
            </div>
            <Button
              onClick={() => window.open("https://hettt.medium.com/", "_blank")}
              className="bg-green-500/20 border border-green-500 text-green-500 px-6 py-3 rounded font-mono hover:bg-green-500 hover:text-black transition-all duration-300"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Visit Medium Profile
            </Button>
          </div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button
            onClick={() => window.open("https://hettt.medium.com/", "_blank")}
            className="bg-transparent border-2 border-green-500 text-green-500 px-8 py-3 rounded-lg font-mono hover:bg-green-500 hover:text-black transition-all duration-300 hover:shadow-lg hover:shadow-green-500/50"
          >
            <BookOpen className="w-5 h-5 mr-2" />
            View All Articles
          </Button>
        </motion.div>
      </div>
    </section>
  );
}