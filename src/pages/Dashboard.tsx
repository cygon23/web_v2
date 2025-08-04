import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Activity, TrendingUp, MapPin, AlertTriangle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  const mockStats = {
    totalDiagnoses: 1247,
    thisWeek: 89,
    accuracy: 94.2,
    commonDiseases: [
      { name: 'Tomato Leaf Mold', count: 34 },
      { name: 'Maize Leaf Spot', count: 28 },
      { name: 'Banana Bacterial Wilt', count: 22 },
      { name: 'Cassava Mosaic', count: 18 },
    ]
  };

  return (
    <div className='min-h-screen bg-gradient-to-br from-accent to-background'>
      <div className='container mx-auto px-4 py-8'>
        <Button variant='ghost' onClick={() => navigate("/")} className='mb-6'>
          <ArrowLeft className='mr-2' />
          Back to Home
        </Button>

        <div className='max-w-6xl mx-auto space-y-6'>
          {/* Header */}
          <Card className='shadow-medium'>
            <CardHeader>
              <CardTitle className='text-2xl font-bold'>
                AgroDrone Dashboard
              </CardTitle>
              <CardDescription>
                Monitor disease detection activity and analytics
              </CardDescription>
            </CardHeader>
          </Card>

          {/* Stats Grid */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            <Card className='shadow-soft'>
              <CardContent className='p-6'>
                <div className='flex items-center justify-between'>
                  <div>
                    <p className='text-sm font-medium text-muted-foreground'>
                      Total Diagnoses
                    </p>
                    <p className='text-2xl font-bold text-primary'>
                      {mockStats.totalDiagnoses}
                    </p>
                  </div>
                  <Activity className='w-8 h-8 text-primary' />
                </div>
              </CardContent>
            </Card>

            <Card className='shadow-soft'>
              <CardContent className='p-6'>
                <div className='flex items-center justify-between'>
                  <div>
                    <p className='text-sm font-medium text-muted-foreground'>
                      This Week
                    </p>
                    <p className='text-2xl font-bold text-success'>
                      {mockStats.thisWeek}
                    </p>
                  </div>
                  <TrendingUp className='w-8 h-8 text-success' />
                </div>
              </CardContent>
            </Card>

            <Card className='shadow-soft'>
              <CardContent className='p-6'>
                <div className='flex items-center justify-between'>
                  <div>
                    <p className='text-sm font-medium text-muted-foreground'>
                      Accuracy Rate
                    </p>
                    <p className='text-2xl font-bold text-primary'>
                      {mockStats.accuracy}%
                    </p>
                  </div>
                  <AlertTriangle className='w-8 h-8 text-primary' />
                </div>
              </CardContent>
            </Card>

            <Card className='shadow-soft'>
              <CardContent className='p-6'>
                <div className='flex items-center justify-between'>
                  <div>
                    <p className='text-sm font-medium text-muted-foreground'>
                      Active Regions
                    </p>
                    <p className='text-2xl font-bold text-warning'>12</p>
                  </div>
                  <MapPin className='w-8 h-8 text-warning' />
                </div>
              </CardContent>
            </Card>
          </div>

          <div className='grid md:grid-cols-2 gap-6'>
            {/* Common Diseases */}
            <Card className='shadow-medium'>
              <CardHeader>
                <CardTitle>Most Common Diseases</CardTitle>
                <CardDescription>
                  Top detected diseases this month
                </CardDescription>
              </CardHeader>
              <CardContent className='space-y-4'>
                {mockStats.commonDiseases.map((disease, index) => (
                  <div
                    key={index}
                    className='flex items-center justify-between p-3 bg-muted rounded-lg'>
                    <span className='font-medium'>{disease.name}</span>
                    <span className='text-sm bg-primary text-primary-foreground px-2 py-1 rounded'>
                      {disease.count} cases
                    </span>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Regional Activity */}
            <Card className='shadow-medium'>
              <CardHeader>
                <CardTitle>Regional Activity</CardTitle>
                <CardDescription>Disease detection by location</CardDescription>
              </CardHeader>
              <CardContent className='space-y-4'>
                <div className='text-center py-8 text-muted-foreground'>
                  <MapPin className='w-12 h-12 mx-auto mb-3' />
                  <p>Interactive map coming soon</p>
                  <p className='text-sm'>Future integration with GPS data</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* IoT Integration Preview */}
          <Card className='shadow-medium border-dashed border-2 border-muted-foreground/25'>
            <CardHeader>
              <CardTitle className='text-muted-foreground'>
                Future Features
              </CardTitle>
              <CardDescription>
                Coming soon with IoT integration
              </CardDescription>
            </CardHeader>
            <CardContent className='space-y-4'>
              <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                <div className='p-4 bg-muted/50 rounded-lg text-center'>
                  <h4 className='font-medium text-muted-foreground'>
                    Soil Monitoring
                  </h4>
                  <p className='text-sm text-muted-foreground mt-1'>
                    Real-time soil moisture and pH levels
                  </p>
                </div>
                <div className='p-4 bg-muted/50 rounded-lg text-center'>
                  <h4 className='font-medium text-muted-foreground'>
                    Weather Integration
                  </h4>
                  <p className='text-sm text-muted-foreground mt-1'>
                    Automated disease risk assessment
                  </p>
                </div>
                <div className='p-4 bg-muted/50 rounded-lg text-center'>
                  <h4 className='font-medium text-muted-foreground'>
                    Alert System
                  </h4>
                  <p className='text-sm text-muted-foreground mt-1'>
                    SMS/Email notifications for farmers
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Action Button */}
          <div className='text-center'>
            <Button
              variant='hero'
              size='lg'
              onClick={() => navigate("/upload")}>
              Start New Diagnosis
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;