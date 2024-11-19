import { DocumentBuilder, OpenAPIObject } from '@nestjs/swagger';

const swaggerConfig = (): Omit<OpenAPIObject, 'paths'> =>
  new DocumentBuilder()
    .setTitle('FICO API Swagger')
    .setDescription('FICO API document')
    .setVersion('1.0')
    .addBearerAuth(
      {
        description: `Add a valid JWT access token here to access API end-point.`,
        name: 'Authorization',
        bearerFormat: 'Bearer',
        scheme: 'Bearer',
        type: 'http',
        in: 'Header',
      },
      'Bearer',
    )
    .build();
    
export default swaggerConfig;
