// server/index.ts
import fastify from 'fastify';
import jobRoutes from './routes/jobsRoutes';

const server = fastify();

server.register(jobRoutes);

server
  .listen({ port: 3333, host: '0.0.0.0' })
  .then(() => {
    console.log('Server is running on http://localhost:3333');
  })
  .catch((err) => {
    console.error('Error starting server:', err);
    process.exit(1);
  });