# Use the official Alpine image
FROM alpine:latest

# Set environment variables
ENV RUSTUP_HOME=/usr/local/rustup \
    CARGO_HOME=/usr/local/cargo \
    PATH=/usr/local/cargo/bin:$PATH

# Install necessary packages
RUN apk add --no-cache \
        bash \
        curl \
        gcc \
        g++ \
        libc-dev \
        libstdc++ \
        make \
        python3 \
        nodejs \
        npm \
        git

# Install Rust using rustup
RUN curl https://sh.rustup.rs -sSf | sh -s -- -y --default-toolchain stable

# Verify Rust installation
RUN rustc --version && cargo --version

# Install Svelte and Vite globally
RUN npm install -g svelte vite degit yarn

# Create a working directory
WORKDIR /app

# Expose ports for Vite dev server
EXPOSE 5173

# Add a default command to the container
CMD ["bash"]
