import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Upload, Camera, Loader2, ArrowLeft, Brain } from 'lucide-react';
import { toast } from 'sonner';
import { plantDiseaseAI } from '@/services/plantDiseaseAI';

const UploadPage = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [dragActive, setDragActive] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const navigate = useNavigate();

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    const files = e.dataTransfer.files;
    if (files && files[0]) {
      const file = files[0];
      if (file.type.startsWith('image/')) {
        setSelectedFile(file);
      } else {
        toast.error('Please upload an image file');
      }
    }
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) return;

    setIsUploading(true);
    
    try {
      toast.info('Initializing AI model...', { duration: 2000 });
      
      // Use real AI model for plant disease detection
      const result = await plantDiseaseAI.classifyPlantDisease(selectedFile);
      
      toast.success('Disease detected successfully!');
      
      // Navigate to results with AI detection results
      navigate('/results', { 
        state: { 
          imageFile: selectedFile,
          result
        }
      });
    } catch (error) {
      console.error('Disease classification error:', error);
      toast.error('AI analysis failed. Please try again with a clearer image.');
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-accent to-background">
      <div className="container mx-auto px-4 py-8">
        <Button 
          variant="ghost" 
          onClick={() => navigate('/')}
          className="mb-6"
        >
          <ArrowLeft className="mr-2" />
          Back to Home
        </Button>

        <div className="max-w-2xl mx-auto">
          <Card className="shadow-medium">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold text-primary">
                Upload Plant Image
              </CardTitle>
              <CardDescription>
                Upload a clear image of the affected plant leaves for AI diagnosis
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div
                className={`relative border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
                  dragActive
                    ? 'border-primary bg-accent'
                    : selectedFile
                    ? 'border-success bg-success/5'
                    : 'border-muted-foreground/25 hover:border-primary'
                }`}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
              >
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
                
                {selectedFile ? (
                  <div className="space-y-4">
                    <div className="w-32 h-32 mx-auto bg-success/10 rounded-lg flex items-center justify-center">
                      <Camera className="w-12 h-12 text-success" />
                    </div>
                    <div>
                      <p className="font-medium text-success">{selectedFile.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="w-32 h-32 mx-auto bg-muted rounded-lg flex items-center justify-center">
                      <Upload className="w-12 h-12 text-muted-foreground" />
                    </div>
                    <div>
                      <p className="text-lg font-medium">
                        Drag and drop your image here
                      </p>
                      <p className="text-muted-foreground">
                        or click to browse files
                      </p>
                    </div>
                  </div>
                )}
              </div>

              <div className="text-center space-y-4">
                <div className="text-sm text-muted-foreground">
                  <p>• Upload clear, well-lit images of plant leaves</p>
                  <p>• JPG, PNG formats supported</p>
                  <p>• Maximum file size: 10MB</p>
                </div>

                <Button
                  onClick={handleUpload}
                  disabled={!selectedFile || isUploading}
                  variant="hero"
                  size="lg"
                  className="w-full"
                >
                  {isUploading ? (
                    <>
                      <Loader2 className="mr-2 animate-spin" />
                      Analyzing Image...
                    </>
                  ) : (
                    <>
                      <Camera className="mr-2" />
                      Diagnose Plant Disease
                    </>
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default UploadPage;