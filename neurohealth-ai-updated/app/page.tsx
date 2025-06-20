import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BrainCog, Stethoscope, Users, ArrowRight } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 p-8">
      <header className="text-center py-10">
        <h1 className="text-4xl font-bold text-blue-700">NeuroHealth AI</h1>
        <p className="text-lg mt-2">Pioneering AI Research in Healthcare</p>
      </header>
      <section className="grid md:grid-cols-3 gap-6 my-12">
        <Card className="shadow-xl">
          <CardContent className="p-6 text-center">
            <BrainCog className="w-12 h-12 mx-auto text-blue-500" />
            <h2 className="text-xl font-semibold mt-4">AI Diagnostics</h2>
            <p className="mt-2 text-sm">Detecting diseases early in eye/lung scans.</p>
          </CardContent>
        </Card>
        <Card className="shadow-xl">
          <CardContent className="p-6 text-center">
            <Stethoscope className="w-12 h-12 mx-auto text-green-500" />
            <h2 className="text-xl font-semibold mt-4">Smart Screening</h2>
            <p className="mt-2 text-sm">AI-assisted tools for rural health systems.</p>
          </CardContent>
        </Card>
        <Card className="shadow-xl">
          <CardContent className="p-6 text-center">
            <Users className="w-12 h-12 mx-auto text-purple-500" />
            <h2 className="text-xl font-semibold mt-4">Open Collaboration</h2>
            <p className="mt-2 text-sm">Partnering with people passionate about AI for good.</p>
          </CardContent>
        </Card>
      </section>
      <section className="text-center my-10">
        <h2 className="text-2xl font-bold">Join Our Mission</h2>
        <p className="mt-2 text-sm">We’re looking for interns, fellows, and collaborators.</p>
        <Button className="mt-4 px-6 py-2 text-white bg-blue-600 hover:bg-blue-700">
          Apply Now <ArrowRight className="ml-2 w-4 h-4" />
        </Button>
      </section>
      <footer className="text-center mt-12 text-sm text-gray-500">
        © 2025 NeuroHealth AI. All rights reserved.
      </footer>
    </div>
  );
}