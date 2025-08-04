import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, AlertTriangle, CheckCircle, Lightbulb, ShoppingCart } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

interface DiagnosisResult {
  disease_name: string;
  confidence: number;
  description: string;
  cause: string;
  treatment_advice: string;
  recommended_product: string;
  prevention_tips: string[];
}

const ResultsPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [imageUrl, setImageUrl] = useState<string>('');
  
  const { imageFile, result } = location.state as { 
    imageFile: File; 
    result: DiagnosisResult 
  } || {};

  useEffect(() => {
    if (!result) {
      navigate('/upload');
      return;
    }

    if (imageFile) {
      const url = URL.createObjectURL(imageFile);
      setImageUrl(url);
      return () => URL.revokeObjectURL(url);
    }
  }, [imageFile, result, navigate]);

  if (!result) {
    return null;
  }

  const confidenceLevel = result.confidence * 100;
  const getConfidenceColor = (confidence: number) => {
    if (confidence >= 80) return 'success';
    if (confidence >= 60) return 'warning';
    return 'destructive';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-accent to-background">
      <div className="container mx-auto px-4 py-8">
        <Button 
          variant="ghost" 
          onClick={() => navigate('/upload')}
          className="mb-6"
        >
          <ArrowLeft className="mr-2" />
          Upload Another Image
        </Button>

        <div className="max-w-4xl mx-auto space-y-6">
          {/* Header */}
          <Card className="shadow-medium">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-center">
                Diagnosis Results
              </CardTitle>
              <CardDescription className="text-center">
                AI-powered plant disease detection results
              </CardDescription>
            </CardHeader>
          </Card>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Image Display */}
            <Card className="shadow-medium">
              <CardHeader>
                <CardTitle className="text-lg">Uploaded Image</CardTitle>
              </CardHeader>
              <CardContent>
                {imageUrl && (
                  <div className="aspect-square rounded-lg overflow-hidden bg-muted">
                    <img 
                      src={imageUrl} 
                      alt="Uploaded plant" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Diagnosis Details */}
            <Card className="shadow-medium">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-warning" />
                  Disease Detected
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                 <div>
                   <h3 className="text-xl font-bold text-primary mb-2">
                     {result.disease_name}
                   </h3>
                   <p className="text-muted-foreground mb-3">
                     {result.description}
                   </p>
                   <div className="bg-warning/10 border border-warning/20 rounded-lg p-3">
                     <h5 className="font-medium text-warning text-sm mb-1">Cause</h5>
                     <p className="text-sm text-foreground">{result.cause}</p>
                   </div>
                 </div>

                 <div>
                   <div className="flex items-center justify-between mb-2">
                     <span className="text-sm font-medium">AI Confidence Level</span>
                     <Badge variant={getConfidenceColor(confidenceLevel) as "default" | "secondary" | "destructive"}>
                       {confidenceLevel.toFixed(1)}%
                     </Badge>
                   </div>
                   <Progress 
                     value={confidenceLevel} 
                     className="h-2"
                   />
                   <p className="text-xs text-muted-foreground mt-1">
                     Powered by advanced machine learning models
                   </p>
                 </div>
              </CardContent>
            </Card>
          </div>

          {/* Treatment Advice */}
          <Card className="shadow-medium">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-success" />
                Treatment Recommendations
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-success/10 border border-success/20 rounded-lg p-4">
                <h4 className="font-medium text-success mb-2">Immediate Action</h4>
                <p className="text-foreground">{result.treatment_advice}</p>
              </div>

              <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
                <h4 className="font-medium text-primary mb-2 flex items-center gap-2">
                  <ShoppingCart className="w-4 h-4" />
                  Recommended Product
                </h4>
                <p className="text-foreground">{result.recommended_product}</p>
              </div>
            </CardContent>
          </Card>

          {/* Prevention Tips */}
          <Card className="shadow-medium">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lightbulb className="w-5 h-5 text-warning" />
                Prevention Tips
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {result.prevention_tips.map((tip, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-success mt-1 flex-shrink-0" />
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              variant="hero" 
              className="flex-1"
              onClick={() => navigate('/upload')}
            >
              Diagnose Another Plant
            </Button>
            <Button 
              variant="outline" 
              className="flex-1"
              onClick={() => navigate('/dashboard')}
            >
              View Dashboard
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultsPage;