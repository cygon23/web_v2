import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

interface ExternalContentLoaderProps {
  url: string;
  title: string;
}

const ExternalContentLoader = ({ url, title }: ExternalContentLoaderProps) => {
  const [content, setContent] = useState<string>('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadContent = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Create iframe to display the external content
        setContent(`
          <iframe 
            src="${url}" 
            style="width: 100%; height: 100vh; border: none; background: white;" 
            title="${title}"
            sandbox="allow-scripts allow-same-origin allow-forms allow-links allow-popups"
          ></iframe>
        `);
        
        setLoading(false);
      } catch (err) {
        setError('Failed to load content');
        setLoading(false);
      }
    };

    loadContent();
  }, [url, title]);

  if (loading) {
    return (
      <div className="min-h-screen">
        <Navigation />
        <div className="pt-32 pb-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="border-0 shadow-card">
              <CardContent className="p-8">
                <div className="space-y-4">
                  <Skeleton className="h-8 w-3/4" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-2/3" />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                    <Skeleton className="h-48" />
                    <Skeleton className="h-48" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen">
        <Navigation />
        <div className="pt-32 pb-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="border-0 shadow-card">
              <CardContent className="p-8 text-center">
                <h2 className="text-2xl font-heading font-bold mb-4 text-destructive">
                  Failed to Load Content
                </h2>
                <p className="text-muted-foreground">
                  Unable to load content from {url}. Please try again later.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-20">
        <div 
          dangerouslySetInnerHTML={{ __html: content }}
          className="w-full"
          style={{ minHeight: 'calc(100vh - 80px)' }}
        />
      </div>
    </div>
  );
};

export default ExternalContentLoader;