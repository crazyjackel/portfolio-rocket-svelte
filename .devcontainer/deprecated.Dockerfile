FROM rust:1.81.0

# Install Node.js and npm (needed for SvelteKit)
RUN curl -fsSL https://deb.nodesource.com/setup_20.x | bash - && \
    apt-get install -y nodejs && \
    npm install -g pnpm

# Install other dependencies (if needed)
RUN apt-get update && apt-get install -y \
    git \
    build-essential \
    && apt-get clean

# Verify Rust installation
RUN rustc --version && cargo --version

# Install Svelte and Vite globally
RUN npm install -g svelte vite degit yarn

# Install cargo-tree. Handy for debugging the build inside the container.
RUN cargo install cargo-tree

# Create a working directory
WORKDIR /app

# Expose ports for Vite dev server
EXPOSE 5173

# Add a default command to the container
CMD ["bash"]
