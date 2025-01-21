// Import types from Express to ensure proper typing for request, response, and next function.
import { NextFunction, Request, Response } from 'express';

// Import the 'jsonwebtoken' library to handle JSON Web Tokens (JWT) for authentication.
import jwt from 'jsonwebtoken';

// Import a custom error class, 'ClientError', for handling application-specific errors.
import { ClientError } from './client-error.js';

// Retrieve the 'TOKEN_SECRET' from the environment variables. Use an empty string as a fallback.
const hashKey = process.env.TOKEN_SECRET ?? '';

// If 'TOKEN_SECRET' is not defined, throw an error to prevent the application from running.
if (!hashKey) throw new Error('TOKEN_SECRET not found in env');

// Define the 'authMiddleware' function to handle authentication.
// It takes three parameters:
// - 'req': the incoming request object.
// - 'res': the outgoing response object.
// - 'next': the next middleware function to call in the pipeline.
export function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  // Retrieve the 'Authorization' header from the request. If present, split its value
  // to extract the token after the "Bearer " prefix. If the header or token is missing, the value will be 'undefined'.
  const token = req.get('authorization')?.split('Bearer ')[1];

  // If no token is found, throw a 'ClientError' with a 401 status code, indicating that authentication is required.
  if (!token) {
    throw new ClientError(401, 'authentication required');
  }

  // Verify the token using the 'jsonwebtoken' library and the secret key ('hashKey').
  // If the token is valid, attach the decoded payload to 'req.user'. This allows subsequent middleware
  // or route handlers to access the authenticated user's information.
  req.user = jwt.verify(token, hashKey) as Request['user'];

  // Call the 'next' function to pass control to the next middleware or route handler.
  // If an error occurs during token verification, it will automatically propagate to the error handling middleware.
  next();
}
