import { useState } from 'react';
import { UserMenu } from "@/layouts/navbar/_components/UserMenu";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle, CheckCircle, Clock, DollarSign } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const metaAdData = [
  { date: '2024-05-05', traffic: 3000 },
  { date: '2024-05-12', traffic: 4200 },
  { date: '2024-05-19', traffic: 5300 },
  { date: '2024-05-26', traffic: 6500 },
  { date: '2024-06-02', traffic: 7800 },
];

const ratesData = [
  { name: 'Meta Add Traffic', value: 100 },
  { name: 'Outreach rate', value: 80 },
  { name: 'Response rate', value: 60 },
  { name: 'Booked a meeting', value: 40 },
];

const conversationRateData = [
  { name: 'initial', rate: 0.6 },
  { name: '1_day', rate: 0.65 },
  { name: '3_days', rate: 0.63 },
  { name: '1_week', rate: 0.58 },
  { name: '2_weeks', rate: 0.57 },
];

const Index = () => {
  const [campaign, setCampaign] = useState("");
  const [adId, setAdId] = useState("");

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-background border-b p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold">Virtual Assistant Dashboard</h1>
            <p className="text-muted-foreground">Track KPIs and Metrics</p>
          </div>
          <UserMenu />
        </div>
      </header>

      <main className="flex-grow container mx-auto p-4 md:p-6 lg:p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          <Select value={campaign} onValueChange={setCampaign}>
            <SelectTrigger>
              <SelectValue placeholder="Select Campaign" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="campaign1">Campaign 1</SelectItem>
              <SelectItem value="campaign2">Campaign 2</SelectItem>
              <SelectItem value="campaign3">Campaign 3</SelectItem>
            </SelectContent>
          </Select>

          <Select value={adId} onValueChange={setAdId}>
            <SelectTrigger>
              <SelectValue placeholder="Select Ad ID" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="ad1">Ad ID 1</SelectItem>
              <SelectItem value="ad2">Ad ID 2</SelectItem>
              <SelectItem value="ad3">Ad ID 3</SelectItem>
            </SelectContent>
          </Select>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Conversation Rate</CardTitle>
              <MessageCircle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">10% / 30%</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Booked Meetings</CardTitle>
              <CheckCircle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">7 / 3</div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Cost per goal</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">??? AED</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Cost per lead</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">??? AED</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Cost per time</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">??? AED</div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <Card>
            <CardHeader>
              <CardTitle>Meta Ad Traffic</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={metaAdData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="traffic" stroke="#8884d8" />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Rates Comparison</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={ratesData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="value" fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Conversation rate out outreach</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={conversationRateData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="rate" stroke="#82ca9d" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </main>

      <footer className="bg-background border-t p-4 text-center text-sm text-muted-foreground">
        © 2023 Virtual Assistant Dashboard. All rights reserved.
      </footer>
    </div>
  );
};

export default Index;