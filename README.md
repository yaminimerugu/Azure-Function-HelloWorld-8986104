# Azure-Function-HelloWorld-8986104"// Test CI/CD Trigger"
# Azure Function CI/CD Pipeline

This project demonstrates the setup of a CI/CD pipeline using Jenkins for an Azure Function. The pipeline includes the following stages:
- **Build**: Installs dependencies and builds the project.
- **Test**: Runs unit tests using Mocha.
- **Deploy**: Deploys the Azure Function to the Azure platform.

## Project Structure

- `src/`: Contains the Azure Function code.
- `function.zip`: The zipped file containing the function code used for deployment.
- `Jenkinsfile`: Defines the Jenkins pipeline with stages for build, test, and deploy.
- `package.json`: Defines the project's dependencies and scripts.
- `README.md`: This file.

## Prerequisites

1. **Azure Subscription**: You must have an active Azure subscription.
2. **Jenkins Server**: Jenkins should be set up with the necessary plugins for Azure deployment.
3. **GitHub Repository**: The code must be hosted on GitHub with webhooks set up to trigger the Jenkins pipeline.
4. **Azure CLI**: Make sure you have the Azure CLI installed and configured for deploying Azure Functions.

## Setup

### 1. Azure Function Setup
Create an Azure Function App in the Azure portal:
- **Resource Group**: `HelloRG`
- **Function App Name**: `hellorg-8986104`

### 2. Jenkins Setup
Ensure the following steps are completed on Jenkins:
1. **Install Plugins**: Install necessary plugins such as:
   - Azure CLI Plugin
   - GitHub Plugin
   - Pipeline Plugin
2. **Create Jenkins Pipeline**: Create a new pipeline job and set it to trigger on GitHub push events.
3. **Configure Environment Variables**: Set the Azure service principal credentials as environment variables in Jenkins:
   - `AZURE_CLIENT_ID`
   - `AZURE_CLIENT_SECRET`
   - `AZURE_TENANT_ID`

### 3. GitHub Setup
1. Push the project code to your GitHub repository.
2. Set up a webhook in GitHub to trigger Jenkins on commits to the main branch.

### 4. Run the Jenkins Pipeline
The pipeline will automatically trigger upon a commit to GitHub and execute the following:
- **Build**: Install dependencies using `npm install`.
- **Test**: Run tests using `mocha`.
- **Deploy**: Deploy the function to Azure using the Azure CLI command:
  ```bash
  az functionapp deployment source config-zip --resource-group HelloRG --name hellorg-8986104 --src function.zip
