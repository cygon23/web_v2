import { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  ArrowLeft,
  Activity,
  TrendingUp,
  MapPin,
  AlertTriangle,
  Users,
  Eye,
  Calendar,
  Leaf,
  LogOut,
  Camera,
  BarChart3,
  PieChart,
  LineChart,
  Thermometer,
  CloudRain,
  Wifi,
  Smartphone,
  Bell,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import {
  LineChart as RechartsLineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart as RechartsPieChart,
  Cell,
} from "recharts";
import { useAuth } from "@/hooks/useAuth";
import Sidebar from "@/components/Sidebar";

const Dashboard = () => {
  const navigate = useNavigate();
  const { user, signOut, loading } = useAuth();
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    // Check authentication
    if (!loading && !user) {
      navigate("/auth");
      return;
    }

    // Update time every minute
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);

    return () => clearInterval(timer);
  }, [user, loading, navigate]);

  // Mock data for charts and stats
  const mockStats = {
    totalDiagnoses: 1247,
    thisWeek: 89,
    accuracy: 94.2,
    activeUsers: 5243,
    regionsActive: 12,
    weeklyGrowth: 15.3,
    commonDiseases: [
      { name: "Tomato Leaf Mold", count: 34, severity: "high" },
      { name: "Maize Leaf Spot", count: 28, severity: "medium" },
      { name: "Banana Bacterial Wilt", count: 22, severity: "high" },
      { name: "Cassava Mosaic", count: 18, severity: "low" },
      { name: "Rice Blast", count: 15, severity: "medium" },
      { name: "Coffee Berry Disease", count: 12, severity: "high" },
    ],
  };

  const weeklyData = [
    { day: "Mon", diagnoses: 42, accuracy: 94 },
    { day: "Tue", diagnoses: 38, accuracy: 96 },
    { day: "Wed", diagnoses: 55, accuracy: 93 },
    { day: "Thu", diagnoses: 67, accuracy: 95 },
    { day: "Fri", diagnoses: 89, accuracy: 94 },
    { day: "Sat", diagnoses: 76, accuracy: 97 },
    { day: "Sun", diagnoses: 45, accuracy: 92 },
  ];

  const cropData = [
    { name: "Tomato", value: 35, color: "#22c55e" },
    { name: "Maize", value: 28, color: "#3b82f6" },
    { name: "Banana", value: 20, color: "#f59e0b" },
    { name: "Rice", value: 12, color: "#8b5cf6" },
    { name: "Others", value: 5, color: "#6b7280" },
  ];

  const regionData = [
    { region: "Arusha", count: 245, percentage: 23 },
    { region: "Kilimanjaro", count: 198, percentage: 19 },
    { region: "Mbeya", count: 167, percentage: 16 },
    { region: "Iringa", count: 134, percentage: 13 },
    { region: "Mwanza", count: 123, percentage: 12 },
    { region: "Others", count: 180, percentage: 17 },
  ];

  if (loading) {
    return (
      <div className='min-h-screen bg-gradient-to-br from-accent to-background flex items-center justify-center'>
        <div className='text-center'>
          <Leaf className='w-12 h-12 text-primary mx-auto mb-4 animate-pulse' />
          <p className='text-muted-foreground'>Loading your dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className='min-h-screen bg-gradient-to-br from-accent to-background flex'>
      <Sidebar />

      <div className='flex-1 ml-64'>
        {/* Fixed Top Navigation Header */}
        <div className='sticky top-0 z-40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b'>
          <div className='px-6 py-4'>
            <div className='flex items-center justify-between'>
              {/* Left side - Back button */}
              <Button variant='ghost' onClick={() => navigate("/")}>
                <ArrowLeft className='w-4 h-4 mr-2' />
                Back to Home
              </Button>

              {/* Center - Title and status */}
              <div className='flex items-center gap-6'>
                <div className='text-center'>
                  <h1 className='text-xl font-bold'>AgriCareAI Dashboard</h1>
                  <div className='flex items-center gap-4 text-sm text-muted-foreground'>
                    <div className='flex items-center gap-1'>
                      <Calendar className='w-3 h-3' />
                      <span>{currentTime.toLocaleDateString()}</span>
                    </div>
                    <div className='flex items-center gap-1'>
                      <Wifi className='w-3 h-3' />
                      <span>Online</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right side - User info and sign out */}
              <div className='flex items-center gap-4'>
                <div className='text-right'>
                  <p className='text-sm text-muted-foreground'>Welcome back,</p>
                  <p className='font-semibold'>
                    {user?.user_metadata?.full_name || user?.email}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className='px-6 py-8'>
          <div className='max-w-7xl mx-auto space-y-6'>
            {/* Main Header Card */}
            <Card className='shadow-strong bg-gradient-to-r from-primary to-primary-glow text-primary-foreground'>
              <CardHeader>
                <div className='flex items-center justify-between'>
                  <div>
                    <CardTitle className='text-3xl font-bold mb-2'>
                      Real-time Analytics
                    </CardTitle>
                    <CardDescription className='text-primary-foreground/90 text-lg'>
                      Crop monitoring and disease detection insights
                    </CardDescription>
                  </div>
                  <div className='text-right'>
                    <div className='text-4xl font-bold'>
                      {mockStats.activeUsers.toLocaleString()}
                    </div>
                    <div className='text-primary-foreground/90'>
                      Active Farmers
                    </div>
                    <Badge variant='secondary' className='mt-2'>
                      +{mockStats.weeklyGrowth}% this week
                    </Badge>
                  </div>
                </div>
              </CardHeader>
            </Card>

            {/* Enhanced Stats Grid */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6'>
              <Card className='shadow-soft hover:shadow-medium transition-shadow'>
                <CardContent className='p-6'>
                  <div className='flex items-center justify-between'>
                    <div>
                      <p className='text-sm font-medium text-muted-foreground'>
                        Total Diagnoses
                      </p>
                      <p className='text-2xl font-bold text-primary'>
                        {mockStats.totalDiagnoses.toLocaleString()}
                      </p>
                      <Badge variant='outline' className='mt-2'>
                        All time
                      </Badge>
                    </div>
                    <div className='w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center'>
                      <Activity className='w-6 h-6 text-primary' />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className='shadow-soft hover:shadow-medium transition-shadow'>
                <CardContent className='p-6'>
                  <div className='flex items-center justify-between'>
                    <div>
                      <p className='text-sm font-medium text-muted-foreground'>
                        This Week
                      </p>
                      <p className='text-2xl font-bold text-success'>
                        {mockStats.thisWeek}
                      </p>
                      <Badge variant='outline' className='mt-2 text-success'>
                        +15.3%
                      </Badge>
                    </div>
                    <div className='w-12 h-12 bg-success/10 rounded-full flex items-center justify-center'>
                      <TrendingUp className='w-6 h-6 text-success' />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className='shadow-soft hover:shadow-medium transition-shadow'>
                <CardContent className='p-6'>
                  <div className='flex items-center justify-between'>
                    <div>
                      <p className='text-sm font-medium text-muted-foreground'>
                        AI Accuracy
                      </p>
                      <p className='text-2xl font-bold text-primary'>
                        {mockStats.accuracy}%
                      </p>
                      <Progress value={mockStats.accuracy} className='mt-2' />
                    </div>
                    <div className='w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center'>
                      <Eye className='w-6 h-6 text-primary' />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className='shadow-soft hover:shadow-medium transition-shadow'>
                <CardContent className='p-6'>
                  <div className='flex items-center justify-between'>
                    <div>
                      <p className='text-sm font-medium text-muted-foreground'>
                        Active Users
                      </p>
                      <p className='text-2xl font-bold text-warning'>
                        {mockStats.activeUsers.toLocaleString()}
                      </p>
                      <Badge variant='outline' className='mt-2 text-warning'>
                        Live
                      </Badge>
                    </div>
                    <div className='w-12 h-12 bg-warning/10 rounded-full flex items-center justify-center'>
                      <Users className='w-6 h-6 text-warning' />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className='shadow-soft hover:shadow-medium transition-shadow'>
                <CardContent className='p-6'>
                  <div className='flex items-center justify-between'>
                    <div>
                      <p className='text-sm font-medium text-muted-foreground'>
                        Regions
                      </p>
                      <p className='text-2xl font-bold text-destructive'>
                        {mockStats.regionsActive}
                      </p>
                      <Badge
                        variant='outline'
                        className='mt-2 text-destructive'>
                        Coverage
                      </Badge>
                    </div>
                    <div className='w-12 h-12 bg-destructive/10 rounded-full flex items-center justify-center'>
                      <MapPin className='w-6 h-6 text-destructive' />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Charts Section */}
            <div className='grid lg:grid-cols-3 gap-6'>
              {/* Weekly Activity Chart */}
              <Card className='lg:col-span-2 shadow-medium'>
                <CardHeader>
                  <CardTitle className='flex items-center gap-2'>
                    <LineChart className='w-5 h-5' />
                    Weekly Activity Trends
                  </CardTitle>
                  <CardDescription>
                    Daily diagnoses and accuracy over the past week
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className='h-80 w-full'>
                    <ResponsiveContainer width='100%' height='100%'>
                      <RechartsLineChart data={weeklyData}>
                        <CartesianGrid strokeDasharray='3 3' />
                        <XAxis dataKey='day' />
                        <YAxis yAxisId='left' />
                        <YAxis yAxisId='right' orientation='right' />
                        <ChartTooltip />
                        <Line
                          yAxisId='left'
                          type='monotone'
                          dataKey='diagnoses'
                          stroke='hsl(var(--primary))'
                          strokeWidth={3}
                          name='Diagnoses'
                        />
                        <Line
                          yAxisId='right'
                          type='monotone'
                          dataKey='accuracy'
                          stroke='hsl(var(--success))'
                          strokeWidth={3}
                          name='Accuracy %'
                        />
                      </RechartsLineChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>

              {/* Crop Distribution */}
              <Card className='shadow-medium'>
                <CardHeader>
                  <CardTitle className='flex items-center gap-2'>
                    <PieChart className='w-5 h-5' />
                    Crop Distribution
                  </CardTitle>
                  <CardDescription>
                    Disease reports by crop type
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className='h-80 w-full'>
                    <ResponsiveContainer width='100%' height='100%'>
                      <RechartsPieChart>
                        <RechartsPieChart
                          data={cropData}
                          cx='50%'
                          cy='50%'
                          outerRadius={80}
                          dataKey='value'>
                          {cropData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </RechartsPieChart>
                        <ChartTooltip />
                      </RechartsPieChart>
                    </ResponsiveContainer>
                  </div>
                  <div className='grid grid-cols-1 gap-2 mt-4'>
                    {cropData.map((crop, index) => (
                      <div
                        key={index}
                        className='flex items-center justify-between text-sm'>
                        <div className='flex items-center gap-2'>
                          <div
                            className='w-3 h-3 rounded-full'
                            style={{ backgroundColor: crop.color }}
                          />
                          <span>{crop.name}</span>
                        </div>
                        <span className='font-medium'>{crop.value}%</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Disease Analysis & Regional Data */}
            <div className='grid lg:grid-cols-2 gap-6'>
              {/* Enhanced Disease List */}
              <Card className='shadow-medium'>
                <CardHeader>
                  <CardTitle className='flex items-center gap-2'>
                    <AlertTriangle className='w-5 h-5' />
                    Disease Threat Analysis
                  </CardTitle>
                  <CardDescription>
                    Current disease outbreaks and severity levels
                  </CardDescription>
                </CardHeader>
                <CardContent className='space-y-4'>
                  {mockStats.commonDiseases.map((disease, index) => (
                    <div
                      key={index}
                      className='flex items-center justify-between p-4 bg-muted/50 rounded-lg border'>
                      <div className='flex items-center gap-3'>
                        <div
                          className={`w-3 h-3 rounded-full ${
                            disease.severity === "high"
                              ? "bg-destructive"
                              : disease.severity === "medium"
                              ? "bg-warning"
                              : "bg-success"
                          }`}
                        />
                        <div>
                          <p className='font-medium'>{disease.name}</p>
                          <p className='text-sm text-muted-foreground'>
                            Severity: {disease.severity} threat
                          </p>
                        </div>
                      </div>
                      <div className='text-right'>
                        <p className='text-lg font-bold text-primary'>
                          {disease.count}
                        </p>
                        <p className='text-xs text-muted-foreground'>cases</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Regional Activity */}
              <Card className='shadow-medium'>
                <CardHeader>
                  <CardTitle className='flex items-center gap-2'>
                    <BarChart3 className='w-5 h-5' />
                    Regional Activity
                  </CardTitle>
                  <CardDescription>Disease detection by region</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className='space-y-4'>
                    {regionData.map((region, index) => (
                      <div key={index} className='space-y-2'>
                        <div className='flex items-center justify-between'>
                          <span className='font-medium'>{region.region}</span>
                          <span className='text-sm text-muted-foreground'>
                            {region.count} reports ({region.percentage}%)
                          </span>
                        </div>
                        <Progress value={region.percentage} className='h-2' />
                      </div>
                    ))}
                  </div>
                  <div className='mt-6 p-4 bg-primary/5 rounded-lg'>
                    <p className='text-sm font-medium text-primary mb-2'>
                      Top Performing Region
                    </p>
                    <p className='text-2xl font-bold'>Arusha</p>
                    <p className='text-sm text-muted-foreground'>
                      245 successful diagnoses this month
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Smart Features & Services */}
            <div className='grid lg:grid-cols-3 gap-6'>
              {/* IoT Integration */}
              <Card className='shadow-medium bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20'>
                <CardHeader>
                  <CardTitle className='flex items-center gap-2 text-primary'>
                    <Wifi className='w-5 h-5' />
                    IoT Integration
                  </CardTitle>
                  <CardDescription>
                    Smart farming sensors and monitoring
                  </CardDescription>
                </CardHeader>
                <CardContent className='space-y-4'>
                  <div className='grid grid-cols-2 gap-4'>
                    <div className='p-3 bg-background/60 rounded-lg'>
                      <div className='flex items-center gap-2 mb-2'>
                        <Thermometer className='w-4 h-4 text-destructive' />
                        <span className='text-sm font-medium'>Temperature</span>
                      </div>
                      <p className='text-lg font-bold'>28°C</p>
                      <p className='text-xs text-muted-foreground'>
                        Optimal range
                      </p>
                    </div>
                    <div className='p-3 bg-background/60 rounded-lg'>
                      <div className='flex items-center gap-2 mb-2'>
                        <CloudRain className='w-4 h-4 text-primary' />
                        <span className='text-sm font-medium'>Humidity</span>
                      </div>
                      <p className='text-lg font-bold'>65%</p>
                      <p className='text-xs text-muted-foreground'>
                        Good level
                      </p>
                    </div>
                  </div>
                  <Badge variant='outline' className='w-full justify-center'>
                    12 sensors connected
                  </Badge>
                </CardContent>
              </Card>

              {/* Mobile App Stats */}
              <Card className='shadow-medium bg-gradient-to-br from-success/5 to-success/10 border-success/20'>
                <CardHeader>
                  <CardTitle className='flex items-center gap-2 text-success'>
                    <Smartphone className='w-5 h-5' />
                    Mobile App Usage
                  </CardTitle>
                  <CardDescription>
                    User engagement and app performance
                  </CardDescription>
                </CardHeader>
                <CardContent className='space-y-4'>
                  <div className='space-y-3'>
                    <div className='flex justify-between items-center'>
                      <span className='text-sm'>Daily Active Users</span>
                      <span className='font-bold'>2,341</span>
                    </div>
                    <div className='flex justify-between items-center'>
                      <span className='text-sm'>App Store Rating</span>
                      <span className='font-bold'>4.8/5</span>
                    </div>
                    <div className='flex justify-between items-center'>
                      <span className='text-sm'>Download Growth</span>
                      <span className='font-bold text-success'>+23%</span>
                    </div>
                  </div>
                  <Badge
                    variant='outline'
                    className='w-full justify-center text-success'>
                    99.9% uptime
                  </Badge>
                </CardContent>
              </Card>

              {/* Alert System */}
              <Card className='shadow-medium bg-gradient-to-br from-warning/5 to-warning/10 border-warning/20'>
                <CardHeader>
                  <CardTitle className='flex items-center gap-2 text-warning'>
                    <Bell className='w-5 h-5' />
                    Alert System
                  </CardTitle>
                  <CardDescription>
                    Notifications and emergency alerts
                  </CardDescription>
                </CardHeader>
                <CardContent className='space-y-4'>
                  <div className='space-y-3'>
                    <div className='p-3 bg-destructive/10 rounded-lg border-l-4 border-destructive'>
                      <p className='text-sm font-medium text-destructive'>
                        High Priority
                      </p>
                      <p className='text-xs'>Blight outbreak in Mbeya region</p>
                    </div>
                    <div className='p-3 bg-warning/10 rounded-lg border-l-4 border-warning'>
                      <p className='text-sm font-medium text-warning'>
                        Weather Alert
                      </p>
                      <p className='text-xs'>Heavy rains expected in Arusha</p>
                    </div>
                  </div>
                  <Badge
                    variant='outline'
                    className='w-full justify-center text-warning'>
                    3 active alerts
                  </Badge>
                </CardContent>
              </Card>
            </div>

            {/* Action Buttons */}
            <div className='grid md:grid-cols-2 gap-4'>
              <Card className='shadow-medium hover:shadow-strong transition-shadow bg-gradient-to-r from-primary to-primary-glow text-primary-foreground'>
                <CardContent className='p-6 text-center'>
                  <Camera className='w-12 h-12 mx-auto mb-4' />
                  <h3 className='text-xl font-bold mb-2'>
                    Start New Diagnosis
                  </h3>
                  <p className='text-primary-foreground/90 mb-4'>
                    Upload a crop image for instant AI-powered disease detection
                  </p>
                  <Button
                    variant='secondary'
                    size='lg'
                    onClick={() => navigate("/upload")}
                    className='w-full'>
                    Upload Image
                  </Button>
                </CardContent>
              </Card>

              <Card className='shadow-medium hover:shadow-strong transition-shadow bg-gradient-to-r from-success to-success border-success/20'>
                <CardContent className='p-6 text-center'>
                  <BarChart3 className='w-12 h-12 mx-auto mb-4 text-success-foreground' />
                  <h3 className='text-xl font-bold mb-2 text-success-foreground'>
                    View Analytics
                  </h3>
                  <p className='text-success-foreground/90 mb-4'>
                    Access detailed reports and agricultural insights
                  </p>
                  <Button
                    variant='secondary'
                    size='lg'
                    onClick={() => navigate("/analytics")}
                    className='w-full'>
                    View Reports
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
