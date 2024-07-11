import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const ResourceCard = ({ title, description, link }) => (
  <Card className="mb-4">
    <CardHeader>
      <CardTitle>{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <p className="mb-2">{description}</p>
      <a href={link} className="text-blue-500 hover:underline">Learn More</a>
    </CardContent>
  </Card>
);

export default function Resources() {
  const resources = [
    {
      title: 'IELTS Writing Tips',
      description: 'Improve your writing skills with these expert tips.',
      link: '#'
    },
    {
      title: 'Listening Practice Tests',
      description: 'Access a variety of listening practice tests.',
      link: '#'
    },
    {
      title: 'Speaking Preparation Guide',
      description: 'Prepare for the speaking test with our comprehensive guide.',
      link: '#'
    },
    {
      title: 'Reading Strategies',
      description: 'Learn effective strategies for the IELTS reading test.',
      link: '#'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6">
      <h2 className="text-2xl font-bold mb-6">IELTS Resources</h2>
      {resources.map((resource, index) => (
        <ResourceCard key={index} {...resource} />
      ))}
    </div>
  );
}