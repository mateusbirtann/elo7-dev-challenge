import { FastifyInstance } from 'fastify';
import JobController from '../controllers/JobController';

export default async function jobRoutes(server: FastifyInstance) {
  const { getJobsList } = JobController
  server.get('/jobs-list', getJobsList);
}