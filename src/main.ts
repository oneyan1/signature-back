import {NestFactory} from '@nestjs/core'
import {DocumentBuilder, SwaggerModule} from '@nestjs/swagger'
import {AppModule} from './app.module.'

async function start() {
  const PORT = process.env.PORT || 5000
  const app = await NestFactory.create(AppModule)

  const config = new DocumentBuilder()
    .setTitle('Signature')
    .setDescription('signature-nest-app')
    .setVersion('1.0')
    .build()
  const documnet = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('/api/swagger', app, documnet)

  await app.listen(PORT, () => console.log(`Server started on ${PORT} port`))
}

start()
