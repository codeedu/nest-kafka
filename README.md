# Imersão Full Stack & FullCycle

## Descrição

Repositório da live de Nest.js com Apache Kafka: [https://www.youtube.com/watch?v=9rIFuUUnmFE](https://www.youtube.com/watch?v=9rIFuUUnmFE)

## Rodar a aplicação

### Configurar host.docker.internal

A comunicação entre o Nest.js e Apache Kafka está configurada para funcionar com o endereço **host.docker.internal**.

Acrescente no seu /etc/hosts, para Windows o caminho é C:\Windows\system32\drivers\etc\hosts (Verifique se já não existe)

```
127.0.0.1 host.docker.internal
```

### Apache Kafka

```
cd apache-kafka
docker-compose up

# Antes de rodar o container novamnete faça:
docker-compose down
#Isto irá excluir os volumes do ZooKeeper e Apache Kafka
```

Acesse http://localhost9021 para manipular os tópicos do Kafka via Confluent Center

### Nest.js

```
cd nest-api
docker-compose up

# Antes de rodar o container novamnete faça:
docker-compose down
#Isto irá excluir os volumes do ZooKeeper e Apache Kafka
```

Acessar http://localhost:3000/checkout para testar o envio de mensagens

### Para Windows 

Lembrar de instalar o WSL2 e Docker. Vejo o vídeo: [https://www.youtube.com/watch?v=gCUPP4E8Msc](https://www.youtube.com/watch?v=gCUPP4E8Msc) 

Siga o guia rápido de instalação: [https://github.com/codeedu/wsl2-docker-quickstart](https://github.com/codeedu/wsl2-docker-quickstart) 
