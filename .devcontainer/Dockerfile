FROM postgres:14.6-bullseye

ARG NODEJS_VERSION=18.x

SHELL ["/bin/bash", "-o", "pipefail", "-c"]

RUN apt update && apt install -y \
    build-essential \
    curl \
    git \
    libncursesw5-dev \
    libssl-dev \
    libsqlite3-dev \
    libgdbm-dev \
    libc6-dev \
    libbz2-dev \
    libffi-dev \
    software-properties-common \
    tk-dev \
    zlib1g-dev

# Install NodeJS

RUN curl -fsSL https://deb.nodesource.com/setup_${NODEJS_VERSION} | bash -
RUN apt update && apt install -y nodejs

# Install Docker

RUN curl -fsSL https://download.docker.com/linux/debian/gpg | gpg --dearmor -o /etc/apt/trusted.gpg.d/docker-archive-keyring.gpg
RUN arch=$(arch | sed s/aarch64/arm64/ | sed s/x86_64/amd64/) && add-apt-repository "deb [arch=${arch}] https://download.docker.com/linux/debian $(lsb_release -cs) stable"
RUN apt update && apt install -y docker-ce-cli

# Install NodeJS libraries

RUN npm install -g eslint pnpm npm
