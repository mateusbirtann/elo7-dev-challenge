import fastify, { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';
import jobsData from '../../data/jobs.json';

interface Job {
  title: string;
  type: string;
  level: string;
  location: string | null;
  is_active: boolean;
}

function capitalizeFirstLetter(str: string): string {
  if (str.length === 0) return str;
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

function capitalizeFirstLetterOfCity(city: string): string {
  return city
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

function formatLocation(location: string): string {
  const parts = location.split(',').map((part) => part.trim());
  if (parts.length < 3) return location;

  const [city, cityCode, country] = parts;
  return `${capitalizeFirstLetterOfCity(city)}, ${capitalizeFirstLetter(country)}`;
}

function formatJobsList(jobs: Job[]): { title: string; location: string }[] {
  return jobs
    .filter((job) => job.is_active && job.type.toLowerCase() === 'engenharia')
    .map((job) => ({
      title: capitalizeFirstLetter(job.title),
      location: job.location === null ? 'Remoto' : formatLocation(job.location),
    }));
}

const app: FastifyInstance = fastify();

app.get('/jobs-list', async (request: FastifyRequest, reply: FastifyReply) => {
  try {
    const jobsList = formatJobsList(jobsData.jobs);
    return reply.send({ jobs: jobsList });
  } catch (error) {
    request.log.error(error);
    return reply.status(500).send({ error: 'Internal Server Error' });
  }
});

app
  .listen({ port: 3333, host: '0.0.0.0' })
  .then(() => {
    console.log('Server is running on http://localhost:3333');
  })
  .catch((err) => {
    console.error('Error starting server:', err);
    process.exit(1);
  });
