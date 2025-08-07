#!/bin/bash

# Define variables
SERVER_USER="ubuntu"
SERVER_IP="35.174.173.245"
KEY_PATH="/Users/Patrick/Desktop/work/AWS.pem"
REMOTE_PATH="/usr/apps/pb-s"
LOCAL_PATH="dist"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# # Delete old build artifacts
# echo "Deleting bin directory..."
# rm -rf dist

# # Build and Test
# echo "Building app..."
# npm run build

# if [ $? -ne 0 ]; then
#   echo "Build failed. Exiting..."
#   exit 1
# fi

# # echo "Running tests..."
# # some test command here later

# if [ $? -ne 0 ]; then
#   echo "Tests failed. Exiting..."
#   exit 1
# fi

# echo "Deleting bin again after testing directory..."
# rm -rf dist



# Function to deploy items
deploy_item() {
  local item=$1
  local item_name=$(basename "$item")



  if [ -f "$item" ]; then
    echo -e "${YELLOW}Deploying file: $item_name${NC}"
    scp -i "$KEY_PATH" "$item" "$SERVER_USER@$SERVER_IP:$REMOTE_PATH/"
    return $?
  elif [ -d "$item" ]; then
    echo -e "${YELLOW}Deploying directory: $item_name${NC}"
    # Create remote directory with sudo
    ssh -i "$KEY_PATH" "$SERVER_USER@$SERVER_IP" "sudo mkdir -p '$REMOTE_PATH/$item_name' && sudo chown $SERVER_USER:$SERVER_USER '$REMOTE_PATH/$item_name'"
    # Copy directory contents recursively
    scp -i "$KEY_PATH" -r "$item"/* "$SERVER_USER@$SERVER_IP:$REMOTE_PATH/$item_name/"
    return $?
  fi
}

# Main deployment process
echo -e "${GREEN}=== Starting deployment process ===${NC}"

# Check if local path exists
if [ ! -e "$LOCAL_PATH" ]; then
  echo -e "${RED}Error: Local path $LOCAL_PATH does not exist${NC}"
  exit 1
fi

# Deploy all items in the local path
deployment_success=true
for item in "$LOCAL_PATH"/*; do
  deploy_item "$item"
  if [ $? -ne 0 ]; then
    echo -e "${RED}Error deploying $item${NC}"
    deployment_success=false
  fi
done

if [ "$deployment_success" = false ]; then
  echo -e "${RED}Deployment completed with errors${NC}"
  exit 1
fi

echo -e "${GREEN}All files deployed successfully${NC}"

# Restart the service
echo -e "${YELLOW}Restarting backend service...${NC}"
ssh -i "$KEY_PATH" "$SERVER_USER@$SERVER_IP" "
  sudo systemctl restart pb-s.service && \
  echo -e '\nService status:' && \
  sudo systemctl status pb-s.service --no-pager
"

if [ $? -eq 0 ]; then
  echo -e "${GREEN}Service restarted successfully!${NC}"
else
  echo -e "${RED}Failed to restart service${NC}"
  exit 1
fi

echo -e "${GREEN}=== Deployment completed successfully ===${NC}"
exit 0