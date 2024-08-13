// server/controllers/JobController.ts
import { FastifyReply, FastifyRequest } from 'fastify';
import JobService from '../services/JobService';

const getJobsList = async (request: FastifyRequest, reply: FastifyReply) => {
  try {
    const jobs = await JobService.getFormattedJobsList();
    return reply.send({ jobs });
  } catch (error) {
    request.log.error(error);
    return reply.status(500).send({ error: 'Internal Server Error' });
  }
};

const JobController = {
  getJobsList,
};

export default JobController;