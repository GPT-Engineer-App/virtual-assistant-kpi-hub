import { UserMenu } from "@/layouts/navbar/_components/UserMenu";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle, CheckCircle, Clock } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Mon', interactions: 400 },
  { name: 'Tue', interactions: 300 },
  { name: 'Wed', interactions: 500 },
  { name: 'Thu', interactions: 280 },
  { name: 'Fri', interactions: 390 },
  { name: 'Sat', interactions: 230 },
  { name: 'Sun', interactions: 350 },
];

const recentActivity = [
  { id: 1, action: "User query resolved", timestamp: "2 minutes ago" },
  { id: 2, action: "New user interaction", timestamp: "10 minutes ago" },
  { id: 3, action: "Feedback received", timestamp: "1 hour ago" },
  { id: 4, action: "System update completed", timestamp: "3 hours ago" },
];

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-background border-b p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold">Virtual Assistant Dashboard</h1>
            <p className="text-muted-foreground">Track KPIs and Metrics</p>
          </div>
          <UserMenu />
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto p-4 md:p-6 lg:p-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* KPIs Section */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Interactions</CardTitle>
              <MessageCircle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2,345</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Successful Resolutions</CardTitle>
              <CheckCircle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">89%</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Average Response Time</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1.2s</div>
            </CardContent>
          </Card>
        </div>

        {/* Metrics Section */}
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Daily Interactions</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="interactions" stroke="#8884d8" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Recent Activity Section */}
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {recentActivity.map((activity) => (
                <li key={activity.id} className="flex justify-between items-center">
                  <span>{activity.action}</span>
                  <span className="text-sm text-muted-foreground">{activity.timestamp}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </main>

      {/* Footer */}
      <footer className="bg-background border-t p-4 text-center text-sm text-muted-foreground">
        © 2023 Virtual Assistant Dashboard. All rights reserved.
      </footer>
    </div>
  );
};

export default Index;