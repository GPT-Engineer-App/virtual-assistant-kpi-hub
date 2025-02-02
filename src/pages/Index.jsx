import { useState } from 'react';
import { UserMenu } from "@/layouts/navbar/_components/UserMenu";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle, CheckCircle, TrendingUp } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { format } from 'date-fns';

const metaAdData = [
  { date: '2024-05-05', traffic: 3000 },
  { date: '2024-05-12', traffic: 4200 },
  { date: '2024-05-19', traffic: 5300 },
  { date: '2024-05-26', traffic: 6500 },
  { date: '2024-06-02', traffic: 7800 },
];

const ratesData = [
  { name: 'Meta Ad Traffic', value: 100 },
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

const rateComparisonData = [
  { date: '2024-05-05', outreachRate: 0.3, responseRate: 0.2, bookedMeetingRate: 0.1 },
  { date: '2024-05-12', outreachRate: 0.35, responseRate: 0.25, bookedMeetingRate: 0.12 },
  { date: '2024-05-19', outreachRate: 0.32, responseRate: 0.22, bookedMeetingRate: 0.11 },
  { date: '2024-05-26', outreachRate: 0.38, responseRate: 0.28, bookedMeetingRate: 0.15 },
  { date: '2024-06-02', outreachRate: 0.4, responseRate: 0.3, bookedMeetingRate: 0.18 },
];

const Index = () => {
  const [campaign, setCampaign] = useState("");
  const [adId, setAdId] = useState("");

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
      <header className="bg-white dark:bg-gray-800 border-b p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">D&B Properties – Umar Dashboard</h1>
          <UserMenu />
        </div>
      </header>

      <main className="flex-grow container mx-auto p-4 md:p-6 lg:p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <Select value={campaign} onValueChange={setCampaign}>
            <SelectTrigger className="bg-white dark:bg-gray-800">
              <SelectValue placeholder="Select Campaign" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="campaign1">Campaign 1</SelectItem>
              <SelectItem value="campaign2">Campaign 2</SelectItem>
              <SelectItem value="campaign3">Campaign 3</SelectItem>
            </SelectContent>
          </Select>

          <Select value={adId} onValueChange={setAdId}>
            <SelectTrigger className="bg-white dark:bg-gray-800">
              <SelectValue placeholder="Select Ad ID" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="ad1">Ad ID 1</SelectItem>
              <SelectItem value="ad2">Ad ID 2</SelectItem>
              <SelectItem value="ad3">Ad ID 3</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          <Card className="bg-white dark:bg-gray-800">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Conversation Rate</CardTitle>
              <MessageCircle className="h-4 w-4 text-gray-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">10% / 30%</div>
              <p className="text-xs text-gray-500">Current / Target</p>
            </CardContent>
          </Card>

          <Card className="bg-white dark:bg-gray-800">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Booked Meetings</CardTitle>
              <CheckCircle className="h-4 w-4 text-gray-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">7 / 20</div>
              <p className="text-xs text-gray-500">Current / Target</p>
            </CardContent>
          </Card>

          <Card className="bg-white dark:bg-gray-800">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Cost per Booked Meeting</CardTitle>
              <TrendingUp className="h-4 w-4 text-gray-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">150 AED</div>
              <p className="text-xs text-gray-500">-5% from last week</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <Card className="bg-white dark:bg-gray-800">
            <CardHeader>
              <CardTitle>Meta Ad Traffic</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={metaAdData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis 
                    dataKey="date" 
                    stroke="#888888"
                    tickFormatter={(str) => {
                      const date = new Date(str);
                      return format(date, 'MMM dd');
                    }}
                  />
                  <YAxis stroke="#888888" />
                  <Tooltip 
                    labelFormatter={(value) => format(new Date(value), 'MMM dd, yyyy')}
                  />
                  <Line type="monotone" dataKey="traffic" stroke="#8884d8" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card className="bg-white dark:bg-gray-800">
            <CardHeader>
              <CardTitle>Rates Comparison</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={ratesData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" stroke="#888888" />
                  <YAxis stroke="#888888" />
                  <Tooltip />
                  <Bar dataKey="value" fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-white dark:bg-gray-800 mb-6">
          <CardHeader>
            <CardTitle>Conversation Rate of Outreach</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={conversationRateData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" stroke="#888888" />
                <YAxis stroke="#888888" />
                <Tooltip />
                <Line type="monotone" dataKey="rate" stroke="#82ca9d" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="bg-white dark:bg-gray-800">
          <CardHeader>
            <CardTitle>Rate Comparisons Over Time</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={rateComparisonData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis 
                  dataKey="date" 
                  stroke="#888888"
                  tickFormatter={(str) => format(new Date(str), 'MMM dd')}
                />
                <YAxis stroke="#888888" />
                <Tooltip labelFormatter={(value) => format(new Date(value), 'MMM dd, yyyy')} />
                <Line type="monotone" dataKey="outreachRate" name="Outreach Rate" stroke="#8884d8" strokeWidth={2} />
                <Line type="monotone" dataKey="responseRate" name="Response Rate" stroke="#82ca9d" strokeWidth={2} />
                <Line type="monotone" dataKey="bookedMeetingRate" name="Booked Meeting Rate" stroke="#ffc658" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </main>

      <footer className="bg-white dark:bg-gray-800 border-t p-4 text-center text-sm text-gray-600 dark:text-gray-400">
        © 2023 D&B Properties – Umar Dashboard. All rights reserved.
      </footer>
    </div>
  );
};

export default Index;