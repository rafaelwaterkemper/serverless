npm install -g serverless

npm create -t aws-nodejs

##Configuração das credentials pela amazon
serverless config credentials --provider aws --key {{AWS_ACCESS_KEY}} --secret {{AWS_SECRET_ACCESS_KEY}}