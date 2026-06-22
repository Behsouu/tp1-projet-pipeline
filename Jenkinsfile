pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        stage('Build / Verification') {
            steps {
                echo 'Verification des fichiers du projet...'
                sh 'ls -la'
                sh 'test -f index.html && echo "index.html trouve" || echo "index.html manquant"'
            }
        }
        stage('Tests') {
            steps {
                echo 'Execution des tests (simulation)...'
                sh 'echo "Aucun test automatise pour le moment, etape de validation manuelle simulee"'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploiement continu vers Vercel...'
                sh 'vercel --prod --yes --token=$VERCEL_TOKEN'
            }
        }
    }
}